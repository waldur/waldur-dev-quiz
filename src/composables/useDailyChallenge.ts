import { computed } from 'vue'
import { useGameStore } from '@/stores/game'
import { useSpacedRepetition, seededRandom, dateSeed } from '@/composables/useSpacedRepetition'
import { skills, skillTiers } from '@/data/skills'
import { hasQuestions, getAvailableLevels } from '@/data/questions'
import type { CrossSkillEntry, Skill } from '@/types/game'

export function useDailyChallenge() {
  const gameStore = useGameStore()
  const { getOneQuestionForSkill } = useSpacedRepetition()

  function getDailyChallenge(): { isCrossSkill: true; skills: Array<{ skillId: string; skill: Skill; level: number }> } | null {
    const today = new Date().toISOString().split('T')[0] ?? ''
    const seed = dateSeed(today)
    const skillsWithQuestions = skills.filter(s => hasQuestions(s.id))
    if (skillsWithQuestions.length === 0) return null

    // Group skills by tier
    const byTier: Record<string, Skill[]> = {}
    skillsWithQuestions.forEach(s => {
      if (!byTier[s.tier]) byTier[s.tier] = []
      byTier[s.tier]!.push(s)
    })

    // Level cap based on player XP
    let maxLevel = 5
    if (gameStore.totalXP < 500) maxLevel = 2
    else if (gameStore.totalXP < 1500) maxLevel = 3
    else if (gameStore.totalXP < 3000) maxLevel = 4

    // Seeded-shuffle the tier order
    const tierIds = Object.keys(byTier)
    for (let i = tierIds.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(seed + i) * (i + 1))
      ;[tierIds[i], tierIds[j]] = [tierIds[j]!, tierIds[i]!]
    }

    // Pick 1 skill per tier (up to 5)
    const picks: Array<{ skillId: string; skill: Skill; level: number }> = []
    let seedOffset = 10
    for (const tierId of tierIds) {
      if (picks.length >= 5) break
      const tierSkills = byTier[tierId]
      if (!tierSkills) continue
      const skillIdx = Math.floor(seededRandom(seed + seedOffset++) * tierSkills.length)
      const skill = tierSkills[skillIdx]
      if (!skill) continue
      const levels = getAvailableLevels(skill.id)
      const cappedLevels = levels.filter(l => l <= maxLevel)
      const pool = cappedLevels.length > 0 ? cappedLevels : [levels[0]!]
      const levelIdx = Math.floor(seededRandom(seed + seedOffset++) * pool.length)
      picks.push({ skillId: skill.id, skill, level: pool[levelIdx] ?? 1 })
    }

    // Backfill if fewer than 5 tiers had questions
    while (picks.length < 5 && picks.length < skillsWithQuestions.length) {
      const usedIds = new Set(picks.map(p => p.skillId))
      const remaining = skillsWithQuestions.filter(s => !usedIds.has(s.id))
      if (remaining.length === 0) break
      const idx = Math.floor(seededRandom(seed + seedOffset++) * remaining.length)
      const skill = remaining[idx]
      if (!skill) break
      const levels = getAvailableLevels(skill.id)
      const cappedLevels = levels.filter(l => l <= maxLevel)
      const pool = cappedLevels.length > 0 ? cappedLevels : [levels[0]!]
      const levelIdx = Math.floor(seededRandom(seed + seedOffset++) * pool.length)
      picks.push({ skillId: skill.id, skill, level: pool[levelIdx] ?? 1 })
    }

    return { isCrossSkill: true, skills: picks }
  }

  function buildCrossSkillQuizData(): CrossSkillEntry[] | null {
    const daily = getDailyChallenge()
    if (!daily) return null

    const today = new Date().toISOString().split('T')[0] ?? ''
    const seed = dateSeed(today)

    return daily.skills.map((entry, i) => {
      const question = getOneQuestionForSkill(entry.skillId, entry.level, seed + 50 + i)
      return { question: question!, skillId: entry.skillId, skill: entry.skill, level: entry.level }
    }).filter(d => d.question !== null)
  }

  const isCompleted = computed(() => gameStore.isDailyChallengeCompleted())
  const streak = computed(() => gameStore.getDailyChallengeStreak())

  return {
    getDailyChallenge,
    buildCrossSkillQuizData,
    isCompleted,
    streak,
  }
}
