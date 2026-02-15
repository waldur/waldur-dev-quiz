import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { GameState, SkillProgress, QuestionHistoryEntry, DailyBonusInfo, PlayerStats } from '@/types/game'
import { skills } from '@/data/skills'
import { hasQuestions } from '@/data/questions'

const STORAGE_KEY = 'waldur-quest'

function generatePlayerId(): string {
  return 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
}

const defaultState: GameState = {
  playerId: null,
  playerName: 'Adventurer',
  totalXP: 0,
  skillProgress: {},
  achievements: [],
  currentProfile: 'dagger',
  gamesPlayed: 0,
  questionsAnswered: 0,
  correctAnswers: 0,
  streakBest: 0,
  lastPlayed: null,
  onboardingDone: false,
  questionHistory: {},
  achievementTimestamps: {},
  dailyChallenge: { lastCompletedDate: null, streak: 0 },
  settings: {
    soundEnabled: true,
    musicEnabled: true,
    idkfa: false,
    gender: 'male',
  },
}

function loadFromStorage(): GameState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const state = JSON.parse(saved)
      return { ...defaultState, ...state }
    }
  } catch (e) {
    console.error('Failed to load state:', e)
  }
  return { ...defaultState, playerId: generatePlayerId() }
}

function saveToStorage(state: GameState): void {
  try {
    state.lastPlayed = new Date().toISOString()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.error('Failed to save state:', e)
  }
}

export const useGameStore = defineStore('game', () => {
  const state = ref<GameState>(loadFromStorage())

  // Auto-persist on every change
  watch(state, (newState) => {
    saveToStorage(newState)
  }, { deep: true })

  // Getters
  const totalXP = computed(() => state.value.totalXP)
  const playerName = computed(() => state.value.playerName)
  const currentProfile = computed(() => state.value.currentProfile)
  const gamesPlayed = computed(() => state.value.gamesPlayed)
  const onboardingDone = computed(() => state.value.onboardingDone)
  const achievements = computed(() => state.value.achievements)
  const achievementTimestamps = computed(() => state.value.achievementTimestamps)
  const settings = computed(() => state.value.settings)
  const questionHistory = computed(() => state.value.questionHistory)
  const dailyChallenge = computed(() => state.value.dailyChallenge)
  const streakBest = computed(() => state.value.streakBest)

  const stats = computed<PlayerStats>(() => {
    const s = state.value
    const skillCount = Object.keys(s.skillProgress).length
    const passedSkills = Object.values(s.skillProgress).filter(p => p.passed).length
    return {
      totalXP: s.totalXP,
      skillsStarted: skillCount,
      skillsPassed: passedSkills,
      gamesPlayed: s.gamesPlayed,
      questionsAnswered: s.questionsAnswered,
      correctAnswers: s.correctAnswers,
      accuracy: s.questionsAnswered > 0
        ? Math.round((s.correctAnswers / s.questionsAnswered) * 100)
        : 0,
      streakBest: s.streakBest,
      achievements: s.achievements.length,
      profile: s.currentProfile,
    }
  })

  // Actions
  function getSkillProgress(skillId: string): SkillProgress {
    return state.value.skillProgress[skillId] || { level: 0, xp: 0, attempts: 0, passed: false }
  }

  function updateSkillProgress(skillId: string, level: number, passed: boolean, xpGained: number): SkillProgress {
    const current = state.value.skillProgress[skillId] || { level: 0, xp: 0, attempts: 0, passed: false }
    state.value.skillProgress[skillId] = {
      level: passed ? Math.max(current.level, level) : current.level,
      xp: current.xp + xpGained,
      attempts: current.attempts + 1,
      passed: passed || current.passed,
    }
    state.value.totalXP += xpGained
    state.value.gamesPlayed += 1
    return state.value.skillProgress[skillId]
  }

  function recordAnswer(correct: boolean, questionKey: string | null): void {
    state.value.questionsAnswered += 1
    if (correct) {
      state.value.correctAnswers += 1
    }
    if (questionKey) {
      if (!state.value.questionHistory) state.value.questionHistory = {}
      const entry: QuestionHistoryEntry = state.value.questionHistory[questionKey] || { w: 0, c: 0, last: 0 }
      if (correct) {
        entry.c += 1
      } else {
        entry.w += 1
      }
      entry.last = Date.now()
      if (entry.c >= 3 && entry.w === 0) {
        delete state.value.questionHistory[questionKey]
      } else {
        state.value.questionHistory[questionKey] = entry
      }
    }
  }

  function updateStreak(currentStreak: number): number {
    if (currentStreak > state.value.streakBest) {
      state.value.streakBest = currentStreak
    }
    return state.value.streakBest
  }

  function addAchievement(achievementId: string, timestamp?: number): boolean {
    if (!state.value.achievements.includes(achievementId)) {
      state.value.achievements.push(achievementId)
      if (!state.value.achievementTimestamps) state.value.achievementTimestamps = {}
      state.value.achievementTimestamps[achievementId] = timestamp || Date.now()
      return true
    }
    return false
  }

  function setPlayerName(name: string): void {
    state.value.playerName = name
  }

  function updateProfile(profileId: string): void {
    state.value.currentProfile = profileId
  }

  function setOnboardingDone(): void {
    state.value.onboardingDone = true
  }

  function setGender(gender: 'male' | 'female'): void {
    state.value.settings = { ...state.value.settings, gender }
  }

  function calculateProfile(): string {
    const progress = state.value.skillProgress
    let literacyProficient = 0
    let foundationProficient = 0
    let specializationExpert = 0

    Object.entries(progress).forEach(([skillId, data]) => {
      if (skillId.startsWith('l-') && data.level >= 2) literacyProficient++
      if (skillId.startsWith('f-') && data.level >= 3) foundationProficient++
      if (skillId.startsWith('s-') && data.level >= 4) specializationExpert++
    })

    const literacyPercent = (literacyProficient / 11) * 100
    const foundationPercent = (foundationProficient / 24) * 100

    let profile = 'dagger'
    if (literacyPercent >= 80 && foundationPercent >= 50 && specializationExpert >= 3) {
      profile = 'trident'
    } else if (literacyPercent >= 80 && foundationPercent >= 50 && specializationExpert >= 2) {
      profile = 'bident'
    } else if (literacyPercent >= 80 && foundationPercent >= 50 && specializationExpert >= 1) {
      profile = 'lance'
    } else if (specializationExpert >= 1) {
      profile = 'spear'
    } else if (literacyPercent >= 80 && foundationPercent >= 50) {
      profile = 'shield'
    }

    state.value.currentProfile = profile
    return profile
  }

  // Daily challenge
  function isDailyChallengeCompleted(): boolean {
    const today = new Date().toISOString().split('T')[0]
    const dc = state.value.dailyChallenge || { lastCompletedDate: null, streak: 0 }
    return dc.lastCompletedDate === today
  }

  function completeDailyChallenge(baseXP: number): DailyBonusInfo | null {
    const today = new Date().toISOString().split('T')[0]
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
    const dc = state.value.dailyChallenge || { lastCompletedDate: null, streak: 0 }

    if (dc.lastCompletedDate === today) return null

    if (dc.lastCompletedDate === yesterday) {
      dc.streak = (dc.streak || 0) + 1
    } else {
      dc.streak = 1
    }
    dc.lastCompletedDate = today ?? null

    const dailyBonus = Math.round(baseXP * 0.5)
    const streakBonus = Math.min(dc.streak * 10, 50)
    const totalBonus = dailyBonus + streakBonus

    state.value.dailyChallenge = dc
    state.value.totalXP += totalBonus

    return { dailyBonus, streakBonus, totalBonus, streak: dc.streak }
  }

  function getDailyChallengeStreak(): number {
    const dc = state.value.dailyChallenge || { lastCompletedDate: null, streak: 0 }
    const today = new Date().toISOString().split('T')[0]
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
    if (dc.lastCompletedDate === today || dc.lastCompletedDate === yesterday) {
      return dc.streak || 0
    }
    return 0
  }

  // Cross-skill results
  function applyCrossSkillResults(perQuestionResults: Array<{ wasCorrect: boolean; skillId: string; level: number }>, xpGained: number): void {
    perQuestionResults.forEach(r => {
      const current = state.value.skillProgress[r.skillId] || { level: 0, xp: 0, attempts: 0, passed: false }
      if (r.wasCorrect) {
        current.xp += 20
        current.level = Math.max(current.level, r.level)
        current.passed = true
      }
      state.value.skillProgress[r.skillId] = current
    })
    state.value.totalXP += xpGained
    state.value.gamesPlayed += 1
  }

  function resetProgress(): void {
    localStorage.removeItem(STORAGE_KEY)
    state.value = { ...defaultState, playerId: generatePlayerId() }
  }

  function exportState(): string {
    return JSON.stringify(state.value, null, 2)
  }

  function importState(jsonString: string): boolean {
    try {
      const imported = JSON.parse(jsonString)
      state.value = { ...defaultState, ...imported }
      return true
    } catch (e) {
      console.error('Failed to import state:', e)
      return false
    }
  }

  return {
    state,
    totalXP,
    playerName,
    currentProfile,
    gamesPlayed,
    onboardingDone,
    achievements,
    achievementTimestamps,
    settings,
    questionHistory,
    dailyChallenge,
    streakBest,
    stats,
    getSkillProgress,
    updateSkillProgress,
    recordAnswer,
    updateStreak,
    addAchievement,
    setPlayerName,
    updateProfile,
    setOnboardingDone,
    setGender,
    calculateProfile,
    isDailyChallengeCompleted,
    completeDailyChallenge,
    getDailyChallengeStreak,
    applyCrossSkillResults,
    resetProgress,
    exportState,
    importState,
  }
})
