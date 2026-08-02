<script setup lang="ts">
defineProps<{
  label: string
  shortcut?: string
  color?: string
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'ghost' | 'subtle' | 'custom'
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
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  font-family: var(--font-main);
  font-weight: 600;
  letter-spacing: -0.01em;
  cursor: pointer;
  color: var(--text-on-accent);
  white-space: nowrap;
  transition:
    background-color var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out),
    transform var(--dur-fast) var(--ease-out),
    box-shadow var(--dur-base) var(--ease-out);
}

.game-button:hover:not(:disabled) {
  transform: translateY(-1px);
}

.game-button:active:not(:disabled) {
  transform: translateY(0);
  transition-duration: 60ms;
}

.game-button--disabled {
  opacity: 0.45;
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
  min-height: 56px;
  min-width: 220px;
}

.game-button--full {
  width: 100%;
}

/* ---- Variants -----------------------------------------------------------
   Amber and green are light fills, so they take dark text — white on amber
   was failing contrast badly.
   ------------------------------------------------------------------------ */
.game-button--primary {
  background: var(--brand);
  box-shadow: var(--shadow-2);
}
.game-button--primary:hover:not(:disabled) {
  background: var(--brand-hover);
  box-shadow: var(--shadow-glow-brand);
}
.game-button--primary:active:not(:disabled) { background: var(--brand-press); }

.game-button--success {
  background: var(--success);
  color: var(--on-success);
}
.game-button--success:hover:not(:disabled) { background: var(--success-hover); }

.game-button--warning {
  background: var(--xp);
  color: var(--on-xp);
}
.game-button--warning:hover:not(:disabled) { background: var(--xp-hover); }

.game-button--danger { background: var(--danger); }
.game-button--danger:hover:not(:disabled) { background: var(--danger-hover); }

/* Quiet action that still reads as a button */
.game-button--ghost {
  background: var(--surface-2);
  border-color: var(--border-default);
  color: var(--text-primary);
}
.game-button--ghost:hover:not(:disabled) {
  background: var(--surface-3);
  border-color: var(--border-strong);
}

/* Quietest: sits beneath a primary without competing with it */
.game-button--subtle {
  background: transparent;
  border-color: var(--border-default);
  color: var(--text-secondary);
}
.game-button--subtle:hover:not(:disabled) {
  background: var(--surface-1);
  border-color: var(--border-strong);
  color: var(--text-primary);
}

.game-button__shortcut {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: var(--radius-sm);
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: var(--font-xs);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

.game-button--subtle .game-button__shortcut,
.game-button--ghost .game-button__shortcut {
  background: rgba(255, 255, 255, 0.06);
}
</style>
