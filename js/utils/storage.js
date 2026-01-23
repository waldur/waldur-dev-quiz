// Waldur Quest - LocalStorage Management

const STORAGE_KEY = 'waldur-quest';

// Default player state
const defaultState = {
    playerId: null,
    playerName: 'Adventurer',
    totalXP: 0,
    skillProgress: {}, // { skillId: { level: number, xp: number, attempts: number, passed: boolean } }
    achievements: [],
    currentProfile: 'dagger',
    gamesPlayed: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    streakBest: 0,
    lastPlayed: null,
    settings: {
        soundEnabled: true,
        musicEnabled: true,
        idkfa: false // Unlock all skills and levels
    }
};

// Generate unique player ID
function generatePlayerId() {
    return 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Load player state from localStorage
function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const state = JSON.parse(saved);
            // Merge with defaults in case new fields were added
            return { ...defaultState, ...state };
        }
    } catch (e) {
        console.error('Failed to load state:', e);
    }

    // Return new state with fresh player ID
    return { ...defaultState, playerId: generatePlayerId() };
}

// Save player state to localStorage
function saveState(state) {
    try {
        state.lastPlayed = new Date().toISOString();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        return true;
    } catch (e) {
        console.error('Failed to save state:', e);
        return false;
    }
}

// Update specific fields in state
function updateState(updates) {
    const state = loadState();
    const newState = { ...state, ...updates };
    saveState(newState);
    return newState;
}

// Get skill progress
function getSkillProgress(skillId) {
    const state = loadState();
    return state.skillProgress[skillId] || { level: 0, xp: 0, attempts: 0, passed: false };
}

// Update skill progress after quiz
function updateSkillProgress(skillId, level, passed, xpGained) {
    const state = loadState();
    const current = state.skillProgress[skillId] || { level: 0, xp: 0, attempts: 0, passed: false };

    state.skillProgress[skillId] = {
        level: passed ? Math.max(current.level, level) : current.level,
        xp: current.xp + xpGained,
        attempts: current.attempts + 1,
        passed: passed || current.passed
    };

    state.totalXP += xpGained;
    state.gamesPlayed += 1;

    saveState(state);
    return state.skillProgress[skillId];
}

// Record question answer
function recordAnswer(correct) {
    const state = loadState();
    state.questionsAnswered += 1;
    if (correct) {
        state.correctAnswers += 1;
    }
    saveState(state);
}

// Update streak
function updateStreak(currentStreak) {
    const state = loadState();
    if (currentStreak > state.streakBest) {
        state.streakBest = currentStreak;
        saveState(state);
    }
    return state.streakBest;
}

// Add achievement
function addAchievement(achievementId) {
    const state = loadState();
    if (!state.achievements.includes(achievementId)) {
        state.achievements.push(achievementId);
        saveState(state);
        return true; // New achievement
    }
    return false; // Already had it
}

// Update player name
function setPlayerName(name) {
    const state = loadState();
    state.playerName = name;
    saveState(state);
}

// Update weapon profile
function updateProfile(profileId) {
    const state = loadState();
    state.currentProfile = profileId;
    saveState(state);
}

// Get overall stats
function getStats() {
    const state = loadState();
    const skillCount = Object.keys(state.skillProgress).length;
    const passedSkills = Object.values(state.skillProgress).filter(s => s.passed).length;

    return {
        totalXP: state.totalXP,
        skillsStarted: skillCount,
        skillsPassed: passedSkills,
        gamesPlayed: state.gamesPlayed,
        questionsAnswered: state.questionsAnswered,
        correctAnswers: state.correctAnswers,
        accuracy: state.questionsAnswered > 0
            ? Math.round((state.correctAnswers / state.questionsAnswered) * 100)
            : 0,
        streakBest: state.streakBest,
        achievements: state.achievements.length,
        profile: state.currentProfile
    };
}

// Calculate current weapon profile based on progress
function calculateProfile() {
    const state = loadState();
    const progress = state.skillProgress;

    // Count skills by tier at proficient level (3+)
    let literacyProficient = 0;
    let foundationProficient = 0;
    let specializationExpert = 0; // Level 4+

    // This is simplified - in real implementation would check actual tier
    Object.entries(progress).forEach(([skillId, data]) => {
        if (skillId.startsWith('l-') && data.level >= 2) literacyProficient++;
        if (skillId.startsWith('f-') && data.level >= 3) foundationProficient++;
        if (skillId.startsWith('s-') && data.level >= 4) specializationExpert++;
    });

    const literacyPercent = (literacyProficient / 11) * 100;
    const foundationPercent = (foundationProficient / 24) * 100;

    // Determine profile
    let profile = 'dagger';

    if (literacyPercent >= 80 && foundationPercent >= 50 && specializationExpert >= 3) {
        profile = 'trident';
    } else if (literacyPercent >= 80 && foundationPercent >= 50 && specializationExpert >= 2) {
        profile = 'bident';
    } else if (literacyPercent >= 80 && foundationPercent >= 50 && specializationExpert >= 1) {
        profile = 'lance';
    } else if (specializationExpert >= 1) {
        profile = 'spear';
    } else if (literacyPercent >= 80 && foundationPercent >= 50) {
        profile = 'shield';
    }

    updateProfile(profile);
    return profile;
}

// Reset all progress (for debugging/testing)
function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    return loadState();
}

// Export state for backup
function exportState() {
    return JSON.stringify(loadState(), null, 2);
}

// Import state from backup
function importState(jsonString) {
    try {
        const state = JSON.parse(jsonString);
        saveState(state);
        return true;
    } catch (e) {
        console.error('Failed to import state:', e);
        return false;
    }
}
