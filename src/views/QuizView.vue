<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import { useGameStore } from '@/stores/game'
import { useSound } from '@/composables/useSound'
import { useKeyboard } from '@/composables/useKeyboard'
import { skillTiers } from '@/data/skills'
import { getQuestionKey } from '@/data/questions'
import { getStreakReaction } from '@/data/resultImages'
import type { ShuffledOption, AnswerHistory } from '@/types/game'
import KeyboardHint from '@/components/layout/KeyboardHint.vue'

const router = useRouter()
const quizStore = useQuizStore()
const gameStore = useGameStore()
const sound = useSound()

// Redirect if no quiz data
onMounted(() => {
  if (quizStore.questions.length === 0) {
    router.replace('/')
    return
  }
  shuffleCurrentOptions()
})

// Local state
const shuffledOptions = ref<ShuffledOption[]>([])
const localAnswered = ref(false)
const selectedDisplayIndex = ref(-1)
const showCelebration = ref(false)
const celebrationEmoji = ref('')
const celebrationCaption = ref('')
const celebrationStreak = ref(0)

const currentQ = computed(() => quizStore.currentQuestion)
const isReview = computed(() => quizStore.isReviewMode)
const total = computed(() => quizStore.total)

const exitTarget = computed(() => quizStore.isCrossSkill ? '/' : '/skills')

// Cross-skill metadata for current question
const currentSkillTag = computed(() => {
  if (!quizStore.isCrossSkill) return null
  const meta = quizStore.crossSkillMeta[quizStore.currentQuestionIndex]
  if (!meta) return null
  const tierInfo = skillTiers.find(t => t.id === meta.skill.tier)
  return `${tierInfo?.icon || ''} ${meta.skill.name} - L${meta.level}`
})

// Get review history for current question
const reviewHistory = computed<AnswerHistory | null>(() => {
  if (!isReview.value) return null
  return quizStore.answersHistory[quizStore.currentQuestionIndex] || null
})

function shuffleCurrentOptions() {
  if (!currentQ.value) return

  if (isReview.value && reviewHistory.value) {
    shuffledOptions.value = reviewHistory.value.shuffledOptions
    localAnswered.value = true
    selectedDisplayIndex.value = reviewHistory.value.selectedDisplayIndex
  } else {
    // Fisher-Yates shuffle
    const opts: ShuffledOption[] = currentQ.value.options.map((text, i) => ({ text, originalIndex: i }))
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = opts[i]!
      opts[i] = opts[j]!
      opts[j] = tmp
    }
    shuffledOptions.value = opts
    localAnswered.value = false
    selectedDisplayIndex.value = -1
  }
}

function handleAnswer(displayIndex: number) {
  if (localAnswered.value || !currentQ.value) return
  localAnswered.value = true
  selectedDisplayIndex.value = displayIndex

  const opt = shuffledOptions.value[displayIndex]!
  const isCorrect = opt.originalIndex === currentQ.value.correct

  const history: AnswerHistory = {
    selectedIndex: opt.originalIndex,
    selectedDisplayIndex: displayIndex,
    wasCorrect: isCorrect,
    shuffledOptions: [...shuffledOptions.value],
  }

  quizStore.recordAnswer(history)

  // Record in game store
  const crossMeta = quizStore.isCrossSkill ? quizStore.crossSkillMeta[quizStore.currentQuestionIndex] : null
  const qSkillId = crossMeta?.skillId ?? quizStore.skillId
  const qLevel = crossMeta?.level ?? quizStore.level

  const questionKey = qSkillId && qLevel
    ? getQuestionKey(qSkillId, qLevel, currentQ.value)
    : null
  gameStore.recordAnswer(isCorrect, questionKey)
  gameStore.updateStreak(quizStore.streak)

  // Play sound & check streak
  if (isCorrect) {
    const streakReaction = getStreakReaction(quizStore.streak)
    if (streakReaction) {
      if (streakReaction.sound === 'streak_epic') sound.streakEpic()
      else if (streakReaction.sound === 'streak_big') sound.streakBig()
      else sound.streak()

      celebrationEmoji.value = streakReaction.emoji
      celebrationCaption.value = streakReaction.caption
      celebrationStreak.value = streakReaction.streak
      showCelebration.value = true
      setTimeout(() => { showCelebration.value = false }, 2000)
    } else {
      sound.correct()
    }
  } else {
    sound.incorrect()
  }
}

function goNext() {
  if (!localAnswered.value) return
  quizStore.nextQuestion()

  if (quizStore.completed) {
    sound.quizComplete()
    router.push('/results')
    return
  }

  shuffleCurrentOptions()
}

function goPrev() {
  if (quizStore.currentQuestionIndex > 0 && quizStore.answersHistory.length > 0) {
    quizStore.goToQuestion(quizStore.currentQuestionIndex - 1)
    shuffleCurrentOptions()
  }
}

function exitQuiz() {
  router.push(exitTarget.value)
}

function onDotClick(index: number) {
  if (index < quizStore.answersHistory.length || index === quizStore.currentQuestionIndex) {
    quizStore.goToQuestion(index)
    shuffleCurrentOptions()
  }
}

function dotClass(index: number): string {
  if (index === quizStore.currentQuestionIndex) return 'dot--current'
  if (index < quizStore.answersHistory.length) {
    return quizStore.answersHistory[index]?.wasCorrect ? 'dot--correct' : 'dot--wrong'
  }
  return 'dot--pending'
}

function optionClass(displayIndex: number): string {
  if (!localAnswered.value) return ''
  if (!currentQ.value) return ''

  const opt = shuffledOptions.value[displayIndex]
  if (!opt) return ''
  const isCorrectOption = opt.originalIndex === currentQ.value.correct
  const wasSelected = displayIndex === selectedDisplayIndex.value

  if (isCorrectOption) return 'option--correct'
  if (wasSelected) return 'option--wrong'
  return 'option--faded'
}

// Colour alone shouldn't carry the correct/incorrect signal — the badge swaps
// its number for a glyph so the state survives a colour-vision difference.
function optionGlyph(displayIndex: number): string {
  const cls = optionClass(displayIndex)
  if (cls === 'option--correct') return '✓'
  if (cls === 'option--wrong') return '✕'
  return ''
}

const nextButtonLabel = computed(() => {
  const idx = quizStore.currentQuestionIndex
  const histLen = quizStore.answersHistory.length
  if (idx >= total.value - 1) return 'See Results'
  if (isReview.value && idx === histLen - 1) return 'Continue →'
  return 'Next →'
})

const headerColor = computed(() => {
  if (quizStore.isCrossSkill) return 'var(--color-warning)'
  const tier = quizStore.skillTier
  const tierDef = skillTiers.find(t => t.id === tier)
  return tierDef ? tierDef.color : 'var(--color-primary)'
})

const headerTitle = computed(() => {
  if (quizStore.isCrossSkill) return 'Cross-Skill Challenge'
  return `${quizStore.skillName} - Level ${quizStore.level}`
})

useKeyboard({
  '1': () => handleAnswer(0),
  '2': () => handleAnswer(1),
  '3': () => handleAnswer(2),
  '4': () => handleAnswer(3),
  'enter': () => goNext(),
  'space': () => goNext(),
  'arrowleft': () => goPrev(),
  'arrowright': () => { if (localAnswered.value) goNext() },
  'escape': () => exitQuiz(),
})
</script>

<template>
  <div class="quiz" v-if="currentQ">
    <!-- Header -->
    <div class="quiz__header" :style="{ backgroundColor: headerColor + '30' }">
      <button class="quiz__exit" @click="exitQuiz">✕ Exit</button>
      <button v-if="quizStore.currentQuestionIndex > 0" class="quiz__prev" @click="goPrev">← Prev</button>
      <div class="quiz__header-info">
        <div class="quiz__title">{{ headerTitle }}</div>
        <div v-if="currentSkillTag" class="quiz__skill-tag">{{ currentSkillTag }}</div>
      </div>
      <div class="quiz__header-right">
        <div class="quiz__progress-text">Question {{ quizStore.currentQuestionIndex + 1 }}/{{ total }}</div>
        <div class="quiz__score">Score: {{ quizStore.score }} | Streak: {{ quizStore.streak }}</div>
      </div>
    </div>

    <!-- Body: centred in the viewport instead of hugging the header -->
    <div class="quiz__body">
    <!-- Question dots -->
    <div class="quiz__dots">
      <button
        v-for="i in total"
        :key="i"
        class="dot"
        :class="dotClass(i - 1)"
        @click="onDotClick(i - 1)"
      ></button>
    </div>

    <!-- Question text -->
    <div class="quiz__question">{{ currentQ.q }}</div>

    <!-- Code block -->
    <div v-if="currentQ.code" class="quiz__code">
      <pre>{{ currentQ.code }}</pre>
    </div>

    <!-- Options -->
    <div class="quiz__options">
      <button
        v-for="(opt, i) in shuffledOptions"
        :key="i"
        class="option"
        :class="optionClass(i)"
        :disabled="localAnswered && !isReview"
        @click="handleAnswer(i)"
      >
        <span class="option__badge">{{ optionGlyph(i) || i + 1 }}</span>
        <span class="option__text">{{ opt.text }}</span>
      </button>
    </div>

    <!-- Feedback -->
    <div v-if="localAnswered" class="quiz__feedback" :class="reviewHistory?.wasCorrect !== false || quizStore.answersHistory[quizStore.currentQuestionIndex]?.wasCorrect ? 'quiz__feedback--correct' : 'quiz__feedback--wrong'">
      {{ (reviewHistory?.wasCorrect ?? quizStore.answersHistory[quizStore.currentQuestionIndex]?.wasCorrect) ? '✓ Correct!' + (quizStore.streak > 1 ? ` Streak: ${quizStore.streak}` : '') : '✗ Incorrect' }}
    </div>

    <!-- Explanation panel -->
    <div v-if="localAnswered && currentQ.explanation" class="quiz__explanation">
      <div class="quiz__explanation-text">{{ currentQ.explanation }}</div>
      <a
        v-if="currentQ.learnMore?.url"
        :href="currentQ.learnMore.url"
        target="_blank"
        rel="noopener"
        class="quiz__learn-more"
      >
        {{ currentQ.learnMore.text || '📚 Learn More →' }}
      </a>
    </div>

    <!-- Next button -->
    <div v-if="localAnswered" class="quiz__next-area">
      <button class="quiz__next-btn" @click="goNext">{{ nextButtonLabel }}</button>
    </div>
    </div><!-- /quiz__body -->

    <!-- Streak celebration overlay -->
    <div v-if="showCelebration" class="celebration">
      <div class="celebration__emoji">{{ celebrationEmoji }}</div>
      <div class="celebration__caption">{{ celebrationCaption }}</div>
      <div class="celebration__streak">{{ celebrationStreak }} STREAK!</div>
    </div>

    <KeyboardHint hints="1-4: Answer  ·  ←/→: Navigate  ·  Space/Enter: Next" />
  </div>
</template>

<style scoped>
.quiz {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

/* The question block sits in the optical centre of what's left after the
   header, so a 5-option question and a 2-line one both feel deliberate. */
.quiz__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: safe center;
  gap: var(--space-2);
  padding-block: var(--space-6) var(--space-12);
}

/* Header */
.quiz__header {
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  gap: var(--space-3);
  min-height: 70px;
}

.quiz__exit,
.quiz__prev {
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  border: none;
  background: var(--color-bg-light);
  color: var(--color-text-muted);
  font-family: var(--font-main);
  font-size: var(--font-sm);
  cursor: pointer;
  transition: all 0.15s;
  flex-shrink: 0;
}

.quiz__exit:hover,
.quiz__prev:hover {
  opacity: 0.8;
}

.quiz__header-info {
  flex: 1;
}

.quiz__title {
  font-size: var(--font-xl);
  color: var(--color-text);
}

.quiz__skill-tag {
  font-size: var(--font-sm);
  color: var(--color-text-muted);
  margin-top: 2px;
}

.quiz__header-right {
  text-align: right;
  flex-shrink: 0;
}

.quiz__progress-text {
  font-size: var(--font-md);
  color: var(--color-text-muted);
}

.quiz__score {
  font-size: var(--font-md);
  color: var(--color-gold);
}

/* Dots */
.quiz__dots {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) 0;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--color-text-muted);
  background: var(--color-bg-light);
  cursor: pointer;
  transition: all 0.15s;
  padding: 0;
}

.dot--current {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: scale(1.2);
}

.dot--correct {
  background: var(--color-success);
  border-color: var(--color-success);
}

.dot--wrong {
  background: var(--color-danger);
  border-color: var(--color-danger);
}

.dot:hover {
  border-color: var(--color-primary);
}

/* Question */
.quiz__question {
  font-size: var(--font-xl);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
  text-align: center;
  max-width: min(920px, 92vw);
  margin-inline: auto;
  padding: var(--space-4) var(--space-6) var(--space-2);
  line-height: var(--leading-snug);
  text-wrap: balance;
}

/* Code block */
.quiz__code {
  margin: var(--space-2) var(--space-8);
  background: rgb(20, 20, 40);
  border: 1px solid rgb(60, 70, 90);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  overflow-x: auto;
}

.quiz__code pre {
  margin: 0;
  font-family: var(--font-code);
  font-size: var(--font-sm);
  color: rgb(180, 220, 180);
  line-height: 1.5;
  white-space: pre-wrap;
}

/* Options: a shorter measure keeps the eye (and the pointer) travelling less */
.quiz__options {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  max-width: calc(var(--measure-narrow) + var(--space-6) * 2);
  margin: 0 auto;
  width: 100%;
}

.option {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--surface-1);
  color: var(--text-primary);
  font-family: var(--font-main);
  font-size: var(--font-md);
  cursor: pointer;
  text-align: left;
  min-height: 56px;
  transition:
    background-color var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out),
    transform var(--dur-fast) var(--ease-out);
}

.option:not(:disabled):hover {
  background: var(--surface-2);
  border-color: var(--brand);
  transform: translateX(2px);
}

.option:disabled {
  cursor: default;
}

.option--correct {
  background: var(--success) !important;
  border-color: var(--success) !important;
  color: var(--on-success);
  font-weight: 600;
  opacity: 1;
}

.option--wrong {
  background: var(--danger) !important;
  border-color: var(--danger) !important;
  color: var(--on-danger);
  font-weight: 600;
  opacity: 1;
}

.option--faded {
  opacity: 0.45;
}

.option__badge {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  background: var(--brand-tint-strong);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-sm);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

.option--correct .option__badge,
.option--wrong .option__badge {
  background: rgba(0, 0, 0, 0.22);
  border-color: rgba(0, 0, 0, 0.2);
  color: inherit;
  font-size: var(--font-md);
}

.option__text {
  flex: 1;
}

/* Feedback */
.quiz__feedback {
  text-align: center;
  font-size: var(--font-xl);
  padding: var(--space-2);
  animation: fadeIn 0.2s ease;
}

.quiz__feedback--correct {
  color: var(--color-success);
}

.quiz__feedback--wrong {
  color: var(--color-danger);
}

/* Explanation — shares the options' measure so the column stays coherent */
.quiz__explanation {
  width: 100%;
  max-width: var(--measure-narrow);
  margin: var(--space-2) auto;
  padding: var(--space-4) var(--space-5);
  background: var(--surface-1);
  border: 1px solid var(--border-default);
  border-left: 3px solid var(--brand);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  animation: fadeIn var(--dur-base) var(--ease-out);
}

.quiz__explanation-text {
  flex: 1;
  font-size: var(--font-sm);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
  text-align: left;
}

.quiz__learn-more {
  flex-shrink: 0;
  padding: var(--space-2) var(--space-3);
  background: var(--color-secondary);
  color: var(--color-text);
  border-radius: var(--radius-sm);
  text-decoration: none;
  font-size: var(--font-sm);
  transition: all 0.15s;
}

.quiz__learn-more:hover {
  background: rgb(20, 180, 255);
}

/* Next button */
.quiz__next-area {
  display: flex;
  justify-content: center;
  padding: var(--space-3);
}

.quiz__next-btn {
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  border: none;
  background: var(--color-primary);
  color: var(--color-text);
  font-family: var(--font-main);
  font-size: var(--font-lg);
  cursor: pointer;
  transition: all 0.15s;
}

.quiz__next-btn:hover {
  opacity: 0.85;
}

/* Celebration */
.celebration {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 200;
  pointer-events: none;
  animation: fadeIn 0.2s ease;
}

.celebration__emoji {
  font-size: 120px;
  animation: popIn 0.3s ease;
}

.celebration__caption {
  font-size: var(--font-3xl);
  color: var(--color-gold);
  margin-top: var(--space-2);
}

.celebration__streak {
  font-size: var(--font-xl);
  color: var(--color-text);
  margin-top: var(--space-1);
}

@media (max-width: 768px) {
  .quiz__header {
    flex-wrap: wrap;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    min-height: auto;
  }

  .quiz__title {
    font-size: var(--font-md);
  }

  .quiz__question {
    font-size: var(--font-lg);
    padding: var(--space-2) var(--space-4);
  }

  .quiz__code {
    margin: var(--space-2) var(--space-4);
  }

  .quiz__options {
    padding: var(--space-3) var(--space-4);
  }

  .quiz__explanation {
    margin: var(--space-2) var(--space-4);
    flex-direction: column;
  }

  .celebration__emoji {
    font-size: 80px;
  }

  .celebration__caption {
    font-size: var(--font-xl);
  }
}
</style>
