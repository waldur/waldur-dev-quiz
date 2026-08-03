import { computed } from 'vue'
import { useGameStore } from '@/stores/game'
import { getSkillById } from '@/data/skills'
import { getQuestionByKey } from '@/data/questions'
import type { Question, ReadingLink, StudyTopic, WeakQuestion } from '@/types/game'

// How many topics the profile panel offers at once. More than this reads as a backlog
// rather than a suggestion, and the point is to name the next thing to do.
const MAX_TOPICS = 4

// A question is only worth studying while it is still being missed. The store already
// forgets a question once it has been answered right three times running, so anything
// left with a wrong answer against it is fair game.
function isWorthStudying(entry: { w: number; c: number }): boolean {
  return entry.w > 0
}

function readingLinkFor(question: Question): ReadingLink | null {
  if (!question.learnMore?.url) return null
  return {
    url: question.learnMore.url,
    // The stored text is a call to action ("📚 Learn More"), not a title, so the link
    // is labelled from the URL instead. Several suggestions often share a host, so the
    // page name has to carry the distinction: "Multi stage · docs.docker.com".
    label: describeUrl(question.learnMore.url),
    fromQuestion: question.q,
  }
}

function describeUrl(url: string): string {
  try {
    const parsed = new URL(url)
    const host = parsed.host.replace(/^www\./, '')
    const page = pageName(parsed)
    return page ? `${page} · ${host}` : host
  } catch {
    return url
  }
}

// The most specific human-readable part of a URL: the fragment if there is one,
// otherwise the last path segment that isn't a file extension or an index.
function pageName(parsed: URL): string {
  if (parsed.hash.length > 1) return humanize(parsed.hash.slice(1))
  const segments = parsed.pathname.split('/').filter(Boolean)
  while (segments.length > 0) {
    const last = segments[segments.length - 1]!
    const stripped = last.replace(/\.(html?|php|aspx?)$/i, '')
    // Version markers and index pages say nothing about the topic
    if (!/^(index|latest|docs?|en|stable|current|v?\d+(\.\d+)*)$/i.test(stripped) && stripped.length > 0) {
      return humanize(stripped)
    }
    segments.pop()
  }
  return ''
}

function humanize(segment: string): string {
  const words = decodeURIComponent(segment).replace(/[-_+]+/g, ' ').trim()
  if (!words) return ''
  return words.charAt(0).toUpperCase() + words.slice(1)
}

export function useStudyPlan() {
  const gameStore = useGameStore()

  // Every still-missed question, resolved back to its skill and level. Keys that no
  // longer match a question in the bank (removed or reworded) are skipped rather
  // than guessed at.
  const weakQuestions = computed<WeakQuestion[]>(() => {
    const history = gameStore.questionHistory || {}
    const resolved: WeakQuestion[] = []
    Object.entries(history).forEach(([key, entry]) => {
      if (!isWorthStudying(entry)) return
      const ref = getQuestionByKey(key)
      if (!ref) return
      resolved.push({
        key,
        question: ref.question,
        skillId: ref.skillId,
        level: ref.level,
        wrong: entry.w,
        correct: entry.c,
        lastAnswered: entry.last || null,
      })
    })
    // Most-missed first, then most recent. A history entry written before timestamps
    // existed has no `last`, so it sorts as oldest rather than poisoning the comparator.
    return resolved.sort((a, b) => b.wrong - a.wrong || (b.lastAnswered ?? 0) - (a.lastAnswered ?? 0))
  })

  const topics = computed<StudyTopic[]>(() => {
    const bySkill = new Map<string, WeakQuestion[]>()
    weakQuestions.value.forEach(wq => {
      const bucket = bySkill.get(wq.skillId)
      if (bucket) bucket.push(wq)
      else bySkill.set(wq.skillId, [wq])
    })

    // A skill you keep re-attempting without passing is worth reading up on even when
    // no single question stands out — the misses may have been spread thin.
    Object.entries(gameStore.state.skillProgress).forEach(([skillId, progress]) => {
      if (!progress.passed && progress.attempts > 0 && !bySkill.has(skillId)) {
        bySkill.set(skillId, [])
      }
    })

    const built: StudyTopic[] = []
    bySkill.forEach((questions, skillId) => {
      const skill = getSkillById(skillId)
      if (!skill) return

      const progress = gameStore.getSkillProgress(skillId)
      const wrong = questions.reduce((sum, q) => sum + q.wrong, 0)
      const correct = questions.reduce((sum, q) => sum + q.correct, 0)
      const failedAttempts = progress.passed ? 0 : progress.attempts
      const levels = [...new Set(questions.map(q => q.level))].sort((a, b) => a - b)
      const lastAnswered = questions.reduce<number | null>(
        (latest, q) => (q.lastAnswered && (!latest || q.lastAnswered > latest) ? q.lastAnswered : latest),
        null,
      )

      // Wrong answers are direct evidence; a stalled level is weaker, circumstantial
      // evidence, so it counts for less.
      const score = wrong * 2 + failedAttempts

      const links: ReadingLink[] = []
      const seenUrls = new Set<string>()
      questions.forEach(wq => {
        const link = readingLinkFor(wq.question)
        if (link && !seenUrls.has(link.url)) {
          seenUrls.add(link.url)
          links.push(link)
        }
      })

      built.push({
        skill,
        levels,
        wrong,
        correct,
        failedAttempts,
        score,
        lastAnswered,
        questions,
        links,
        reason: describeReason(wrong, failedAttempts, levels),
        priority: score >= 8 ? 'high' : score >= 3 ? 'medium' : 'low',
      })
    })

    return built
      .sort((a, b) => b.score - a.score || (b.lastAnswered ?? 0) - (a.lastAnswered ?? 0))
      .slice(0, MAX_TOPICS)
  })

  const hasPlan = computed(() => topics.value.length > 0)

  // The reading attached to a specific set of questions — used on the results screen,
  // where the questions just missed matter more than the long-running history.
  function readingFor(questions: Question[]): ReadingLink[] {
    const links: ReadingLink[] = []
    const seenUrls = new Set<string>()
    questions.forEach(question => {
      const link = readingLinkFor(question)
      if (link && !seenUrls.has(link.url)) {
        seenUrls.add(link.url)
        links.push(link)
      }
    })
    return links
  }

  // A quiz made only of questions this player has missed, most-missed first, drawn
  // from every level where they are still slipping. It is configured as a cross-skill
  // quiz — despite covering one skill — because it mixes levels, and that is the mode
  // that scores per answer instead of promoting a single level.
  function buildReviewQuiz(skillId: string, count = 5) {
    const picked = weakQuestions.value.filter(wq => wq.skillId === skillId).slice(0, count)
    const skill = getSkillById(skillId)
    if (!skill || picked.length === 0) return null

    return {
      skillId,
      skillName: skill.name,
      skillTier: skill.tier,
      isReview: true,
      isCrossSkill: true,
      questions: picked.map(wq => wq.question),
      crossSkillMeta: picked.map(wq => ({ skillId: wq.skillId, skill, level: wq.level })),
    }
  }

  return {
    weakQuestions,
    topics,
    hasPlan,
    readingFor,
    buildReviewQuiz,
  }
}

function describeReason(wrong: number, failedAttempts: number, levels: number[]): string {
  const levelLabel = levels.length === 0
    ? ''
    : levels.length === 1
      ? ` at level ${levels[0]}`
      : ` at levels ${levels.join(', ')}`

  if (wrong === 0) {
    return `${failedAttempts} ${failedAttempts === 1 ? 'attempt' : 'attempts'}, not passed yet`
  }
  const missed = `${wrong} missed ${wrong === 1 ? 'answer' : 'answers'}${levelLabel}`
  if (failedAttempts > 0) {
    return `${missed} · still unpassed after ${failedAttempts} ${failedAttempts === 1 ? 'try' : 'tries'}`
  }
  return missed
}
