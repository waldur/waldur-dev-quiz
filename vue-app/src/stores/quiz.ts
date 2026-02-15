import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Question, AnswerHistory, ShuffledOption, CrossSkillEntry, PerQuestionResult, Skill } from '@/types/game'

export const useQuizStore = defineStore('quiz', () => {
  // Quiz configuration
  const skillId = ref<string | null>(null)
  const skillName = ref('')
  const skillTier = ref('')
  const level = ref(0)
  const isDaily = ref(false)
  const isCrossSkill = ref(false)

  // Quiz state
  const questions = ref<Question[]>([])
  const crossSkillMeta = ref<Array<{ skillId: string; skill: Skill; level: number }>>([])
  const currentQuestionIndex = ref(0)
  const score = ref(0)
  const streak = ref(0)
  const answered = ref(false)
  const selectedOption = ref(-1)
  const answersHistory = ref<AnswerHistory[]>([])
  const currentShuffledOptions = ref<ShuffledOption[]>([])

  // Results (populated when quiz completes)
  const completed = ref(false)
  const perQuestionResults = ref<PerQuestionResult[]>([])

  const currentQuestion = computed(() => {
    if (currentQuestionIndex.value < questions.value.length) {
      return questions.value[currentQuestionIndex.value]
    }
    return null
  })

  const total = computed(() => questions.value.length)

  const isReviewMode = computed(() => {
    return currentQuestionIndex.value < answersHistory.value.length
  })

  const passed = computed(() => score.value >= Math.ceil(total.value * 0.6))
  const perfect = computed(() => score.value === total.value)

  function startQuiz(config: {
    skillId?: string
    skillName?: string
    skillTier?: string
    level?: number
    isDaily?: boolean
    isCrossSkill?: boolean
    questions: Question[]
    crossSkillMeta?: Array<{ skillId: string; skill: Skill; level: number }>
  }) {
    skillId.value = config.skillId || null
    skillName.value = config.skillName || ''
    skillTier.value = config.skillTier || ''
    level.value = config.level || 0
    isDaily.value = config.isDaily || false
    isCrossSkill.value = config.isCrossSkill || false
    questions.value = config.questions
    crossSkillMeta.value = config.crossSkillMeta || []
    currentQuestionIndex.value = 0
    score.value = 0
    streak.value = 0
    answered.value = false
    selectedOption.value = -1
    answersHistory.value = []
    currentShuffledOptions.value = []
    completed.value = false
    perQuestionResults.value = []
  }

  function recordAnswer(history: AnswerHistory) {
    answersHistory.value[currentQuestionIndex.value] = history
    if (history.wasCorrect) {
      score.value++
      streak.value++
    } else {
      streak.value = 0
    }
    answered.value = true
  }

  function goToQuestion(index: number) {
    currentQuestionIndex.value = index
    answered.value = index < answersHistory.value.length
    selectedOption.value = answered.value ? answersHistory.value[index]?.selectedIndex ?? -1 : -1
  }

  function nextQuestion() {
    currentQuestionIndex.value++
    if (currentQuestionIndex.value >= questions.value.length) {
      completed.value = true
      // Build per-question results for cross-skill
      if (isCrossSkill.value) {
        perQuestionResults.value = answersHistory.value.map((ah, i) => {
          const meta = crossSkillMeta.value[i]
          return {
            wasCorrect: ah.wasCorrect,
            skillId: meta?.skillId ?? '',
            skill: meta?.skill ?? { id: '', name: 'Unknown', tier: 'literacy', description: '' },
            level: meta?.level ?? 0,
          }
        })
      }
    } else {
      answered.value = currentQuestionIndex.value < answersHistory.value.length
    }
  }

  function $reset() {
    skillId.value = null
    skillName.value = ''
    skillTier.value = ''
    level.value = 0
    isDaily.value = false
    isCrossSkill.value = false
    questions.value = []
    crossSkillMeta.value = []
    currentQuestionIndex.value = 0
    score.value = 0
    streak.value = 0
    answered.value = false
    selectedOption.value = -1
    answersHistory.value = []
    currentShuffledOptions.value = []
    completed.value = false
    perQuestionResults.value = []
  }

  return {
    skillId,
    skillName,
    skillTier,
    level,
    isDaily,
    isCrossSkill,
    questions,
    crossSkillMeta,
    currentQuestionIndex,
    score,
    streak,
    answered,
    selectedOption,
    answersHistory,
    currentShuffledOptions,
    completed,
    perQuestionResults,
    currentQuestion,
    total,
    isReviewMode,
    passed,
    perfect,
    startQuiz,
    recordAnswer,
    goToQuestion,
    nextQuestion,
    $reset,
  }
})
