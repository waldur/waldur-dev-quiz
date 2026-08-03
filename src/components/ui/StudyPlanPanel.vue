<script setup lang="ts">
import { ref } from 'vue'
import { getTierInfo } from '@/data/skills'
import GameButton from '@/components/ui/GameButton.vue'
import type { StudyTopic } from '@/types/game'

defineProps<{
  topics: StudyTopic[]
}>()

defineEmits<{
  review: [skillId: string]
}>()

// Which topics have their missed questions open. Collapsed by default: the panel is a
// prompt to go read something, not a place to re-read the whole quiz.
const expanded = ref<Set<string>>(new Set())

function toggle(skillId: string) {
  const next = new Set(expanded.value)
  if (next.has(skillId)) next.delete(skillId)
  else next.add(skillId)
  expanded.value = next
}

function tierColor(tier: string): string {
  return getTierInfo(tier)?.color || 'var(--text-tertiary)'
}
</script>

<template>
  <div class="study-plan">
    <div v-for="topic in topics" :key="topic.skill.id" class="topic">
      <div class="topic__head">
        <span class="topic__dot" :style="{ backgroundColor: tierColor(topic.skill.tier) }" aria-hidden="true"></span>
        <div class="topic__titles">
          <h4 class="topic__name">{{ topic.skill.name }}</h4>
          <p class="topic__reason">{{ topic.reason }}</p>
        </div>
        <span class="topic__priority" :class="`topic__priority--${topic.priority}`">
          {{ topic.priority === 'high' ? 'Focus here' : topic.priority === 'medium' ? 'Worth a look' : 'Minor' }}
        </span>
      </div>

      <ul v-if="topic.links.length > 0" class="topic__links">
        <li v-for="link in topic.links.slice(0, 3)" :key="link.url">
          <a class="topic__link" :href="link.url" target="_blank" rel="noopener noreferrer">
            <span class="topic__link-label">{{ link.label }}</span>
            <span class="topic__link-context">{{ link.fromQuestion }}</span>
          </a>
        </li>
      </ul>
      <p v-else-if="topic.questions.length > 0" class="topic__no-links">
        No reading linked for these questions yet — the explanations below are the material.
      </p>

      <div class="topic__actions">
        <button
          v-if="topic.questions.length > 0"
          class="topic__toggle"
          :aria-expanded="expanded.has(topic.skill.id)"
          @click="toggle(topic.skill.id)"
        >
          {{ expanded.has(topic.skill.id) ? 'Hide' : 'Show' }}
          {{ topic.questions.length }} missed
          {{ topic.questions.length === 1 ? 'question' : 'questions' }}
        </button>
        <GameButton
          v-if="topic.questions.length > 0"
          label="Review these"
          variant="ghost"
          size="sm"
          @click="$emit('review', topic.skill.id)"
        />
      </div>

      <ul v-if="expanded.has(topic.skill.id)" class="topic__questions">
        <li v-for="wq in topic.questions" :key="wq.key" class="missed">
          <div class="missed__head">
            <span class="missed__level">L{{ wq.level }}</span>
            <span class="missed__q">{{ wq.question.q }}</span>
            <span class="missed__tally">{{ wq.wrong }}✗ {{ wq.correct }}✓</span>
          </div>
          <p class="missed__answer">
            <strong>Answer:</strong> {{ wq.question.options[wq.question.correct] }}
          </p>
          <p v-if="wq.question.explanation" class="missed__explanation">{{ wq.question.explanation }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.study-plan {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.topic {
  background: var(--surface-1);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.topic__head {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.topic__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-pill);
  margin-top: 6px;
  flex-shrink: 0;
}

.topic__titles {
  flex: 1;
  min-width: 0;
}

.topic__name {
  margin: 0;
  font-size: var(--font-md);
  font-weight: 700;
  color: var(--text-primary);
  line-height: var(--leading-snug);
}

.topic__reason {
  margin: 2px 0 0;
  font-size: var(--font-xs);
  color: var(--text-tertiary);
}

.topic__priority {
  flex-shrink: 0;
  font-size: var(--font-xs);
  font-weight: 600;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-pill);
  white-space: nowrap;
}

.topic__priority--high {
  background: var(--danger-tint);
  color: var(--danger);
}

.topic__priority--medium {
  background: var(--xp-tint);
  color: var(--xp);
}

.topic__priority--low {
  background: var(--surface-3);
  color: var(--text-tertiary);
}

.topic__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.topic__link {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  background: var(--surface-inset);
  border: 1px solid var(--border-subtle);
  text-decoration: none;
  transition: border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}

.topic__link:hover {
  background: var(--surface-2);
  border-color: var(--border-strong);
}

.topic__link:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.topic__link-label {
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--info);
}

/* The question that produced the link — it explains why this page is being suggested */
.topic__link-context {
  font-size: var(--font-xs);
  color: var(--text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.topic__no-links {
  margin: 0;
  font-size: var(--font-xs);
  color: var(--text-tertiary);
  font-style: italic;
}

.topic__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.topic__toggle {
  background: none;
  border: none;
  padding: 0;
  font-family: var(--font-main);
  font-size: var(--font-xs);
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.topic__toggle:hover {
  color: var(--text-primary);
}

.topic__toggle:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
  border-radius: var(--radius-sm);
}

.topic__questions {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  border-top: 1px solid var(--border-subtle);
  padding-top: var(--space-3);
}

.missed__head {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
}

.missed__level {
  font-size: var(--font-xs);
  font-weight: 700;
  color: var(--text-tertiary);
  flex-shrink: 0;
}

.missed__q {
  flex: 1;
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--text-primary);
  line-height: var(--leading-snug);
}

.missed__tally {
  font-size: var(--font-xs);
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  flex-shrink: 0;
}

.missed__answer {
  margin: var(--space-1) 0 0;
  font-size: var(--font-xs);
  color: var(--success);
}

.missed__explanation {
  margin: var(--space-1) 0 0;
  font-size: var(--font-xs);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .topic__head {
    flex-wrap: wrap;
  }

  .topic__priority {
    order: -1;
  }
}
</style>
