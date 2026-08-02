<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'
import { useQuizStore } from '@/stores/quiz'
import { useSpacedRepetition } from '@/composables/useSpacedRepetition'
import { useKeyboard } from '@/composables/useKeyboard'
import { skills, getTierInfo, getUnmetPrereqs } from '@/data/skills'
import { hasQuestions, getAvailableLevels, questions } from '@/data/questions'
import AppHeader from '@/components/layout/AppHeader.vue'
import GameButton from '@/components/ui/GameButton.vue'
import KeyboardHint from '@/components/layout/KeyboardHint.vue'

const props = defineProps<{ skillId: string }>()

const router = useRouter()
const gameStore = useGameStore()
const quizStore = useQuizStore()
const { getQuestionsForSkill } = useSpacedRepetition()

const skill = computed(() => skills.find(s => s.id === props.skillId))
const tierInfo = computed(() => skill.value ? getTierInfo(skill.value.tier) : undefined)
const progress = computed(() => gameStore.getSkillProgress(props.skillId))
const levels = computed(() => getAvailableLevels(props.skillId))
const currentLevel = computed(() => progress.value.level || 0)
const maxLevel = computed(() => levels.value.length > 0 ? Math.max(...levels.value) : 0)
const hasAdvancedLevels = computed(() => levels.value.some(l => l > 5))
const unmetPrereqs = computed(() =>
  gameStore.settings.idkfa ? [] : getUnmetPrereqs(props.skillId, (id) => gameStore.getSkillProgress(id).level)
)
const nextLevel = computed(() => currentLevel.value + 1)
const canStartNext = computed(() => currentLevel.value < maxLevel.value && levels.value.includes(nextLevel.value))

const showPlacementTest = computed(() =>
  currentLevel.value < 3 && levels.value.includes(3)
)

function startLevel(level: number) {
  if (!skill.value) return
  const qs = getQuestionsForSkill(props.skillId, level, 5)
  if (qs.length === 0) return
  quizStore.startQuiz({
    skillId: props.skillId,
    skillName: skill.value.name,
    skillTier: skill.value.tier,
    level,
    questions: qs,
  })
  router.push('/quiz')
}

function startNext() {
  if (canStartNext.value) {
    startLevel(nextLevel.value)
  }
}

function startPlacementTest() {
  startLevel(3)
}

function isLevelUnlocked(level: number): boolean {
  // idkfa cheat unlocks everything
  if (gameStore.settings.idkfa) return true
  return level <= currentLevel.value + 1
}

function isLevelPassed(level: number): boolean {
  return level <= currentLevel.value
}

// Three states, three colours: cleared (green), the one to play now (brand),
// locked (flat). Levels 6-7 are the reward tier, so they borrow the XP gold
// rather than introducing pink and teal into the palette.
function levelButtonStyle(level: number): Record<string, string> {
  if (isLevelPassed(level)) return { backgroundColor: 'var(--success)', color: 'var(--on-success)' }
  if (!isLevelUnlocked(level)) return { backgroundColor: 'var(--surface-2)', opacity: '0.5' }
  if (level > 5) return { backgroundColor: 'var(--xp)', color: 'var(--on-xp)' }
  return { backgroundColor: 'var(--brand)' }
}

function getQuestionCount(level: number): number {
  const sq = questions[props.skillId]
  if (!sq) return 0
  const lq = sq[level]
  return lq ? lq.length : 0
}

const hintText = computed(() =>
  canStartNext.value ? 'ESC/B: Back  ·  Space/Enter: Start' : 'ESC/B: Back'
)

useKeyboard({
  'escape': () => router.push('/skills'),
  'b': () => router.push('/skills'),
  'space': () => startNext(),
  'enter': () => startNext(),
})
</script>

<template>
  <div class="skill-detail" v-if="skill">
    <AppHeader title="" @back="router.push('/skills')">
      <template #default>
        <div class="skill-detail__header-content"
          :style="{ backgroundColor: tierInfo ? tierInfo.color + '30' : 'transparent' }"
        >
          <h1 class="skill-detail__name">{{ skill.name }}</h1>
          <div class="skill-detail__tier" :style="{ color: tierInfo?.color }">
            {{ tierInfo?.icon }} {{ tierInfo?.name }}
          </div>
        </div>
      </template>
    </AppHeader>

    <div class="skill-detail__body animate-in">
      <p class="skill-detail__desc">{{ skill.description }}</p>

      <div v-if="unmetPrereqs.length > 0" class="skill-detail__prereq-banner">
        Recommended: Complete {{ unmetPrereqs.map(s => s.name).join(', ') }} first
      </div>

      <template v-if="levels.length === 0">
        <div class="skill-detail__empty">
          <p class="skill-detail__empty-icon">📭</p>
          <p class="skill-detail__empty-title">No Questions Yet</p>
          <p class="skill-detail__empty-msg">Questions for this skill are being prepared.</p>
        </div>
      </template>

      <template v-else>
        <div class="skill-detail__progress">
          <span class="skill-detail__progress-label">Your progress</span>
          <span class="skill-detail__level-display">Level {{ currentLevel }}<span class="skill-detail__level-max"> / {{ maxLevel }}</span></span>
        </div>

        <h3 class="skill-detail__choose">Choose a level</h3>

        <div class="level-buttons">
          <div v-for="level in levels" :key="level" class="level-btn-wrapper">
            <span v-if="level > 5" class="level-btn__star" aria-hidden="true">★</span>
            <button
              class="level-btn"
              :style="levelButtonStyle(level)"
              :disabled="!isLevelUnlocked(level)"
              :title="`Level ${level} — ${getQuestionCount(level)} questions${isLevelPassed(level) ? ', cleared' : isLevelUnlocked(level) ? '' : ', locked'}`"
              @click="isLevelUnlocked(level) && startLevel(level)"
            >
              {{ level }}
            </button>
            <span class="level-btn__qcount">{{ getQuestionCount(level) }} Q</span>
          </div>
        </div>

        <!-- What the colours mean, rather than leaving it to be inferred -->
        <ul class="level-legend">
          <li><span class="level-legend__swatch" style="background: var(--success)"></span>Cleared</li>
          <li><span class="level-legend__swatch" style="background: var(--brand)"></span>Available</li>
          <li v-if="hasAdvancedLevels"><span class="level-legend__swatch" style="background: var(--xp)"></span>★ Advanced</li>
          <li><span class="level-legend__swatch level-legend__swatch--locked"></span>Locked</li>
        </ul>

        <p class="skill-detail__stats">
          {{ progress.attempts || 0 }} attempts · {{ progress.xp || 0 }} XP earned
        </p>

        <div class="skill-detail__actions">
          <GameButton
            v-if="showPlacementTest"
            label="⚡ Placement Test — Skip to Level 3"
            variant="warning"
            @click="startPlacementTest"
          />

          <GameButton
            v-if="canStartNext"
            :label="`Start Level ${nextLevel}`"
            size="lg"
            @click="startNext"
          />

          <p v-else-if="currentLevel >= maxLevel" class="skill-detail__complete">
            ✓ All levels completed!
          </p>
        </div>
      </template>
    </div>

    <KeyboardHint :hints="hintText" />
  </div>
</template>

<style scoped>
.skill-detail {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.skill-detail__header-content {
  padding: var(--space-5) var(--space-4);
  text-align: center;
}

.skill-detail__name {
  font-size: var(--font-2xl);
  font-weight: 700;
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.skill-detail__tier {
  font-size: var(--font-sm);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

/* Centres what is usually a short page instead of leaving the lower half bare */
.skill-detail__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: safe center;
  padding: var(--space-6) var(--space-4) var(--space-12);
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
}

.skill-detail__desc {
  font-size: var(--font-md);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
}

.skill-detail__prereq-banner {
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-sm);
  color: var(--color-warning);
  margin-bottom: var(--space-6);
}

.skill-detail__empty {
  margin-top: var(--space-8);
}

.skill-detail__empty-icon {
  font-size: var(--font-3xl);
  margin-bottom: var(--space-2);
}

.skill-detail__empty-title {
  font-size: var(--font-2xl);
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}

.skill-detail__empty-msg {
  color: var(--color-text-muted);
}

/* The chips below are the real control, so the read-out stays a read-out */
.skill-detail__progress {
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  margin-bottom: var(--space-6);
  background: var(--surface-1);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-pill);
  align-self: center;
}

.skill-detail__progress-label {
  font-size: var(--font-xs);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.skill-detail__level-display {
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--xp);
}

.skill-detail__level-max {
  color: var(--text-tertiary);
  font-weight: 500;
}

.skill-detail__choose {
  font-size: var(--font-md);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}

/* Legend */
.level-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2) var(--space-4);
  list-style: none;
  margin: var(--space-5) 0 var(--space-4);
  font-size: var(--font-xs);
  color: var(--text-tertiary);
}

.level-legend li {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.level-legend__swatch {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  display: inline-block;
}

.level-legend__swatch--locked {
  background: var(--surface-2);
  border: 1px solid var(--border-default);
}

/* Level buttons */
.level-buttons {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.level-btn-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.level-btn__star {
  font-size: 12px;
  color: var(--xp);
  line-height: 1;
}

.level-btn {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-md);
  border: none;
  color: var(--color-text);
  font-size: var(--font-2xl);
  font-family: var(--font-main);
  cursor: pointer;
  transition: all 0.15s;
}

.level-btn:not(:disabled):hover {
  opacity: 0.8;
}

.level-btn:disabled {
  cursor: not-allowed;
}

.level-btn__qcount {
  font-size: 10px;
  color: var(--color-text-muted);
  opacity: 0.7;
}

.skill-detail__stats {
  font-size: var(--font-md);
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.skill-detail__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.skill-detail__complete {
  font-size: var(--font-lg);
  color: var(--color-success);
}

@media (max-width: 640px) {
  .skill-detail__name {
    font-size: var(--font-2xl);
  }

  .skill-detail__level-display {
    font-size: var(--font-2xl);
  }

  .level-btn {
    width: 48px;
    height: 48px;
    font-size: var(--font-xl);
  }
}
</style>
