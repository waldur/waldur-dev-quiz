# Waldur Quest

A browser-based skill assessment game for Waldur developers. Test and track your knowledge across the Waldur Way skill system while leveling up your developer profile.

## Features

- **5 Skill Tiers**: Literacy, Product Knowledge, Technical Foundation, Core Platform, and Specialization
- **5 Mastery Levels**: Progress from Aware to Expert in each skill
- **T-Shaped Development**: Track your breadth (foundation skills) and depth (specializations)
- **XP & Progression**: Earn XP for correct answers, passing quizzes, perfect scores, and streaks
- **Weapon Profiles**: Evolve from Dagger to Trident as your T-shape grows
- **Persistent Progress**: All progress saved locally in your browser
- **Keyboard Controls**: Quick answer selection with 1-4 keys

## How to Play

1. **Start Quest** - Browse the skill tree and select a skill to test
2. **Choose Level** - Pick a difficulty level (1-5) for the quiz
3. **Answer Questions** - Use mouse or keyboard (1-4) to select answers
4. **Level Up** - Score 60% or higher to pass and unlock the next level
5. **Build Your T-Shape** - Master breadth in Literacy/Foundation, then specialize deeply

## Running Locally

No build step required. Serve with any static HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Then open http://localhost:8000 in your browser.

## Deployment

Deploy to GitHub Pages by pushing to a `gh-pages` branch or enabling Pages in repository settings. No build configuration needed.

## Tech Stack

- **[KAPLAY](https://kaplayjs.com/)** - Game engine (formerly Kaboom.js)
- **Vanilla JavaScript** - No framework dependencies
- **LocalStorage** - Client-side persistence
- **Inter Font** - Clean, readable typography

## Project Structure

```
waldur-dev-quiz/
├── index.html              # Entry point
├── js/
│   ├── main.js             # Game scenes and logic
│   ├── data/
│   │   ├── skills.js       # Skill definitions
│   │   └── questions.js    # Question bank
│   └── utils/
│       └── storage.js      # LocalStorage management
└── assets/
    └── sprites/            # Game assets
```

## Contributing Questions

Add questions to `js/data/questions.js`:

```javascript
'skill-id': {
    1: [  // Level 1 questions
        {
            q: "Your question here?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0  // Index of correct answer
        },
        // More questions...
    ],
    2: [...],  // Level 2
    // Up to level 5
}
```

Each level should have at least 3-5 questions. Higher levels need more questions.

## XP System

| Action | XP Gained |
|--------|-----------|
| Correct answer | +20 |
| Pass quiz (60%+) | +50 |
| Perfect score | +100 |
| Streak bonus | +5 per streak |

## Weapon Profiles

Your profile evolves based on your T-shaped skill development:

| Profile | Requirements |
|---------|-------------|
| Dagger | Starting profile |
| Shield | 80% Literacy + 50% Foundation |
| Spear | 1+ Specialization at Expert |
| Lance | Shield requirements + 1 Specialization |
| Bident | Shield requirements + 2 Specializations |
| Trident | Shield requirements + 3 Specializations |

## License

MIT License - see [LICENSE](LICENSE) for details.

Copyright (c) 2025 Waldur Team
