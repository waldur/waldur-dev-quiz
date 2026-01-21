// Waldur Quest - Main Entry Point
// Uses global variables from skills.js, questions.js, and storage.js

// Initialize KAPLAY with better rendering
const k = kaplay({
    width: 1280,
    height: 720,
    background: [15, 15, 35],
    crisp: false,
    letterbox: true,
    pixelDensity: window.devicePixelRatio || 1,
});

// Load custom font
k.loadFont('Inter', 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2');

// Global game state
let gameState = loadState();

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

    // Menu buttons
    const buttonY = 420;
    const buttonSpacing = 70;

    createButton('Start Quest', k.width() / 2, buttonY, () => {
        k.go('skillTree');
    });

    createButton('My Profile', k.width() / 2, buttonY + buttonSpacing, () => {
        k.go('profile');
    });

    createButton('Quick Challenge', k.width() / 2, buttonY + buttonSpacing * 2, () => {
        // Random skill with questions
        const skillsWithQuestions = skills.filter(s => hasQuestions(s.id));
        if (skillsWithQuestions.length > 0) {
            const randomSkill = skillsWithQuestions[Math.floor(Math.random() * skillsWithQuestions.length)];
            const levels = getAvailableLevels(randomSkill.id);
            const randomLevel = levels[Math.floor(Math.random() * levels.length)];
            k.go('quiz', { skillId: randomSkill.id, level: randomLevel });
        }
    });

    // Player name (bottom)
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

        const tierSkills = getSkillsByTier(selectedTier).filter(s => hasQuestions(s.id));
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

            const progress = getSkillProgress(skill.id);
            const levels = getAvailableLevels(skill.id);
            const maxLevel = levels.length > 0 ? Math.max(...levels) : 1;

            // Node background
            const node = k.add([
                k.rect(nodeWidth, nodeHeight, { radius: 8 }),
                k.color(progress.level > 0 ? TIER_COLORS[selectedTier] : COLORS.bgLight),
                k.pos(x, y),
                k.area(),
                k.opacity(progress.level > 0 ? 0.9 : 0.6),
                { skillId: skill.id },
                'skillNode',
            ]);

            // Skill name
            k.add([
                k.text(skill.name, { size: 13, width: nodeWidth - 20, font: 'Inter' }),
                k.color(COLORS.text),
                k.pos(x + 10, y + 10),
                'skillText',
            ]);

            // Level indicator
            const levelText = progress.level > 0 ? `Lv.${progress.level}/${maxLevel}` : 'Not Started';
            k.add([
                k.text(levelText, { size: 11, font: 'Inter' }),
                k.color(progress.level > 0 ? COLORS.gold : COLORS.textMuted),
                k.pos(x + 10, y + 35),
                'skillText',
            ]);

            // Progress bar
            const barWidth = nodeWidth - 20;
            const barHeight = 8;
            k.add([
                k.rect(barWidth, barHeight, { radius: 4 }),
                k.color(k.rgb(40, 40, 70)),
                k.pos(x + 10, y + nodeHeight - 18),
                'skillText',
            ]);

            const fillWidth = (progress.level / maxLevel) * barWidth;
            if (fillWidth > 0) {
                k.add([
                    k.rect(fillWidth, barHeight, { radius: 4 }),
                    k.color(COLORS.success),
                    k.pos(x + 10, y + nodeHeight - 18),
                    'skillText',
                ]);
            }

            // Click handler
            node.onClick(() => {
                k.go('skillDetail', { skillId: skill.id });
            });

            // Hover effect
            node.onHover(() => {
                node.opacity = 1;
            });
            node.onHoverEnd(() => {
                node.opacity = progress.level > 0 ? 0.9 : 0.6;
            });
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
        const tierSkills = getSkillsByTier(selectedTier).filter(s => hasQuestions(s.id));
        const maxScroll = Math.max(0, Math.ceil(tierSkills.length / 3) * 95 - 400);
        scrollOffset = Math.max(0, Math.min(maxScroll, scrollOffset + delta.y * 30));
        renderSkills();
    });

    // Initial render
    renderSkills();
});

// ============================================================================
// SCENE: Skill Detail
// ============================================================================
k.scene('skillDetail', ({ skillId }) => {
    const skill = skills.find(s => s.id === skillId);
    const progress = getSkillProgress(skillId);
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

    // Current progress
    k.add([
        k.text('Your Progress', { size: 24, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 220),
        k.anchor('center'),
    ]);

    const currentLevel = progress.level || 0;
    k.add([
        k.text(`Level ${currentLevel} / ${Math.max(...levels, 5)}`, { size: 32, font: 'Inter' }),
        k.color(COLORS.gold),
        k.pos(k.width() / 2, 260),
        k.anchor('center'),
    ]);

    // Level buttons
    k.add([
        k.text('Choose Level to Attempt:', { size: 20, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 330),
        k.anchor('center'),
    ]);

    const buttonStartX = k.width() / 2 - (levels.length * 70) / 2;
    levels.forEach((level, i) => {
        const isUnlocked = level <= currentLevel + 1;
        const isPassed = level <= currentLevel;

        const btn = k.add([
            k.rect(60, 60, { radius: 8 }),
            k.color(isPassed ? COLORS.success : (isUnlocked ? COLORS.primary : COLORS.bgLight)),
            k.pos(buttonStartX + i * 70, 380),
            k.area(),
            k.opacity(isUnlocked ? 1 : 0.5),
        ]);

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

    // Stats
    k.add([
        k.text(`Attempts: ${progress.attempts || 0} | XP Earned: ${progress.xp || 0}`, { size: 16, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, 480),
        k.anchor('center'),
    ]);

    // Start button for next level
    if (currentLevel < Math.max(...levels)) {
        const nextLevel = currentLevel + 1;
        if (levels.includes(nextLevel)) {
            createButton(`Start Level ${nextLevel}`, k.width() / 2, 550, () => {
                k.go('quiz', { skillId, level: nextLevel });
            }, COLORS.success);
        }
    } else {
        k.add([
            k.text('✓ All levels completed!', { size: 20, font: 'Inter' }),
            k.color(COLORS.success),
            k.pos(k.width() / 2, 550),
            k.anchor('center'),
        ]);
    }
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

    k.add([
        k.text(`${skill.name} - Level ${level}`, { size: 24, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(115, 25),
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
        k.text('', { size: 22, width: k.width() - 100, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 150),
        k.anchor('center'),
    ]);

    // Options
    const optionButtons = [];
    const optionTexts = [];
    const optionNumbers = [];
    const optionY = 250;
    const optionHeight = 60;
    const optionSpacing = 12;
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
        k.text('Press 1-4 to answer  •  Space/Enter for next', { size: 14, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, k.height() - 15),
        k.anchor('center'),
        k.opacity(0.7),
    ]);

    // Feedback text
    const feedbackText = k.add([
        k.text('', { size: 24, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, k.height() - 200),
        k.anchor('center'),
        k.opacity(0),
    ]);

    // Explanation area (shown after answer)
    const explanationBg = k.add([
        k.rect(k.width() - 160, 80, { radius: 8 }),
        k.color(k.rgb(30, 35, 60)),
        k.pos(80, k.height() - 170),
        k.outline(1, COLORS.primary),
        k.opacity(0),
    ]);

    const explanationText = k.add([
        k.text('', { size: 14, width: k.width() - 200, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(100, k.height() - 160),
        k.opacity(0),
    ]);

    // Learn More link (clickable)
    const learnMoreBtn = k.add([
        k.rect(180, 32, { radius: 6 }),
        k.color(COLORS.secondary),
        k.pos(k.width() - 190, k.height() - 110),
        k.area(),
        k.opacity(0),
    ]);
    const learnMoreText = k.add([
        k.text('📚 Learn More →', { size: 14, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() - 100, k.height() - 94),
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
            k.go('results', { skillId, level, score, total: quizQuestions.length, streak });
            return;
        }

        const q = quizQuestions[currentQuestion];
        answered = false;
        selectedOption = -1;

        questionText.text = q.q;
        progressText.text = `Question ${currentQuestion + 1}/${quizQuestions.length}`;

        // Shuffle options for display (Fisher-Yates shuffle)
        const shuffledOptions = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }

        shuffledOptions.forEach((opt, i) => {
            optionButtons[i].color = COLORS.bgLight;
            optionButtons[i].opacity = 1;
            optionTexts[i].text = opt.text;
            optionButtons[i].optionIndex = opt.originalIndex;
        });

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

    function handleAnswer(btn) {
        if (answered) return;
        answered = true;

        const q = quizQuestions[currentQuestion];
        const isCorrect = btn.optionIndex === q.correct;

        if (isCorrect) {
            score++;
            streak++;
            btn.color = COLORS.success;
            feedbackText.text = streak > 1 ? `✓ Correct! Streak: ${streak}` : '✓ Correct!';
            feedbackText.color = COLORS.success;
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

        // Show explanation if available
        if (q.explanation) {
            explanationBg.opacity = 1;
            explanationText.opacity = 1;
            explanationText.text = q.explanation;
        }

        // Show Learn More link if available
        if (q.learnMore && q.learnMore.url) {
            learnMoreBtn.opacity = 1;
            learnMoreText.opacity = 1;
            learnMoreText.text = q.learnMore.text || '📚 Learn More →';
            currentLearnMoreUrl = q.learnMore.url;
        }

        if (currentQuestion >= quizQuestions.length - 1) {
            nextBtnText.text = 'See Results';
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

    // Start quiz
    if (quizQuestions.length === 0) {
        questionText.text = 'No questions available for this skill level yet!';
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

    // Skill info
    k.add([
        k.text(`${skill.name} - Level ${level}`, { size: 24, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 200),
        k.anchor('center'),
    ]);

    // Score breakdown
    k.add([
        k.text(`Score: ${score}/${total}`, { size: 36, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, 280),
        k.anchor('center'),
    ]);

    // Stats
    const statsY = 350;
    const statsSpacing = 35;

    k.add([
        k.text(`Correct Answers: ${score}`, { size: 20, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, statsY),
        k.anchor('center'),
    ]);

    k.add([
        k.text(`Best Streak: ${streak}`, { size: 20, font: 'Inter' }),
        k.color(COLORS.textMuted),
        k.pos(k.width() / 2, statsY + statsSpacing),
        k.anchor('center'),
    ]);

    k.add([
        k.text(`XP Earned: +${xpGained}`, { size: 24, font: 'Inter' }),
        k.color(COLORS.gold),
        k.pos(k.width() / 2, statsY + statsSpacing * 2),
        k.anchor('center'),
    ]);

    // Level up message
    if (passed) {
        const newProgress = getSkillProgress(skillId);
        k.add([
            k.text(`Skill Level: ${newProgress.level}`, { size: 20, font: 'Inter' }),
            k.color(COLORS.success),
            k.pos(k.width() / 2, statsY + statsSpacing * 3),
            k.anchor('center'),
        ]);
    }

    // Buttons
    const buttonY = 550;
    const hasNextLevel = level < 5;

    if (!passed) {
        // Failed: Try Again + Skill Tree
        createButton('Try Again', k.width() / 2 - 120, buttonY, () => {
            k.go('quiz', { skillId, level });
        }, COLORS.warning);

        createButton('Skill Tree', k.width() / 2 + 120, buttonY, () => {
            k.go('skillTree');
        });
    } else if (hasNextLevel) {
        // Passed with next level available: Next Level + Skill Tree
        createButton('Next Level →', k.width() / 2 - 120, buttonY, () => {
            k.go('quiz', { skillId, level: level + 1 });
        }, COLORS.success);

        createButton('Skill Tree', k.width() / 2 + 120, buttonY, () => {
            k.go('skillTree');
        });
    } else {
        // Passed at max level: just Skill Tree centered
        createButton('Skill Tree', k.width() / 2, buttonY, () => {
            k.go('skillTree');
        });
    }

    createButton('Main Menu', k.width() / 2, buttonY + 60, () => {
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
        if (confirmVisible) hideConfirmDialog();
    });
});

// ============================================================================
// HELPER: Create Button
// ============================================================================
function createButton(text, x, y, onClick, color = COLORS.primary) {
    const btn = k.add([
        k.rect(220, 50, { radius: 8 }),
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
