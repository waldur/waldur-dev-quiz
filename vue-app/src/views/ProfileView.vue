<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'
import { useTShape } from '@/composables/useTShape'
import { useShare } from '@/composables/useShare'
import { useKeyboard } from '@/composables/useKeyboard'
import { skills, skillTiers, getSkillsByTier, weaponProfiles } from '@/data/skills'
import { hasQuestions } from '@/data/questions'
import { ACHIEVEMENTS, getAchievementById } from '@/data/achievements'
import AppHeader from '@/components/layout/AppHeader.vue'
import OverlayModal from '@/components/ui/OverlayModal.vue'
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
import KeyboardHint from '@/components/layout/KeyboardHint.vue'

const router = useRouter()
const gameStore = useGameStore()
const { tShape, currentWeapon } = useTShape()
const { generateProfileCard, generateShareUrl, copyToClipboard } = useShare()

// UI state
const showAchievements = ref(false)
const showResetConfirm = ref(false)
const shareFeedback = ref('')
const shareFeedbackTimeout = ref<ReturnType<typeof setTimeout> | null>(null)

// Stats
const stats = gameStore.stats

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

function showFeedback(message: string) {
  shareFeedback.value = message
  if (shareFeedbackTimeout.value) {
    clearTimeout(shareFeedbackTimeout.value)
  }
  shareFeedbackTimeout.value = setTimeout(() => {
    shareFeedback.value = ''
  }, 3000)
}

// Reset
function handleReset() {
  gameStore.resetProgress()
  showResetConfirm.value = false
  router.push('/')
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
        <!-- Left: weapon + name -->
        <div class="profile-identity">
          <span class="weapon-icon">{{ currentWeapon.icon }}</span>
          <div class="identity-info">
            <h2 class="player-name">{{ gameStore.playerName }}</h2>
            <span class="weapon-name">{{ currentWeapon.name }}</span>
            <span class="weapon-desc">{{ currentWeapon.description }}</span>
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

      <!-- Bottom: actions row -->
      <div class="actions-row">
        <button class="action-btn action-btn--share" @click="handleShareProfile">
          Share Profile
        </button>
        <button class="action-btn action-btn--export" @click="handleExportJson">
          Export JSON
        </button>
        <button class="action-btn action-btn--achievements" @click="showAchievements = true">
          Achievements ({{ gameStore.achievements.length }}/{{ ACHIEVEMENTS.length }})
        </button>
        <button class="action-btn action-btn--reset" @click="showResetConfirm = true">
          Reset
        </button>
      </div>
      <p v-if="shareFeedback" class="share-feedback">{{ shareFeedback }}</p>
    </div>

    <!-- Achievement overlay -->
    <OverlayModal v-if="showAchievements" border-color="#FFD700" @close="showAchievements = false">
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.profile-content {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
  width: 100%;
  display: flex;
  flex-direction: column;
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

.weapon-icon {
  font-size: 56px;
  line-height: 1;
}

.identity-info {
  display: flex;
  flex-direction: column;
}

.player-name {
  font-size: var(--font-xl);
  font-weight: 800;
  color: #FFD700;
  margin: 0;
  line-height: 1.2;
}

.weapon-name {
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--color-text);
}

.weapon-desc {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
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
  font-size: var(--font-base);
  font-weight: 700;
  margin: 0;
  color: var(--color-text);
}

.tier-bars {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

/* ---- Actions row ---- */
.actions-row {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
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
  color: #FFD700;
  border: 1px solid #FFD700;
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
  color: #FFD700;
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
  border-color: #FFD700;
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
