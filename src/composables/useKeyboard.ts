import { onMounted, onUnmounted } from 'vue'

type KeyHandler = (e: KeyboardEvent) => void

export function useKeyboard(bindings: Record<string, KeyHandler>) {
  function handler(e: KeyboardEvent) {
    // Don't handle keys when typing in an input
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

    let key = e.key.toLowerCase()
    if (key === ' ') key = 'space'
    const fn = bindings[key]
    if (fn) {
      e.preventDefault()
      fn(e)
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handler)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handler)
  })
}
