<script setup lang="ts">
defineProps<{
  hints: string
}>()
</script>

<template>
  <div class="keyboard-hint">{{ hints }}</div>
</template>

<style scoped>
.keyboard-hint {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: var(--space-2);
  font-size: var(--font-sm);
  color: var(--color-text-muted);
  opacity: 0.7;
  background: linear-gradient(transparent, var(--color-bg));
  pointer-events: none;
}

@media (max-width: 768px) {
  .keyboard-hint {
    display: none;
  }
}
</style>
