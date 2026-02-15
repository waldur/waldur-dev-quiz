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

function levelButtonStyle(level: number): Record<string, string> {
  if (isLevelPassed(level)) return { backgroundColor: 'var(--color-success)' }
  if (!isLevelUnlocked(level)) return { backgroundColor: 'var(--color-bg-light)', opacity: '0.5' }
  if (level === 6) return { backgroundColor: 'rgb(236, 72, 153)' }
  if (level === 7) return { backgroundColor: 'rgb(20, 184, 166)' }
  return { backgroundColor: 'var(--color-primary)' }
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
          <h2>Your Progress</h2>
          <div class="skill-detail__level-display">Level {{ currentLevel }} / {{ maxLevel }}</div>
        </div>

        <div class="skill-detail__choose">
          <h3>Choose Level to Attempt:</h3>
          <p v-if="hasAdvancedLevels" class="skill-detail__advanced-hint">
            ⭐ Advanced Path Available
          </p>
        </div>

        <div class="level-buttons">
          <div v-for="level in levels" :key="level" class="level-btn-wrapper">
            <span v-if="level > 5" class="level-btn__star">⭐</span>
            <button
              class="level-btn"
              :style="levelButtonStyle(level)"
              :disabled="!isLevelUnlocked(level)"
              @click="isLevelUnlocked(level) && startLevel(level)"
            >
              {{ level }}
            </button>
            <span class="level-btn__qcount">{{ getQuestionCount(level) }}q</span>
          </div>
        </div>

        <p class="skill-detail__stats">
          Attempts: {{ progress.attempts || 0 }} | XP Earned: {{ progress.xp || 0 }}
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
            variant="success"
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
  padding: var(--space-6) var(--space-4);
  text-align: center;
}

.skill-detail__name {
  font-size: var(--font-3xl);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.skill-detail__tier {
  font-size: var(--font-lg);
}

.skill-detail__body {
  flex: 1;
  padding: var(--space-6) var(--space-4);
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
}

.skill-detail__desc {
  font-size: var(--font-base);
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

.skill-detail__progress {
  margin-bottom: var(--space-4);
}

.skill-detail__progress h2 {
  font-size: var(--font-xl);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.skill-detail__level-display {
  font-size: var(--font-3xl);
  color: var(--color-gold);
}

.skill-detail__choose {
  margin-bottom: var(--space-4);
}

.skill-detail__choose h3 {
  font-size: var(--font-lg);
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.skill-detail__advanced-hint {
  font-size: var(--font-sm);
  color: rgb(236, 72, 153);
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
  font-size: var(--font-base);
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
