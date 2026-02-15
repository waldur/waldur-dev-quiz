<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  borderColor?: string
}>()

const emit = defineEmits<{
  close: []
}>()

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div class="overlay" @click.self="$emit('close')">
      <div
        class="overlay__panel"
        :style="borderColor ? { borderColor } : undefined"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fadeIn 0.2s ease;
}

.overlay__panel {
  background: var(--color-bg-light);
  border-radius: var(--radius-lg);
  border: 2px solid var(--color-primary);
  padding: var(--space-6);
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  width: 90%;
  animation: scaleIn 0.2s ease;
}
</style>
