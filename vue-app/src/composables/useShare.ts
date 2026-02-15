import { useGameStore } from '@/stores/game'
import { skills, weaponProfiles } from '@/data/skills'
import { ACHIEVEMENTS, getAchievementById } from '@/data/achievements'

export function useShare() {
  const gameStore = useGameStore()

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
    copyToClipboard,
  }
}
