<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'
import { useTShape } from '@/composables/useTShape'
import { useKeyboard } from '@/composables/useKeyboard'
import { skills, skillTiers, getSkillsByTier, getSkillById, getUnmetPrereqs, weaponProfiles } from '@/data/skills'
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

// Locked / prereq skill popups
const lockedSkill = ref<Skill | null>(null)
const prereqSkill = ref<Skill | null>(null)
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

// Prerequisite helpers
function getLevel(skillId: string): number {
  return gameStore.getSkillProgress(skillId).level
}

function hasUnmetPrereqs(skill: Skill): boolean {
  if (gameStore.settings.idkfa) return false
  return getUnmetPrereqs(skill.id, getLevel).length > 0
}

function getCrossTierPrereqs(skill: Skill): Skill[] {
  if (!skill.prerequisites) return []
  return skill.prerequisites
    .map(pid => getSkillById(pid))
    .filter((s): s is Skill => s !== undefined && s.tier !== skill.tier)
}

function getPrereqChecklist(skill: Skill): Array<{ skill: Skill; met: boolean; level: number }> {
  if (!skill.prerequisites) return []
  return skill.prerequisites
    .map(pid => getSkillById(pid))
    .filter((s): s is Skill => s !== undefined)
    .map(s => ({ skill: s, met: getLevel(s.id) >= 1, level: getLevel(s.id) }))
}

function getSkillCardState(skill: Skill): string {
  if (!hasQuestions(skill.id)) return 'locked'
  if (hasUnmetPrereqs(skill)) return 'prereq'
  if (getLevel(skill.id) > 0) return 'started'
  return 'available'
}

// SVG connector lines for same-tier prerequisites
const skillsAreaRef = ref<HTMLElement | null>(null)
const connectorLines = ref<Array<{
  x1: number; y1: number; x2: number; y2: number; met: boolean
}>>([])

function computeConnectors() {
  const area = skillsAreaRef.value
  if (!area) { connectorLines.value = []; return }

  const tier = selectedTier.value
  const tierSkills = getSkillsByTier(tier)
  const lines: typeof connectorLines.value = []

  for (const skill of tierSkills) {
    if (!skill.prerequisites) continue
    const sameTierPrereqs = skill.prerequisites
      .map(pid => getSkillById(pid))
      .filter((s): s is Skill => s !== undefined && s.tier === tier)

    for (const prereq of sameTierPrereqs) {
      const fromEl = area.querySelector(`[data-skill-id="${prereq.id}"]`) as HTMLElement | null
      const toEl = area.querySelector(`[data-skill-id="${skill.id}"]`) as HTMLElement | null
      if (!fromEl || !toEl) continue

      const areaRect = area.getBoundingClientRect()
      const fromRect = fromEl.getBoundingClientRect()
      const toRect = toEl.getBoundingClientRect()

      lines.push({
        x1: fromRect.left + fromRect.width / 2 - areaRect.left + area.scrollLeft,
        y1: fromRect.top + fromRect.height / 2 - areaRect.top + area.scrollTop,
        x2: toRect.left + toRect.width / 2 - areaRect.left + area.scrollLeft,
        y2: toRect.top + toRect.height / 2 - areaRect.top + area.scrollTop,
        met: getLevel(prereq.id) >= 1,
      })
    }
  }

  connectorLines.value = lines
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  nextTick(computeConnectors)
  if (skillsAreaRef.value) {
    resizeObserver = new ResizeObserver(() => computeConnectors())
    resizeObserver.observe(skillsAreaRef.value)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})

watch(selectedTier, () => nextTick(computeConnectors))

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
  const state = getSkillCardState(skill)
  if (state === 'locked') {
    lockedSkill.value = skill
  } else if (state === 'prereq') {
    prereqSkill.value = skill
  } else {
    router.push({ name: 'skillDetail', params: { skillId: skill.id } })
  }
}

function bypassPrereqs() {
  if (!prereqSkill.value) return
  const skillId = prereqSkill.value.id
  prereqSkill.value = null
  router.push({ name: 'skillDetail', params: { skillId } })
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
        <div ref="skillsAreaRef" class="skills-area">
          <!-- SVG connector lines for same-tier prerequisites -->
          <svg v-if="connectorLines.length > 0" class="skills-area__connectors">
            <defs>
              <marker id="arrow-met" viewBox="0 0 10 7" refX="10" refY="3.5"
                markerWidth="8" markerHeight="6" orient="auto-start-reverse">
                <polygon points="0 0, 10 3.5, 0 7" :fill="tierInfo?.color || '#6366f1'" opacity="0.5" />
              </marker>
              <marker id="arrow-unmet" viewBox="0 0 10 7" refX="10" refY="3.5"
                markerWidth="8" markerHeight="6" orient="auto-start-reverse">
                <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-text-muted)" opacity="0.35" />
              </marker>
            </defs>
            <line
              v-for="(line, li) in connectorLines"
              :key="li"
              :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2"
              :stroke="line.met ? (tierInfo?.color || '#6366f1') : 'var(--color-text-muted)'"
              :stroke-width="line.met ? 1.5 : 1"
              :stroke-dasharray="line.met ? 'none' : '6 4'"
              :stroke-opacity="line.met ? 0.5 : 0.35"
              :marker-end="line.met ? 'url(#arrow-met)' : 'url(#arrow-unmet)'"
            />
          </svg>

          <div v-for="(group, gi) in skillGroups" :key="gi" class="skill-group">
            <div v-if="group.label" class="skill-group__header">
              <span>{{ group.label }}</span>
              <div class="skill-group__divider"></div>
            </div>
            <div class="skill-group__grid">
              <div
                v-for="skill in group.skills"
                :key="skill.id"
                :data-skill-id="skill.id"
                class="skill-card"
                :class="{
                  'skill-card--started': getSkillCardState(skill) === 'started',
                  'skill-card--available': getSkillCardState(skill) === 'available',
                  'skill-card--prereq': getSkillCardState(skill) === 'prereq',
                  'skill-card--locked': getSkillCardState(skill) === 'locked',
                }"
                :style="getSkillCardState(skill) === 'started' && tierInfo
                  ? { borderColor: tierInfo.color, backgroundColor: tierInfo.color + '20' }
                  : {}"
                @click="onSkillClick(skill)"
              >
                <div class="skill-card__name">{{ skill.name }}</div>
                <div class="skill-card__level" :class="{ 'skill-card__level--active': getSkillLevel(skill.id) > 0 }">
                  {{ getSkillCardState(skill) === 'locked' ? '🔒 Soon' : getSkillLevel(skill.id) > 0 ? `Lv.${getSkillLevel(skill.id)}/${getSkillMaxLevel(skill.id)}` : 'Not Started' }}
                </div>
                <div class="skill-card__bar">
                  <div
                    class="skill-card__bar-fill"
                    :style="{ width: hasQuestions(skill.id) ? (getSkillLevel(skill.id) / getSkillMaxLevel(skill.id) * 100) + '%' : '0%' }"
                  ></div>
                </div>
                <!-- Cross-tier prerequisite badge -->
                <div v-if="getSkillCardState(skill) === 'prereq' && getCrossTierPrereqs(skill).length > 0" class="skill-card__prereq-badge">
                  {{ getCrossTierPrereqs(skill).map(s => s.name).join(', ') }}
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

    <!-- Prerequisite popup -->
    <OverlayModal v-if="prereqSkill" @close="prereqSkill = null">
      <div class="prereq-popup">
        <h2 class="prereq-popup__title">🔗 {{ prereqSkill.name }}</h2>
        <p class="prereq-popup__subtitle">Recommended prerequisites:</p>
        <ul class="prereq-popup__list">
          <li
            v-for="item in getPrereqChecklist(prereqSkill)"
            :key="item.skill.id"
            class="prereq-popup__item"
            :class="{ 'prereq-popup__item--met': item.met }"
          >
            <span class="prereq-popup__check">{{ item.met ? '✓' : '✗' }}</span>
            <span class="prereq-popup__name">{{ item.skill.name }}</span>
            <span class="prereq-popup__level">{{ item.met ? `(Lv.${item.level})` : '(not started)' }}</span>
          </li>
        </ul>
        <div class="prereq-popup__actions">
          <GameButton label="Start Anyway" variant="warning" @click="bypassPrereqs" />
          <GameButton label="Close" variant="ghost" @click="prereqSkill = null" />
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
  position: relative;
  flex: 1;
  overflow-y: auto;
  background: rgb(20, 20, 45);
  border-radius: var(--radius-md);
  border: 2px solid var(--color-bg-light);
  padding: var(--space-4);
}

.skills-area__connectors {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
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

.skill-card--prereq {
  background: rgb(25, 25, 45);
  opacity: 0.35;
  border: 1px dashed var(--color-text-muted);
}

.skill-card--prereq:hover {
  opacity: 0.6;
}

.skill-card--locked {
  background: rgb(25, 25, 45);
  opacity: 0.3;
}

.skill-card--locked:hover {
  opacity: 0.5;
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

.skill-card__prereq-badge {
  font-size: 10px;
  color: var(--color-warning);
  opacity: 0.9;
  margin-top: 2px;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

/* Prereq popup */
.prereq-popup {
  text-align: center;
  max-width: 450px;
  margin: 0 auto;
}

.prereq-popup__title {
  font-size: var(--font-2xl);
  color: var(--color-warning);
  margin-bottom: var(--space-2);
}

.prereq-popup__subtitle {
  font-size: var(--font-base);
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.prereq-popup__list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-6);
  text-align: left;
}

.prereq-popup__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-1);
  color: var(--color-text-muted);
}

.prereq-popup__item--met {
  color: var(--color-success);
}

.prereq-popup__check {
  font-size: var(--font-lg);
  width: 24px;
  text-align: center;
  flex-shrink: 0;
}

.prereq-popup__name {
  flex: 1;
  font-size: var(--font-base);
}

.prereq-popup__level {
  font-size: var(--font-sm);
  opacity: 0.7;
}

.prereq-popup__actions {
  display: flex;
  justify-content: center;
  gap: var(--space-3);
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
  .skills-area__connectors {
    display: none;
  }

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
