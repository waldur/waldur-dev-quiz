<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import { useGameStore } from '@/stores/game'
import { useAchievements } from '@/composables/useAchievements'
import { useTShape } from '@/composables/useTShape'
import { useSpacedRepetition } from '@/composables/useSpacedRepetition'
import { getResultReaction } from '@/data/resultImages'
import { skills, skillTiers } from '@/data/skills'
import { getAvailableLevels } from '@/data/questions'
import GameButton from '@/components/ui/GameButton.vue'
import KeyboardHint from '@/components/layout/KeyboardHint.vue'
import type { ResultReaction, DailyBonusInfo } from '@/types/game'

const router = useRouter()
const quizStore = useQuizStore()
const gameStore = useGameStore()
const { checkAchievements } = useAchievements()
const { tShape } = useTShape()
const { getQuestionsForSkill } = useSpacedRepetition()

// Results data
const xpEarned = ref(0)
const dailyBonus = ref<DailyBonusInfo | null>(null)
const reaction = ref<ResultReaction | null>(null)
const imageError = ref(false)
const newLevel = ref(0)

// Derived from quiz store
const score = computed(() => quizStore.score)
const total = computed(() => quizStore.total)
const streak = computed(() => quizStore.streak)
const passed = computed(() => quizStore.passed)
const perfect = computed(() => quizStore.perfect)
const skillId = computed(() => quizStore.skillId)
const skillName = computed(() => quizStore.skillName)
const skillTier = computed(() => quizStore.skillTier)
const level = computed(() => quizStore.level)
const isDaily = computed(() => quizStore.isDaily)
const isCrossSkill = computed(() => quizStore.isCrossSkill)
const perQuestionResults = computed(() => quizStore.perQuestionResults)

const headerColor = computed(() => {
  if (perfect.value) return '#FFD700'
  if (passed.value) return '#4CAF50'
  return '#E53935'
})

const title = computed(() => {
  if (perfect.value) return 'PERFECT!'
  if (passed.value) return 'PASSED!'
  return 'TRY AGAIN'
})

const hasNextLevel = computed(() => {
  if (!passed.value || isCrossSkill.value || !skillId.value) return false
  const levels = getAvailableLevels(skillId.value)
  const maxLevel = levels.length > 0 ? Math.max(...levels) : 5
  return level.value < maxLevel
})

const currentSkillLevel = computed(() => {
  if (!skillId.value) return 0
  return gameStore.getSkillProgress(skillId.value).level
})

onMounted(() => {
  // Redirect if no quiz data
  if (!quizStore.completed || quizStore.questions.length === 0) {
    router.push('/')
    return
  }

  // Calculate XP
  let xp = score.value * 20
  if (passed.value) xp += 50
  if (perfect.value) xp += 100
  xp += streak.value * 5
  xpEarned.value = xp

  // Update game store
  if (isCrossSkill.value) {
    gameStore.applyCrossSkillResults(
      perQuestionResults.value.map(r => ({
        wasCorrect: r.wasCorrect,
        skillId: r.skillId,
        level: r.level,
      })),
      xp,
    )
  } else if (skillId.value) {
    const updatedProgress = gameStore.updateSkillProgress(
      skillId.value,
      level.value,
      passed.value,
      xp,
    )
    newLevel.value = updatedProgress.level
  }

  // Daily bonus
  if (isDaily.value) {
    dailyBonus.value = gameStore.completeDailyChallenge(xp)
  }

  // Recalculate profile
  gameStore.calculateProfile()

  // Update best streak
  gameStore.updateStreak(streak.value)

  // Get reaction
  reaction.value = getResultReaction(passed.value, perfect.value)

  // Check achievements
  checkAchievements({
    perfect: perfect.value,
    passed: passed.value,
    score: score.value,
    total: total.value,
    streak: streak.value,
  })
})

function handleTryAgain() {
  if (!skillId.value) return
  const questions = getQuestionsForSkill(skillId.value, level.value, 5)
  quizStore.startQuiz({
    skillId: skillId.value,
    skillName: skillName.value,
    skillTier: skillTier.value,
    level: level.value,
    questions,
  })
  router.push('/quiz')
}

function handleNextLevel() {
  if (!skillId.value) return
  const nextLvl = level.value + 1
  const questions = getQuestionsForSkill(skillId.value, nextLvl, 5)
  quizStore.startQuiz({
    skillId: skillId.value,
    skillName: skillName.value,
    skillTier: skillTier.value,
    level: nextLvl,
    questions,
  })
  router.push('/quiz')
}

function goToSkillTree() {
  router.push('/skills')
}

function goToMenu() {
  router.push('/')
}
</script>

<template>
  <div class="results-view">
    <!-- Colored header stripe -->
    <div class="results-header" :style="{ backgroundColor: headerColor }">
      <h1 class="results-title">{{ title }}</h1>
      <p class="results-subtitle" v-if="!isCrossSkill">
        {{ skillName }} — Level {{ level }}
      </p>
      <p class="results-subtitle" v-else>
        Daily Challenge
      </p>
    </div>

    <div class="results-body animate-in">
      <!-- Two-column layout -->
      <div class="results-columns">
        <!-- Left: Stats -->
        <div class="results-stats">
          <div class="stat-item">
            <span class="stat-label">Score</span>
            <span class="stat-value">{{ score }} / {{ total }}</span>
          </div>

          <div class="stat-item">
            <span class="stat-label">Streak</span>
            <span class="stat-value">{{ streak }}</span>
          </div>

          <div class="stat-item stat-item--highlight">
            <span class="stat-label">XP Earned</span>
            <span class="stat-value stat-value--xp">+{{ xpEarned }}</span>
          </div>

          <div v-if="dailyBonus" class="stat-item stat-item--bonus">
            <span class="stat-label">Daily Bonus</span>
            <span class="stat-value stat-value--bonus">+{{ dailyBonus.totalBonus }}</span>
          </div>

          <div v-if="dailyBonus && dailyBonus.streak > 1" class="stat-item">
            <span class="stat-label">Daily Streak</span>
            <span class="stat-value">{{ dailyBonus.streak }} days</span>
          </div>

          <div v-if="!isCrossSkill && skillId" class="stat-item">
            <span class="stat-label">Skill Level</span>
            <span class="stat-value">{{ currentSkillLevel }}</span>
          </div>

          <!-- Cross-skill breakdown -->
          <div v-if="isCrossSkill && perQuestionResults.length > 0" class="cross-skill-breakdown">
            <h3 class="breakdown-title">Question Breakdown</h3>
            <div
              v-for="(result, index) in perQuestionResults"
              :key="index"
              class="breakdown-item"
              :class="{ 'breakdown-item--correct': result.wasCorrect, 'breakdown-item--wrong': !result.wasCorrect }"
            >
              <span class="breakdown-icon">{{ result.wasCorrect ? '\u2713' : '\u2717' }}</span>
              <span class="breakdown-skill">{{ result.skill.name }}</span>
              <span class="breakdown-level">Lv.{{ result.level }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Reaction panel -->
        <div class="results-reaction" v-if="reaction">
          <div class="reaction-display">
            <template v-if="reaction.type === 'image' && reaction.url && !imageError">
              <img
                :src="reaction.url"
                :alt="reaction.caption"
                class="reaction-image"
                @error="imageError = true"
              />
            </template>
            <template v-else>
              <span class="reaction-emoji">{{ reaction.emoji || '\uD83C\uDFAE' }}</span>
            </template>
          </div>
          <p class="reaction-caption">{{ reaction.caption }}</p>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="results-actions">
        <!-- Failed: Try Again + Skill Tree -->
        <template v-if="!passed && !isCrossSkill">
          <GameButton
            label="Try Again"
            variant="warning"
            @click="handleTryAgain"
          />
          <GameButton
            label="Skill Tree"
            variant="primary"
            @click="goToSkillTree"
          />
        </template>

        <!-- Passed with next level available -->
        <template v-else-if="passed && hasNextLevel && !isCrossSkill">
          <GameButton
            label="Next Level →"
            variant="success"
            @click="handleNextLevel"
          />
          <GameButton
            label="Skill Tree"
            variant="primary"
            @click="goToSkillTree"
          />
        </template>

        <!-- Passed at max level -->
        <template v-else-if="passed && !isCrossSkill">
          <GameButton
            label="Skill Tree"
            variant="primary"
            @click="goToSkillTree"
          />
        </template>

        <!-- Cross-skill mode -->
        <template v-else-if="isCrossSkill">
          <GameButton
            label="Skill Tree"
            variant="primary"
            @click="goToSkillTree"
          />
          <GameButton
            label="Main Menu"
            variant="ghost"
            @click="goToMenu"
          />
        </template>

        <!-- Always show Main Menu for non-cross-skill -->
        <GameButton
          v-if="!isCrossSkill"
          label="Main Menu"
          variant="ghost"
          @click="goToMenu"
        />
      </div>
    </div>

    <KeyboardHint hints="ESC → Main Menu" />
  </div>
</template>

<style scoped>
.results-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.results-header {
  padding: var(--space-6) var(--space-4);
  text-align: center;
  position: relative;
}

.results-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  color: var(--color-bg);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
}

.results-subtitle {
  margin: var(--space-2) 0 0;
  font-size: var(--font-lg);
  color: var(--color-bg);
  opacity: 0.9;
}

.results-body {
  flex: 1;
  padding: var(--space-6) var(--space-4);
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.results-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-6);
}

/* Stats (left column) */
.results-stats {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-light);
  border-radius: var(--radius-md);
}

.stat-item--highlight {
  border: 1px solid var(--color-primary);
}

.stat-item--bonus {
  border: 1px solid #FFD700;
  background: rgba(255, 215, 0, 0.1);
}

.stat-label {
  font-size: var(--font-sm);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: var(--font-lg);
  font-weight: 700;
}

.stat-value--xp {
  color: var(--color-primary);
}

.stat-value--bonus {
  color: #FFD700;
}

/* Cross-skill breakdown */
.cross-skill-breakdown {
  margin-top: var(--space-3);
}

.breakdown-title {
  font-size: var(--font-md);
  margin: 0 0 var(--space-2);
  color: var(--color-text-muted);
}

.breakdown-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  font-size: var(--font-sm);
}

.breakdown-item--correct {
  background: rgba(76, 175, 80, 0.1);
}

.breakdown-item--wrong {
  background: rgba(229, 57, 53, 0.1);
}

.breakdown-icon {
  font-weight: 700;
  width: 20px;
  text-align: center;
}

.breakdown-item--correct .breakdown-icon {
  color: var(--color-success);
}

.breakdown-item--wrong .breakdown-icon {
  color: var(--color-danger);
}

.breakdown-skill {
  flex: 1;
}

.breakdown-level {
  color: var(--color-text-muted);
  font-size: var(--font-xs);
}

/* Reaction panel (right column) */
.results-reaction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  background: var(--color-bg-light);
  border-radius: var(--radius-lg);
  text-align: center;
}

.reaction-display {
  margin-bottom: var(--space-3);
}

.reaction-emoji {
  font-size: 5rem;
  line-height: 1;
}

.reaction-image {
  max-width: 280px;
  max-height: 200px;
  border-radius: var(--radius-md);
  object-fit: contain;
}

.reaction-caption {
  font-size: var(--font-md);
  color: var(--color-text-muted);
  margin: 0;
  font-style: italic;
}

/* Action buttons */
.results-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

@media (max-width: 640px) {
  .results-columns {
    grid-template-columns: 1fr;
  }

  .results-title {
    font-size: 2rem;
  }
}
</style>
