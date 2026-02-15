import { useGameStore } from '@/stores/game'
import { useUiStore } from '@/stores/ui'
import { useSound } from '@/composables/useSound'
import { ACHIEVEMENTS } from '@/data/achievements'
import { skills } from '@/data/skills'
import { hasQuestions } from '@/data/questions'
import type { Achievement } from '@/types/game'

type AchievementContext = {
  perfect?: boolean
  passed?: boolean
  score?: number
  total?: number
  streak?: number
}

type ConditionFn = (state: ReturnType<typeof useGameStore>, ctx?: AchievementContext) => boolean

const CONDITIONS: Record<string, ConditionFn> = {
  'first-quest': (store) => store.gamesPlayed >= 1,
  'perfect-score': (_store, ctx) => ctx?.perfect === true,
  'streak-3': (store) => store.streakBest >= 3,
  'streak-5': (store) => store.streakBest >= 5,
  'streak-10': (store) => store.streakBest >= 10,
  'literacy-complete': (store) => {
    const literacySkills = skills.filter(s => s.tier === 'literacy' && hasQuestions(s.id))
    return literacySkills.every(s => store.getSkillProgress(s.id).level >= 1)
  },
  'foundation-complete': (store) => {
    const foundationSkills = skills.filter(s => s.tier === 'foundation' && hasQuestions(s.id))
    return foundationSkills.every(s => store.getSkillProgress(s.id).level >= 1)
  },
  'shield-bearer': (store) => {
    return ['shield', 'spear', 'lance', 'bident', 'trident'].includes(store.currentProfile)
  },
  'trident-master': (store) => store.currentProfile === 'trident',
  'xp-1000': (store) => store.totalXP >= 1000,
  'xp-10000': (store) => store.totalXP >= 10000,
  'ten-quizzes': (store) => store.gamesPlayed >= 10,
  'specialist': (store) => {
    const progress = store.state.skillProgress
    return Object.entries(progress).some(([id, p]) => id.startsWith('s-') && p.level >= 4)
  },
  'grandmaster': (store) => {
    return Object.values(store.state.skillProgress).some(p => p.level >= 7)
  },
  'explorer': (store) => {
    const tiersPlayed = new Set<string>()
    Object.keys(store.state.skillProgress).forEach(skillId => {
      const skill = skills.find(s => s.id === skillId)
      if (skill && (store.state.skillProgress[skillId]?.attempts || 0) > 0) {
        tiersPlayed.add(skill.tier)
      }
    })
    return tiersPlayed.size >= 3
  },
}

export function useAchievements() {
  const gameStore = useGameStore()
  const uiStore = useUiStore()
  const sound = useSound()

  function checkAchievements(context?: AchievementContext): Achievement[] {
    const earned = gameStore.achievements
    const newlyEarned: Achievement[] = []

    ACHIEVEMENTS.forEach(achievement => {
      if (earned.includes(achievement.id)) return
      const condition = CONDITIONS[achievement.id]
      if (condition && condition(gameStore, context)) {
        newlyEarned.push(achievement)
        gameStore.addAchievement(achievement.id)
      }
    })

    // Show toasts for new achievements
    newlyEarned.forEach(a => {
      sound.achievement()
      uiStore.showAchievementToast(a)
    })

    return newlyEarned
  }

  return { checkAchievements }
}
