# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Waldur Quest is a browser-based skill assessment game for Waldur developers. It uses Vue 3 + TypeScript to create an interactive quiz experience based on the Waldur Way skill system.

## Running the Project

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173/waldur-dev-quiz/`).

### Build & Preview

```bash
npm run build        # Type-check + build to dist/
npm run preview      # Preview the production build locally
npm run type-check   # TypeScript type checking only
```

### Deployment

GitHub Actions automatically builds and deploys to GitHub Pages on push to `main`. The workflow is in `.github/workflows/deploy.yml`. The site is served at `https://waldur.github.io/waldur-dev-quiz/`.

## Architecture

### Tech Stack
- **Vue 3** with Composition API (`<script setup>`)
- **TypeScript** for type safety
- **Pinia** for state management
- **Vue Router** for navigation
- **Vite** for build tooling
- **LocalStorage** for client-side persistence

### File Structure
```
├── index.html                 # Entry point
├── vite.config.ts             # Vite config (base: '/waldur-dev-quiz/')
├── src/
│   ├── main.ts                # App initialization
│   ├── App.vue                # Root component
│   ├── router.ts              # Vue Router routes
│   ├── views/                 # Page-level components
│   │   ├── MenuView.vue       # Landing page with profile & stats
│   │   ├── SkillTreeView.vue  # Browse skills by tier
│   │   ├── SkillDetailView.vue# Skill info + level selection
│   │   ├── QuizView.vue       # Quiz gameplay
│   │   ├── ResultsView.vue    # Quiz results & XP
│   │   ├── ProfileView.vue    # Player profile & achievements
│   │   └── SharedProfileView.vue # Read-only shared profile viewer
│   ├── components/
│   │   ├── layout/            # AppHeader, KeyboardHint
│   │   └── ui/                # GameButton, OverlayModal, ProgressBar, etc.
│   ├── stores/                # Pinia stores
│   │   ├── game.ts            # Game state (XP, skill progress, achievements)
│   │   ├── quiz.ts            # Active quiz state
│   │   └── ui.ts              # UI state (toasts, modals)
│   ├── composables/           # Reusable logic
│   │   ├── useAchievements.ts
│   │   ├── useDailyChallenge.ts
│   │   ├── useKeyboard.ts
│   │   ├── useShare.ts
│   │   ├── useSound.ts
│   │   ├── useSpacedRepetition.ts
│   │   ├── useStudyPlan.ts    # "What to read next" from missed questions
│   │   └── useTShape.ts
│   ├── data/                  # Static game data
│   │   ├── skills.ts          # Skill definitions (tiers, levels, weapons)
│   │   ├── questions.ts       # Question bank by skill ID & level
│   │   ├── achievements.ts    # Achievement definitions
│   │   ├── characterFaces.ts  # Character face system
│   │   └── resultImages.ts    # Result screen images
│   ├── types/
│   │   └── game.ts            # TypeScript type definitions
│   ├── utils/
│   │   └── yaml.ts            # Minimal YAML emitter (no dependency, writer only)
│   └── styles/
│       ├── base.css           # Global styles
│       ├── variables.css      # CSS custom properties
│       └── animations.css     # Keyframe animations
```

### Data Model

**Skills** (`src/data/skills.ts`):
- 5 tiers: literacy, product, foundation, core, specialization
- Each skill has id, name, tier, description
- Weapon profiles (dagger → trident) based on T-shape progress

**Questions** (`src/data/questions.ts`):
- Keyed by skill ID, then by level (1-7)
- Format: `{ q: "question", options: ["a", "b", "c", "d"], correct: 0 }`
- Optional fields for learning assistance:
  - `explanation`: Text explaining why the answer is correct (shown after answering)
  - `learnMore`: Object with `url` and `text` for a tutorial link
- Helper functions: `getQuestionsForSkill()`, `getAvailableLevels()`, `hasQuestions()`,
  `getQuestionKey()`, `getQuestionByKey()`, `isLegacyQuestionKey()`
- Question history keys are `skillId:level:h<hash-of-question-text>`. They are *not*
  positional: an index-based key silently repoints at a different question whenever the
  bank is edited, so `mergeState` drops any key still in the old `skillId:level:index`
  form. Reword a question and its history is dropped rather than misattributed.
- Minimum questions per level: L1-2: 3, L3-4: 4, L5: 5, L6-7: 6
- ~1520 questions across 70 skills; every skill has levels 1-5 populated
- `QuizView` Fisher-Yates shuffles the options before display, so the stored `correct`
  index never leaks the answer — vary it anyway so the raw data stays readable

**Skill Levels** (`src/data/skills.ts`):
- Level 1: Aware (blue) - 100 XP
- Level 2: Competent (green) - 300 XP
- Level 3: Proficient (yellow) - 600 XP
- Level 4: Advanced (orange) - 1000 XP
- Level 5: Expert (purple) - 1500 XP
- Level 6: Master (pink) - 2100 XP ⭐ Advanced
- Level 7: Grandmaster (teal) - 2800 XP ⭐ Advanced

**Advanced Levels (6-7):**
- Available for selected foundation skills and the eight original specialization skills (14 skills, all populated)
- Visual indicators: Star badge on skills with advanced levels in skill tree
- Pink/teal button colors for level 6-7 in skill detail
- Topics cover latest features and advanced concepts (2025-2026 documentation)
- `getAvailableLevels()` filters out empty level arrays, so a declared-but-unpopulated level is hidden rather than broken

**Sharing & Export** (`src/composables/useShare.ts`):
- ASCII profile card and base64 `?profile=` share URL (read by `SharedProfileView`)
- `generateProfileYaml()` — profile, stats, T-shape, achievements, per-skill levels and
  the spaced-repetition review queue (questions not yet mastered, resolved back to text)
- `generateQuizYaml()` — the finished quiz with every question, the chosen answer, the
  correct answer, explanation and learn-more link; must be called before the next quiz
  starts, since `quiz.ts` holds answer detail only for the current quiz
- Both open in `ExportModal` (preview + copy + download `.yaml`); JSON export of the raw
  save stays for `importState()` round-trips — nothing in the app parses YAML back

**Study Plan** (`src/composables/useStudyPlan.ts`):
- Ranks skills by weakness using `questionHistory` (wrong answers, weighted ×2) plus
  attempts on a skill that has never been passed. Top 4 surface on the profile.
- Reading links come from the `learnMore` of the questions actually missed, deduped by
  URL and labelled from the URL itself ("Multi stage · docs.docker.com") — the stored
  `text` is a call to action, not a page name, so it cannot distinguish two links that
  share a host.
- `buildReviewQuiz(skillId)` builds a quiz from that skill's missed questions across
  levels. It sets `isReview` *and* `isCrossSkill`, so it scores per answer via
  `applyCrossSkillResults` and never promotes a level — a mixed-level quiz has no single
  level to promote.
- 1136 of 1524 questions (75%) carry a `learnMore` link; every skill has at least one.

**Daily Challenge & Hard Mode** (`src/composables/useDailyChallenge.ts`):
- One question per tier, level-capped by total XP, seeded by the date so everyone gets the
  same set. Streaks raise the floor.
- Hard Mode (`settings.dailyHardMode`) raises the floor to `HARD_MODE_MIN_LEVEL` (3) **and**
  the XP ceiling with it. Raising only the floor puts it above the cap for players under
  500 XP, which empties the candidate pool — the fallback then reaches for the hardest
  level in the bank and serves a beginner level 7. Keep floor and ceiling moving together.
- The empty-pool fallback prefers the hardest level under the cap, and only exceeds the cap
  when a skill has no level below it.
- Hard Mode adds a second bonus worth `HARD_MODE_BONUS_RATE` (50%) of the quiz XP, doubling
  the daily bonus. Without it Hard Mode earns *less* XP than the easy daily, since harder
  questions lower the score and the scoring formula has no difficulty term.

**Avatar style** (`AvatarStyle` in `src/types/game.ts`):
- `'male' | 'female' | 'neutral'`, cosmetic only — it picks an emoji per XP stage in
  `characterFaces.ts` and never reaches scoring, the share URL, the profile card or the
  YAML export.
- Persisted under `settings.gender`; the key keeps that name for backwards compatibility
  with existing saves even though the type no longer does.
- `emoji` is a `Record<AvatarStyle, string>`, so adding a style makes TypeScript demand an
  entry for every stage. Keep each stage's three emoji parallel — vary one attribute, don't
  swap a face for a profession.

**State** (`src/stores/game.ts`):
- Stored in localStorage under key `waldur-quest`
- Tracks: totalXP, skillProgress, achievements, currentProfile, stats

### Game Flow
1. **Menu** → shows player profile, stats, and help button
2. **Skill Tree** → browse skills by tier, T-shape progress panel with recommendations
3. **Skill Detail** → choose difficulty level, see skill description
4. **Quiz** → 5 questions with number hints (1-4), exit button, keyboard controls
5. **Results** → XP calculation, "Next Level" button if passed, or "Try Again" if failed

## Adding New Questions

Add to `src/data/questions.ts` under the appropriate skill ID and level:
```typescript
'skill-id': {
    1: [
        {
            q: "Your question text?",
            options: ["Correct answer", "Plausible wrong 1", "Plausible wrong 2", "Plausible wrong 3"],
            correct: 0,
            explanation: "Why the correct answer is right and/or why others are wrong.",
            learnMore: {
                url: "https://docs.example.com/topic",
                text: "📚 Learn More"
            }
        }
    ],  // min 3 questions per level 1-2
    // ... levels 3-4: min 4 questions, level 5: min 5 questions
    // ... levels 6-7 (advanced): min 6 questions each
}
```

**Skills with Advanced Levels (6-7):**
- Foundation: f-docker, f-git, f-ci-cd, f-linux, f-sql, f-testing
- Specialization: s-kubernetes, s-ansible, s-openstack, s-azure, s-slurm, s-oidc, s-monitoring, s-gitlab-cicd
- Not yet: s-openportal and s-e2e-testing stop at level 5

### Question Writing Rules

**CRITICAL: All answer options must be plausible and similar in style:**
- All 4 options should be similar in length (don't make wrong answers obviously shorter)
- Most wrong answers should be believable - things a learner might actually think
- Occasional joke/absurd answers are fine for fun, but use sparingly (max 1 per question)
- The correct answer should NOT be obvious just by being longer or more detailed

**Other guidelines:**
- `explanation` and `learnMore` are optional but highly recommended for learning
- Use validated, stable URLs (official docs preferred over blog posts)
- Waldur docs are versioned: `https://docs.waldur.com/latest/<path>/` — an unversioned path 404s
- Higher levels should have harder questions
- Each quiz pulls 5 random questions from the level
- Vary which position (0-3) the correct answer is in

**Keeping Waldur content accurate:**
Questions about Waldur itself go stale as the platform moves. When revisiting, check
the claims against the actual repositories rather than memory — the frontend stack
(react-final-form, TanStack React Query, Vite, Vitest), the auth model (Personal
Access Tokens, OIDC, SCIM), the event pub/sub system and the site agent's plugin set
have all changed since the questions were first written.

## Adding New Skills

1. Add skill object to `skills` array in `src/data/skills.ts`
2. Add corresponding questions in `src/data/questions.ts`
3. Skills without questions are hidden from the skill tree

## T-Shape Developer Concept

- **Breadth**: Literacy (80%) + Foundation (50%) tiers form the horizontal bar
- **Depth**: Specialization skills at level 4+ form vertical spikes
- **Weapon profiles** evolve based on T-shape:
  - Dagger: Starting
  - Shield: Breadth complete (80% literacy, 50% foundation)
  - Spear: Any specialization at expert level
  - Lance: Shield + 1 specialization
  - Bident: Shield + 2 specializations
  - Trident: Shield + 3 specializations
