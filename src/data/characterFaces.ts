export type Gender = 'male' | 'female'

export interface CharacterStage {
  id: string
  name: string
  emoji: Record<Gender, string>
  description: string
  minXP: number
}

export const characterStages: CharacterStage[] = [
  { id: 'baby',        name: 'Newborn',      emoji: { male: '👶', female: '👶' },       description: 'Just entered the dev world',     minXP: 0 },
  { id: 'child',       name: 'Curious Kid',  emoji: { male: '👦', female: '👧' },       description: 'Starting to ask questions',       minXP: 100 },
  { id: 'student',     name: 'Student',      emoji: { male: '👨‍🎓', female: '👩‍🎓' },     description: 'Absorbing knowledge',             minXP: 500 },
  { id: 'developer',   name: 'Developer',    emoji: { male: '👨‍💻', female: '👩‍💻' },     description: 'Building things that work',       minXP: 2000 },
  { id: 'veteran',     name: 'Veteran',      emoji: { male: '🧔', female: '👩‍🔬' },      description: 'Battle-tested and wise',          minXP: 5000 },
  { id: 'sage',        name: 'Sage',         emoji: { male: '🧙‍♂️', female: '🧙‍♀️' },    description: 'Keeper of ancient wisdom',        minXP: 10000 },
  { id: 'enlightened', name: 'Enlightened',  emoji: { male: '🧘‍♂️', female: '🧘‍♀️' },    description: 'One with the codebase',           minXP: 20000 },
  { id: 'deity',       name: 'Code Deity',   emoji: { male: '🔱', female: '🔱' },       description: 'Transcended mortal development',  minXP: 35000 },
]

export function getCharacterStage(totalXP: number): CharacterStage {
  let result = characterStages[0]!
  for (const stage of characterStages) {
    if (totalXP >= stage.minXP) {
      result = stage
    } else {
      break
    }
  }
  return result
}

export function getCharacterEmoji(totalXP: number, gender: Gender): string {
  return getCharacterStage(totalXP).emoji[gender]
}

export function getNextStage(totalXP: number): CharacterStage | null {
  for (const stage of characterStages) {
    if (totalXP < stage.minXP) {
      return stage
    }
  }
  return null
}

export function getProgressToNextStage(totalXP: number): number {
  const current = getCharacterStage(totalXP)
  const next = getNextStage(totalXP)
  if (!next) return 100
  const range = next.minXP - current.minXP
  const progress = totalXP - current.minXP
  return Math.round((progress / range) * 100)
}
