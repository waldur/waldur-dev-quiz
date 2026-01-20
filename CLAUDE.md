# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Waldur Quest is a browser-based skill assessment game for Waldur developers. It uses the KAPLAY game engine (formerly Kaboom.js) to create an interactive quiz experience based on the Waldur Way skill system.

## Running the Project

No build step required. Serve via any static HTTP server:
```bash
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000` in browser.

For GitHub Pages deployment, push to a gh-pages branch or enable Pages in repository settings.

## Architecture

### File Structure
- `index.html` - Entry point, loads KAPLAY from CDN and all JS files
- `js/main.js` - Game initialization and all KAPLAY scenes
- `js/data/skills.js` - Skill definitions (tiers, packages, weapon profiles)
- `js/data/questions.js` - Question bank organized by skill ID and difficulty level (400+ questions)
- `js/utils/storage.js` - LocalStorage persistence layer

### No Build System
The project uses vanilla JS with global variables (no ES modules) for GitHub Pages compatibility. Scripts must load in order: skills.js → questions.js → storage.js → main.js.

### KAPLAY Game Engine
- Initialized with `kaplay()` returning `k` instance
- Uses scene-based architecture: `menu`, `skillTree`, `skillDetail`, `quiz`, `results`, `profile`
- All text elements use `font: 'Inter'` loaded via `k.loadFont()`
- Scene transitions via `k.go('sceneName', { data })`
- Overlays (help, confirmations) use z-index layering with `k.z()`

### Data Model

**Skills** (`js/data/skills.js`):
- 5 tiers: literacy, product, foundation, core, specialization
- Each skill has id, name, tier, description
- Weapon profiles (dagger → trident) based on T-shape progress

**Questions** (`js/data/questions.js`):
- Keyed by skill ID, then by level (1-5)
- Format: `{ q: "question", options: ["a", "b", "c", "d"], correct: 0 }`
- Helper functions: `getQuestionsForSkill()`, `getAvailableLevels()`, `hasQuestions()`
- Minimum questions per level: L1-2: 3, L3: 4, L4: 4, L5: 5

**State** (`js/utils/storage.js`):
- Stored in localStorage under key `waldur-quest`
- Tracks: totalXP, skillProgress, achievements, currentProfile, stats
- Key functions: `loadState()`, `saveState()`, `updateSkillProgress()`, `getStats()`, `resetProgress()`

### Game Flow
1. **Menu** → shows player profile, stats, and help button (?)
2. **Skill Tree** → browse skills by tier, T-shape progress panel with recommendations on right
3. **Skill Detail** → choose difficulty level, see skill description
4. **Quiz** → 5 questions with number hints (1-4), exit button, keyboard controls
5. **Results** → XP calculation, "Next Level" button if passed, or "Try Again" if failed

### UI Features

**Menu Scene:**
- Help overlay (?) explains game rules, T-shape concept, XP system, controls
- Click outside or press ESC to close overlays

**Skill Tree Scene:**
- Right panel shows T-shape progress (breadth bars + depth count)
- Visual T-shape indicator grows based on progress
- "Recommended Next" section suggests skills to improve T-shape
- Recommendations prioritize: literacy gaps → foundation gaps → specialization depth → level up existing

**Quiz Scene:**
- Exit button (✕) to return to skill tree without finishing
- Number badges (1-4) on each answer option
- Keyboard hint footer: "Press 1-4 to answer • Space/Enter for next"
- Answer with mouse click or keyboard 1-4
- Next question with Enter/Space or click Next button

**Results Scene:**
- "Next Level →" button appears when quiz passed (60%+) and not at max level
- "Try Again" button appears when quiz failed
- Always shows "Skill Tree" and "Main Menu" options

**Profile Scene:**
- "Reset Progress" button with confirmation dialog
- Shows stats, weapon profile, and tier progress bars

## Adding New Questions

Add to `js/data/questions.js` under the appropriate skill ID and level:
```javascript
'skill-id': {
    1: [{ q: "...", options: [...], correct: 0 }],  // min 3 questions
    2: [{ q: "...", options: [...], correct: 0 }],  // min 3 questions
    3: [{ q: "...", options: [...], correct: 0 }],  // min 4 questions
    4: [{ q: "...", options: [...], correct: 0 }],  // min 4 questions
    5: [{ q: "...", options: [...], correct: 0 }],  // min 5 questions
}
```

Higher levels should have harder questions. Each quiz pulls 5 random questions from the level.

## Adding New Skills

1. Add skill object to `skills` array in `js/data/skills.js`
2. Add corresponding questions in `js/data/questions.js`
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
