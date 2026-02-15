<script setup lang="ts">
import { useUiStore } from '@/stores/ui'
import ToastNotification from '@/components/ui/ToastNotification.vue'

const uiStore = useUiStore()
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <!-- Global toast notifications -->
  <ToastNotification
    v-if="uiStore.activeToast"
    :key="uiStore.activeToast.id"
    :achievement="uiStore.activeToast.achievement"
  />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
