export interface SkillTier {
  id: string
  name: string
  icon: string
  color: string
  description: string
  order: number
}

export interface SkillPackage {
  id: string
  name: string
  icon: string
  color: string
}

export interface Skill {
  id: string
  name: string
  tier: string
  description: string
  category?: string
  package?: string
}

export interface SkillLevel {
  level: number
  name: string
  color: string
  xpRequired: number
}

export interface WeaponProfile {
  id: string
  name: string
  icon: string
  description: string
  minLiteracy: number
  minBreadth: number
  minDeep: number
}

export interface Question {
  q: string
  options: string[]
  correct: number
  explanation?: string
  code?: string
  learnMore?: {
    url: string
    text: string
  }
}

export type QuestionBank = Record<string, Record<number, Question[]>>

export interface SkillProgress {
  level: number
  xp: number
  attempts: number
  passed: boolean
}

export interface QuestionHistoryEntry {
  w: number
  c: number
  last: number
}

export interface DailyChallengeState {
  lastCompletedDate: string | null
  streak: number
}

export interface GameSettings {
  soundEnabled: boolean
  musicEnabled: boolean
  idkfa: boolean
}

export interface GameState {
  playerId: string | null
  playerName: string
  totalXP: number
  skillProgress: Record<string, SkillProgress>
  achievements: string[]
  currentProfile: string
  gamesPlayed: number
  questionsAnswered: number
  correctAnswers: number
  streakBest: number
  lastPlayed: string | null
  onboardingDone: boolean
  questionHistory: Record<string, QuestionHistoryEntry>
  achievementTimestamps: Record<string, number>
  dailyChallenge: DailyChallengeState
  settings: GameSettings
}

export interface Achievement {
  id: string
  name: string
  icon: string
  description: string
  category: string
}

export interface ResultReaction {
  type: 'emoji' | 'image'
  emoji?: string
  url?: string
  caption: string
}

export interface StreakReaction {
  emoji: string
  caption: string
  sound: string
  streak?: number
}

export interface AnswerHistory {
  selectedIndex: number
  selectedDisplayIndex: number
  wasCorrect: boolean
  shuffledOptions: ShuffledOption[]
}

export interface ShuffledOption {
  text: string
  originalIndex: number
}

export interface CrossSkillEntry {
  question: Question
  skillId: string
  skill: Skill
  level: number
}

export interface PerQuestionResult {
  wasCorrect: boolean
  skillId: string
  skill: Skill
  level: number
}

export interface DailyBonusInfo {
  dailyBonus: number
  streakBonus: number
  totalBonus: number
  streak: number
}

export interface TShapeData {
  breadthPercent: number
  depthCount: number
  literacyPercent: number
  foundationPercent: number
  literacyStarted: number
  literacyTotal: number
  foundationStarted: number
  foundationTotal: number
  specExpert: number
  specTotal: number
}

export interface Recommendation {
  skill: Skill
  reason: string
  priority: 'high' | 'medium' | 'low'
}

export interface PlayerStats {
  totalXP: number
  skillsStarted: number
  skillsPassed: number
  gamesPlayed: number
  questionsAnswered: number
  correctAnswers: number
  accuracy: number
  streakBest: number
  achievements: number
  profile: string
}
