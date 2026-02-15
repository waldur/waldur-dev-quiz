<script setup lang="ts">
defineProps<{
  title: string
  backLabel?: string
  tierColor?: string
}>()

defineEmits<{
  back: []
}>()
</script>

<template>
  <header class="app-header" :style="tierColor ? { '--header-accent': tierColor } : undefined">
    <div class="app-header__accent" />
    <div class="app-header__content">
      <button class="app-header__back" @click="$emit('back')">
        ← {{ backLabel || 'Back' }}
      </button>
      <h1 v-if="title" class="app-header__title">{{ title }}</h1>
      <div class="app-header__right">
        <slot name="right" />
      </div>
    </div>
    <slot />
  </header>
</template>

<style scoped>
.app-header {
  --header-accent: var(--color-primary);
  position: relative;
}

.app-header__accent {
  position: absolute;
  inset: 0;
  background: var(--header-accent);
  opacity: 0.15;
}

.app-header__content {
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  min-height: 60px;
}

.app-header__back {
  background: var(--color-bg-light);
  border: none;
  color: var(--color-text);
  font-family: var(--font-main);
  font-size: var(--font-sm);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: opacity 0.15s;
  flex-shrink: 0;
}

.app-header__back:hover {
  opacity: 0.8;
}

.app-header__title {
  flex: 1;
  text-align: center;
  font-size: var(--font-xl);
  font-weight: 700;
  margin: 0;
  color: var(--color-text);
}

.app-header__right {
  flex-shrink: 0;
  min-width: 80px;
  display: flex;
  justify-content: flex-end;
}
</style>
