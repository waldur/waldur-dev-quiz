<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'
import { useQuizStore } from '@/stores/quiz'
import { useDailyChallenge } from '@/composables/useDailyChallenge'
import { useTShape } from '@/composables/useTShape'
import { useKeyboard } from '@/composables/useKeyboard'
import { skills } from '@/data/skills'
import { ACHIEVEMENTS } from '@/data/achievements'
import { getCharacterStage, getNextStage, getProgressToNextStage } from '@/data/characterFaces'
import GameButton from '@/components/ui/GameButton.vue'
import OverlayModal from '@/components/ui/OverlayModal.vue'
import KeyboardHint from '@/components/layout/KeyboardHint.vue'

const router = useRouter()
const gameStore = useGameStore()
const quizStore = useQuizStore()
const daily = useDailyChallenge()
const { currentWeapon } = useTShape()

const showHelp = ref(false)
const showWelcome = ref(false)

const stats = computed(() => gameStore.stats)
const gender = computed(() => gameStore.settings.gender || 'male')
const charStage = computed(() => getCharacterStage(gameStore.totalXP))
const charEmoji = computed(() => charStage.value.emoji[gender.value])
const nextStage = computed(() => getNextStage(gameStore.totalXP))
const stageProgress = computed(() => getProgressToNextStage(gameStore.totalXP))
const dailyInfo = computed(() => daily.getDailyChallenge())
const tierCount = computed(() => {
  if (!dailyInfo.value) return 0
  return new Set(dailyInfo.value.skills.map(s => s.skill.tier)).size
})

function startQuest() {
  router.push('/skills')
}

function openProfile() {
  router.push('/profile')
}

function startDailyChallenge() {
  if (daily.isCompleted.value) return
  const data = daily.buildCrossSkillQuizData()
  if (data && data.length > 0) {
    quizStore.startQuiz({
      isDaily: true,
      isCrossSkill: true,
      questions: data.map(d => d.question),
      crossSkillMeta: data.map(d => ({ skillId: d.skillId, skill: d.skill, level: d.level })),
    })
    router.push('/quiz')
  }
}

function startFirstQuest() {
  showWelcome.value = false
  gameStore.setOnboardingDone()
  router.push('/skills/l-cli')
}

function browseSkillTree() {
  showWelcome.value = false
  gameStore.setOnboardingDone()
  router.push('/skills')
}

function closeWelcome() {
  showWelcome.value = false
  gameStore.setOnboardingDone()
}

useKeyboard({
  '1': () => startQuest(),
  '2': () => openProfile(),
  '3': () => startDailyChallenge(),
  'h': () => { showHelp.value = true },
  '/': () => { showHelp.value = true },
  'escape': () => {
    if (showHelp.value) showHelp.value = false
    else if (showWelcome.value) closeWelcome()
  },
})

onMounted(() => {
  // Check for shared profile URL
  const params = new URLSearchParams(window.location.search)
  const profileParam = params.get('profile')
  if (profileParam) {
    router.replace({ name: 'sharedProfile', query: { profile: profileParam } })
    return
  }
  // Show welcome for first-time players
  if (gameStore.gamesPlayed === 0 && !gameStore.onboardingDone) {
    showWelcome.value = true
  }
})
</script>

<template>
  <div class="menu">
    <!-- Floating particles -->
    <div class="particles">
      <div v-for="i in 20" :key="i" class="particle" :style="{
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: Math.random() * 5 + 's',
        animationDuration: (10 + Math.random() * 20) + 's',
        width: (2 + Math.random() * 4) + 'px',
        height: (2 + Math.random() * 4) + 'px',
        opacity: 0.1 + Math.random() * 0.2,
      }" />
    </div>

    <!-- Help button -->
    <button class="help-btn" @click="showHelp = true" title="Help (H)">?</button>

    <!-- Hero layout -->
    <div class="menu__hero animate-in">
      <!-- Left: text + actions -->
      <div class="menu__left">
        <h1 class="menu__title">WALDUR<br>QUEST</h1>
        <p class="menu__subtitle">Skill Assessment Adventure</p>

        <!-- Actions -->
        <div class="menu__buttons">
          <GameButton label="Start Quest" shortcut="1" @click="startQuest" />
          <GameButton label="My Profile" shortcut="2" variant="ghost" @click="openProfile" />
          <GameButton
            :label="daily.isCompleted.value ? 'Daily Challenge  ✓' : 'Daily Challenge'"
            shortcut="3"
            :variant="daily.isCompleted.value ? 'ghost' : 'warning'"
            @click="startDailyChallenge"
            :disabled="daily.isCompleted.value"
          />
        </div>

        <p v-if="dailyInfo" class="menu__daily-hint">
          {{ daily.isCompleted.value
            ? `Today: 5 skills across ${tierCount} tiers (completed)`
            : `Today: 5 skills across ${tierCount} tiers` }}
        </p>
        <p v-if="daily.streak.value > 0" class="menu__streak">
          Daily Streak: {{ daily.streak.value }} day{{ daily.streak.value > 1 ? 's' : '' }}
        </p>
      </div>

      <!-- Right: character + weapon visual -->
      <div class="menu__right">
        <div class="menu__character-card">
          <div class="menu__character-face">{{ charEmoji }}</div>
          <div class="menu__character-info">
            <span class="menu__character-name">{{ charStage.name }}</span>
            <span class="menu__character-desc">{{ charStage.description }}</span>
          </div>
          <div v-if="nextStage" class="menu__character-progress">
            <div class="menu__character-bar">
              <div class="menu__character-bar-fill" :style="{ width: stageProgress + '%' }"></div>
            </div>
            <span class="menu__character-next">{{ nextStage.emoji[gender] }} {{ nextStage.minXP.toLocaleString() }} XP</span>
          </div>
          <div v-else class="menu__character-max">Max evolution reached!</div>
          <div class="menu__weapon-row">
            <span class="menu__weapon-icon-sm">{{ currentWeapon.icon }}</span>
            <span class="menu__weapon-name-sm">{{ currentWeapon.name }}</span>
          </div>
          <div class="menu__weapon-glow"></div>
        </div>
        <p class="menu__player">{{ gameStore.playerName }}</p>

        <!-- Stats chips -->
        <div class="menu__stats">
          <div class="stat-chip">
            <span class="stat-chip__value">{{ stats.totalXP.toLocaleString() }}</span>
            <span class="stat-chip__label">XP</span>
          </div>
          <div class="stat-chip">
            <span class="stat-chip__value">{{ stats.skillsPassed }}/{{ skills.length }}</span>
            <span class="stat-chip__label">Skills</span>
          </div>
          <div class="stat-chip">
            <span class="stat-chip__value">{{ stats.accuracy }}%</span>
            <span class="stat-chip__label">Accuracy</span>
          </div>
          <div class="stat-chip">
            <span class="stat-chip__value">{{ stats.achievements }}/{{ ACHIEVEMENTS.length }}</span>
            <span class="stat-chip__label">Achievements</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="menu__footer">
      <span class="menu__version">v2.0</span>
    </div>

    <KeyboardHint hints="Press 1-3 to navigate  ·  H for help" />

    <!-- Help Overlay -->
    <OverlayModal v-if="showHelp" @close="showHelp = false">
      <div class="help">
        <h2 class="help__title">How to Play</h2>
        <div class="help__grid">
          <div class="help__section">
            <h3>🎯 Goal</h3>
            <p>Master Waldur development skills across 5 tiers to level up.</p>
          </div>
          <div class="help__section">
            <h3>📐 T-Shaped Developer</h3>
            <p>Breadth: Master Literacy & Foundation<br>Depth: Specialize in 1-3 areas<br>Balance both to evolve your profile!</p>
          </div>
          <div class="help__section">
            <h3>📚 Skill Tiers</h3>
            <p>Literacy → Product → Foundation → Core → Specialization</p>
          </div>
          <div class="help__section">
            <h3>💎 XP System</h3>
            <p>+20 per correct · +50 for passing<br>+100 for perfect · +5 per streak<br>Daily: Cross-skill + 50% XP bonus!</p>
          </div>
          <div class="help__section">
            <h3>⌨️ Controls</h3>
            <p>Press 1-4 to select answer<br>Enter or Space for next</p>
          </div>
          <div class="help__section">
            <h3>🗡️ Your Rank</h3>
            <p>As your T-shape grows, your rank evolves: Dagger → Shield → Spear → Lance → Bident → Trident</p>
          </div>
        </div>
        <div class="help__close">
          <GameButton label="Got it!" @click="showHelp = false" />
        </div>
      </div>
    </OverlayModal>

    <!-- Welcome Overlay -->
    <OverlayModal v-if="showWelcome" border-color="var(--color-gold)" @close="closeWelcome">
      <div class="welcome">
        <h2 class="welcome__title">Welcome to Waldur Quest!</h2>
        <div class="welcome__steps">
          <div class="welcome__step" v-for="(step, i) in [
            { title: 'Pick a Skill', desc: 'Browse 5 tiers from Literacy to Specialization' },
            { title: 'Answer Questions', desc: 'Solve 5 questions per level (60% to pass)' },
            { title: 'Level Up', desc: 'Earn XP, unlock higher levels, evolve your rank' },
          ]" :key="i">
            <span class="welcome__step-num">{{ i + 1 }}.</span>
            <div>
              <strong>{{ step.title }}</strong>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
        <p class="welcome__tip">Tip: Build breadth first, then specialize — become a T-shaped developer!</p>
        <div class="welcome__actions">
          <GameButton label="Start Your First Quest" variant="success" @click="startFirstQuest" />
          <GameButton label="Browse Skill Tree" variant="ghost" @click="browseSkillTree" />
        </div>
        <p class="welcome__dismiss">Press ESC to skip</p>
      </div>
    </OverlayModal>
  </div>
</template>

<style scoped>
.menu {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: var(--color-primary);
  border-radius: 50%;
  animation: floatParticle linear infinite;
}

@keyframes floatParticle {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(30px, -40px); }
  50% { transform: translate(-20px, -80px); }
  75% { transform: translate(40px, -40px); }
}

.help-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  background: var(--color-bg-light);
  color: var(--color-primary);
  font-size: var(--font-xl);
  font-family: var(--font-main);
  cursor: pointer;
  transition: all 0.15s;
  z-index: 10;
}

.help-btn:hover {
  background: var(--color-primary);
  color: var(--color-text);
}

/* ---- Hero layout ---- */
.menu__hero {
  display: flex;
  align-items: center;
  gap: var(--space-16);
  z-index: 1;
  padding: 0 var(--space-8);
  max-width: 960px;
  width: 100%;
}

/* ---- Left column ---- */
.menu__left {
  flex: 1;
  min-width: 0;
}

.menu__title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
  letter-spacing: 3px;
  margin-bottom: var(--space-3);
}

.menu__subtitle {
  font-size: var(--font-lg);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
}

/* ---- Stats chips ---- */
.menu__stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
}

.stat-chip {
  display: flex;
  align-items: baseline;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  background: var(--color-bg-light);
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.stat-chip__value {
  font-size: var(--font-sm);
  font-weight: 700;
  color: var(--color-text);
}

.stat-chip__label {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
}

/* ---- Buttons ---- */
.menu__buttons {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
  max-width: 260px;
}

.menu__daily-hint {
  font-size: var(--font-sm);
  color: var(--color-text-muted);
  opacity: 0.7;
}

.menu__streak {
  font-size: var(--font-sm);
  color: var(--color-gold);
  opacity: 0.8;
  margin-top: var(--space-1);
}

/* ---- Right column: character card ---- */
.menu__right {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.menu__character-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-6) var(--space-6);
  background: var(--color-bg-light);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  min-width: 200px;
}

.menu__character-face {
  font-size: 80px;
  line-height: 1;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 4px 20px rgba(99, 102, 241, 0.25));
}

.menu__character-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  position: relative;
  z-index: 1;
}

.menu__character-name {
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--color-gold);
}

.menu__character-desc {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
}

.menu__character-progress {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  position: relative;
  z-index: 1;
  margin-top: var(--space-1);
}

.menu__character-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.menu__character-bar-fill {
  height: 100%;
  background: var(--color-gold);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.menu__character-next {
  font-size: 11px;
  color: var(--color-text-muted);
  opacity: 0.7;
}

.menu__character-max {
  font-size: var(--font-xs);
  color: var(--color-gold);
  position: relative;
  z-index: 1;
}

.menu__weapon-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  position: relative;
  z-index: 1;
  margin-top: var(--space-1);
  padding-top: var(--space-2);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  width: 100%;
  justify-content: center;
}

.menu__weapon-icon-sm {
  font-size: 24px;
  line-height: 1;
}

.menu__weapon-name-sm {
  font-size: var(--font-sm);
  color: var(--color-text-muted);
}

.menu__weapon-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.menu__player {
  font-size: var(--font-sm);
  color: var(--color-text-muted);
}

/* ---- Footer ---- */
.menu__footer {
  position: absolute;
  bottom: var(--space-6);
  right: var(--space-5);
  color: var(--color-text-muted);
  font-size: var(--font-xs);
  opacity: 0.5;
}

/* ---- Help overlay ---- */
.help {
  text-align: center;
}

.help__title {
  font-size: var(--font-2xl);
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.help__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  text-align: left;
  margin-bottom: var(--space-6);
}

.help__section h3 {
  font-size: var(--font-lg);
  margin-bottom: var(--space-2);
}

.help__section p {
  font-size: var(--font-sm);
  color: rgb(180, 180, 195);
  line-height: 1.6;
}

.help__close {
  display: flex;
  justify-content: center;
}

/* ---- Welcome overlay ---- */
.welcome {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.welcome__title {
  font-size: var(--font-2xl);
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.welcome__steps {
  text-align: left;
  margin-bottom: var(--space-6);
}

.welcome__step {
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.welcome__step-num {
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--color-text);
  flex-shrink: 0;
}

.welcome__step strong {
  font-size: var(--font-lg);
  display: block;
  margin-bottom: var(--space-1);
}

.welcome__step p {
  font-size: var(--font-sm);
  color: var(--color-text-muted);
}

.welcome__tip {
  font-size: var(--font-sm);
  color: var(--color-secondary);
  margin-bottom: var(--space-6);
}

.welcome__actions {
  display: flex;
  gap: var(--space-3);
  justify-content: center;
  margin-bottom: var(--space-4);
}

.welcome__dismiss {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
  opacity: 0.6;
}

/* ---- Responsive ---- */
@media (max-width: 768px) {
  .menu__hero {
    flex-direction: column;
    gap: var(--space-8);
    padding: 0 var(--space-4);
    text-align: center;
  }

  .menu__left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu__title {
    text-align: center;
  }

  .menu__stats {
    justify-content: center;
  }

  .menu__buttons {
    align-items: stretch;
    max-width: none;
    width: 100%;
  }

  .menu__daily-hint,
  .menu__streak {
    text-align: center;
  }

  .menu__right {
    order: -1;
  }

  .menu__character-card {
    padding: var(--space-3) var(--space-4);
    flex-direction: row;
    gap: var(--space-3);
    min-width: 0;
    width: 100%;
    align-items: center;
  }

  .menu__character-face {
    font-size: 48px;
    flex-shrink: 0;
  }

  .menu__character-info {
    align-items: flex-start;
    flex: 1;
    min-width: 0;
  }

  .menu__character-name {
    font-size: var(--font-base);
  }

  .menu__character-desc {
    display: none;
  }

  .menu__character-progress {
    align-items: flex-start;
    width: 100%;
  }

  .menu__weapon-row {
    justify-content: flex-start;
    border-top: none;
    padding-top: 0;
    margin-top: 0;
  }

  .menu__weapon-glow {
    display: none;
  }

  .help__grid {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .welcome__actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .menu__title {
    font-size: 2.5rem;
  }
}
</style>
