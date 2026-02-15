import { useGameStore } from '@/stores/game'
import { questions } from '@/data/questions'
import type { Question } from '@/types/game'

// Seeded PRNG (mulberry32)
export function seededRandom(seed: number): number {
  let t = seed + 0x6D2B79F5
  t = Math.imul(t ^ t >>> 15, t | 1)
  t ^= t + Math.imul(t ^ t >>> 7, t | 61)
  return ((t ^ t >>> 14) >>> 0) / 4294967296
}

export function dateSeed(dateStr: string): number {
  let hash = 0
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}

export function useSpacedRepetition() {
  const gameStore = useGameStore()

  function getQuestionsForSkill(skillId: string, level: number, count = 5): Question[] {
    const skillQuestions = questions[skillId]
    if (!skillQuestions) return []

    const levelQuestions = skillQuestions[level]
    if (!levelQuestions || levelQuestions.length === 0) return []

    const history = gameStore.questionHistory || {}

    const weak: Question[] = []
    const neutral: Question[] = []
    levelQuestions.forEach((q, i) => {
      const key = `${skillId}:${level}:${i}`
      const entry = history[key]
      if (entry && entry.w > entry.c) {
        weak.push(q)
      } else {
        neutral.push(q)
      }
    })

    const maxWeak = Math.ceil(count * 0.6)
    const shuffledWeak = [...weak].sort(() => Math.random() - 0.5)
    const shuffledNeutral = [...neutral].sort(() => Math.random() - 0.5)

    const selected: Question[] = []
    selected.push(...shuffledWeak.slice(0, Math.min(maxWeak, shuffledWeak.length)))
    const remaining = count - selected.length
    selected.push(...shuffledNeutral.slice(0, Math.min(remaining, shuffledNeutral.length)))

    if (selected.length < count) {
      const usedWeak = selected.filter(q => weak.includes(q)).length
      selected.push(...shuffledWeak.slice(usedWeak, usedWeak + (count - selected.length)))
    }

    return selected.slice(0, Math.min(count, selected.length)).sort(() => Math.random() - 0.5)
  }

  function getOneQuestionForSkill(skillId: string, level: number, seed: number): Question | null {
    const skillQuestions = questions[skillId]
    if (!skillQuestions) return null

    const levelQuestions = skillQuestions[level]
    if (!levelQuestions || levelQuestions.length === 0) return null

    const history = gameStore.questionHistory || {}

    const weak: Question[] = []
    const neutral: Question[] = []
    levelQuestions.forEach((q, i) => {
      const key = `${skillId}:${level}:${i}`
      const entry = history[key]
      if (entry && entry.w > entry.c) {
        weak.push(q)
      } else {
        neutral.push(q)
      }
    })

    const useWeak = weak.length > 0 && seededRandom(seed + 100) < 0.5
    const pool = useWeak ? weak : (neutral.length > 0 ? neutral : levelQuestions)
    const index = Math.floor(seededRandom(seed) * pool.length)
    return pool[index] ?? null
  }

  return {
    getQuestionsForSkill,
    getOneQuestionForSkill,
  }
}
