// Waldur Quest - Main Entry Point
// Uses global variables from skills.js, questions.js, and storage.js

// Initialize KAPLAY with sharp text rendering
const k = kaplay({
    width: 1280,
    height: 720,
    background: [15, 15, 35],
    letterbox: true,
    stretch: true,
    pixelDensity: 2,
});

// Load custom font
k.loadFont('Inter', 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2');

// Global game state
let gameState = loadState();

// Helper to escape text for KAPLAY (prevents styled text parsing errors)
function escapeText(str) {
    if (!str) return str;
    return str.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
}

// Color palette
const COLORS = {
    bg: k.rgb(15, 15, 35),
    bgLight: k.rgb(30, 30, 60),
    primary: k.rgb(99, 102, 241),    // Indigo
    secondary: k.rgb(14, 165, 233),   // Sky
    success: k.rgb(16, 185, 129),     // Emerald
    warning: k.rgb(245, 158, 11),     // Amber
    danger: k.rgb(239, 68, 68),       // Red
    text: k.rgb(255, 255, 255),
    textMuted: k.rgb(156, 163, 175),
    gold: k.rgb(251, 191, 36),
};

// Tier colors
const TIER_COLORS = {
    literacy: k.rgb(99, 102, 241),
    product: k.rgb(14, 165, 233),
    foundation: k.rgb(59, 130, 246),
    core: k.rgb(139, 92, 246),
    specialization: k.rgb(245, 158, 11),
};

// Funny override phrases for locked skills
const SKILL_OVERRIDE_PHRASES = [
    "I've been doing this since before Docker was cool",
    "Trust me, I read the docs... once",
    "I learned this from Stack Overflow's finest",
    "My rubber duck explained it perfectly",
    "I watched a 10-minute YouTube tutorial",
    "I know a guy who knows a guy",
    "Works on my machine™",
    "I can copy-paste with the best of them",
    "ChatGPT said I'm basically an expert",
    "I've seen this error before... probably",
    "I have opinions about tabs vs spaces",
    "I once fixed a bug by accident",
    "My code compiles, therefore I am",
    "I've deployed to production on Friday",
    "I know what YAML stands for... mostly",
];

// ============================================================================
// SOUND SYSTEM
// ============================================================================
const SoundSystem = {
    audioContext: null,
    enabled: true,

    init() {
        if (this.audioContext) return;
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
            this.enabled = false;
        }
    },

    // Resume audio context (needed after user interaction)
    resume() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    },

    // Play a tone with given frequency and duration
    playTone(frequency, duration, type = 'sine', volume = 0.3) {
        if (!this.enabled || !this.audioContext) return;
        this.resume();

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    },

    // Play multiple tones in sequence (for melodies)
    playMelody(notes, baseVolume = 0.3) {
        if (!this.enabled || !this.audioContext) return;
        this.resume();

        let time = this.audioContext.currentTime;
        notes.forEach(note => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.value = note.freq;
            oscillator.type = note.type || 'sine';

            gainNode.gain.setValueAtTime(baseVolume, time);
            gainNode.gain.exponentialRampToValueAtTime(0.01, time + note.dur);

            oscillator.start(time);
            oscillator.stop(time + note.dur);

            time += note.dur * 0.9; // Slight overlap for smoother sound
        });
    },

    // Predefined sounds
    correct() {
        this.playMelody([
            { freq: 523.25, dur: 0.1 },  // C5
            { freq: 659.25, dur: 0.15 }, // E5
        ], 0.25);
    },

    incorrect() {
        this.playMelody([
            { freq: 311.13, dur: 0.15, type: 'triangle' }, // Eb4
            { freq: 277.18, dur: 0.2, type: 'triangle' },  // Db4
        ], 0.2);
    },

    streak() {
        // 3-streak: quick ascending
        this.playMelody([
            { freq: 523.25, dur: 0.08 }, // C5
            { freq: 659.25, dur: 0.08 }, // E5
            { freq: 783.99, dur: 0.12 }, // G5
        ], 0.25);
    },

    streakBig() {
        // 5-streak: triumphant fanfare
        this.playMelody([
            { freq: 523.25, dur: 0.1 },  // C5
            { freq: 659.25, dur: 0.1 },  // E5
            { freq: 783.99, dur: 0.1 },  // G5
            { freq: 1046.5, dur: 0.2 },  // C6
        ], 0.3);
    },

    streakEpic() {
        // 10-streak: epic fanfare
        this.playMelody([
            { freq: 392.00, dur: 0.1 },  // G4
            { freq: 523.25, dur: 0.1 },  // C5
            { freq: 659.25, dur: 0.1 },  // E5
            { freq: 783.99, dur: 0.1 },  // G5
            { freq: 1046.5, dur: 0.25 }, // C6
            { freq: 1318.5, dur: 0.3 },  // E6
        ], 0.35);
    },

    click() {
        this.playTone(800, 0.05, 'sine', 0.15);
    },

    quizComplete() {
        this.playMelody([
            { freq: 523.25, dur: 0.15 }, // C5
            { freq: 659.25, dur: 0.15 }, // E5
            { freq: 783.99, dur: 0.15 }, // G5
            { freq: 1046.5, dur: 0.3 },  // C6
        ], 0.3);
    }
};

// Initialize sound system
SoundSystem.init();

// ============================================================================
// SCENE: Menu
// ============================================================================
k.scene('menu', () => {
    // Background gradient effect
    k.add([
        k.rect(k.width(), k.height()),
        k.color(COLORS.bg),
        k.pos(0, 0),
    ]);

    // Animated particles in background
    for (let i = 0; i < 30; i++) {
        const particle = k.add([
            k.circle(k.rand(2, 5)),
            k.color(COLORS.primary),
            k.opacity(k.rand(0.1, 0.3)),
            k.pos(k.rand(0, k.width()), k.rand(0, k.height())),
            k.anchor('center'),
            { speed: k.rand(10, 30), angle: k.rand(0, Math.PI * 2) }
        ]);

        particle.onUpdate(() => {
            particle.pos.x += Math.cos(particle.angle) * particle.speed * k.dt();
            particle.pos.y += Math.sin(particle.angle) * particle.speed * k.dt();

            // Wrap around
            if (particle.pos.x < 0) particle.pos.x = k.width();
            if (particle.pos.x > k.width()) particle.pos.x = 0;
            if (particle.pos.y < 0) particle.pos.y = k.height();
            if (particle.pos.y > k.height()) particle.pos.y = 0;
        });
    }

    // Title
    k.add([
        k.text('WALDUR QUEST', { size: 64, font: 'Inter' }),
        k.color(COLORS.gold),
        k.pos(k.width() / 2, 150),
        k.anchor('center'),
    ]);

    // Subtitle
    k.add([
        k.text('Skill Assessment Adventure', { size: 24, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, 210),
        k.anchor('center'),
    ]);

    // Current weapon profile
    const profile = weaponProfiles.find(p => p.id === gameState.currentProfile) || weaponProfiles[0];
    k.add([
        k.text(`${profile.icon} ${profile.name}`, { size: 32, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 280),
        k.anchor('center'),
    ]);

    // Stats display
    const stats = getStats();
    k.add([
        k.text(`XP: ${stats.totalXP} | Skills: ${stats.skillsPassed}/${skills.length} | Accuracy: ${stats.accuracy}%`, { size: 18, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, 330),
        k.anchor('center'),
    ]);

    // Menu buttons with keyboard shortcuts
    const buttonY = 420;
    const buttonSpacing = 70;

    // Actions for keyboard shortcuts
    function startQuest() {
        k.go('skillTree');
    }

    function openProfile() {
        k.go('profile');
    }

    function quickChallenge() {
        const skillsWithQuestions = skills.filter(s => hasQuestions(s.id));
        if (skillsWithQuestions.length > 0) {
            const randomSkill = skillsWithQuestions[Math.floor(Math.random() * skillsWithQuestions.length)];
            const levels = getAvailableLevels(randomSkill.id);
            const randomLevel = levels[Math.floor(Math.random() * levels.length)];
            k.go('quiz', { skillId: randomSkill.id, level: randomLevel });
        }
    }

    // Buttons with shortcuts in label (use parentheses to avoid KAPLAY style tag parsing)
    createButton('(1) Start Quest', k.width() / 2, buttonY, startQuest);
    createButton('(2) My Profile', k.width() / 2, buttonY + buttonSpacing, openProfile);
    createButton('(3) Quick Challenge', k.width() / 2, buttonY + buttonSpacing * 2, quickChallenge);

    // Keyboard shortcuts
    k.onKeyPress('1', startQuest);
    k.onKeyPress('2', openProfile);
    k.onKeyPress('3', quickChallenge);

    // Keyboard hint footer
    k.add([
        k.text('Press 1-3 to navigate  •  H for help', { size: 14, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, k.height() - 50),
        k.anchor('center'),
        k.opacity(0.7),
    ]);

    // Player name (bottom left)
    k.add([
        k.text(`Player: ${gameState.playerName}`, { size: 16, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(20, k.height() - 30),
    ]);

    // Version
    k.add([
        k.text('v1.0.0', { size: 14, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() - 20, k.height() - 30),
        k.anchor('topright'),
    ]);

    // Help button
    const helpBtn = k.add([
        k.circle(20),
        k.color(COLORS.bgLight),
        k.pos(k.width() - 35, 35),
        k.anchor('center'),
        k.area(),
        k.outline(2, COLORS.primary),
    ]);
    k.add([
        k.text('?', { size: 24, font: 'Inter' }),
        k.color(COLORS.primary),
        k.pos(k.width() - 35, 35),
        k.anchor('center'),
    ]);

    helpBtn.onHover(() => helpBtn.color = COLORS.primary);
    helpBtn.onHoverEnd(() => helpBtn.color = COLORS.bgLight);

    // Help overlay state
    let helpVisible = false;
    let helpElements = [];
    let helpClosing = false;

    function showHelp() {
        if (helpVisible || helpClosing) return;
        helpVisible = true;

        // Track when overlay was opened to ignore initial click
        const openedAt = Date.now();

        // Overlay background (with area to capture clicks)
        const overlayBg = k.add([
            k.rect(k.width(), k.height()),
            k.color(0, 0, 0),
            k.opacity(0.85),
            k.pos(0, 0),
            k.z(100),
            k.area(),
            'helpOverlay',
        ]);
        overlayBg.onClick(() => {
            // Ignore clicks within 100ms of opening (prevents same-click close)
            if (Date.now() - openedAt < 100) return;
            hideHelp();
        });
        helpElements.push(overlayBg);

        // Help panel
        const panelWidth = 800;
        const panelHeight = 580;
        const panelX = k.width() / 2;
        const panelY = k.height() / 2;

        const panel = k.add([
            k.rect(panelWidth, panelHeight, { radius: 12 }),
            k.color(COLORS.bgLight),
            k.pos(panelX, panelY),
            k.anchor('center'),
            k.outline(2, COLORS.primary),
            k.z(101),
            k.area(),
            'helpOverlay',
        ]);
        panel.onClick(() => {}); // Prevent clicks from going through panel
        helpElements.push(panel);

        // Title
        helpElements.push(k.add([
            k.text('How to Play', { size: 36, font: 'Inter' }),
            k.color(COLORS.gold),
            k.pos(panelX, panelY - 250),
            k.anchor('center'),
            k.z(102),
            'helpOverlay',
        ]));

        // Helper to add a section
        const addSection = (icon, title, lines, x, y) => {
            // Section header
            helpElements.push(k.add([
                k.text(`${icon}  ${title}`, { size: 20, font: 'Inter' }),
                k.color(COLORS.text),
                k.pos(x, y),
                k.z(102),
                'helpOverlay',
            ]));
            // Section content
            lines.forEach((line, i) => {
                helpElements.push(k.add([
                    k.text(line, { size: 17, font: 'Inter', width: 340 }),
                    k.color(k.rgb(180, 180, 195)),
                    k.pos(x, y + 28 + i * 22),
                    k.z(102),
                    'helpOverlay',
                ]));
            });
        };

        const leftX = panelX - panelWidth / 2 + 40;
        const rightX = panelX + 30;
        const row1Y = panelY - 200;
        const row2Y = panelY - 50;
        const row3Y = panelY + 95;

        // Left column
        addSection('🎯', 'Goal', [
            'Master Waldur development skills',
            'across 5 tiers to level up.',
        ], leftX, row1Y);

        addSection('📚', 'Skill Tiers', [
            'Literacy → Product → Foundation',
            '→ Core → Specialization',
        ], leftX, row2Y);

        addSection('⌨️', 'Controls', [
            'Press 1-4 to select answer',
            'Enter or Space for next',
        ], leftX, row3Y);

        // Right column
        addSection('📐', 'T-Shaped Developer', [
            'Breadth: Master Literacy & Foundation',
            'Depth: Specialize in 1-3 areas',
            'Balance both to evolve your profile!',
        ], rightX, row1Y);

        addSection('💎', 'XP System', [
            '+20 per correct  •  +50 for passing',
            '+100 for perfect  •  +5 per streak',
        ], rightX, row2Y);

        addSection('🗡️', 'Your Rank', [
            'As your T-shape grows, your rank',
            'evolves: Dagger → Shield → Spear',
            '→ Lance → Bident → Trident',
        ], rightX, row3Y);

        // Close button
        const closeBtn = k.add([
            k.rect(150, 44, { radius: 8 }),
            k.color(COLORS.primary),
            k.pos(panelX, panelY + 245),
            k.anchor('center'),
            k.area(),
            k.z(103),
            'helpOverlay',
        ]);
        helpElements.push(closeBtn);

        helpElements.push(k.add([
            k.text('Got it!', { size: 20, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(panelX, panelY + 245),
            k.anchor('center'),
            k.z(104),
            'helpOverlay',
        ]));

        closeBtn.onClick(() => {
            hideHelp();
        });
        closeBtn.onHover(() => closeBtn.color = k.rgb(100, 120, 200));
        closeBtn.onHoverEnd(() => closeBtn.color = COLORS.primary);
    }

    function hideHelp() {
        if (!helpVisible || helpClosing) return;
        helpClosing = true;
        helpVisible = false;

        // Delay destruction to prevent click from propagating to elements below
        setTimeout(() => {
            helpElements.forEach(el => {
                if (el.exists()) k.destroy(el);
            });
            helpElements = [];
            helpClosing = false;
        }, 50);
    }

    helpBtn.onClick(showHelp);

    // Keyboard shortcuts for help
    k.onKeyPress('/', () => showHelp());  // ? key (shift+/)
    k.onKeyPress('h', () => showHelp());  // Alternative: H for help

    // ESC to close help
    k.onKeyPress('escape', () => {
        if (helpVisible) hideHelp();
    });
});

// ============================================================================
// SCENE: Skill Tree
// ============================================================================
k.scene('skillTree', () => {
    let selectedTier = 'literacy';
    let scrollOffset = 0;

    // Calculate T-shape progress
    function calculateTShape() {
        const literacySkills = getSkillsByTier('literacy').filter(s => hasQuestions(s.id));
        const foundationSkills = getSkillsByTier('foundation').filter(s => hasQuestions(s.id));
        const specSkills = getSkillsByTier('specialization').filter(s => hasQuestions(s.id));

        const literacyStarted = literacySkills.filter(s => getSkillProgress(s.id).level > 0).length;
        const foundationStarted = foundationSkills.filter(s => getSkillProgress(s.id).level > 0).length;
        const specExpert = specSkills.filter(s => getSkillProgress(s.id).level >= 3).length;

        const breadthPercent = Math.round(((literacyStarted + foundationStarted) / (literacySkills.length + foundationSkills.length)) * 100);
        const depthCount = specExpert;

        return {
            breadthPercent,
            depthCount,
            literacyPercent: Math.round((literacyStarted / literacySkills.length) * 100),
            foundationPercent: Math.round((foundationStarted / foundationSkills.length) * 100),
            literacyStarted,
            literacyTotal: literacySkills.length,
            foundationStarted,
            foundationTotal: foundationSkills.length,
            specExpert,
            specTotal: specSkills.length,
        };
    }

    // Get recommended next skills
    function getRecommendations() {
        const recommendations = [];
        const tShape = calculateTShape();

        // Priority 1: Literacy gaps (need breadth first)
        if (tShape.literacyPercent < 80) {
            const literacySkills = getSkillsByTier('literacy').filter(s => hasQuestions(s.id));
            const notStarted = literacySkills.filter(s => getSkillProgress(s.id).level === 0);
            notStarted.slice(0, 2).forEach(s => {
                recommendations.push({ skill: s, reason: 'Build breadth', priority: 'high' });
            });
        }

        // Priority 2: Foundation gaps
        if (tShape.literacyPercent >= 50 && tShape.foundationPercent < 50) {
            const foundationSkills = getSkillsByTier('foundation').filter(s => hasQuestions(s.id));
            const notStarted = foundationSkills.filter(s => getSkillProgress(s.id).level === 0);
            notStarted.slice(0, 2).forEach(s => {
                recommendations.push({ skill: s, reason: 'Strengthen foundation', priority: 'high' });
            });
        }

        // Priority 3: Specialization (need depth for T-shape)
        if (tShape.breadthPercent >= 40 && tShape.depthCount < 2) {
            const specSkills = getSkillsByTier('specialization').filter(s => hasQuestions(s.id));
            const inProgress = specSkills.filter(s => {
                const p = getSkillProgress(s.id);
                return p.level > 0 && p.level < 3;
            });
            const notStarted = specSkills.filter(s => getSkillProgress(s.id).level === 0);

            inProgress.slice(0, 1).forEach(s => {
                recommendations.push({ skill: s, reason: 'Deepen expertise', priority: 'medium' });
            });
            if (recommendations.length < 3) {
                notStarted.slice(0, 1).forEach(s => {
                    recommendations.push({ skill: s, reason: 'Start specialization', priority: 'medium' });
                });
            }
        }

        // Priority 4: Level up existing skills
        if (recommendations.length < 3) {
            const allSkills = skills.filter(s => hasQuestions(s.id));
            const canLevelUp = allSkills.filter(s => {
                const p = getSkillProgress(s.id);
                const levels = getAvailableLevels(s.id);
                return p.level > 0 && p.level < Math.max(...levels);
            });
            canLevelUp.slice(0, 3 - recommendations.length).forEach(s => {
                recommendations.push({ skill: s, reason: 'Level up', priority: 'low' });
            });
        }

        return recommendations.slice(0, 3);
    }

    // Background
    k.add([
        k.rect(k.width(), k.height()),
        k.color(COLORS.bg),
    ]);

    // Header
    k.add([
        k.rect(k.width(), 60),
        k.color(COLORS.bgLight),
        k.pos(0, 0),
    ]);

    k.add([
        k.text('Skill Tree', { size: 28, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(20, 30),
        k.anchor('left'),
    ]);

    // Back button
    const backBtn = k.add([
        k.rect(100, 40, { radius: 8 }),
        k.color(COLORS.bgLight),
        k.pos(k.width() - 70, 30),
        k.anchor('center'),
        k.area(),
        'button',
    ]);
    k.add([
        k.text('← Back', { size: 16, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() - 70, 30),
        k.anchor('center'),
    ]);
    backBtn.onClick(() => k.go('menu'));

    // Keyboard shortcut for back
    k.onKeyPress('escape', () => k.go('menu'));
    k.onKeyPress('b', () => k.go('menu'));

    // === RIGHT PANEL: T-Shape Progress ===
    const panelX = k.width() - 280;
    const panelWidth = 260;

    k.add([
        k.rect(panelWidth, k.height() - 80),
        k.color(k.rgb(25, 25, 50)),
        k.pos(panelX, 70),
        k.outline(2, COLORS.bgLight),
    ]);

    // Panel title
    k.add([
        k.text('Your T-Shape', { size: 20, font: 'Inter' }),
        k.color(COLORS.gold),
        k.pos(panelX + panelWidth / 2, 95),
        k.anchor('center'),
    ]);

    const tShape = calculateTShape();
    const profile = weaponProfiles.find(p => p.id === gameState.currentProfile) || weaponProfiles[0];

    // Current profile
    k.add([
        k.text(`${profile.icon} ${profile.name}`, { size: 16, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(panelX + panelWidth / 2, 125),
        k.anchor('center'),
    ]);

    // Breadth section
    k.add([
        k.text('━ Breadth (horizontal bar)', { size: 12, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(panelX + 15, 160),
    ]);

    // Literacy bar
    k.add([
        k.text(`📚 Literacy: ${tShape.literacyStarted}/${tShape.literacyTotal}`, { size: 12, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(panelX + 15, 185),
    ]);
    k.add([
        k.rect(panelWidth - 30, 8, { radius: 4 }),
        k.color(k.rgb(40, 40, 70)),
        k.pos(panelX + 15, 205),
    ]);
    if (tShape.literacyPercent > 0) {
        k.add([
            k.rect((panelWidth - 30) * tShape.literacyPercent / 100, 8, { radius: 4 }),
            k.color(TIER_COLORS.literacy),
            k.pos(panelX + 15, 205),
        ]);
    }

    // Foundation bar
    k.add([
        k.text(`🧱 Foundation: ${tShape.foundationStarted}/${tShape.foundationTotal}`, { size: 12, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(panelX + 15, 225),
    ]);
    k.add([
        k.rect(panelWidth - 30, 8, { radius: 4 }),
        k.color(k.rgb(40, 40, 70)),
        k.pos(panelX + 15, 245),
    ]);
    if (tShape.foundationPercent > 0) {
        k.add([
            k.rect((panelWidth - 30) * tShape.foundationPercent / 100, 8, { radius: 4 }),
            k.color(TIER_COLORS.foundation),
            k.pos(panelX + 15, 245),
        ]);
    }

    // Depth section
    k.add([
        k.text('┃ Depth (vertical spike)', { size: 12, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(panelX + 15, 275),
    ]);

    k.add([
        k.text(`🎯 Specializations: ${tShape.specExpert}/${tShape.specTotal} expert`, { size: 12, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(panelX + 15, 300),
    ]);

    // T-shape visualization
    const tShapeY = 340;
    const barColor = tShape.breadthPercent >= 50 ? COLORS.success : COLORS.warning;
    const spikeColor = tShape.depthCount >= 1 ? COLORS.success : COLORS.textMuted;

    // Horizontal bar of T
    const hBarWidth = Math.max(20, (panelWidth - 60) * tShape.breadthPercent / 100);
    k.add([
        k.rect(hBarWidth, 12, { radius: 2 }),
        k.color(barColor),
        k.pos(panelX + (panelWidth - hBarWidth) / 2, tShapeY),
    ]);

    // Vertical spike of T
    const spikeHeight = Math.max(10, 40 * Math.min(tShape.depthCount, 3));
    k.add([
        k.rect(12, spikeHeight, { radius: 2 }),
        k.color(spikeColor),
        k.pos(panelX + panelWidth / 2 - 6, tShapeY + 12),
    ]);

    // Recommendations section
    k.add([
        k.text('💡 Recommended Next', { size: 14, font: 'Inter' }),
        k.color(COLORS.gold),
        k.pos(panelX + 15, 410),
    ]);

    const recommendations = getRecommendations();

    // Random recommendation function
    function pickRandomRecommendation() {
        if (recommendations.length > 0) {
            const randomRec = recommendations[Math.floor(Math.random() * recommendations.length)];
            k.go('skillDetail', { skillId: randomRec.skill.id });
        }
    }

    // Random button (if there are recommendations)
    if (recommendations.length > 0) {
        const randomBtn = k.add([
            k.rect(70, 24, { radius: 4 }),
            k.color(COLORS.bgLight),
            k.pos(panelX + panelWidth - 85, 407),
            k.area(),
            k.outline(1, COLORS.gold),
        ]);
        k.add([
            k.text('(R) Random', { size: 10, font: 'Inter' }),
            k.color(COLORS.gold),
            k.pos(panelX + panelWidth - 50, 419),
            k.anchor('center'),
        ]);
        randomBtn.onClick(pickRandomRecommendation);
        randomBtn.onHover(() => randomBtn.color = COLORS.gold);
        randomBtn.onHoverEnd(() => randomBtn.color = COLORS.bgLight);
    }

    // Keyboard shortcut for random recommendation
    k.onKeyPress('r', pickRandomRecommendation);
    recommendations.forEach((rec, i) => {
        const recY = 440 + i * 70;
        const priorityColor = rec.priority === 'high' ? COLORS.warning :
                             rec.priority === 'medium' ? COLORS.primary : COLORS.textMuted;

        const recBtn = k.add([
            k.rect(panelWidth - 30, 60, { radius: 6 }),
            k.color(COLORS.bgLight),
            k.pos(panelX + 15, recY),
            k.area(),
            k.outline(1, priorityColor),
        ]);

        k.add([
            k.text(rec.skill.name, { size: 12, font: 'Inter', width: panelWidth - 50 }),
            k.color(COLORS.text),
            k.pos(panelX + 25, recY + 12),
        ]);

        const progress = getSkillProgress(rec.skill.id);
        const levels = getAvailableLevels(rec.skill.id);
        const levelStr = progress.level > 0 ? `Lv.${progress.level}` : 'New';

        k.add([
            k.text(`${levelStr} • ${rec.reason}`, { size: 10, font: 'Inter' }),
            k.color(priorityColor),
            k.pos(panelX + 25, recY + 38),
        ]);

        recBtn.onClick(() => k.go('skillDetail', { skillId: rec.skill.id }));
        recBtn.onHover(() => recBtn.color = COLORS.primary);
        recBtn.onHoverEnd(() => recBtn.color = COLORS.bgLight);
    });

    if (recommendations.length === 0) {
        k.add([
            k.text('Great job! Keep leveling\nup your skills.', { size: 12, font: 'Inter' }),
            k.color(COLORS.success),
            k.pos(panelX + 15, 445),
        ]);
    }

    // === LEFT SIDE: Tier tabs (narrower) ===
    const tabY = 90;
    const tabWidth = 140;
    let tabX = 20;

    const tierTabs = [];
    skillTiers.forEach((tier, i) => {
        const tierSkills = getSkillsByTier(tier.id);
        const passedCount = tierSkills.filter(s => {
            const progress = getSkillProgress(s.id);
            return progress.level > 0;
        }).length;

        const tab = k.add([
            k.rect(tabWidth, 50, { radius: 8 }),
            k.color(selectedTier === tier.id ? TIER_COLORS[tier.id] : COLORS.bgLight),
            k.pos(tabX + i * (tabWidth + 8), tabY),
            k.area(),
            k.opacity(selectedTier === tier.id ? 1 : 0.7),
            { tierId: tier.id },
            'tierTab',
        ]);

        k.add([
            k.text(`${tier.icon} ${tier.name}`, { size: 11, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(tabX + i * (tabWidth + 8) + tabWidth / 2, tabY + 18),
            k.anchor('center'),
        ]);

        k.add([
            k.text(`${passedCount}/${tierSkills.length}`, { size: 10, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(tabX + i * (tabWidth + 8) + tabWidth / 2, tabY + 36),
            k.anchor('center'),
        ]);

        tierTabs.push(tab);
    });

    // Skills display area (narrower to fit panel)
    const skillsAreaWidth = panelX - 40;
    const skillsArea = k.add([
        k.rect(skillsAreaWidth, k.height() - 180),
        k.color(k.rgb(20, 20, 45)),
        k.pos(20, 160),
        k.outline(2, COLORS.bgLight),
    ]);

    // Render skills for selected tier
    function renderSkills() {
        // Clear existing skill nodes
        k.get('skillNode').forEach(n => k.destroy(n));
        k.get('skillText').forEach(n => k.destroy(n));

        const tierSkills = getSkillsByTier(selectedTier);
        const cols = 3;
        const nodeWidth = (skillsAreaWidth - 80) / cols;
        const nodeHeight = 80;
        const startX = 40;
        const startY = 190;
        const gapX = 15;
        const gapY = 15;

        tierSkills.forEach((skill, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = startX + col * (nodeWidth + gapX);
            const y = startY + row * (nodeHeight + gapY) - scrollOffset;

            // Skip if outside visible area
            if (y < 150 || y > k.height() - 50) return;

            const hasQ = hasQuestions(skill.id);
            const progress = getSkillProgress(skill.id);
            const levels = getAvailableLevels(skill.id);
            const maxLevel = levels.length > 0 ? Math.max(...levels) : 5;

            // Node background
            const node = k.add([
                k.rect(nodeWidth, nodeHeight, { radius: 8 }),
                k.color(hasQ ? (progress.level > 0 ? TIER_COLORS[selectedTier] : COLORS.bgLight) : k.rgb(25, 25, 45)),
                k.pos(x, y),
                k.area(),
                k.opacity(hasQ ? (progress.level > 0 ? 0.9 : 0.6) : 0.4),
                { skillId: skill.id, hasQuestions: hasQ },
                'skillNode',
            ]);

            // Skill name
            k.add([
                k.text(skill.name, { size: 13, width: nodeWidth - 20, font: 'Inter' }),
                k.color(hasQ ? COLORS.text : COLORS.textMuted),
                k.pos(x + 10, y + 10),
                'skillText',
            ]);

            // Level indicator or Locked
            let levelText;
            let levelColor;
            if (!hasQ) {
                levelText = '🔒 Coming Soon';
                levelColor = COLORS.textMuted;
            } else {
                levelText = progress.level > 0 ? `Lv.${progress.level}/${maxLevel}` : 'Not Started';
                levelColor = progress.level > 0 ? COLORS.gold : COLORS.textMuted;
            }
            k.add([
                k.text(levelText, { size: 11, font: 'Inter' }),
                k.color(levelColor),
                k.pos(x + 10, y + 35),
                'skillText',
            ]);

            // Advanced skill star badge (for skills with level 6-7)
            if (hasQ && maxLevel > 5) {
                // Star badge in upper right corner
                k.add([
                    k.rect(24, 18, { radius: 4 }),
                    k.color(k.rgb(236, 72, 153)), // Pink #ec4899
                    k.pos(x + nodeWidth - 28, y + 4),
                    k.opacity(0.9),
                    'skillText',
                ]);
                k.add([
                    k.text('⭐', { size: 11, font: 'Inter' }),
                    k.pos(x + nodeWidth - 16, y + 13),
                    k.anchor('center'),
                    'skillText',
                ]);
            }

            // Progress bar
            const barWidth = nodeWidth - 20;
            const barHeight = 8;
            k.add([
                k.rect(barWidth, barHeight, { radius: 4 }),
                k.color(k.rgb(40, 40, 70)),
                k.pos(x + 10, y + nodeHeight - 18),
                'skillText',
            ]);

            if (hasQ) {
                const fillWidth = Math.min((progress.level / maxLevel) * barWidth, barWidth);
                if (fillWidth > 0) {
                    k.add([
                        k.rect(fillWidth, barHeight, { radius: 4 }),
                        k.color(COLORS.success),
                        k.pos(x + 10, y + nodeHeight - 18),
                        'skillText',
                    ]);
                }
            }

            // Click handler - all skills are clickable now
            node.onClick(() => {
                if (hasQ) {
                    k.go('skillDetail', { skillId: skill.id });
                } else {
                    showLockedSkillPopup(skill);
                }
            });

            // Hover effect
            node.onHover(() => {
                node.opacity = hasQ ? 1 : 0.6;
            });
            node.onHoverEnd(() => {
                node.opacity = hasQ ? (progress.level > 0 ? 0.9 : 0.6) : 0.4;
            });
        });
    }

    // Popup for locked skills
    function showLockedSkillPopup(skill) {
        // Destroy any existing popup
        k.get('lockedPopup').forEach(p => k.destroy(p));

        const popupWidth = 450;
        const popupHeight = 280;
        const popupX = k.width() / 2 - popupWidth / 2;
        const popupY = k.height() / 2 - popupHeight / 2;

        // Backdrop
        const backdrop = k.add([
            k.rect(k.width(), k.height()),
            k.color(0, 0, 0),
            k.opacity(0.7),
            k.pos(0, 0),
            k.area(),
            k.z(100),
            'lockedPopup',
        ]);

        // Popup panel
        k.add([
            k.rect(popupWidth, popupHeight, { radius: 12 }),
            k.color(COLORS.bgLight),
            k.pos(popupX, popupY),
            k.outline(2, COLORS.warning),
            k.z(101),
            'lockedPopup',
        ]);

        // Title
        k.add([
            k.text(`🔒 ${skill.name}`, { size: 24, font: 'Inter' }),
            k.color(COLORS.warning),
            k.pos(k.width() / 2, popupY + 35),
            k.anchor('center'),
            k.z(102),
            'lockedPopup',
        ]);

        // Message
        k.add([
            k.text('Questions for this skill are being prepared.\nCheck back soon!', { size: 16, font: 'Inter', align: 'center' }),
            k.color(COLORS.textMuted),
            k.pos(k.width() / 2, popupY + 85),
            k.anchor('center'),
            k.z(102),
            'lockedPopup',
        ]);

        // Divider
        k.add([
            k.text('— or —', { size: 14, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(k.width() / 2, popupY + 135),
            k.anchor('center'),
            k.z(102),
            'lockedPopup',
        ]);

        // Override button
        const overrideBtn = k.add([
            k.rect(300, 50, { radius: 8 }),
            k.color(COLORS.primary),
            k.pos(k.width() / 2 - 150, popupY + 160),
            k.area(),
            k.z(102),
            'lockedPopup',
        ]);

        k.add([
            k.text("I already know this stuff!", { size: 16, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(k.width() / 2, popupY + 185),
            k.anchor('center'),
            k.z(103),
            'lockedPopup',
        ]);

        overrideBtn.onHover(() => overrideBtn.color = k.rgb(120, 120, 255));
        overrideBtn.onHoverEnd(() => overrideBtn.color = COLORS.primary);
        overrideBtn.onClick(() => {
            // Show funny phrase and go to skill detail
            const phrase = SKILL_OVERRIDE_PHRASES[Math.floor(Math.random() * SKILL_OVERRIDE_PHRASES.length)];
            k.get('lockedPopup').forEach(p => k.destroy(p));

            // Show the phrase briefly
            const msg = k.add([
                k.text(`"${phrase}"`, { size: 20, font: 'Inter', width: 500 }),
                k.color(COLORS.gold),
                k.pos(k.width() / 2, k.height() / 2),
                k.anchor('center'),
                k.z(200),
            ]);

            k.wait(1.5, () => {
                k.destroy(msg);
                k.go('skillDetail', { skillId: skill.id });
            });
        });

        // Close button
        const closeBtn = k.add([
            k.rect(100, 36, { radius: 6 }),
            k.color(COLORS.bg),
            k.pos(k.width() / 2 - 50, popupY + 225),
            k.area(),
            k.z(102),
            'lockedPopup',
        ]);

        k.add([
            k.text('Close', { size: 14, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(k.width() / 2, popupY + 243),
            k.anchor('center'),
            k.z(103),
            'lockedPopup',
        ]);

        closeBtn.onHover(() => closeBtn.color = COLORS.bgLight);
        closeBtn.onHoverEnd(() => closeBtn.color = COLORS.bg);
        closeBtn.onClick(() => {
            k.get('lockedPopup').forEach(p => k.destroy(p));
        });

        // Close on backdrop click
        backdrop.onClick(() => {
            k.get('lockedPopup').forEach(p => k.destroy(p));
        });

        // ESC to close popup
        const escHandler = k.onKeyPress('escape', () => {
            k.get('lockedPopup').forEach(p => k.destroy(p));
            escHandler.cancel();
        });
    }

    // Tab click handlers
    k.onClick('tierTab', (tab) => {
        selectedTier = tab.tierId;
        scrollOffset = 0;

        // Update tab colors
        k.get('tierTab').forEach(t => {
            t.color = t.tierId === selectedTier ? TIER_COLORS[t.tierId] : COLORS.bgLight;
            t.opacity = t.tierId === selectedTier ? 1 : 0.7;
        });

        renderSkills();
    });

    // Scroll handling
    k.onScroll((delta) => {
        const tierSkills = getSkillsByTier(selectedTier);
        const maxScroll = Math.max(0, Math.ceil(tierSkills.length / 3) * 95 - 400);
        scrollOffset = Math.max(0, Math.min(maxScroll, scrollOffset + delta.y * 30));
        renderSkills();
    });

    // Initial render
    renderSkills();

    // Keyboard hint footer
    k.add([
        k.text('ESC/B: Back  •  R: Random recommendation', { size: 13, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2 - 120, k.height() - 20),
        k.anchor('center'),
        k.opacity(0.7),
    ]);
});

// ============================================================================
// SCENE: Skill Detail
// ============================================================================
k.scene('skillDetail', ({ skillId }) => {
    const skill = skills.find(s => s.id === skillId);
    const progress = getSkillProgress(skillId);
    // Only show levels that actually have questions
    const levels = getAvailableLevels(skillId);
    const tierInfo = getTierInfo(skill.tier);

    // Background
    k.add([
        k.rect(k.width(), k.height()),
        k.color(COLORS.bg),
    ]);

    // Header with tier color
    k.add([
        k.rect(k.width(), 120),
        k.color(TIER_COLORS[skill.tier]),
        k.opacity(0.3),
    ]);

    // Back button
    const backBtn = k.add([
        k.rect(100, 40, { radius: 8 }),
        k.color(COLORS.bgLight),
        k.pos(70, 30),
        k.anchor('center'),
        k.area(),
    ]);
    k.add([
        k.text('← Back', { size: 16, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(70, 30),
        k.anchor('center'),
    ]);
    backBtn.onClick(() => k.go('skillTree'));

    // Keyboard shortcut for back
    k.onKeyPress('escape', () => k.go('skillTree'));
    k.onKeyPress('b', () => k.go('skillTree'));

    // Skill name
    k.add([
        k.text(skill.name, { size: 36, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 50),
        k.anchor('center'),
    ]);

    // Tier badge
    k.add([
        k.text(`${tierInfo.icon} ${tierInfo.name}`, { size: 18, font: 'Inter' }),
        k.color(TIER_COLORS[skill.tier]),
        k.pos(k.width() / 2, 95),
        k.anchor('center'),
    ]);

    // Description
    k.add([
        k.text(skill.description, { size: 16, width: 600, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, 160),
        k.anchor('center'),
    ]);

    const currentLevel = progress.level || 0;
    const maxLevel = levels.length > 0 ? Math.max(...levels) : 0;

    // Level buttons or "No questions" message
    if (levels.length === 0) {
        k.add([
            k.text('📭 No Questions Yet', { size: 28, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(k.width() / 2, 250),
            k.anchor('center'),
        ]);
        k.add([
            k.text('Questions for this skill are being prepared.', { size: 16, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(k.width() / 2, 290),
            k.anchor('center'),
        ]);
    } else {
        // Current progress
        k.add([
            k.text('Your Progress', { size: 24, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(k.width() / 2, 220),
            k.anchor('center'),
        ]);
        k.add([
            k.text(`Level ${currentLevel} / ${maxLevel}`, { size: 32, font: 'Inter' }),
            k.color(COLORS.gold),
            k.pos(k.width() / 2, 260),
            k.anchor('center'),
        ]);
        k.add([
            k.text('Choose Level to Attempt:', { size: 20, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(k.width() / 2, 330),
            k.anchor('center'),
        ]);

        const buttonStartX = k.width() / 2 - (levels.length * 70) / 2;

        // Add "Advanced Levels" indicator if skill has level 6-7
        const hasAdvancedLevels = levels.some(l => l > 5);
        if (hasAdvancedLevels) {
            k.add([
                k.text('⭐ Advanced Path Available', { size: 14, font: 'Inter' }),
                k.color(k.rgb(236, 72, 153)), // Pink
                k.pos(k.width() / 2, 355),
                k.anchor('center'),
            ]);
        }

        levels.forEach((level, i) => {
            const isUnlocked = level <= currentLevel + 1;
            const isPassed = level <= currentLevel;
            const isAdvanced = level > 5;

            // Determine button color based on level type and state
            let btnColor;
            if (isPassed) {
                btnColor = COLORS.success;
            } else if (!isUnlocked) {
                btnColor = COLORS.bgLight;
            } else if (level === 6) {
                btnColor = k.rgb(236, 72, 153); // Pink for Master
            } else if (level === 7) {
                btnColor = k.rgb(20, 184, 166); // Teal for Grandmaster
            } else {
                btnColor = COLORS.primary;
            }

            const btn = k.add([
                k.rect(60, 60, { radius: 8 }),
                k.color(btnColor),
                k.pos(buttonStartX + i * 70, 380),
                k.area(),
                k.opacity(isUnlocked ? 1 : 0.5),
            ]);

            // Add star above advanced level buttons
            if (isAdvanced) {
                k.add([
                    k.text('⭐', { size: 12, font: 'Inter' }),
                    k.pos(buttonStartX + i * 70 + 30, 370),
                    k.anchor('center'),
                    k.opacity(isUnlocked ? 1 : 0.5),
                ]);
            }

            k.add([
                k.text(level.toString(), { size: 24, font: 'Inter' }),
                k.color(COLORS.text),
                k.pos(buttonStartX + i * 70 + 30, 410),
                k.anchor('center'),
            ]);

            if (isUnlocked) {
                btn.onClick(() => {
                    k.go('quiz', { skillId, level });
                });

                btn.onHover(() => btn.opacity = 0.8);
                btn.onHoverEnd(() => btn.opacity = 1);
            }
        });
    }

    // Stats and actions (only if skill has questions)
    if (levels.length > 0) {
        // Placement test: visible when below level 3 and level 3 questions exist
        const showPlacementTest = currentLevel < 3 && levels.includes(3);
        const placementOffset = showPlacementTest ? 60 : 0;

        k.add([
            k.text(`Attempts: ${progress.attempts || 0} | XP Earned: ${progress.xp || 0}`, { size: 16, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(k.width() / 2, 480),
            k.anchor('center'),
        ]);

        if (showPlacementTest) {
            createButton('⚡ Placement Test — Skip to Level 3', k.width() / 2, 530, () => {
                k.go('quiz', { skillId, level: 3 });
            }, COLORS.warning, 380);
        }

        const nextLevel = currentLevel + 1;
        const canStartNext = currentLevel < maxLevel && levels.includes(nextLevel);

        if (canStartNext) {
            createButton(`Start Level ${nextLevel}`, k.width() / 2, 550 + placementOffset, () => {
                k.go('quiz', { skillId, level: nextLevel });
            }, COLORS.success);

            // Keyboard shortcuts to start
            k.onKeyPress('space', () => k.go('quiz', { skillId, level: nextLevel }));
            k.onKeyPress('enter', () => k.go('quiz', { skillId, level: nextLevel }));
        } else if (currentLevel >= maxLevel) {
            k.add([
                k.text('✓ All levels completed!', { size: 20, font: 'Inter' }),
                k.color(COLORS.success),
                k.pos(k.width() / 2, 550 + placementOffset),
                k.anchor('center'),
            ]);
        }
    }

    // Keyboard hint footer
    const canStart = levels.length > 0 && currentLevel < maxLevel && levels.includes(currentLevel + 1);
    const hintText = canStart ? 'ESC/B: Back  •  Space/Enter: Start' : 'ESC/B: Back';
    k.add([
        k.text(hintText, { size: 13, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, k.height() - 30),
        k.anchor('center'),
        k.opacity(0.7),
    ]);
});

// ============================================================================
// SCENE: Quiz
// ============================================================================
k.scene('quiz', ({ skillId, level }) => {
    const skill = skills.find(s => s.id === skillId);
    const quizQuestions = getQuestionsForSkill(skillId, level, 5);

    let currentQuestion = 0;
    let score = 0;
    let streak = 0;
    let answered = false;
    let selectedOption = -1;

    // Track answers for review navigation
    const answersHistory = []; // { selectedIndex, wasCorrect, shuffledOptions }

    // Background
    k.add([
        k.rect(k.width(), k.height()),
        k.color(COLORS.bg),
    ]);

    // Header
    k.add([
        k.rect(k.width(), 80),
        k.color(TIER_COLORS[skill.tier]),
        k.opacity(0.3),
    ]);

    // Exit button
    const exitBtn = k.add([
        k.rect(80, 36, { radius: 6 }),
        k.color(COLORS.bgLight),
        k.pos(20, 22),
        k.area(),
        k.opacity(0.9),
    ]);
    k.add([
        k.text('✕ Exit', { size: 14, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(60, 40),
        k.anchor('center'),
    ]);
    exitBtn.onHover(() => exitBtn.opacity = 1);
    exitBtn.onHoverEnd(() => exitBtn.opacity = 0.9);
    exitBtn.onClick(() => k.go('skillTree'));

    // Previous button (hidden initially, shown after first answer)
    const prevBtn = k.add([
        k.rect(70, 36, { radius: 6 }),
        k.color(COLORS.bgLight),
        k.pos(110, 22),
        k.area(),
        k.opacity(0),
    ]);
    const prevBtnText = k.add([
        k.text('← Prev', { size: 14, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(145, 40),
        k.anchor('center'),
        k.opacity(0),
    ]);
    prevBtn.onHover(() => { if (prevBtn.opacity > 0) prevBtn.opacity = 1; });
    prevBtn.onHoverEnd(() => { if (prevBtn.opacity > 0) prevBtn.opacity = 0.9; });
    prevBtn.onClick(() => {
        if (currentQuestion > 0 && answersHistory.length > 0) {
            currentQuestion--;
            showQuestion();
        }
    });

    // Question indicator dots
    const dotStartX = k.width() / 2 - (quizQuestions.length * 24) / 2;
    const dotY = 100;
    const questionDots = [];
    for (let i = 0; i < quizQuestions.length; i++) {
        const dot = k.add([
            k.circle(8),
            k.color(COLORS.bgLight),
            k.pos(dotStartX + i * 24, dotY),
            k.anchor('center'),
            k.area(),
            k.outline(1, COLORS.textMuted),
            { questionIndex: i },
            'questionDot',
        ]);
        dot.onClick(() => {
            // Only allow clicking on answered questions or current
            if (i < answersHistory.length || i === currentQuestion) {
                currentQuestion = i;
                showQuestion();
            }
        });
        dot.onHover(() => {
            if (i < answersHistory.length || i === currentQuestion) {
                dot.outline.width = 2;
                dot.outline.color = COLORS.primary;
            }
        });
        dot.onHoverEnd(() => {
            updateDotAppearance(dot, i);
        });
        questionDots.push(dot);
    }

    function updateDotAppearance(dot, index) {
        if (index === currentQuestion) {
            dot.color = COLORS.primary;
            dot.outline.color = COLORS.primary;
            dot.outline.width = 2;
        } else if (index < answersHistory.length) {
            const history = answersHistory[index];
            dot.color = history.wasCorrect ? COLORS.success : COLORS.danger;
            dot.outline.color = history.wasCorrect ? COLORS.success : COLORS.danger;
            dot.outline.width = 1;
        } else {
            dot.color = COLORS.bgLight;
            dot.outline.color = COLORS.textMuted;
            dot.outline.width = 1;
        }
    }

    function updateAllDots() {
        questionDots.forEach((dot, i) => updateDotAppearance(dot, i));
    }

    // ESC to exit quiz
    k.onKeyPress('escape', () => k.go('skillTree'));

    k.add([
        k.text(`${skill.name} - Level ${level}`, { size: 24, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(190, 25),
    ]);

    // Progress indicator
    const progressText = k.add([
        k.text(`Question 1/${quizQuestions.length}`, { size: 18, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() - 20, 25),
        k.anchor('topright'),
    ]);

    // Score display
    const scoreText = k.add([
        k.text(`Score: 0 | Streak: 0`, { size: 18, font: 'Inter' }),
        k.color(COLORS.gold),
        k.pos(k.width() - 20, 50),
        k.anchor('topright'),
    ]);

    // Question area
    const questionText = k.add([
        k.text('', { size: 20, width: k.width() - 100, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 140),
        k.anchor('center'),
    ]);

    // Options (compact layout to leave room for explanation panel)
    const optionButtons = [];
    const optionTexts = [];
    const optionNumbers = [];
    const optionY = 220;
    const optionHeight = 55;
    const optionSpacing = 8;
    const optionWidth = k.width() - 200;

    for (let i = 0; i < 4; i++) {
        const btnY = optionY + i * (optionHeight + optionSpacing);
        const btn = k.add([
            k.rect(optionWidth, optionHeight, { radius: 8 }),
            k.color(COLORS.bgLight),
            k.pos(100, btnY),
            k.area(),
            { optionIndex: i },
            'optionBtn',
        ]);

        // Number hint badge
        const numBadge = k.add([
            k.circle(14),
            k.color(COLORS.primary),
            k.pos(128, btnY + optionHeight / 2),
            k.anchor('center'),
            k.opacity(0.8),
        ]);

        const numText = k.add([
            k.text(`${i + 1}`, { size: 14, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(128, btnY + optionHeight / 2),
            k.anchor('center'),
        ]);

        const txt = k.add([
            k.text('', { size: 17, width: optionWidth - 70, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(155, btnY + optionHeight / 2),
            k.anchor('left'),
        ]);

        optionButtons.push(btn);
        optionTexts.push(txt);
        optionNumbers.push({ badge: numBadge, text: numText });
    }

    // Keyboard hint at the bottom
    k.add([
        k.text('1-4: Answer  •  ←/→: Navigate  •  Space/Enter: Next', { size: 14, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, k.height() - 15),
        k.anchor('center'),
        k.opacity(0.7),
    ]);

    // Feedback text (appears in header area, right side)
    const feedbackText = k.add([
        k.text('', { size: 22, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 55),
        k.anchor('center'),
        k.opacity(0),
    ]);

    // Bottom panel for explanation (shown after answer)
    const bottomPanelY = 540;
    const bottomPanelHeight = 120;

    const explanationBg = k.add([
        k.rect(k.width() - 100, bottomPanelHeight, { radius: 8 }),
        k.color(k.rgb(25, 30, 50)),
        k.pos(50, bottomPanelY),
        k.outline(1, COLORS.primary),
        k.opacity(0),
    ]);

    const explanationText = k.add([
        k.text('', { size: 14, width: k.width() - 350, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(70, bottomPanelY + 15),
        k.opacity(0),
    ]);

    // Learn More button (inside bottom panel, right side)
    const learnMoreBtn = k.add([
        k.rect(160, 36, { radius: 6 }),
        k.color(COLORS.secondary),
        k.pos(k.width() - 130, bottomPanelY + bottomPanelHeight / 2),
        k.anchor('center'),
        k.area(),
        k.opacity(0),
    ]);
    const learnMoreText = k.add([
        k.text('📚 Learn More →', { size: 13, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() - 130, bottomPanelY + bottomPanelHeight / 2),
        k.anchor('center'),
        k.opacity(0),
    ]);
    let currentLearnMoreUrl = null;

    learnMoreBtn.onClick(() => {
        if (currentLearnMoreUrl) {
            window.open(currentLearnMoreUrl, '_blank');
        }
    });
    learnMoreBtn.onHover(() => { if (learnMoreBtn.opacity > 0) learnMoreBtn.color = k.rgb(20, 180, 255); });
    learnMoreBtn.onHoverEnd(() => learnMoreBtn.color = COLORS.secondary);

    // Next button (hidden initially)
    const nextBtn = k.add([
        k.rect(200, 50, { radius: 8 }),
        k.color(COLORS.primary),
        k.pos(k.width() / 2, k.height() - 50),
        k.anchor('center'),
        k.area(),
        k.opacity(0),
    ]);
    const nextBtnText = k.add([
        k.text('Next', { size: 20, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, k.height() - 50),
        k.anchor('center'),
        k.opacity(0),
    ]);

    function showQuestion() {
        if (currentQuestion >= quizQuestions.length) {
            // Quiz complete
            SoundSystem.quizComplete();
            k.go('results', { skillId, level, score, total: quizQuestions.length, streak });
            return;
        }

        const q = quizQuestions[currentQuestion];
        const isReviewMode = currentQuestion < answersHistory.length;
        const history = isReviewMode ? answersHistory[currentQuestion] : null;

        answered = isReviewMode;
        selectedOption = isReviewMode ? history.selectedIndex : -1;

        questionText.text = escapeText(q.q);
        progressText.text = `Question ${currentQuestion + 1}/${quizQuestions.length}`;

        // Use stored shuffle for review, or create new shuffle
        let shuffledOptions;
        if (isReviewMode) {
            shuffledOptions = history.shuffledOptions;
        } else {
            // Shuffle options for display (Fisher-Yates shuffle)
            shuffledOptions = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
            for (let i = shuffledOptions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
            }
        }

        shuffledOptions.forEach((opt, i) => {
            optionTexts[i].text = escapeText(opt.text);
            optionButtons[i].optionIndex = opt.originalIndex;

            if (isReviewMode) {
                // In review mode, show the answer state
                const isCorrectOption = opt.originalIndex === q.correct;
                const wasSelected = i === history.selectedDisplayIndex;

                if (isCorrectOption) {
                    optionButtons[i].color = COLORS.success;
                    optionButtons[i].opacity = 1;
                } else if (wasSelected) {
                    optionButtons[i].color = COLORS.danger;
                    optionButtons[i].opacity = 1;
                } else {
                    optionButtons[i].color = COLORS.bgLight;
                    optionButtons[i].opacity = 0.5;
                }
            } else {
                optionButtons[i].color = COLORS.bgLight;
                optionButtons[i].opacity = 1;
            }
        });

        // Update previous button visibility
        if (currentQuestion > 0) {
            prevBtn.opacity = 0.9;
            prevBtnText.opacity = 1;
        } else {
            prevBtn.opacity = 0;
            prevBtnText.opacity = 0;
        }

        // Update question dots
        updateAllDots();

        if (isReviewMode) {
            // Show feedback for reviewed question
            if (history.wasCorrect) {
                feedbackText.text = '✓ Correct';
                feedbackText.color = COLORS.success;
            } else {
                feedbackText.text = '✗ Incorrect';
                feedbackText.color = COLORS.danger;
            }
            feedbackText.opacity = 1;

            // Show explanation if available
            if (q.explanation) {
                explanationBg.opacity = 1;
                explanationText.opacity = 1;
                explanationText.text = escapeText(q.explanation);
            } else {
                explanationBg.opacity = 0;
                explanationText.opacity = 0;
                explanationText.text = '';
            }

            // Show Learn More link if available
            if (q.learnMore && q.learnMore.url) {
                learnMoreBtn.opacity = 1;
                learnMoreText.opacity = 1;
                learnMoreText.text = escapeText(q.learnMore.text) || '📚 Learn More →';
                currentLearnMoreUrl = q.learnMore.url;
            } else {
                learnMoreBtn.opacity = 0;
                learnMoreText.opacity = 0;
                currentLearnMoreUrl = null;
            }

            // Show next button (or "Continue" if more questions ahead)
            nextBtn.opacity = 1;
            nextBtnText.opacity = 1;
            if (currentQuestion === answersHistory.length - 1 && currentQuestion < quizQuestions.length - 1) {
                nextBtnText.text = 'Continue →';
            } else if (currentQuestion >= quizQuestions.length - 1) {
                nextBtnText.text = 'See Results';
            } else {
                nextBtnText.text = 'Next →';
            }
        } else {
            feedbackText.opacity = 0;
            nextBtn.opacity = 0;
            nextBtnText.opacity = 0;

            // Hide explanation elements
            explanationBg.opacity = 0;
            explanationText.opacity = 0;
            explanationText.text = '';
            learnMoreBtn.opacity = 0;
            learnMoreText.opacity = 0;
            currentLearnMoreUrl = null;
        }

        // Store shuffled options for potential review later (for new questions)
        if (!isReviewMode) {
            // Will be stored when answer is selected
            currentShuffledOptions = shuffledOptions;
        }
    }

    // Track current shuffled options for storing in history
    let currentShuffledOptions = null;

    // Streak celebration with particles and emoji
    function showStreakCelebration(reaction) {
        const centerX = k.width() / 2;
        const centerY = k.height() / 2 - 50;

        // Big emoji burst
        const emoji = k.add([
            k.text(reaction.emoji, { size: 120 }),
            k.pos(centerX, centerY),
            k.anchor('center'),
            k.scale(0.1),
            k.opacity(1),
            k.z(200),
            'celebration',
        ]);

        // Caption below emoji
        const caption = k.add([
            k.text(reaction.caption, { size: 32, font: 'Inter' }),
            k.color(COLORS.gold),
            k.pos(centerX, centerY + 90),
            k.anchor('center'),
            k.opacity(0),
            k.z(200),
            'celebration',
        ]);

        // Streak count
        const streakText = k.add([
            k.text(`${reaction.streak} STREAK!`, { size: 24, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(centerX, centerY + 130),
            k.anchor('center'),
            k.opacity(0),
            k.z(200),
            'celebration',
        ]);

        // Animate emoji pop-in
        let elapsed = 0;
        const popDuration = 0.3;
        const holdDuration = 1.2;
        const fadeDuration = 0.4;

        emoji.onUpdate(() => {
            elapsed += k.dt();

            if (elapsed < popDuration) {
                // Pop in with overshoot
                const t = elapsed / popDuration;
                const easeOut = 1 - Math.pow(1 - t, 3);
                const overshoot = Math.sin(t * Math.PI) * 0.3;
                emoji.scale = k.vec2(easeOut + overshoot);
                caption.opacity = t;
                streakText.opacity = t;
            } else if (elapsed < popDuration + holdDuration) {
                // Hold with slight pulse
                const pulseT = (elapsed - popDuration) / holdDuration;
                const pulse = 1 + Math.sin(pulseT * Math.PI * 4) * 0.05;
                emoji.scale = k.vec2(pulse);
            } else if (elapsed < popDuration + holdDuration + fadeDuration) {
                // Fade out
                const t = (elapsed - popDuration - holdDuration) / fadeDuration;
                emoji.opacity = 1 - t;
                emoji.scale = k.vec2(1 + t * 0.5);
                caption.opacity = 1 - t;
                streakText.opacity = 1 - t;
            } else {
                // Clean up
                k.destroy(emoji);
                k.destroy(caption);
                k.destroy(streakText);
            }
        });

        // Spawn confetti particles
        const particleCount = reaction.streak >= 10 ? 40 : (reaction.streak >= 5 ? 25 : 15);
        const colors = [COLORS.gold, COLORS.success, COLORS.primary, COLORS.secondary, k.rgb(255, 100, 150)];

        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount + k.rand(-0.3, 0.3);
            const speed = k.rand(200, 400);
            const size = k.rand(4, 10);
            const color = colors[Math.floor(k.rand(0, colors.length))];

            const particle = k.add([
                k.rect(size, size, { radius: 2 }),
                k.color(color),
                k.pos(centerX, centerY),
                k.anchor('center'),
                k.rotate(k.rand(0, 360)),
                k.opacity(1),
                k.z(199),
                {
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed - 100,
                    rotSpeed: k.rand(-360, 360),
                    life: 0,
                    maxLife: k.rand(0.8, 1.5),
                },
                'celebration',
            ]);

            particle.onUpdate(() => {
                particle.life += k.dt();
                particle.pos.x += particle.vx * k.dt();
                particle.pos.y += particle.vy * k.dt();
                particle.vy += 400 * k.dt(); // gravity
                particle.angle += particle.rotSpeed * k.dt();
                particle.opacity = 1 - (particle.life / particle.maxLife);

                if (particle.life >= particle.maxLife) {
                    k.destroy(particle);
                }
            });
        }
    }

    function handleAnswer(btn) {
        if (answered) return;
        answered = true;

        const q = quizQuestions[currentQuestion];
        const isCorrect = btn.optionIndex === q.correct;

        // Find display index of selected button
        const selectedDisplayIndex = optionButtons.indexOf(btn);

        // Store answer in history
        answersHistory[currentQuestion] = {
            selectedIndex: btn.optionIndex,
            selectedDisplayIndex: selectedDisplayIndex,
            wasCorrect: isCorrect,
            shuffledOptions: currentShuffledOptions,
        };

        if (isCorrect) {
            score++;
            streak++;
            btn.color = COLORS.success;
            feedbackText.text = streak > 1 ? `✓ Correct! Streak: ${streak}` : '✓ Correct!';
            feedbackText.color = COLORS.success;

            // Play sound and check for streak milestone
            const streakReaction = getStreakReaction(streak);
            if (streakReaction) {
                // Play streak sound
                if (streakReaction.sound === 'streak_epic') {
                    SoundSystem.streakEpic();
                } else if (streakReaction.sound === 'streak_big') {
                    SoundSystem.streakBig();
                } else {
                    SoundSystem.streak();
                }
                // Show streak celebration
                showStreakCelebration(streakReaction);
            } else {
                SoundSystem.correct();
            }
        } else {
            streak = 0;
            btn.color = COLORS.danger;
            // Highlight correct answer
            optionButtons.forEach(b => {
                if (b.optionIndex === q.correct) {
                    b.color = COLORS.success;
                }
            });
            feedbackText.text = '✗ Incorrect';
            feedbackText.color = COLORS.danger;
            SoundSystem.incorrect();
        }

        recordAnswer(isCorrect);
        updateStreak(streak);

        scoreText.text = `Score: ${score} | Streak: ${streak}`;

        // Fade other options
        optionButtons.forEach(b => {
            if (b !== btn && b.optionIndex !== q.correct) {
                b.opacity = 0.5;
            }
        });

        // Show feedback and next button
        feedbackText.opacity = 1;
        nextBtn.opacity = 1;
        nextBtnText.opacity = 1;

        // Update dots to show answer result
        updateAllDots();

        // Show explanation if available
        if (q.explanation) {
            explanationBg.opacity = 1;
            explanationText.opacity = 1;
            explanationText.text = escapeText(q.explanation);
        }

        // Show Learn More link if available
        if (q.learnMore && q.learnMore.url) {
            learnMoreBtn.opacity = 1;
            learnMoreText.opacity = 1;
            learnMoreText.text = escapeText(q.learnMore.text) || '📚 Learn More →';
            currentLearnMoreUrl = q.learnMore.url;
        }

        if (currentQuestion >= quizQuestions.length - 1) {
            nextBtnText.text = 'See Results';
        } else {
            nextBtnText.text = 'Next →';
        }
    }

    // Option click handlers
    k.onClick('optionBtn', (btn) => {
        handleAnswer(btn);
    });

    // Option hover effects
    optionButtons.forEach(btn => {
        btn.onHover(() => {
            if (!answered) btn.color = COLORS.primary;
        });
        btn.onHoverEnd(() => {
            if (!answered) btn.color = COLORS.bgLight;
        });
    });

    // Next button click
    nextBtn.onClick(() => {
        currentQuestion++;
        showQuestion();
    });

    // Keyboard shortcuts
    k.onKeyPress('1', () => !answered && handleAnswer(optionButtons[0]));
    k.onKeyPress('2', () => !answered && handleAnswer(optionButtons[1]));
    k.onKeyPress('3', () => !answered && handleAnswer(optionButtons[2]));
    k.onKeyPress('4', () => !answered && handleAnswer(optionButtons[3]));
    k.onKeyPress('enter', () => answered && nextBtn.opacity > 0 && (currentQuestion++, showQuestion()));
    k.onKeyPress('space', () => answered && nextBtn.opacity > 0 && (currentQuestion++, showQuestion()));

    // Navigation shortcuts
    k.onKeyPress('left', () => {
        if (currentQuestion > 0 && answersHistory.length > 0) {
            currentQuestion--;
            showQuestion();
        }
    });
    k.onKeyPress('right', () => {
        if (answered && currentQuestion < answersHistory.length) {
            currentQuestion++;
            showQuestion();
        }
    });

    // Start quiz
    if (quizQuestions.length === 0) {
        questionText.text = 'No questions available for this skill level yet!';
        // Hide all option buttons when no questions
        optionButtons.forEach(btn => btn.hidden = true);
        optionTexts.forEach(txt => txt.hidden = true);
        optionNumbers.forEach(n => { n.badge.hidden = true; n.text.hidden = true; });
        createButton('Back to Skill Tree', k.width() / 2, 400, () => k.go('skillTree'));
    } else {
        showQuestion();
    }
});

// ============================================================================
// SCENE: Results
// ============================================================================
k.scene('results', ({ skillId, level, score, total, streak }) => {
    const skill = skills.find(s => s.id === skillId);
    const passed = score >= Math.ceil(total * 0.6); // 60% to pass
    const perfect = score === total;

    // Calculate XP
    let xpGained = score * 20;
    if (passed) xpGained += 50; // Bonus for passing
    if (perfect) xpGained += 100; // Bonus for perfect
    xpGained += streak * 5; // Streak bonus

    // Update progress
    updateSkillProgress(skillId, level, passed, xpGained);
    calculateProfile();

    // Refresh game state
    gameState = loadState();

    // Get random reaction
    const reaction = getResultReaction(passed, perfect);

    // Background
    k.add([
        k.rect(k.width(), k.height()),
        k.color(COLORS.bg),
    ]);

    // Result header
    const headerColor = perfect ? COLORS.gold : (passed ? COLORS.success : COLORS.danger);

    k.add([
        k.rect(k.width(), 150),
        k.color(headerColor),
        k.opacity(0.3),
    ]);

    // Result title
    const resultTitle = perfect ? '⭐ PERFECT! ⭐' : (passed ? '✓ PASSED!' : '✗ TRY AGAIN');
    k.add([
        k.text(resultTitle, { size: 48, font: 'Inter' }),
        k.color(headerColor),
        k.pos(k.width() / 2, 75),
        k.anchor('center'),
    ]);

    // === REACTION IMAGE PANEL (right side) ===
    const reactionPanelX = k.width() - 320;
    const reactionPanelY = 170;
    const reactionPanelWidth = 300;
    const reactionPanelHeight = 340;
    const maxImageWidth = 260;
    const maxImageHeight = 200;

    // Panel background
    k.add([
        k.rect(reactionPanelWidth, reactionPanelHeight, { radius: 12 }),
        k.color(COLORS.bgLight),
        k.pos(reactionPanelX, reactionPanelY),
        k.outline(2, headerColor),
    ]);

    const imageCenterX = reactionPanelX + reactionPanelWidth / 2;
    const imageCenterY = reactionPanelY + 120;

    // Display reaction based on type
    if (reaction.type === 'emoji') {
        // Large emoji display
        k.add([
            k.text(reaction.emoji, { size: 100 }),
            k.pos(imageCenterX, imageCenterY),
            k.anchor('center'),
        ]);
    } else if (reaction.type === 'image') {
        // Load and display GIF/image with proper scaling
        const imageKey = 'reaction_' + Date.now();
        k.loadSprite(imageKey, reaction.url).then(() => {
            const sprite = k.add([
                k.sprite(imageKey),
                k.pos(imageCenterX, imageCenterY),
                k.anchor('center'),
            ]);

            // Calculate scale to fit within bounds
            const imgWidth = sprite.width;
            const imgHeight = sprite.height;
            const scaleX = maxImageWidth / imgWidth;
            const scaleY = maxImageHeight / imgHeight;
            const finalScale = Math.min(scaleX, scaleY, 1); // Don't upscale
            sprite.scale = k.vec2(finalScale, finalScale);
        }).catch(() => {
            // Fallback to emoji if image fails to load
            k.add([
                k.text(passed ? '🎉' : '😅', { size: 100 }),
                k.pos(imageCenterX, imageCenterY),
                k.anchor('center'),
            ]);
        });
    }

    // Reaction caption
    k.add([
        k.text(reaction.caption, { size: 18, font: 'Inter', width: reactionPanelWidth - 30 }),
        k.color(COLORS.text),
        k.pos(imageCenterX, reactionPanelY + reactionPanelHeight - 60),
        k.anchor('center'),
    ]);

    // === LEFT SIDE: Stats ===
    const leftCenterX = (k.width() - reactionPanelWidth - 40) / 2;

    // Skill info
    k.add([
        k.text(`${skill.name} - Level ${level}`, { size: 24, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(leftCenterX, 200),
        k.anchor('center'),
    ]);

    // Score breakdown
    k.add([
        k.text(`Score: ${score}/${total}`, { size: 36, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(leftCenterX, 270),
        k.anchor('center'),
    ]);

    // Stats
    const statsY = 330;
    const statsSpacing = 32;

    k.add([
        k.text(`Correct Answers: ${score}`, { size: 18, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(leftCenterX, statsY),
        k.anchor('center'),
    ]);

    k.add([
        k.text(`Best Streak: ${streak}`, { size: 18, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(leftCenterX, statsY + statsSpacing),
        k.anchor('center'),
    ]);

    k.add([
        k.text(`XP Earned: +${xpGained}`, { size: 22, font: 'Inter' }),
        k.color(COLORS.gold),
        k.pos(leftCenterX, statsY + statsSpacing * 2),
        k.anchor('center'),
    ]);

    // Level up message
    if (passed) {
        const newProgress = getSkillProgress(skillId);
        k.add([
            k.text(`Skill Level: ${newProgress.level}`, { size: 18, font: 'Inter' }),
            k.color(COLORS.success),
            k.pos(leftCenterX, statsY + statsSpacing * 3),
            k.anchor('center'),
        ]);
    }

    // Buttons
    const buttonY = 520;
    const availableLevels = getAvailableLevels(skillId);
    const maxAvailableLevel = availableLevels.length > 0 ? Math.max(...availableLevels) : 5;
    const hasNextLevel = level < maxAvailableLevel && availableLevels.includes(level + 1);

    if (!passed) {
        // Failed: Try Again + Skill Tree
        createButton('Try Again', leftCenterX - 120, buttonY, () => {
            k.go('quiz', { skillId, level });
        }, COLORS.warning);

        createButton('Skill Tree', leftCenterX + 120, buttonY, () => {
            k.go('skillTree');
        });
    } else if (hasNextLevel) {
        // Passed with next level available: Next Level + Skill Tree
        createButton('Next Level →', leftCenterX - 120, buttonY, () => {
            k.go('quiz', { skillId, level: level + 1 });
        }, COLORS.success);

        createButton('Skill Tree', leftCenterX + 120, buttonY, () => {
            k.go('skillTree');
        });
    } else {
        // Passed at max level: just Skill Tree centered
        createButton('Skill Tree', leftCenterX, buttonY, () => {
            k.go('skillTree');
        });
    }

    createButton('Main Menu', leftCenterX, buttonY + 60, () => {
        k.go('menu');
    }, COLORS.bgLight);
});

// ============================================================================
// SCENE: Profile
// ============================================================================
k.scene('profile', () => {
    const stats = getStats();
    const profile = weaponProfiles.find(p => p.id === gameState.currentProfile) || weaponProfiles[0];

    // Background
    k.add([
        k.rect(k.width(), k.height()),
        k.color(COLORS.bg),
    ]);

    // Header
    k.add([
        k.rect(k.width(), 120),
        k.color(COLORS.primary),
        k.opacity(0.3),
    ]);

    // Back button
    const backBtn = k.add([
        k.rect(100, 40, { radius: 8 }),
        k.color(COLORS.bgLight),
        k.pos(70, 30),
        k.anchor('center'),
        k.area(),
    ]);
    k.add([
        k.text('← Back', { size: 16, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(70, 30),
        k.anchor('center'),
    ]);
    backBtn.onClick(() => k.go('menu'));

    // Profile title
    k.add([
        k.text('Your Profile', { size: 36, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 50),
        k.anchor('center'),
    ]);

    // Player name
    k.add([
        k.text(gameState.playerName, { size: 24, font: 'Inter' }),
        k.color(COLORS.gold),
        k.pos(k.width() / 2, 95),
        k.anchor('center'),
    ]);

    // Weapon profile display
    k.add([
        k.text(profile.icon, { size: 80, font: 'Inter' }),
        k.pos(k.width() / 2, 200),
        k.anchor('center'),
    ]);

    k.add([
        k.text(profile.name, { size: 32, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 260),
        k.anchor('center'),
    ]);

    k.add([
        k.text(profile.description, { size: 16, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, 295),
        k.anchor('center'),
    ]);

    // Stats grid
    const statsStartY = 360;
    const statsCol1X = k.width() / 2 - 200;
    const statsCol2X = k.width() / 2 + 200;
    const statSpacing = 45;

    const statItems = [
        { label: 'Total XP', value: stats.totalXP.toLocaleString(), x: statsCol1X },
        { label: 'Accuracy', value: `${stats.accuracy}%`, x: statsCol2X },
        { label: 'Skills Started', value: stats.skillsStarted, x: statsCol1X },
        { label: 'Skills Passed', value: stats.skillsPassed, x: statsCol2X },
        { label: 'Games Played', value: stats.gamesPlayed, x: statsCol1X },
        { label: 'Best Streak', value: stats.streakBest, x: statsCol2X },
    ];

    statItems.forEach((stat, i) => {
        const row = Math.floor(i / 2);
        k.add([
            k.text(stat.label, { size: 14, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(stat.x, statsStartY + row * statSpacing),
            k.anchor('center'),
        ]);
        k.add([
            k.text(stat.value.toString(), { size: 24, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(stat.x, statsStartY + row * statSpacing + 22),
            k.anchor('center'),
        ]);
    });

    // Tier progress bars
    k.add([
        k.text('Progress by Tier', { size: 20, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 520),
        k.anchor('center'),
    ]);

    const barY = 560;
    const barWidth = 150;
    const barHeight = 20;

    skillTiers.forEach((tier, i) => {
        const tierSkills = getSkillsByTier(tier.id).filter(s => hasQuestions(s.id));
        const passedCount = tierSkills.filter(s => {
            const progress = getSkillProgress(s.id);
            return progress.level > 0;
        }).length;

        const x = 100 + i * (barWidth + 30);

        k.add([
            k.text(tier.icon, { size: 16, font: 'Inter' }),
            k.pos(x + barWidth / 2, barY),
            k.anchor('center'),
        ]);

        k.add([
            k.rect(barWidth, barHeight, { radius: 4 }),
            k.color(k.rgb(40, 40, 70)),
            k.pos(x, barY + 25),
        ]);

        const fillWidth = tierSkills.length > 0 ? (passedCount / tierSkills.length) * barWidth : 0;
        if (fillWidth > 0) {
            k.add([
                k.rect(fillWidth, barHeight, { radius: 4 }),
                k.color(TIER_COLORS[tier.id]),
                k.pos(x, barY + 25),
            ]);
        }

        k.add([
            k.text(`${passedCount}/${tierSkills.length}`, { size: 12, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(x + barWidth / 2, barY + 55),
            k.anchor('center'),
        ]);
    });

    // Reset Progress button
    const resetBtn = k.add([
        k.rect(180, 40, { radius: 8 }),
        k.color(COLORS.danger),
        k.pos(k.width() / 2, k.height() - 40),
        k.anchor('center'),
        k.area(),
        k.opacity(0.8),
    ]);
    k.add([
        k.text('Reset Progress', { size: 16, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, k.height() - 40),
        k.anchor('center'),
    ]);
    resetBtn.onHover(() => resetBtn.opacity = 1);
    resetBtn.onHoverEnd(() => resetBtn.opacity = 0.8);

    // Confirmation dialog state
    let confirmElements = [];
    let confirmVisible = false;

    function showConfirmDialog() {
        if (confirmVisible) return;
        confirmVisible = true;

        const openedAt = Date.now();

        // Overlay
        const overlay = k.add([
            k.rect(k.width(), k.height()),
            k.color(0, 0, 0),
            k.opacity(0.85),
            k.pos(0, 0),
            k.z(100),
            k.area(),
        ]);
        overlay.onClick(() => {
            if (Date.now() - openedAt < 100) return;
            hideConfirmDialog();
        });
        confirmElements.push(overlay);

        // Dialog box
        const dialog = k.add([
            k.rect(400, 200, { radius: 12 }),
            k.color(COLORS.bgLight),
            k.pos(k.width() / 2, k.height() / 2),
            k.anchor('center'),
            k.outline(2, COLORS.danger),
            k.z(101),
            k.area(),
        ]);
        dialog.onClick(() => {});
        confirmElements.push(dialog);

        // Warning icon and title
        confirmElements.push(k.add([
            k.text('⚠️  Reset All Progress?', { size: 24, font: 'Inter' }),
            k.color(COLORS.danger),
            k.pos(k.width() / 2, k.height() / 2 - 55),
            k.anchor('center'),
            k.z(102),
        ]));

        // Message
        confirmElements.push(k.add([
            k.text('This will delete all your XP, skill levels,', { size: 16, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(k.width() / 2, k.height() / 2 - 10),
            k.anchor('center'),
            k.z(102),
        ]));
        confirmElements.push(k.add([
            k.text('and achievements. This cannot be undone!', { size: 16, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(k.width() / 2, k.height() / 2 + 14),
            k.anchor('center'),
            k.z(102),
        ]));

        // Cancel button
        const cancelBtn = k.add([
            k.rect(120, 40, { radius: 8 }),
            k.color(COLORS.bgLight),
            k.pos(k.width() / 2 - 75, k.height() / 2 + 65),
            k.anchor('center'),
            k.outline(2, COLORS.textMuted),
            k.area(),
            k.z(102),
        ]);
        confirmElements.push(cancelBtn);
        confirmElements.push(k.add([
            k.text('Cancel', { size: 16, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(k.width() / 2 - 75, k.height() / 2 + 65),
            k.anchor('center'),
            k.z(103),
        ]));
        cancelBtn.onClick(() => hideConfirmDialog());
        cancelBtn.onHover(() => cancelBtn.opacity = 0.8);
        cancelBtn.onHoverEnd(() => cancelBtn.opacity = 1);

        // Confirm button
        const confirmBtn = k.add([
            k.rect(120, 40, { radius: 8 }),
            k.color(COLORS.danger),
            k.pos(k.width() / 2 + 75, k.height() / 2 + 65),
            k.anchor('center'),
            k.area(),
            k.z(102),
        ]);
        confirmElements.push(confirmBtn);
        confirmElements.push(k.add([
            k.text('Reset', { size: 16, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(k.width() / 2 + 75, k.height() / 2 + 65),
            k.anchor('center'),
            k.z(103),
        ]));
        confirmBtn.onClick(() => {
            resetProgress();
            gameState = loadState();
            hideConfirmDialog();
            k.go('profile'); // Refresh the profile view
        });
        confirmBtn.onHover(() => confirmBtn.opacity = 0.8);
        confirmBtn.onHoverEnd(() => confirmBtn.opacity = 1);
    }

    function hideConfirmDialog() {
        if (!confirmVisible) return;
        confirmVisible = false;
        setTimeout(() => {
            confirmElements.forEach(el => {
                if (el.exists()) k.destroy(el);
            });
            confirmElements = [];
        }, 50);
    }

    resetBtn.onClick(() => showConfirmDialog());

    k.onKeyPress('escape', () => {
        if (confirmVisible) {
            hideConfirmDialog();
        } else {
            k.go('menu');
        }
    });
    k.onKeyPress('b', () => {
        if (!confirmVisible) k.go('menu');
    });
});

// ============================================================================
// HELPER: Create Button
// ============================================================================
function createButton(text, x, y, onClick, color = COLORS.primary, width = 220) {
    const btn = k.add([
        k.rect(width, 50, { radius: 8 }),
        k.color(color),
        k.pos(x, y),
        k.anchor('center'),
        k.area(),
        'button',
    ]);

    k.add([
        k.text(text, { size: 18, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(x, y),
        k.anchor('center'),
    ]);

    btn.onClick(onClick);

    btn.onHover(() => {
        btn.opacity = 0.8;
    });

    btn.onHoverEnd(() => {
        btn.opacity = 1;
    });

    return btn;
}

// ============================================================================
// START GAME
// ============================================================================
// Wait for font to load before starting
k.onLoad(() => {
    k.go('menu');
});
