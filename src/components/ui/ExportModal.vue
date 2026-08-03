<script setup lang="ts">
import { ref } from 'vue'
import OverlayModal from '@/components/ui/OverlayModal.vue'
import GameButton from '@/components/ui/GameButton.vue'
import { useShare } from '@/composables/useShare'

const props = defineProps<{
  title: string
  content: string
  filename: string
}>()

const emit = defineEmits<{
  close: []
}>()

const { copyToClipboard, downloadText } = useShare()
const feedback = ref('')
let feedbackTimer: ReturnType<typeof setTimeout> | null = null

function showFeedback(message: string) {
  feedback.value = message
  if (feedbackTimer) clearTimeout(feedbackTimer)
  feedbackTimer = setTimeout(() => { feedback.value = '' }, 3000)
}

async function handleCopy() {
  const ok = await copyToClipboard(props.content)
  showFeedback(ok ? 'Copied to clipboard' : 'Clipboard blocked — select the text below instead')
}

function handleDownload() {
  downloadText(props.filename, props.content)
  showFeedback(`Saved ${props.filename}`)
}
</script>

<template>
  <OverlayModal border-color="var(--color-primary)" @close="emit('close')">
    <div class="export">
      <h2 class="export__title">{{ title }}</h2>
      <p class="export__hint">{{ filename }}</p>

      <pre class="export__preview" tabindex="0">{{ content }}</pre>

      <p v-if="feedback" class="export__feedback">{{ feedback }}</p>

      <div class="export__actions">
        <GameButton label="Copy YAML" variant="primary" @click="handleCopy" />
        <GameButton label="Download" variant="success" @click="handleDownload" />
        <GameButton label="Close" variant="ghost" @click="emit('close')" />
      </div>
    </div>
  </OverlayModal>
</template>

<style scoped>
.export {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.export__title {
  font-size: var(--font-xl);
  color: var(--color-primary);
  margin: 0;
}

.export__hint {
  font-size: var(--font-xs);
  color: var(--color-text-muted);
  margin: 0;
  font-family: monospace;
}

.export__preview {
  margin: 0;
  max-height: 45vh;
  overflow: auto;
  padding: var(--space-3);
  background: var(--color-bg);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  font-family: monospace;
  font-size: var(--font-xs);
  line-height: 1.5;
  color: var(--color-text);
  white-space: pre;
  tab-size: 2;
}

.export__preview:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.export__feedback {
  margin: 0;
  font-size: var(--font-sm);
  color: var(--color-success);
}

.export__actions {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}
</style>
