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

    // Level cap based on player XP — now includes levels 6-7
    let maxLevel = 7
    if (gameStore.totalXP < 500) maxLevel = 2
    else if (gameStore.totalXP < 1500) maxLevel = 3
    else if (gameStore.totalXP < 3000) maxLevel = 4
    else if (gameStore.totalXP < 5000) maxLevel = 5
    else if (gameStore.totalXP < 8000) maxLevel = 6

    // Streak-based difficulty boost
    const currentStreak = gameStore.getDailyChallengeStreak()
    const streakBoost = currentStreak >= 7 ? 2 : currentStreak >= 3 ? 1 : 0

    // Hard mode forces minimum level 3
    const hardMode = gameStore.settings.dailyHardMode

    // Seeded-shuffle the tier order
    const tierIds = Object.keys(byTier)
    for (let i = tierIds.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(seed + i) * (i + 1))
      ;[tierIds[i], tierIds[j]] = [tierIds[j]!, tierIds[i]!]
    }

    // Pick level for a skill, considering per-skill progress, streak boost, and hard mode
    function pickLevel(skillId: string, seedVal: number): number {
      const levels = getAvailableLevels(skillId)
      const playerLevel = gameStore.getSkillProgress(skillId).level

      // Per-skill minimum: don't quiz below what the player has already passed
      let minLevel = Math.max(1, playerLevel)

      // Apply streak boost
      minLevel = Math.min(minLevel + streakBoost, maxLevel)

      // Hard mode: minimum level 3
      if (hardMode) minLevel = Math.max(minLevel, 3)

      const pool = levels.filter(l => l >= minLevel && l <= maxLevel)
      const finalPool = pool.length > 0 ? pool : [levels[levels.length - 1]!]

      // Bias toward higher levels: pick the higher of two random draws
      if (finalPool.length > 1) {
        const a = Math.floor(seededRandom(seedVal) * finalPool.length)
        const b = Math.floor(seededRandom(seedVal + 100) * finalPool.length)
        return finalPool[Math.max(a, b)] ?? 1
      }
      return finalPool[0] ?? 1
    }

    // Sort tier skills so unmastered skills come first (prefer weak spots)
    function sortByWeakness(tierSkills: Skill[], seedVal: number): Skill[] {
      const sorted = [...tierSkills].sort((a, b) => {
        const aLevel = gameStore.getSkillProgress(a.id).level
        const bLevel = gameStore.getSkillProgress(b.id).level
        return aLevel - bLevel
      })
      // Pick from the weaker half with higher probability
      // Use seeded random to maintain determinism
      const halfIdx = Math.ceil(sorted.length / 2)
      const pickFromWeak = seededRandom(seedVal) < 0.7
      if (pickFromWeak && sorted.length > 1) {
        const idx = Math.floor(seededRandom(seedVal + 1) * halfIdx)
        // Move the picked skill to front, return the array
        const picked = sorted.splice(idx, 1)
        return [...picked, ...sorted]
      }
      return sorted
    }

    // Pick 1 skill per tier (up to 5)
    const picks: Array<{ skillId: string; skill: Skill; level: number }> = []
    let seedOffset = 10
    for (const tierId of tierIds) {
      if (picks.length >= 5) break
      const tierSkills = byTier[tierId]
      if (!tierSkills) continue
      const sorted = sortByWeakness(tierSkills, seed + seedOffset)
      const skillIdx = Math.floor(seededRandom(seed + seedOffset++) * sorted.length)
      // Bias: 70% chance to pick from weaker half already handled in sort
      const skill = sorted[0]! // Take the first (weakest-biased) skill
      seedOffset++
      const level = pickLevel(skill.id, seed + seedOffset++)
      picks.push({ skillId: skill.id, skill, level })
    }

    // Backfill if fewer than 5 tiers had questions
    while (picks.length < 5 && picks.length < skillsWithQuestions.length) {
      const usedIds = new Set(picks.map(p => p.skillId))
      const remaining = skillsWithQuestions.filter(s => !usedIds.has(s.id))
      if (remaining.length === 0) break
      const sorted = sortByWeakness(remaining, seed + seedOffset)
      const skill = sorted[0]
      if (!skill) break
      seedOffset++
      const level = pickLevel(skill.id, seed + seedOffset++)
      picks.push({ skillId: skill.id, skill, level })
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

  // Compute level range for display
  const levelRange = computed(() => {
    const daily = getDailyChallenge()
    if (!daily || daily.skills.length === 0) return null
    const levels = daily.skills.map(s => s.level)
    return { min: Math.min(...levels), max: Math.max(...levels) }
  })

  return {
    getDailyChallenge,
    buildCrossSkillQuizData,
    isCompleted,
    streak,
    levelRange,
  }
}
