# Waldur Quest

A browser-based skill assessment game for Waldur developers. Test and track your knowledge across the Waldur Way skill system while leveling up your developer profile.

## Features

- **5 Skill Tiers**: Literacy, Product Knowledge, Technical Foundation, Core Platform, and Specialization
- **7 Mastery Levels**: Progress from Aware to Grandmaster in each skill
- **T-Shaped Development**: Track your breadth (foundation skills) and depth (specializations)
- **XP & Progression**: Earn XP for correct answers, passing quizzes, perfect scores, and streaks
- **Weapon Profiles**: Evolve from Dagger to Trident as your T-shape grows
- **Daily Challenges**: Streak-based daily quizzes with bonus XP
- **Achievements**: Unlock achievements as you progress
- **Persistent Progress**: All progress saved locally in your browser
- **Keyboard Controls**: Quick answer selection with 1-4 keys

## How to Play

1. **Start Quest** - Browse the skill tree and select a skill to test
2. **Choose Level** - Pick a difficulty level (1-7) for the quiz
3. **Answer Questions** - Use mouse or keyboard (1-4) to select answers
4. **Level Up** - Score 60% or higher to pass and unlock the next level
5. **Build Your T-Shape** - Master breadth in Literacy/Foundation, then specialize deeply

## Development

### Prerequisites

- Node.js 20.19+ or 22.12+

### Setup

```bash
npm install
npm run dev
```

### Build

```bash
npm run build      # Type-check + production build
npm run preview    # Preview production build locally
```

## Deployment

Deployed automatically to GitHub Pages via GitHub Actions on push to `main`.

Live at: https://waldur.github.io/waldur-dev-quiz/

## Tech Stack

- **[Vue 3](https://vuejs.org/)** - UI framework (Composition API)
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Pinia](https://pinia.vuejs.org/)** - State management
- **[Vue Router](https://router.vuejs.org/)** - Navigation
- **[Vite](https://vite.dev/)** - Build tooling
- **LocalStorage** - Client-side persistence

## Project Structure

```
├── src/
│   ├── views/          # Page components (Menu, SkillTree, Quiz, etc.)
│   ├── components/     # Reusable UI components
│   ├── stores/         # Pinia state stores
│   ├── composables/    # Reusable logic (achievements, T-shape, etc.)
│   ├── data/           # Skills, questions, achievements definitions
│   ├── types/          # TypeScript type definitions
│   └── styles/         # Global CSS
```

## Contributing Questions

Add questions to `src/data/questions.ts`:

```typescript
'skill-id': {
    1: [  // Level 1 questions
        {
            q: "Your question here?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0,  // Index of correct answer
            explanation: "Why this is the correct answer.",
            learnMore: { url: "https://docs.example.com", text: "📚 Learn More" }
        },
    ],
}
```

Each level should have at least 3-6 questions depending on level. Higher levels need more questions.

## License

MIT License - see [LICENSE](LICENSE) for details.

Copyright (c) 2025 Waldur Team
