import type { Achievement } from '@/types/game'

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first-quest', name: 'First Steps', icon: '🎯', description: 'Complete your first quest', category: 'milestones' },
  { id: 'perfect-score', name: 'Flawless', icon: '⭐', description: 'Get a perfect score on any quiz', category: 'skill' },
  { id: 'streak-3', name: 'On Fire', icon: '🔥', description: 'Reach a 3-answer streak', category: 'skill' },
  { id: 'streak-5', name: 'Unstoppable', icon: '⚡', description: 'Reach a 5-answer streak', category: 'skill' },
  { id: 'streak-10', name: 'Legendary', icon: '👑', description: 'Reach a 10-answer streak', category: 'skill' },
  { id: 'literacy-complete', name: 'Well Read', icon: '📚', description: 'Start all literacy skills', category: 'progress' },
  { id: 'foundation-complete', name: 'Solid Ground', icon: '🧱', description: 'Start all foundation skills', category: 'progress' },
  { id: 'shield-bearer', name: 'Shield Bearer', icon: '🛡️', description: 'Reach Shield rank or higher', category: 'rank' },
  { id: 'trident-master', name: 'Trident Master', icon: '🔱', description: 'Reach Trident rank', category: 'rank' },
  { id: 'xp-1000', name: 'Thousand Club', icon: '💰', description: 'Earn 1,000 total XP', category: 'milestones' },
  { id: 'xp-10000', name: 'XP Hoarder', icon: '💎', description: 'Earn 10,000 total XP', category: 'milestones' },
  { id: 'ten-quizzes', name: 'Dedicated', icon: '🏅', description: 'Complete 10 quizzes', category: 'milestones' },
  { id: 'specialist', name: 'Specialist', icon: '🔬', description: 'Reach level 4+ in any specialization', category: 'progress' },
  { id: 'grandmaster', name: 'Grandmaster', icon: '🏆', description: 'Reach level 7 in any skill', category: 'skill' },
  { id: 'explorer', name: 'Explorer', icon: '🧭', description: 'Take quizzes across 3+ tiers', category: 'progress' },
]

export function getAchievementById(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find(a => a.id === id)
}
