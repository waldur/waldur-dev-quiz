<script setup lang="ts">
import OverlayModal from './OverlayModal.vue'

defineProps<{
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
}>()

defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <OverlayModal border-color="var(--color-danger)" @close="$emit('cancel')">
    <div class="confirm-dialog">
      <h2 class="confirm-dialog__title">{{ title }}</h2>
      <p class="confirm-dialog__message">{{ message }}</p>
      <div class="confirm-dialog__actions">
        <button class="confirm-dialog__btn confirm-dialog__btn--cancel" @click="$emit('cancel')">
          {{ cancelLabel || 'Cancel' }}
        </button>
        <button class="confirm-dialog__btn confirm-dialog__btn--confirm" @click="$emit('confirm')">
          {{ confirmLabel || 'Confirm' }}
        </button>
      </div>
    </div>
  </OverlayModal>
</template>

<style scoped>
.confirm-dialog {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.confirm-dialog__title {
  font-size: var(--font-xl);
  color: var(--color-danger);
  margin: 0 0 var(--space-3);
}

.confirm-dialog__message {
  font-size: var(--font-md);
  color: var(--color-text-muted);
  margin: 0 0 var(--space-6);
  line-height: 1.5;
}

.confirm-dialog__actions {
  display: flex;
  gap: var(--space-3);
  justify-content: center;
}

.confirm-dialog__btn {
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-md);
  border: none;
  font-family: var(--font-main);
  font-size: var(--font-md);
  font-weight: 600;
  cursor: pointer;
  min-width: 120px;
  color: var(--color-text);
  transition: opacity 0.15s;
}

.confirm-dialog__btn:hover {
  opacity: 0.8;
}

.confirm-dialog__btn--cancel {
  background: var(--color-bg-light);
  border: 2px solid var(--color-text-muted);
}

.confirm-dialog__btn--confirm {
  background: var(--color-danger);
}
</style>
