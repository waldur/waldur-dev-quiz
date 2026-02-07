// Waldur Quest - Achievements System
// Defines achievement conditions, checking logic, and profile card generation

const ACHIEVEMENTS = [
    { id: 'first-quest', name: 'First Steps', icon: '🎯', description: 'Complete your first quest', category: 'milestones' },
    { id: 'perfect-score', name: 'Flawless', icon: '⭐', description: 'Get a perfect score on any quiz', category: 'skill' },
    { id: 'streak-3', name: 'On Fire', icon: '🔥', description: 'Reach a 3-answer streak', category: 'skill' },
    { id: 'streak-5', name: 'Unstoppable', icon: '⚡', description: 'Reach a 5-answer streak', category: 'skill' },
    { id: 'streak-10', name: 'Legendary', icon: '👑', description: 'Reach a 10-answer streak', category: 'skill' },
    { id: 'literacy-complete', name: 'Well Read', icon: '📚', description: 'Start all literacy skills', category: 'progress' },
    { id: 'foundation-complete', name: 'Solid Ground', icon: '🧱', description: 'Start all foundation skills', category: 'progress' },
    { id: 'shield-bearer', name: 'Shield Bearer', icon: '🛡️', description: 'Reach Shield rank or higher', category: 'rank' },
    { id: 'trident-master', name: 'Trident Master', icon: '🔱', description: 'Reach Trident rank', category: 'rank' },
    { id: 'xp-1000', name: 'Thousand Club', icon: '💰', description: 'Earn 1,000 total XP', category: 'milestones' },
    { id: 'xp-10000', name: 'XP Hoarder', icon: '💎', description: 'Earn 10,000 total XP', category: 'milestones' },
    { id: 'ten-quizzes', name: 'Dedicated', icon: '🏅', description: 'Complete 10 quizzes', category: 'milestones' },
    { id: 'specialist', name: 'Specialist', icon: '🔬', description: 'Reach level 4+ in any specialization', category: 'progress' },
    { id: 'grandmaster', name: 'Grandmaster', icon: '🏆', description: 'Reach level 7 in any skill', category: 'skill' },
    { id: 'explorer', name: 'Explorer', icon: '🧭', description: 'Take quizzes across 3+ tiers', category: 'progress' },
];

// Achievement condition evaluators
const ACHIEVEMENT_CONDITIONS = {
    'first-quest': (state) => state.gamesPlayed >= 1,
    'perfect-score': (state, ctx) => ctx && ctx.perfect === true,
    'streak-3': (state) => state.streakBest >= 3,
    'streak-5': (state) => state.streakBest >= 5,
    'streak-10': (state) => state.streakBest >= 10,
    'literacy-complete': (state) => {
        const literacySkills = skills.filter(s => s.tier === 'literacy' && hasQuestions(s.id));
        return literacySkills.every(s => (state.skillProgress[s.id] || {}).level >= 1);
    },
    'foundation-complete': (state) => {
        const foundationSkills = skills.filter(s => s.tier === 'foundation' && hasQuestions(s.id));
        return foundationSkills.every(s => (state.skillProgress[s.id] || {}).level >= 1);
    },
    'shield-bearer': (state) => {
        const rank = state.currentProfile;
        return ['shield', 'spear', 'lance', 'bident', 'trident'].includes(rank);
    },
    'trident-master': (state) => state.currentProfile === 'trident',
    'xp-1000': (state) => state.totalXP >= 1000,
    'xp-10000': (state) => state.totalXP >= 10000,
    'ten-quizzes': (state) => state.gamesPlayed >= 10,
    'specialist': (state) => {
        return Object.entries(state.skillProgress).some(([id, p]) => {
            return id.startsWith('s-') && p.level >= 4;
        });
    },
    'grandmaster': (state) => {
        return Object.values(state.skillProgress).some(p => p.level >= 7);
    },
    'explorer': (state) => {
        const tiersPlayed = new Set();
        Object.keys(state.skillProgress).forEach(skillId => {
            const skill = skills.find(s => s.id === skillId);
            if (skill && (state.skillProgress[skillId].attempts || 0) > 0) {
                tiersPlayed.add(skill.tier);
            }
        });
        return tiersPlayed.size >= 3;
    },
};

// Check all achievements and return newly earned ones
function checkAchievements(context) {
    const state = loadState();
    const earned = state.achievements || [];
    const timestamps = state.achievementTimestamps || {};
    const newlyEarned = [];

    ACHIEVEMENTS.forEach(achievement => {
        if (earned.includes(achievement.id)) return; // Already earned
        const condition = ACHIEVEMENT_CONDITIONS[achievement.id];
        if (condition && condition(state, context)) {
            newlyEarned.push(achievement);
            earned.push(achievement.id);
            timestamps[achievement.id] = Date.now();
        }
    });

    if (newlyEarned.length > 0) {
        state.achievements = earned;
        state.achievementTimestamps = timestamps;
        saveState(state);
    }

    return newlyEarned;
}

// Get achievement definition by ID
function getAchievementById(id) {
    return ACHIEVEMENTS.find(a => a.id === id);
}

// Generate a text profile card for sharing
function generateProfileCard() {
    const state = loadState();
    const stats = getStats();
    const profile = weaponProfiles.find(p => p.id === state.currentProfile) || weaponProfiles[0];
    const earned = (state.achievements || []).map(id => getAchievementById(id)).filter(Boolean);

    let card = '';
    card += '╔══════════════════════════════╗\n';
    card += '║     WALDUR QUEST PROFILE     ║\n';
    card += '╠══════════════════════════════╣\n';
    card += `║ ${profile.icon} ${profile.name.padEnd(25)} ║\n`;
    card += `║ XP: ${String(stats.totalXP).padEnd(24)}║\n`;
    card += `║ Accuracy: ${String(stats.accuracy + '%').padEnd(18)}║\n`;
    card += `║ Skills: ${String(stats.skillsPassed + '/' + skills.length).padEnd(20)}║\n`;
    card += `║ Quizzes: ${String(stats.gamesPlayed).padEnd(19)}║\n`;

    if (earned.length > 0) {
        card += '╠══════════════════════════════╣\n';
        card += `║ Achievements: ${String(earned.length + '/' + ACHIEVEMENTS.length).padEnd(14)}║\n`;
        const icons = earned.map(a => a.icon).join(' ');
        // Wrap icons to fit
        card += `║ ${icons.substring(0, 28).padEnd(28)} ║\n`;
    }

    card += '╚══════════════════════════════╝\n';
    card += 'waldur-quest';
    return card;
}

// Generate shareable URL with minimal encoded state
function generateShareUrl() {
    const state = loadState();
    const minimal = {
        n: state.playerName,
        x: state.totalXP,
        p: state.currentProfile,
        a: state.achievements || [],
        s: {},
    };
    // Only include skills with progress
    Object.entries(state.skillProgress).forEach(([id, p]) => {
        if (p.level > 0) {
            minimal.s[id] = p.level;
        }
    });
    const encoded = btoa(JSON.stringify(minimal));
    return `${window.location.origin}${window.location.pathname}?profile=${encoded}`;
}
