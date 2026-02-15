<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { skills, weaponProfiles } from '@/data/skills'
import { getAchievementById } from '@/data/achievements'
import GameButton from '@/components/ui/GameButton.vue'

interface SharedProfile {
  n: string  // name
  x: number  // xp
  p: string  // profile id
  a: string[]  // achievement ids
  s: Record<string, number>  // skillId -> level
}

const router = useRouter()
const route = useRoute()

const profile = ref<SharedProfile | null>(null)
const error = ref(false)

const weapon = computed(() => {
  if (!profile.value) return weaponProfiles[0]!
  return weaponProfiles.find(w => w.id === profile.value!.p) ?? weaponProfiles[0]!
})

const skillList = computed(() => {
  if (!profile.value) return []
  return Object.entries(profile.value.s)
    .map(([skillId, level]) => {
      const skill = skills.find(s => s.id === skillId)
      return {
        id: skillId,
        name: skill?.name || skillId,
        level,
      }
    })
    .sort((a, b) => b.level - a.level)
})

const achievementIcons = computed(() => {
  if (!profile.value) return []
  return profile.value.a
    .map(id => getAchievementById(id))
    .filter(Boolean)
    .map(a => a!)
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    goHome()
  }
}

onMounted(() => {
  const encoded = route.query.profile as string
  if (!encoded) {
    router.push('/')
    return
  }

  try {
    const decoded = JSON.parse(atob(encoded))
    if (!decoded.n || typeof decoded.x !== 'number') {
      throw new Error('Invalid profile data')
    }
    profile.value = decoded as SharedProfile
  } catch (e) {
    console.error('Failed to decode shared profile:', e)
    error.value = true
    router.push('/')
  }

  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="shared-profile-view" v-if="profile">
    <div class="shared-card">
      <!-- Header -->
      <div class="shared-header">
        <h1 class="shared-title">Waldur Quest Profile</h1>
      </div>

      <!-- Player info -->
      <div class="shared-identity">
        <span class="shared-weapon-icon">{{ weapon.icon }}</span>
        <h2 class="shared-name">{{ profile.n }}</h2>
        <p class="shared-weapon-name">{{ weapon.name }}</p>
      </div>

      <!-- XP -->
      <div class="shared-xp">
        <span class="shared-xp-value">{{ profile.x.toLocaleString() }}</span>
        <span class="shared-xp-label">Total XP</span>
      </div>

      <!-- Skills -->
      <div v-if="skillList.length > 0" class="shared-skills">
        <h3 class="shared-section-title">Skills</h3>
        <div class="shared-skill-list">
          <div v-for="skill in skillList" :key="skill.id" class="shared-skill-item">
            <span class="shared-skill-name">{{ skill.name }}</span>
            <span class="shared-skill-level">Lv.{{ skill.level }}</span>
          </div>
        </div>
      </div>

      <!-- Achievements -->
      <div v-if="achievementIcons.length > 0" class="shared-achievements">
        <h3 class="shared-section-title">Achievements</h3>
        <div class="shared-achievement-icons">
          <span
            v-for="achievement in achievementIcons"
            :key="achievement.id"
            class="shared-achievement-icon"
            :title="achievement.name"
          >
            {{ achievement.icon }}
          </span>
        </div>
      </div>

      <!-- Action -->
      <div class="shared-actions">
        <GameButton
          label="Go to Waldur Quest"
          variant="primary"
          size="lg"
          @click="goHome"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.shared-profile-view {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
}

.shared-card {
  background: var(--color-bg-light);
  border-radius: var(--radius-lg);
  border: 2px solid var(--color-primary);
  max-width: 500px;
  width: 100%;
  overflow: hidden;
}

.shared-header {
  background: var(--color-primary);
  padding: var(--space-4);
  text-align: center;
}

.shared-title {
  margin: 0;
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--color-bg);
  letter-spacing: 1px;
}

.shared-identity {
  text-align: center;
  padding: var(--space-6) var(--space-4) var(--space-2);
}

.shared-weapon-icon {
  font-size: 4rem;
  line-height: 1;
  display: block;
  margin-bottom: var(--space-2);
}

.shared-name {
  font-size: var(--font-2xl);
  font-weight: 800;
  color: #FFD700;
  margin: 0 0 var(--space-1);
}

.shared-weapon-name {
  font-size: var(--font-md);
  color: var(--color-text-muted);
  margin: 0;
}

.shared-xp {
  text-align: center;
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.shared-xp-value {
  font-size: var(--font-3xl);
  font-weight: 800;
  color: var(--color-primary);
}

.shared-xp-label {
  font-size: var(--font-sm);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.shared-skills {
  padding: var(--space-4);
}

.shared-section-title {
  font-size: var(--font-md);
  font-weight: 700;
  margin: 0 0 var(--space-3);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.shared-skill-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.shared-skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  background: var(--color-bg);
  border-radius: var(--radius-sm);
}

.shared-skill-name {
  font-size: var(--font-sm);
}

.shared-skill-level {
  font-size: var(--font-sm);
  font-weight: 700;
  color: var(--color-primary);
}

.shared-achievements {
  padding: var(--space-4);
}

.shared-achievement-icons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.shared-achievement-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
  border-radius: var(--radius-sm);
  border: 1px solid #FFD700;
}

.shared-actions {
  padding: var(--space-4) var(--space-4) var(--space-6);
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
