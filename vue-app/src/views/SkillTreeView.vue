<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'
import { useTShape } from '@/composables/useTShape'
import { useKeyboard } from '@/composables/useKeyboard'
import { skills, skillTiers, getSkillsByTier, weaponProfiles } from '@/data/skills'
import { hasQuestions, getAvailableLevels } from '@/data/questions'
import AppHeader from '@/components/layout/AppHeader.vue'
import KeyboardHint from '@/components/layout/KeyboardHint.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
import OverlayModal from '@/components/ui/OverlayModal.vue'
import GameButton from '@/components/ui/GameButton.vue'
import type { Skill } from '@/types/game'

const router = useRouter()
const gameStore = useGameStore()
const { tShape, currentWeapon, recommendations } = useTShape()

const selectedTier = ref('literacy')
const tPanelOpen = ref(false)

const SKILL_GROUP_LABELS: Record<string, Record<string, string>> = {
  foundation: { cs: '🧪 CS Fundamentals', se: '🛠️ Software Engineering' },
  core: { backend: '⚙️ Backend', frontend: '🎨 Frontend', infra: '🏗️ Infrastructure' },
  specialization: {
    'cloud-integrations': '☁️ Cloud Integrations',
    'platform-ops': '🚀 Platform Operations',
    'hpc-research': '🔬 HPC & Research',
    'identity-security': '🔐 Identity & Security',
  },
}

const SKILL_OVERRIDE_PHRASES = [
  "I've been doing this since before Docker was cool",
  "Trust me, I read the docs... once",
  "I learned this from Stack Overflow's finest",
  "My rubber duck explained it perfectly",
  "I watched a 10-minute YouTube tutorial",
  "I know a guy who knows a guy",
  "Works on my machine™",
  "I can copy-paste with the best of them",
  "ChatGPT said I'm basically an expert",
  "I've seen this error before... probably",
  "I have opinions about tabs vs spaces",
  "I once fixed a bug by accident",
  "My code compiles, therefore I am",
  "I've deployed to production on Friday",
  "I know what YAML stands for... mostly",
]

// Locked skill popup
const lockedSkill = ref<Skill | null>(null)
const overridePhrase = ref('')
const showingPhrase = ref(false)

interface SkillGroup {
  label: string | null
  skills: Skill[]
}

const tierInfo = computed(() => skillTiers.find(t => t.id === selectedTier.value))

const skillGroups = computed<SkillGroup[]>(() => {
  const tier = selectedTier.value
  const tierSkills = getSkillsByTier(tier)
  const labels = SKILL_GROUP_LABELS[tier]
  if (!labels) {
    return [{ label: null, skills: tierSkills }]
  }
  const groupKey = tier === 'specialization' ? 'package' : 'category'
  const groups: SkillGroup[] = []
  const seen = new Set<string>()
  tierSkills.forEach(skill => {
    const key = (skill as any)[groupKey] || '_ungrouped'
    if (!seen.has(key)) {
      seen.add(key)
      groups.push({
        label: labels[key] || null,
        skills: tierSkills.filter(s => ((s as any)[groupKey] || '_ungrouped') === key),
      })
    }
  })
  return groups
})

function tierPassedCount(tierId: string): number {
  return getSkillsByTier(tierId).filter(s => gameStore.getSkillProgress(s.id).level > 0).length
}

function tierTotalCount(tierId: string): number {
  return getSkillsByTier(tierId).length
}

function getSkillLevel(skillId: string): number {
  return gameStore.getSkillProgress(skillId).level
}

function getSkillMaxLevel(skillId: string): number {
  const levels = getAvailableLevels(skillId)
  return levels.length > 0 ? Math.max(...levels) : 5
}

function onSkillClick(skill: Skill) {
  if (hasQuestions(skill.id)) {
    router.push({ name: 'skillDetail', params: { skillId: skill.id } })
  } else {
    lockedSkill.value = skill
  }
}

function overrideLock() {
  if (!lockedSkill.value) return
  const phrase = SKILL_OVERRIDE_PHRASES[Math.floor(Math.random() * SKILL_OVERRIDE_PHRASES.length)] ?? "I'm basically an expert"
  overridePhrase.value = phrase
  showingPhrase.value = true
  const skillId = lockedSkill.value.id
  lockedSkill.value = null
  setTimeout(() => {
    showingPhrase.value = false
    router.push({ name: 'skillDetail', params: { skillId } })
  }, 1500)
}

function goToRandomRecommendation() {
  const recs = recommendations.value
  if (recs.length > 0) {
    const rec = recs[Math.floor(Math.random() * recs.length)]
    if (rec) router.push({ name: 'skillDetail', params: { skillId: rec.skill.id } })
  }
}

function priorityColor(priority: string): string {
  if (priority === 'high') return 'var(--color-warning)'
  if (priority === 'medium') return 'var(--color-primary)'
  return 'var(--color-text-muted)'
}

useKeyboard({
  'escape': () => router.push('/'),
  'b': () => router.push('/'),
  'r': () => goToRandomRecommendation(),
})
</script>

<template>
  <div class="skill-tree">
    <AppHeader title="Skill Tree" @back="router.push('/')" />

    <div class="skill-tree__layout animate-in">
      <!-- Left: Tier tabs + skill grid -->
      <div class="skill-tree__main">
        <!-- Tier tabs -->
        <div class="tier-tabs">
          <button
            v-for="tier in skillTiers"
            :key="tier.id"
            class="tier-tab"
            :class="{ 'tier-tab--active': selectedTier === tier.id }"
            :style="selectedTier === tier.id ? { backgroundColor: tier.color } : {}"
            @click="selectedTier = tier.id"
          >
            <span class="tier-tab__name">{{ tier.icon }} {{ tier.name }}</span>
            <span class="tier-tab__count">{{ tierPassedCount(tier.id) }}/{{ tierTotalCount(tier.id) }}</span>
          </button>
        </div>

        <!-- Skills grid -->
        <div class="skills-area">
          <div v-for="(group, gi) in skillGroups" :key="gi" class="skill-group">
            <div v-if="group.label" class="skill-group__header">
              <span>{{ group.label }}</span>
              <div class="skill-group__divider"></div>
            </div>
            <div class="skill-group__grid">
              <div
                v-for="skill in group.skills"
                :key="skill.id"
                class="skill-card"
                :class="{
                  'skill-card--started': hasQuestions(skill.id) && getSkillLevel(skill.id) > 0,
                  'skill-card--available': hasQuestions(skill.id) && getSkillLevel(skill.id) === 0,
                  'skill-card--locked': !hasQuestions(skill.id),
                }"
                :style="hasQuestions(skill.id) && getSkillLevel(skill.id) > 0 && tierInfo
                  ? { borderColor: tierInfo.color, backgroundColor: tierInfo.color + '20' }
                  : {}"
                @click="onSkillClick(skill)"
              >
                <div class="skill-card__name">{{ skill.name }}</div>
                <div class="skill-card__level" :class="{ 'skill-card__level--active': getSkillLevel(skill.id) > 0 }">
                  {{ !hasQuestions(skill.id) ? '🔒 Soon' : getSkillLevel(skill.id) > 0 ? `Lv.${getSkillLevel(skill.id)}/${getSkillMaxLevel(skill.id)}` : 'Not Started' }}
                </div>
                <div class="skill-card__bar">
                  <div
                    class="skill-card__bar-fill"
                    :style="{ width: hasQuestions(skill.id) ? (getSkillLevel(skill.id) / getSkillMaxLevel(skill.id) * 100) + '%' : '0%' }"
                  ></div>
                </div>
                <!-- Advanced badge -->
                <span v-if="hasQuestions(skill.id) && getSkillMaxLevel(skill.id) > 5" class="skill-card__advanced">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: T-Shape panel -->
      <div class="t-panel" :class="{ 't-panel--open': tPanelOpen }">
        <button class="t-panel__toggle" @click="tPanelOpen = !tPanelOpen">
          <span class="t-panel__toggle-summary">{{ currentWeapon.icon }} {{ currentWeapon.name }}</span>
          <span class="t-panel__toggle-arrow">{{ tPanelOpen ? '▲' : '▼' }}</span>
        </button>
        <h3 class="t-panel__title">Your T-Shape</h3>
        <div class="t-panel__weapon">{{ currentWeapon.icon }} {{ currentWeapon.name }}</div>

        <div class="t-panel__body">
          <div class="t-panel__section-label">━ Breadth (horizontal bar)</div>

          <div class="t-panel__stat">
            📚 Literacy: {{ tShape.literacyStarted }}/{{ tShape.literacyTotal }}
          </div>
          <ProgressBar :value="tShape.literacyPercent" color="var(--tier-literacy)" :height="8" />

          <div class="t-panel__stat">
            🧱 Foundation: {{ tShape.foundationStarted }}/{{ tShape.foundationTotal }}
          </div>
          <ProgressBar :value="tShape.foundationPercent" color="var(--tier-foundation)" :height="8" />

          <div class="t-panel__section-label">┃ Depth (vertical spike)</div>
          <div class="t-panel__stat">
            🎯 Specializations: {{ tShape.specExpert }}/{{ tShape.specTotal }} expert
          </div>

          <!-- T-shape visualization -->
          <div class="t-visual">
            <div class="t-visual__bar" :style="{
              width: Math.max(10, tShape.breadthPercent) + '%',
              backgroundColor: tShape.breadthPercent >= 50 ? 'var(--color-success)' : 'var(--color-warning)',
            }"></div>
            <div class="t-visual__spike" :style="{
              height: Math.max(8, Math.min(tShape.depthCount, 3) * 30) + 'px',
              backgroundColor: tShape.depthCount >= 1 ? 'var(--color-success)' : 'var(--color-text-muted)',
            }"></div>
          </div>

          <!-- Recommendations -->
          <div class="t-panel__rec-header">
            <span>💡 Recommended Next</span>
            <button v-if="recommendations.length > 0" class="t-panel__random-btn" @click="goToRandomRecommendation">
              (R) Random
            </button>
          </div>

          <div v-if="recommendations.length === 0" class="t-panel__no-recs">
            Great job! Keep leveling up your skills.
          </div>

          <div
            v-for="rec in recommendations"
            :key="rec.skill.id"
            class="rec-card"
            :style="{ borderColor: priorityColor(rec.priority) }"
            @click="router.push({ name: 'skillDetail', params: { skillId: rec.skill.id } })"
          >
            <div class="rec-card__name">{{ rec.skill.name }}</div>
            <div class="rec-card__meta" :style="{ color: priorityColor(rec.priority) }">
              {{ getSkillLevel(rec.skill.id) > 0 ? `Lv.${getSkillLevel(rec.skill.id)}` : 'New' }} · {{ rec.reason }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <KeyboardHint hints="ESC/B: Back  ·  R: Random recommendation" />

    <!-- Locked skill popup -->
    <OverlayModal v-if="lockedSkill" @close="lockedSkill = null">
      <div class="locked-popup">
        <h2 class="locked-popup__title">🔒 {{ lockedSkill.name }}</h2>
        <p class="locked-popup__msg">Questions for this skill are being prepared.<br>Check back soon!</p>
        <p class="locked-popup__divider">— or —</p>
        <GameButton label="I already know this stuff!" @click="overrideLock" />
        <div class="locked-popup__close">
          <GameButton label="Close" variant="ghost" @click="lockedSkill = null" />
        </div>
      </div>
    </OverlayModal>

    <!-- Override phrase flash -->
    <div v-if="showingPhrase" class="phrase-flash">
      "{{ overridePhrase }}"
    </div>
  </div>
</template>

<style scoped>
.skill-tree {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.skill-tree__layout {
  display: flex;
  flex: 1;
  gap: var(--space-4);
  padding: var(--space-4);
  padding-top: var(--space-2);
  overflow: hidden;
}

.skill-tree__main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

/* Tier tabs */
.tier-tabs {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
  flex-wrap: wrap;
}

.tier-tab {
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  border: none;
  background: var(--color-bg-light);
  color: var(--color-text);
  cursor: pointer;
  font-family: var(--font-main);
  font-size: var(--font-sm);
  transition: all 0.15s;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 130px;
}

.tier-tab--active {
  opacity: 1;
}

.tier-tab:hover {
  opacity: 1;
}

.tier-tab__name {
  font-size: var(--font-xs);
  white-space: nowrap;
}

.tier-tab__count {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
}

/* Skills area */
.skills-area {
  flex: 1;
  overflow-y: auto;
  background: rgb(20, 20, 45);
  border-radius: var(--radius-md);
  border: 2px solid var(--color-bg-light);
  padding: var(--space-4);
}

.skill-group {
  margin-bottom: var(--space-3);
}

.skill-group__header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-sm);
  color: var(--color-gold);
  margin-bottom: var(--space-2);
  opacity: 0.9;
}

.skill-group__divider {
  flex: 1;
  height: 1px;
  background: var(--color-text-muted);
  opacity: 0.25;
}

.skill-group__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-2);
}

/* Skill card */
.skill-card {
  position: relative;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid transparent;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.skill-card--started {
  opacity: 0.9;
  border-width: 1px;
}

.skill-card--started:hover {
  opacity: 1;
}

.skill-card--available {
  background: var(--color-bg-light);
  opacity: 0.6;
}

.skill-card--available:hover {
  opacity: 1;
}

.skill-card--locked {
  background: rgb(25, 25, 45);
  opacity: 0.4;
}

.skill-card--locked:hover {
  opacity: 0.6;
}

.skill-card__name {
  font-size: var(--font-sm);
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.skill-card--locked .skill-card__name {
  color: var(--color-text-muted);
}

.skill-card__level {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
  margin-bottom: var(--space-1);
}

.skill-card__level--active {
  color: var(--color-gold);
}

.skill-card__bar {
  height: 6px;
  background: rgb(40, 40, 70);
  border-radius: 3px;
  overflow: hidden;
}

.skill-card__bar-fill {
  height: 100%;
  background: var(--color-success);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.skill-card__advanced {
  position: absolute;
  top: 3px;
  right: 6px;
  background: rgb(236, 72, 153);
  border-radius: 3px;
  font-size: 10px;
  padding: 1px 4px;
}

/* T-Shape panel */
.t-panel {
  width: 260px;
  flex-shrink: 0;
  background: rgb(25, 25, 50);
  border-radius: var(--radius-md);
  border: 2px solid var(--color-bg-light);
  padding: var(--space-4);
  overflow-y: auto;
}

.t-panel__toggle {
  display: none;
}

.t-panel__body {
  /* always visible on desktop */
}

.t-panel__title {
  font-size: var(--font-xl);
  color: var(--color-gold);
  text-align: center;
  margin-bottom: var(--space-2);
}

.t-panel__weapon {
  text-align: center;
  font-size: var(--font-base);
  margin-bottom: var(--space-4);
}

.t-panel__section-label {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
  margin-top: var(--space-3);
}

.t-panel__stat {
  font-size: var(--font-xs);
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

/* T-shape visualization */
.t-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--space-4) 0;
}

.t-visual__bar {
  height: 12px;
  border-radius: 2px;
  min-width: 20px;
  transition: width 0.3s ease;
}

.t-visual__spike {
  width: 12px;
  border-radius: 2px;
  min-height: 8px;
  transition: height 0.3s ease;
}

/* Recommendations */
.t-panel__rec-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
  font-size: var(--font-sm);
  color: var(--color-gold);
}

.t-panel__random-btn {
  font-size: var(--font-xs);
  color: var(--color-gold);
  background: var(--color-bg-light);
  border: 1px solid var(--color-gold);
  border-radius: var(--radius-sm);
  padding: 2px 8px;
  cursor: pointer;
  font-family: var(--font-main);
  transition: all 0.15s;
}

.t-panel__random-btn:hover {
  background: var(--color-gold);
  color: var(--color-bg);
}

.t-panel__no-recs {
  font-size: var(--font-xs);
  color: var(--color-success);
}

.rec-card {
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  background: var(--color-bg-light);
  border: 1px solid;
  margin-bottom: var(--space-2);
  cursor: pointer;
  transition: all 0.15s;
}

.rec-card:hover {
  background: var(--color-primary);
}

.rec-card__name {
  font-size: var(--font-xs);
  color: var(--color-text);
  margin-bottom: 2px;
}

.rec-card__meta {
  font-size: 10px;
}

/* Locked skill popup */
.locked-popup {
  text-align: center;
  max-width: 450px;
  margin: 0 auto;
}

.locked-popup__title {
  font-size: var(--font-2xl);
  color: var(--color-warning);
  margin-bottom: var(--space-4);
}

.locked-popup__msg {
  font-size: var(--font-base);
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
  line-height: 1.6;
}

.locked-popup__divider {
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.locked-popup__close {
  margin-top: var(--space-3);
}

/* Override phrase flash */
.phrase-flash {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font-xl);
  color: var(--color-gold);
  z-index: 200;
  text-align: center;
  max-width: 500px;
  animation: fadeIn 0.2s ease;
  pointer-events: none;
}

@media (max-width: 900px) {
  .skill-tree__layout {
    flex-direction: column;
    overflow: visible;
  }

  .t-panel {
    width: 100%;
    order: -1;
    max-height: none;
    padding: 0;
    overflow: visible;
  }

  .t-panel__title,
  .t-panel__weapon {
    display: none;
  }

  .t-panel__toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--space-3) var(--space-4);
    background: rgb(25, 25, 50);
    border: none;
    border-radius: var(--radius-md);
    color: var(--color-text);
    font-family: var(--font-main);
    font-size: var(--font-base);
    cursor: pointer;
  }

  .t-panel__toggle-summary {
    font-weight: 600;
  }

  .t-panel__toggle-arrow {
    font-size: var(--font-xs);
    color: var(--color-text-muted);
  }

  .t-panel__body {
    display: none;
    padding: 0 var(--space-4) var(--space-4);
  }

  .t-panel--open .t-panel__body {
    display: block;
  }

  .tier-tabs {
    flex-wrap: wrap;
  }

  .tier-tab {
    min-width: 0;
    flex: 1 1 auto;
  }

  .skill-group__grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}

@media (max-width: 480px) {
  .skill-group__grid {
    grid-template-columns: 1fr 1fr;
  }

  .tier-tab {
    font-size: var(--font-xs);
    padding: var(--space-1) var(--space-2);
  }
}
</style>
