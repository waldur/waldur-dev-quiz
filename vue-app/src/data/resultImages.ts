import type { ResultReaction, StreakReaction } from '@/types/game'

export const RESULT_REACTIONS: Record<string, ResultReaction[]> = {
  positive: [
    { type: 'emoji', emoji: '🎉', caption: "You're on fire!" },
    { type: 'emoji', emoji: '🚀', caption: 'To the moon!' },
    { type: 'emoji', emoji: '💪', caption: 'Absolute unit!' },
    { type: 'emoji', emoji: '🏆', caption: 'Champion material!' },
    { type: 'emoji', emoji: '🌟', caption: 'Star performer!' },
    { type: 'emoji', emoji: '🧠', caption: 'Big brain energy!' },
    { type: 'emoji', emoji: '👑', caption: 'Royalty detected!' },
    { type: 'emoji', emoji: '🔥', caption: 'Straight fire!' },
    { type: 'image', url: 'https://media.giphy.com/media/g9582DNuQppxC/giphy.gif', caption: 'Nailed it!' },
    { type: 'image', url: 'https://media.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif', caption: 'Success!' },
    { type: 'image', url: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif', caption: 'You did it!' },
    { type: 'image', url: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif', caption: 'Brilliant!' },
    { type: 'image', url: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif', caption: 'Awesome!' },
    { type: 'image', url: 'https://media.giphy.com/media/YRuFixSNWFVcXaxpmX/giphy.gif', caption: 'Great job!' },
  ],
  negative: [
    { type: 'emoji', emoji: '😅', caption: 'Almost had it!' },
    { type: 'emoji', emoji: '🤔', caption: 'Hmm, interesting approach...' },
    { type: 'emoji', emoji: '😬', caption: 'Well, that happened...' },
    { type: 'emoji', emoji: '🙈', caption: "We don't talk about this" },
    { type: 'emoji', emoji: '☕', caption: 'Maybe try after coffee?' },
    { type: 'emoji', emoji: '🤷', caption: 'It be like that sometimes' },
    { type: 'emoji', emoji: '💀', caption: 'RIP that attempt' },
    { type: 'emoji', emoji: '🫠', caption: 'Melting from effort' },
    { type: 'image', url: 'https://media.giphy.com/media/3o6wrebnKWmvx4ZBio/giphy.gif', caption: 'This is fine...' },
    { type: 'image', url: 'https://media.giphy.com/media/3o7TKnO6Wve6502iJ2/giphy.gif', caption: 'Next time!' },
    { type: 'image', url: 'https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif', caption: 'Oops!' },
    { type: 'image', url: 'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif', caption: 'Keep trying!' },
    { type: 'image', url: 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif', caption: 'So close!' },
    { type: 'image', url: 'https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif', caption: "Don't give up!" },
  ],
  perfect: [
    { type: 'emoji', emoji: '🏅', caption: 'FLAWLESS VICTORY!' },
    { type: 'emoji', emoji: '🦸', caption: 'Superhero status!' },
    { type: 'emoji', emoji: '🎯', caption: 'Bullseye! Perfect!' },
    { type: 'image', url: 'https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif', caption: 'PERFECT!' },
    { type: 'image', url: 'https://media.giphy.com/media/3o6fJ1BM7R2EBRDnxK/giphy.gif', caption: 'Legendary!' },
    { type: 'image', url: 'https://media.giphy.com/media/xT77XWum9yH7zNkFW0/giphy.gif', caption: 'Mind = Blown!' },
  ],
}

export const STREAK_REACTIONS: Record<number, StreakReaction[]> = {
  3: [
    { emoji: '🔥', caption: 'On fire!', sound: 'streak' },
    { emoji: '⚡', caption: 'Lightning fast!', sound: 'streak' },
    { emoji: '💥', caption: 'Boom!', sound: 'streak' },
  ],
  5: [
    { emoji: '🌟', caption: 'Superstar!', sound: 'streak_big' },
    { emoji: '🚀', caption: 'Unstoppable!', sound: 'streak_big' },
    { emoji: '💪', caption: 'Beast mode!', sound: 'streak_big' },
    { emoji: '🎯', caption: 'Sharpshooter!', sound: 'streak_big' },
  ],
  10: [
    { emoji: '👑', caption: 'LEGENDARY!', sound: 'streak_epic' },
    { emoji: '🏆', caption: 'CHAMPION!', sound: 'streak_epic' },
    { emoji: '🦸', caption: 'SUPERHERO!', sound: 'streak_epic' },
    { emoji: '🔱', caption: 'GODLIKE!', sound: 'streak_epic' },
  ],
}

export function getStreakMilestone(streak: number): number | null {
  if (streak >= 10 && streak % 5 === 0) return 10
  if (streak === 10) return 10
  if (streak === 5) return 5
  if (streak === 3) return 3
  return null
}

export function getStreakReaction(streak: number): (StreakReaction & { streak: number }) | null {
  const milestone = getStreakMilestone(streak)
  if (!milestone) return null
  const pool = STREAK_REACTIONS[milestone] ?? STREAK_REACTIONS[10]
  if (!pool) return null
  const item = pool[Math.floor(Math.random() * pool.length)]
  if (!item) return null
  return { ...item, streak }
}

export function getResultReaction(passed: boolean, perfect: boolean): ResultReaction {
  let pool: ResultReaction[]
  if (perfect) {
    pool = RESULT_REACTIONS.perfect ?? RESULT_REACTIONS.positive ?? []
  } else if (passed) {
    pool = RESULT_REACTIONS.positive ?? []
  } else {
    pool = RESULT_REACTIONS.negative ?? []
  }
  return pool[Math.floor(Math.random() * pool.length)] ?? { type: 'emoji', emoji: '🎮', caption: 'Good game!' }
}
