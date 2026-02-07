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
    onboardingDone: false,
    questionHistory: {}, // { "skillId:level:index": { w: wrongCount, c: correctCount, last: timestamp } }
    achievementTimestamps: {}, // { achievementId: timestamp }
    dailyChallenge: { lastCompletedDate: null, streak: 0 },
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

// Record question answer (with optional per-question tracking)
function recordAnswer(correct, questionKey) {
    const state = loadState();
    state.questionsAnswered += 1;
    if (correct) {
        state.correctAnswers += 1;
    }

    // Track per-question history for spaced repetition
    if (questionKey) {
        if (!state.questionHistory) state.questionHistory = {};
        const entry = state.questionHistory[questionKey] || { w: 0, c: 0, last: 0 };
        if (correct) {
            entry.c += 1;
        } else {
            entry.w += 1;
        }
        entry.last = Date.now();

        // Auto-prune: if player clearly knows this (3+ correct, 0 wrong), remove tracking
        if (entry.c >= 3 && entry.w === 0) {
            delete state.questionHistory[questionKey];
        } else {
            state.questionHistory[questionKey] = entry;
        }
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

// Seeded PRNG (mulberry32)
function seededRandom(seed) {
    let t = seed + 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

// Convert date string to numeric seed
function dateSeed(dateStr) {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        const char = dateStr.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return Math.abs(hash);
}

// Check if daily challenge is completed today
function isDailyChallengeCompleted() {
    const state = loadState();
    const today = new Date().toISOString().split('T')[0];
    const dc = state.dailyChallenge || { lastCompletedDate: null, streak: 0 };
    return dc.lastCompletedDate === today;
}

// Complete daily challenge and award bonus XP
function completeDailyChallenge(baseXP) {
    const state = loadState();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const dc = state.dailyChallenge || { lastCompletedDate: null, streak: 0 };

    // Already completed today
    if (dc.lastCompletedDate === today) return 0;

    // Calculate streak
    if (dc.lastCompletedDate === yesterday) {
        dc.streak = (dc.streak || 0) + 1;
    } else {
        dc.streak = 1;
    }
    dc.lastCompletedDate = today;

    // Bonus XP: 50% of base + streak bonus (10 per day, capped at 50)
    const dailyBonus = Math.round(baseXP * 0.5);
    const streakBonus = Math.min(dc.streak * 10, 50);
    const totalBonus = dailyBonus + streakBonus;

    state.dailyChallenge = dc;
    state.totalXP += totalBonus;
    saveState(state);

    return { dailyBonus, streakBonus, totalBonus, streak: dc.streak };
}

// Get daily challenge streak
function getDailyChallengeStreak() {
    const state = loadState();
    const dc = state.dailyChallenge || { lastCompletedDate: null, streak: 0 };
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    // Streak is only valid if last completed was today or yesterday
    if (dc.lastCompletedDate === today || dc.lastCompletedDate === yesterday) {
        return dc.streak || 0;
    }
    return 0;
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
