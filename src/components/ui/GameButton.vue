<script setup lang="ts">
defineProps<{
  label: string
  shortcut?: string
  color?: string
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'ghost' | 'custom'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <button
    class="game-button"
    :class="[
      `game-button--${variant || 'primary'}`,
      `game-button--${size || 'md'}`,
      { 'game-button--full': fullWidth, 'game-button--disabled': disabled }
    ]"
    :style="variant === 'custom' && color ? { backgroundColor: color } : undefined"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span v-if="shortcut" class="game-button__shortcut">{{ shortcut }}</span>
    <span class="game-button__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.game-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-main);
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.1s;
  color: var(--color-text);
  white-space: nowrap;
}

.game-button:hover:not(:disabled) {
  opacity: 0.85;
  transform: translateY(-1px);
}

.game-button:active:not(:disabled) {
  transform: translateY(0);
}

.game-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.game-button--sm {
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-sm);
  min-height: 32px;
}

.game-button--md {
  padding: var(--space-3) var(--space-5);
  font-size: var(--font-md);
  min-height: 44px;
  min-width: 180px;
}

.game-button--lg {
  padding: var(--space-4) var(--space-6);
  font-size: var(--font-lg);
  min-height: 52px;
  min-width: 220px;
}

.game-button--full {
  width: 100%;
}

/* Variants */
.game-button--primary { background: var(--color-primary); }
.game-button--success { background: var(--color-success); }
.game-button--warning { background: var(--color-warning); }
.game-button--danger { background: var(--color-danger); }
.game-button--ghost {
  background: var(--color-bg-light);
  border: 1px solid var(--color-text-muted);
}

.game-button__shortcut {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  font-size: var(--font-sm);
  flex-shrink: 0;
}
</style>
