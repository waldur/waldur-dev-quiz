<script setup lang="ts">
defineProps<{
  value: number // 0-100
  color?: string
  height?: number
  showLabel?: boolean
  label?: string
}>()
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__label" v-if="showLabel">
      <span>{{ label }}</span>
      <span>{{ Math.round(value) }}%</span>
    </div>
    <div class="progress-bar__track" :style="{ height: (height || 8) + 'px' }">
      <div
        class="progress-bar__fill"
        :style="{
          width: Math.min(value, 100) + '%',
          backgroundColor: color || 'var(--color-success)',
          height: (height || 8) + 'px',
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  width: 100%;
}

.progress-bar__label {
  display: flex;
  justify-content: space-between;
  font-size: var(--font-xs);
  color: var(--color-text-muted);
  margin-bottom: var(--space-1);
}

.progress-bar__track {
  width: 100%;
  background: rgb(40, 40, 70);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar__fill {
  border-radius: 4px;
  transition: width 0.5s ease;
}
</style>
