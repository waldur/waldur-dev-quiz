import { useGameStore } from '@/stores/game'
import { useQuizStore } from '@/stores/quiz'
import { useTShape } from '@/composables/useTShape'
import { skills, skillLevels, weaponProfiles, getSkillById, getTierInfo } from '@/data/skills'
import { getQuestionByKey } from '@/data/questions'
import { getCharacterStage } from '@/data/characterFaces'
import { ACHIEVEMENTS, getAchievementById } from '@/data/achievements'
import { toYamlDocument, type YamlValue } from '@/utils/yaml'
import type { DailyBonusInfo } from '@/types/game'

function levelName(level: number): string {
  return skillLevels.find(l => l.level === level)?.name ?? 'Unranked'
}

function isoOrNull(ms: number | null | undefined): string | null {
  return ms ? new Date(ms).toISOString() : null
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'player'
}

export function useShare() {
  const gameStore = useGameStore()
  const quizStore = useQuizStore()
  const { tShape } = useTShape()

  function generateProfileCard(): string {
    const stats = gameStore.stats
    const profile = weaponProfiles.find(p => p.id === gameStore.currentProfile) ?? weaponProfiles[0]!
    const earned = gameStore.achievements.map(id => getAchievementById(id)).filter(Boolean)

    let card = ''
    card += '\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n'
    card += '\u2551     WALDUR QUEST PROFILE     \u2551\n'
    card += '\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n'
    card += `\u2551 ${profile.icon} ${profile.name.padEnd(25)} \u2551\n`
    card += `\u2551 XP: ${String(stats.totalXP).padEnd(24)}\u2551\n`
    card += `\u2551 Accuracy: ${String(stats.accuracy + '%').padEnd(18)}\u2551\n`
    card += `\u2551 Skills: ${String(stats.skillsPassed + '/' + skills.length).padEnd(20)}\u2551\n`
    card += `\u2551 Quizzes: ${String(stats.gamesPlayed).padEnd(19)}\u2551\n`

    if (earned.length > 0) {
      card += '\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n'
      card += `\u2551 Achievements: ${String(earned.length + '/' + ACHIEVEMENTS.length).padEnd(14)}\u2551\n`
      const icons = earned.map(a => a!.icon).join(' ')
      card += `\u2551 ${icons.substring(0, 28).padEnd(28)} \u2551\n`
    }

    card += '\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n'
    card += 'waldur-quest'
    return card
  }

  function generateShareUrl(): string {
    const s = gameStore.state
    const minimal: Record<string, any> = {
      n: s.playerName,
      x: s.totalXP,
      p: s.currentProfile,
      a: s.achievements || [],
      s: {} as Record<string, number>,
    }
    Object.entries(s.skillProgress).forEach(([id, p]) => {
      if (p.level > 0) {
        minimal.s[id] = p.level
      }
    })
    const encoded = btoa(JSON.stringify(minimal))
    return `${window.location.origin}${window.location.pathname}?profile=${encoded}`
  }

  // --- YAML export -------------------------------------------------------
  // YAML is the sharing format: it diffs well, pastes into an issue or a chat
  // thread readably, and keeps question text legible via block scalars.

  function achievementsYaml(): YamlValue[] {
    return gameStore.achievements
      .map(id => {
        const achievement = getAchievementById(id)
        if (!achievement) return null
        return {
          id: achievement.id,
          name: achievement.name,
          icon: achievement.icon,
          category: achievement.category,
          earned_at: isoOrNull(gameStore.achievementTimestamps?.[id]),
        }
      })
      .filter(Boolean) as YamlValue[]
  }

  function skillsYaml(): YamlValue[] {
    return Object.entries(gameStore.state.skillProgress)
      .map(([skillId, progress]) => {
        const skill = getSkillById(skillId)
        return {
          id: skillId,
          name: skill?.name ?? skillId,
          tier: skill?.tier ?? 'unknown',
          level: progress.level,
          level_name: levelName(progress.level),
          xp: progress.xp,
          attempts: progress.attempts,
          passed: progress.passed,
        }
      })
      .sort((a, b) => b.level - a.level || a.name.localeCompare(b.name)) as YamlValue[]
  }

  // Answers the player has seen but not yet mastered. The store drops a question
  // once it has been answered right three times in a row, so this is a review
  // list rather than a full answer log.
  function reviewQueueYaml(): YamlValue[] {
    return Object.entries(gameStore.questionHistory || {})
      .map(([key, entry]) => {
        const ref = getQuestionByKey(key)
        const skillId = ref?.skillId ?? key.split(':')[0] ?? ''
        return {
          skill_id: skillId,
          skill: getSkillById(skillId)?.name ?? skillId,
          level: ref?.level ?? Number(key.split(':')[1]),
          question: ref?.question.q ?? '(question no longer in the bank)',
          times_correct: entry.c,
          times_wrong: entry.w,
          last_answered: isoOrNull(entry.last),
        }
      })
      .sort((a, b) => b.times_wrong - a.times_wrong || a.skill.localeCompare(b.skill)) as YamlValue[]
  }

  function generateProfileYaml(): string {
    const s = gameStore.state
    const stats = gameStore.stats
    const profile = weaponProfiles.find(p => p.id === s.currentProfile) ?? weaponProfiles[0]!
    const t = tShape.value
    const stage = getCharacterStage(s.totalXP)

    const doc: YamlValue = {
      format: 'waldur-quest-profile',
      version: 1,
      exported_at: new Date().toISOString(),
      player: {
        name: s.playerName,
        stage: stage.name,
        weapon: { id: profile.id, name: profile.name, icon: profile.icon },
        last_played: s.lastPlayed,
      },
      stats: {
        total_xp: stats.totalXP,
        accuracy_percent: stats.accuracy,
        questions_answered: stats.questionsAnswered,
        correct_answers: stats.correctAnswers,
        quizzes_played: stats.gamesPlayed,
        best_streak: stats.streakBest,
        skills_started: stats.skillsStarted,
        skills_passed: stats.skillsPassed,
        skills_total: skills.length,
        achievements_earned: stats.achievements,
        achievements_total: ACHIEVEMENTS.length,
      },
      t_shape: {
        breadth_percent: t.breadthPercent,
        literacy: `${t.literacyStarted}/${t.literacyTotal}`,
        foundation: `${t.foundationStarted}/${t.foundationTotal}`,
        specializations_at_depth: `${t.specExpert}/${t.specTotal}`,
      },
      daily_challenge: {
        streak: gameStore.getDailyChallengeStreak(),
        last_completed: s.dailyChallenge?.lastCompletedDate ?? null,
      },
      achievements: achievementsYaml(),
      skills: skillsYaml(),
      review_queue: reviewQueueYaml(),
    }

    return toYamlDocument(doc, [
      'Waldur Quest profile export',
      'review_queue lists questions still in spaced repetition, not every answer given.',
    ])
  }

  // The quiz store keeps the full answer detail only until the next quiz starts,
  // so this is meant to be exported from the results screen.
  function generateQuizYaml(extra?: { xpEarned?: number; dailyBonus?: DailyBonusInfo | null }): string {
    const answers = quizStore.questions.map((question, i) => {
      const history = quizStore.answersHistory[i]
      const meta = quizStore.crossSkillMeta[i]
      const skillId = meta?.skillId ?? quizStore.skillId ?? null
      const skill = skillId ? getSkillById(skillId) : undefined

      return {
        number: i + 1,
        skill: skill?.name ?? quizStore.skillName ?? null,
        skill_id: skillId,
        level: meta?.level ?? quizStore.level,
        question: question.q,
        code: question.code,
        your_answer: history ? question.options[history.selectedIndex] ?? null : null,
        correct_answer: question.options[question.correct] ?? null,
        correct: history?.wasCorrect ?? null,
        answered: history !== undefined,
        explanation: question.explanation,
        learn_more: question.learnMore?.url,
      }
    })

    const tier = quizStore.skillTier ? getTierInfo(quizStore.skillTier) : undefined

    const doc: YamlValue = {
      format: 'waldur-quest-quiz-result',
      version: 1,
      exported_at: new Date().toISOString(),
      player: gameStore.playerName,
      quiz: {
        mode: quizStore.isDaily
          ? 'daily-challenge'
          : quizStore.isReview
            ? 'review'
            : quizStore.isCrossSkill
              ? 'cross-skill'
              : 'skill',
        // A review quiz covers one skill across several levels, so it names the skill
        // but has no single level of its own.
        skill: quizStore.isCrossSkill && !quizStore.isReview ? null : quizStore.skillName || null,
        skill_id: quizStore.isCrossSkill && !quizStore.isReview ? null : quizStore.skillId,
        tier: quizStore.isCrossSkill ? null : tier?.name ?? null,
        level: quizStore.isCrossSkill ? null : quizStore.level,
      },
      result: {
        score: quizStore.score,
        total: quizStore.total,
        passed: quizStore.passed,
        perfect: quizStore.perfect,
        final_streak: quizStore.streak,
        xp_earned: extra?.xpEarned,
        daily_bonus_xp: extra?.dailyBonus?.totalBonus,
        hard_mode_bonus_xp: extra?.dailyBonus?.hardBonus,
        daily_streak: extra?.dailyBonus?.streak,
      },
      answers,
    }

    return toYamlDocument(doc, ['Waldur Quest quiz result export'])
  }

  function profileFileName(): string {
    const date = new Date().toISOString().slice(0, 10)
    return `waldur-quest-${slugify(gameStore.playerName)}-${date}.yaml`
  }

  function quizFileName(): string {
    const date = new Date().toISOString().slice(0, 10)
    if (quizStore.isReview) return `waldur-quest-review-${slugify(quizStore.skillName || 'skill')}-${date}.yaml`
    if (quizStore.isCrossSkill) return `waldur-quest-daily-${date}.yaml`
    return `waldur-quest-${slugify(quizStore.skillName || 'quiz')}-l${quizStore.level}-${date}.yaml`
  }

  function downloadText(filename: string, text: string, mimeType = 'application/yaml'): void {
    const blob = new Blob([text], { type: `${mimeType};charset=utf-8` })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  }

  async function copyToClipboard(text: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
  }

  return {
    generateProfileCard,
    generateShareUrl,
    generateProfileYaml,
    generateQuizYaml,
    profileFileName,
    quizFileName,
    downloadText,
    copyToClipboard,
  }
}
