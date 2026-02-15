import { computed } from 'vue'
import { useGameStore } from '@/stores/game'
import { skills, getSkillsByTier, weaponProfiles } from '@/data/skills'
import { hasQuestions, getAvailableLevels } from '@/data/questions'
import type { TShapeData, Recommendation, WeaponProfile } from '@/types/game'

export function useTShape() {
  const gameStore = useGameStore()

  const tShape = computed<TShapeData>(() => {
    const literacySkills = getSkillsByTier('literacy').filter(s => hasQuestions(s.id))
    const foundationSkills = getSkillsByTier('foundation').filter(s => hasQuestions(s.id))
    const specSkills = getSkillsByTier('specialization').filter(s => hasQuestions(s.id))

    const literacyStarted = literacySkills.filter(s => gameStore.getSkillProgress(s.id).level > 0).length
    const foundationStarted = foundationSkills.filter(s => gameStore.getSkillProgress(s.id).level > 0).length
    const specExpert = specSkills.filter(s => gameStore.getSkillProgress(s.id).level >= 3).length

    const breadthPercent = Math.round(((literacyStarted + foundationStarted) / (literacySkills.length + foundationSkills.length)) * 100)

    return {
      breadthPercent,
      depthCount: specExpert,
      literacyPercent: Math.round((literacyStarted / literacySkills.length) * 100),
      foundationPercent: Math.round((foundationStarted / foundationSkills.length) * 100),
      literacyStarted,
      literacyTotal: literacySkills.length,
      foundationStarted,
      foundationTotal: foundationSkills.length,
      specExpert,
      specTotal: specSkills.length,
    }
  })

  const currentWeapon = computed<WeaponProfile>(() => {
    return weaponProfiles.find(p => p.id === gameStore.currentProfile) ?? weaponProfiles[0]!
  })

  const recommendations = computed<Recommendation[]>(() => {
    const recs: Recommendation[] = []
    const t = tShape.value

    // Priority 1: Literacy gaps
    if (t.literacyPercent < 80) {
      const literacySkills = getSkillsByTier('literacy').filter(s => hasQuestions(s.id))
      const notStarted = literacySkills.filter(s => gameStore.getSkillProgress(s.id).level === 0)
      notStarted.slice(0, 2).forEach(s => {
        recs.push({ skill: s, reason: 'Build breadth', priority: 'high' })
      })
    }

    // Priority 2: Foundation gaps
    if (t.literacyPercent >= 50 && t.foundationPercent < 50) {
      const foundationSkills = getSkillsByTier('foundation').filter(s => hasQuestions(s.id))
      const notStarted = foundationSkills.filter(s => gameStore.getSkillProgress(s.id).level === 0)
      notStarted.slice(0, 2).forEach(s => {
        recs.push({ skill: s, reason: 'Strengthen foundation', priority: 'high' })
      })
    }

    // Priority 3: Specialization depth
    if (t.breadthPercent >= 40 && t.depthCount < 2) {
      const specSkills = getSkillsByTier('specialization').filter(s => hasQuestions(s.id))
      const inProgress = specSkills.filter(s => {
        const p = gameStore.getSkillProgress(s.id)
        return p.level > 0 && p.level < 3
      })
      const notStarted = specSkills.filter(s => gameStore.getSkillProgress(s.id).level === 0)

      inProgress.slice(0, 1).forEach(s => {
        recs.push({ skill: s, reason: 'Deepen expertise', priority: 'medium' })
      })
      if (recs.length < 3) {
        notStarted.slice(0, 1).forEach(s => {
          recs.push({ skill: s, reason: 'Start specialization', priority: 'medium' })
        })
      }
    }

    // Priority 4: Level up existing
    if (recs.length < 3) {
      const allSkills = skills.filter(s => hasQuestions(s.id))
      const canLevelUp = allSkills.filter(s => {
        const p = gameStore.getSkillProgress(s.id)
        const levels = getAvailableLevels(s.id)
        return p.level > 0 && p.level < Math.max(...levels)
      })
      canLevelUp.slice(0, 3 - recs.length).forEach(s => {
        recs.push({ skill: s, reason: 'Level up', priority: 'low' })
      })
    }

    return recs.slice(0, 3)
  })

  return {
    tShape,
    currentWeapon,
    recommendations,
  }
}
