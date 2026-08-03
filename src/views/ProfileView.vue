<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'
import { useTShape } from '@/composables/useTShape'
import { useShare } from '@/composables/useShare'
import { useStudyPlan } from '@/composables/useStudyPlan'
import { useQuizStore } from '@/stores/quiz'
import { useKeyboard } from '@/composables/useKeyboard'
import { skills, skillTiers, getSkillsByTier, weaponProfiles } from '@/data/skills'
import { hasQuestions } from '@/data/questions'
import { ACHIEVEMENTS, getAchievementById } from '@/data/achievements'
import { getCharacterStage, getNextStage, getProgressToNextStage, characterStages } from '@/data/characterFaces'
import type { AvatarStyle } from '@/types/game'
import AppHeader from '@/components/layout/AppHeader.vue'
import OverlayModal from '@/components/ui/OverlayModal.vue'
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'
import ExportModal from '@/components/ui/ExportModal.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
import StudyPlanPanel from '@/components/ui/StudyPlanPanel.vue'
import KeyboardHint from '@/components/layout/KeyboardHint.vue'

const router = useRouter()
const gameStore = useGameStore()
const quizStore = useQuizStore()
const { tShape, currentWeapon } = useTShape()
const { topics, hasPlan, buildReviewQuiz } = useStudyPlan()
const { generateProfileCard, generateShareUrl, generateProfileYaml, profileFileName, copyToClipboard } = useShare()

// UI state
const showAchievements = ref(false)
const showResetConfirm = ref(false)
const yamlExport = ref<{ content: string; filename: string } | null>(null)
const shareFeedback = ref('')
const shareFeedbackTimeout = ref<ReturnType<typeof setTimeout> | null>(null)

// Stats
const stats = gameStore.stats

// Character face
const gender = computed(() => (gameStore.settings.gender || 'male') as AvatarStyle)
const charStage = computed(() => getCharacterStage(gameStore.totalXP))
const charEmoji = computed(() => charStage.value.emoji[gender.value])
const nextStage = computed(() => getNextStage(gameStore.totalXP))
const stageProgress = computed(() => getProgressToNextStage(gameStore.totalXP))

const AVATAR_CYCLE: AvatarStyle[] = ['male', 'female', 'neutral']
const AVATAR_LABELS: Record<AvatarStyle, string> = {
  male: '♂ Male',
  female: '♀ Female',
  neutral: '🧑 Neutral',
}

// One button cycling through the styles rather than a pair of toggles — it is a cosmetic
// choice with no default worth privileging.
function cycleAvatarStyle() {
  const next = AVATAR_CYCLE[(AVATAR_CYCLE.indexOf(gender.value) + 1) % AVATAR_CYCLE.length]!
  gameStore.setAvatarStyle(next)
}

// Tier progress computation
function getTierProgress(tierId: string): number {
  const tierSkills = getSkillsByTier(tierId).filter(s => hasQuestions(s.id))
  if (tierSkills.length === 0) return 0
  const started = tierSkills.filter(s => gameStore.getSkillProgress(s.id).level > 0).length
  return Math.round((started / tierSkills.length) * 100)
}

function getTierColor(tierId: string): string {
  const tier = skillTiers.find(t => t.id === tierId)
  return tier?.color || '#888'
}

// Share actions
async function handleShareProfile() {
  const card = generateProfileCard()
  const success = await copyToClipboard(card)
  showFeedback(success ? 'Copied!' : 'Failed to copy')
}

async function handleExportJson() {
  const json = gameStore.exportState()
  const success = await copyToClipboard(json)
  showFeedback(success ? 'JSON copied!' : 'Failed to copy')
}

// YAML carries the same progress as the JSON save, plus resolved names and the
// spaced-repetition review queue — it is the format meant to be read by a human.
function handleExportYaml() {
  yamlExport.value = { content: generateProfileYaml(), filename: profileFileName() }
}

function showFeedback(message: string) {
  shareFeedback.value = message
  if (shareFeedbackTimeout.value) {
    clearTimeout(shareFeedbackTimeout.value)
  }
  shareFeedbackTimeout.value = setTimeout(() => {
    shareFeedback.value = ''
  }, 3000)
}

// Hard mode toggle
function toggleHardMode() {
  gameStore.state.settings = {
    ...gameStore.state.settings,
    dailyHardMode: !gameStore.state.settings.dailyHardMode,
  }
}

// Reset
function handleReset() {
  gameStore.resetProgress()
  showResetConfirm.value = false
  router.push('/')
}

// Re-ask the questions this skill is still being missed on
function handleReview(skillId: string) {
  const config = buildReviewQuiz(skillId)
  if (!config) return
  quizStore.startQuiz(config)
  router.push('/quiz')
}

// Navigation
function goBack() {
  router.push('/')
}

// Keyboard
useKeyboard({
  escape: () => goBack(),
  b: () => goBack(),
})
</script>

<template>
  <div class="profile-view">
    <AppHeader title="Your Profile" back-label="Menu" @back="goBack" />

    <div class="profile-content animate-in">
      <!-- Top row: Identity + Stats -->
      <div class="profile-top">
        <!-- Left: character + name -->
        <div class="profile-identity">
          <div class="character-avatar" @click="cycleAvatarStyle" title="Click to change avatar">
            <span class="character-emoji">{{ charEmoji }}</span>
          </div>
          <div class="identity-info">
            <h2 class="player-name">{{ gameStore.playerName }}</h2>
            <span class="character-stage">{{ charStage.name }}</span>
            <span class="weapon-info-row">{{ currentWeapon.icon }} {{ currentWeapon.name }}</span>
            <div v-if="nextStage" class="character-progress-row">
              <div class="character-bar-mini">
                <div class="character-bar-mini-fill" :style="{ width: stageProgress + '%' }"></div>
              </div>
              <span class="character-next-label">{{ nextStage.emoji[gender] }} at {{ nextStage.minXP.toLocaleString() }} XP</span>
            </div>
          </div>
        </div>

        <!-- Right: stats -->
        <div class="stats-grid">
          <div class="stats-item">
            <span class="stats-value">{{ stats.totalXP.toLocaleString() }}</span>
            <span class="stats-label">XP</span>
          </div>
          <div class="stats-item">
            <span class="stats-value">{{ stats.accuracy }}%</span>
            <span class="stats-label">Accuracy</span>
          </div>
          <div class="stats-item">
            <span class="stats-value">{{ stats.skillsStarted }}</span>
            <span class="stats-label">Started</span>
          </div>
          <div class="stats-item">
            <span class="stats-value">{{ stats.skillsPassed }}</span>
            <span class="stats-label">Passed</span>
          </div>
          <div class="stats-item">
            <span class="stats-value">{{ stats.gamesPlayed }}</span>
            <span class="stats-label">Games</span>
          </div>
          <div class="stats-item">
            <span class="stats-value">{{ stats.streakBest }}</span>
            <span class="stats-label">Best Streak</span>
          </div>
        </div>
      </div>

      <!-- Middle: Tier progress -->
      <div class="tier-section">
        <h3 class="section-title">Progress by Tier</h3>
        <div class="tier-bars">
          <div v-for="tier in skillTiers" :key="tier.id" class="tier-bar-row">
            <ProgressBar
              :value="getTierProgress(tier.id)"
              :color="getTierColor(tier.id)"
              :show-label="true"
              :label="`${tier.icon} ${tier.name}`"
              :height="8"
            />
          </div>
        </div>
      </div>

      <!-- What to study next, drawn from the questions still being missed -->
      <div v-if="hasPlan" class="study-section">
        <h3 class="section-title">What to read next</h3>
        <p class="section-hint">Based on the questions you are still getting wrong.</p>
        <StudyPlanPanel :topics="topics" @review="handleReview" />
      </div>

      <!-- Bottom: actions, grouped by what they do -->
      <div class="actions-row">
        <button class="action-btn action-btn--achievements" @click="showAchievements = true">
          Achievements ({{ gameStore.achievements.length }}/{{ ACHIEVEMENTS.length }})
        </button>
        <button class="action-btn action-btn--share" @click="handleShareProfile">
          Share Profile
        </button>
        <button class="action-btn action-btn--export" @click="handleExportYaml">
          Export YAML
        </button>
        <button class="action-btn action-btn--export" @click="handleExportJson">
          Export JSON
        </button>
        <span class="actions-row__divider" aria-hidden="true"></span>
        <!-- Both settings are easy to mistake for something that changes your score,
             so each one says what it actually touches. -->
        <span class="setting">
          <button
            class="action-btn action-btn--gender"
            aria-describedby="setting-hint-gender"
            @click="cycleAvatarStyle"
          >
            {{ AVATAR_LABELS[gender] }}
          </button>
          <span id="setting-hint-gender" class="setting__hint">Avatar emoji only — not shared or exported</span>
        </span>
        <span class="setting">
          <button
            class="action-btn"
            :class="gameStore.settings.dailyHardMode ? 'action-btn--hard-on' : 'action-btn--hard-off'"
            aria-describedby="setting-hint-hard"
            @click="toggleHardMode"
          >
            {{ gameStore.settings.dailyHardMode ? 'Hard Mode ON' : 'Hard Mode' }}
          </button>
          <span id="setting-hint-hard" class="setting__hint">Daily challenge from level 3 up · doubles the daily XP bonus</span>
        </span>
        <span class="actions-row__spacer" aria-hidden="true"></span>
        <button class="action-btn action-btn--reset" @click="showResetConfirm = true">
          Reset
        </button>
      </div>
      <p v-if="shareFeedback" class="share-feedback">{{ shareFeedback }}</p>
    </div>

    <!-- Achievement overlay -->
    <OverlayModal v-if="showAchievements" border-color="var(--xp)" @close="showAchievements = false">
      <h2 class="overlay-title">Achievements</h2>
      <div class="achievements-grid">
        <div
          v-for="achievement in ACHIEVEMENTS"
          :key="achievement.id"
          class="achievement-cell"
          :class="{ 'achievement-cell--earned': gameStore.achievements.includes(achievement.id) }"
        >
          <span class="achievement-icon">
            {{ gameStore.achievements.includes(achievement.id) ? achievement.icon : '🔒' }}
          </span>
          <span class="achievement-name">{{ achievement.name }}</span>
        </div>
      </div>
    </OverlayModal>

    <!-- YAML export -->
    <ExportModal
      v-if="yamlExport"
      title="Export Profile as YAML"
      :content="yamlExport.content"
      :filename="yamlExport.filename"
      @close="yamlExport = null"
    />

    <!-- Reset confirm dialog -->
    <ConfirmDialog
      v-if="showResetConfirm"
      title="Reset Progress?"
      message="This will permanently erase all your progress, achievements, and stats. This action cannot be undone."
      confirm-label="Reset Everything"
      cancel-label="Keep Playing"
      @confirm="handleReset"
      @cancel="showResetConfirm = false"
    />

    <KeyboardHint hints="ESC / B → Back to Menu" />
  </div>
</template>

<style scoped>
.profile-view {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.profile-content {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-6);
  width: 100%;
  display: flex;
  flex-direction: column;
  /* "safe" centring: centres when there is room, falls back to top-aligned
     rather than clipping the first rows when there isn't. */
  justify-content: safe center;
  gap: var(--space-4);
}

/* ---- Top row: identity + stats side by side ---- */
.profile-top {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.profile-identity {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-shrink: 0;
}

.character-avatar {
  cursor: pointer;
  position: relative;
  transition: transform 0.15s;
}

.character-avatar:hover {
  transform: scale(1.05);
}

.character-emoji {
  font-size: 56px;
  line-height: 1;
}

.identity-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.player-name {
  font-size: var(--font-xl);
  font-weight: 800;
  color: var(--xp);
  margin: 0;
  line-height: 1.2;
}

.character-stage {
  font-size: var(--font-md);
  font-weight: 600;
  color: var(--color-text);
}

.weapon-info-row {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
}

.character-progress-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: 2px;
}

.character-bar-mini {
  width: 80px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.character-bar-mini-fill {
  height: 100%;
  background: var(--color-gold);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.character-next-label {
  font-size: 10px;
  color: var(--color-text-muted);
  opacity: 0.7;
}

/* ---- Stats grid ---- */
.stats-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2);
}

.stats-item {
  background: var(--color-bg-light);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-3);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stats-value {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--color-primary);
}

.stats-label {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* ---- Tier progress ---- */
.tier-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.section-title {
  font-size: var(--font-md);
  font-weight: 700;
  margin: 0;
  color: var(--color-text);
}

.tier-bars {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

/* ---- Study plan ---- */
.study-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.section-hint {
  margin: -4px 0 0;
  font-size: var(--font-xs);
  color: var(--text-tertiary);
}

/* ---- Actions row ---- */
.actions-row {
  display: flex;
  /* Top-aligned rather than centred: the two settings carry a hint line beneath them,
     and centring would push their buttons out of line with the rest of the row. */
  align-items: flex-start;
  gap: var(--space-2);
  flex-wrap: wrap;
}

/* Separates "do something with my data" from "change a setting". Matched to the button
   height rather than stretched, so the hint lines don't lengthen it. */
.actions-row__divider {
  width: 1px;
  align-self: stretch;
  max-height: 38px;
  margin-inline: var(--space-2);
  background: var(--border-default);
}

/* Pushes the destructive action away from everything benign */
.actions-row__spacer {
  flex: 1;
  min-width: var(--space-8);
}

.action-btn {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  border: none;
  font-family: var(--font-main);
  font-size: var(--font-sm);
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;
}

.action-btn:hover {
  opacity: 0.85;
}

.action-btn--share {
  background: var(--color-primary);
  color: var(--color-text);
}

.action-btn--export {
  background: var(--color-bg-light);
  color: var(--color-text);
  border: 1px solid var(--color-text-muted);
}

.action-btn--achievements {
  background: rgba(255, 215, 0, 0.1);
  color: var(--xp);
  border: 1px solid var(--xp);
}

/* A setting plus the one line that says what it affects */
.setting {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
}

.setting__hint {
  font-size: 10px;
  line-height: var(--leading-snug);
  color: var(--text-tertiary);
  max-width: 22ch;
}

.action-btn--gender {
  background: var(--color-bg-light);
  color: var(--color-text);
  border: 1px solid var(--color-text-muted);
}

.action-btn--hard-off {
  background: var(--color-bg-light);
  color: var(--color-text-muted);
  border: 1px solid var(--color-text-muted);
}

.action-btn--hard-on {
  background: rgba(239, 68, 68, 0.15);
  color: var(--danger);
  border: 1px solid var(--danger);
}

.action-btn--reset {
  margin-left: auto;
  background: transparent;
  color: var(--color-danger);
  border: 1px solid var(--color-danger);
}

.share-feedback {
  font-size: var(--font-sm);
  color: var(--color-success);
  margin: 0;
  text-align: center;
  animation: fadeIn 0.2s ease;
}

/* ---- Achievement overlay ---- */
.overlay-title {
  text-align: center;
  font-size: var(--font-xl);
  color: var(--xp);
  margin: 0 0 var(--space-4);
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-3);
}

.achievement-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3);
  border-radius: var(--radius-md);
  background: var(--color-bg);
  border: 2px solid transparent;
  opacity: 0.4;
  text-align: center;
}

.achievement-cell--earned {
  opacity: 1;
  border-color: var(--xp);
}

.achievement-icon {
  font-size: 2rem;
  line-height: 1;
}

.achievement-name {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
  line-height: 1.2;
}

.achievement-cell--earned .achievement-name {
  color: var(--color-text);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .profile-view {
    height: auto;
    min-height: 100vh;
    overflow: auto;
  }

  .profile-top {
    flex-direction: column;
    align-items: stretch;
  }

  .profile-identity {
    justify-content: center;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .achievements-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .action-btn--reset {
    margin-left: 0;
  }
}
</style>
