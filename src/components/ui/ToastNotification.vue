<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUiStore } from '@/stores/ui'
import type { Achievement } from '@/types/game'

const props = defineProps<{
  achievement: Achievement
}>()

const uiStore = useUiStore()
const visible = ref(false)

onMounted(() => {
  // Slide in
  requestAnimationFrame(() => { visible.value = true })
  // Auto dismiss after 3.5s
  setTimeout(() => {
    visible.value = false
    setTimeout(() => uiStore.dismissToast(), 300)
  }, 3500)
})
</script>

<template>
  <div class="toast" :class="{ 'toast--visible': visible }">
    <span class="toast__icon">{{ achievement.icon }}</span>
    <div class="toast__content">
      <div class="toast__title">Achievement Unlocked!</div>
      <div class="toast__name">{{ achievement.name }}</div>
      <div class="toast__desc">{{ achievement.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: -400px;
  width: 340px;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: rgb(40, 40, 80);
  border: 2px solid var(--color-gold);
  border-radius: var(--radius-md);
  z-index: 500;
  transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast--visible {
  right: 20px;
}

.toast__icon {
  font-size: 32px;
  flex-shrink: 0;
}

.toast__title {
  font-size: var(--font-xs);
  color: var(--color-gold);
}

.toast__name {
  font-size: var(--font-md);
  font-weight: 600;
  color: var(--color-text);
}

.toast__desc {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
}

@media (max-width: 640px) {
  .toast {
    width: calc(100% - 32px);
    right: -100%;
    top: auto;
    bottom: 16px;
  }

  .toast--visible {
    right: 16px;
  }
}
</style>
