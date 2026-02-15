import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Achievement } from '@/types/game'

export interface ToastItem {
  id: number
  achievement: Achievement
}

export const useUiStore = defineStore('ui', () => {
  const toastQueue = ref<ToastItem[]>([])
  const activeToast = ref<ToastItem | null>(null)
  let nextId = 0

  function showAchievementToast(achievement: Achievement) {
    const item: ToastItem = { id: nextId++, achievement }
    toastQueue.value.push(item)
    if (!activeToast.value) {
      processQueue()
    }
  }

  function processQueue() {
    if (toastQueue.value.length === 0) {
      activeToast.value = null
      return
    }
    activeToast.value = toastQueue.value.shift()!
  }

  function dismissToast() {
    activeToast.value = null
    // Process next after small delay
    setTimeout(() => processQueue(), 100)
  }

  return {
    toastQueue,
    activeToast,
    showAchievementToast,
    processQueue,
    dismissToast,
  }
})
