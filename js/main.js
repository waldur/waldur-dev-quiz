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
});

// ============================================================================
// SCENE: Skill Tree
// ============================================================================
k.scene('skillTree', () => {
    let selectedTier = 'literacy';
    let scrollOffset = 0;

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

    // Tier tabs
    const tabY = 90;
    const tabWidth = 180;
    let tabX = 50;

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
            k.pos(tabX + i * (tabWidth + 10), tabY),
            k.area(),
            k.opacity(selectedTier === tier.id ? 1 : 0.7),
            { tierId: tier.id },
            'tierTab',
        ]);

        k.add([
            k.text(`${tier.icon} ${tier.name}`, { size: 14, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(tabX + i * (tabWidth + 10) + tabWidth / 2, tabY + 18),
            k.anchor('center'),
        ]);

        k.add([
            k.text(`${passedCount}/${tierSkills.length}`, { size: 12, font: 'Inter' }),
            k.color(COLORS.textMuted),
            k.pos(tabX + i * (tabWidth + 10) + tabWidth / 2, tabY + 38),
            k.anchor('center'),
        ]);

        tierTabs.push(tab);
    });

    // Skills display area
    const skillsArea = k.add([
        k.rect(k.width() - 40, k.height() - 180),
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
        const cols = 4;
        const nodeWidth = 280;
        const nodeHeight = 80;
        const startX = 60;
        const startY = 190;
        const gapX = 20;
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
                k.text(skill.name, { size: 14, width: nodeWidth - 20, font: 'Inter' }),
                k.color(COLORS.text),
                k.pos(x + 10, y + 12),
                'skillText',
            ]);

            // Level indicator
            const levelText = progress.level > 0 ? `Lv.${progress.level}/${maxLevel}` : 'Not Started';
            k.add([
                k.text(levelText, { size: 12, font: 'Inter' }),
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
        const maxScroll = Math.max(0, Math.ceil(tierSkills.length / 4) * 95 - 400);
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

    k.add([
        k.text(`${skill.name} - Level ${level}`, { size: 24, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(20, 25),
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
    const optionY = 280;
    const optionHeight = 70;
    const optionWidth = k.width() - 200;

    for (let i = 0; i < 4; i++) {
        const btn = k.add([
            k.rect(optionWidth, optionHeight, { radius: 8 }),
            k.color(COLORS.bgLight),
            k.pos(100, optionY + i * (optionHeight + 15)),
            k.area(),
            { optionIndex: i },
            'optionBtn',
        ]);

        const txt = k.add([
            k.text('', { size: 18, width: optionWidth - 40, font: 'Inter' }),
            k.color(COLORS.text),
            k.pos(120, optionY + i * (optionHeight + 15) + optionHeight / 2),
            k.anchor('left'),
        ]);

        optionButtons.push(btn);
        optionTexts.push(txt);
    }

    // Feedback text
    const feedbackText = k.add([
        k.text('', { size: 24, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, k.height() - 100),
        k.anchor('center'),
        k.opacity(0),
    ]);

    // Next button (hidden initially)
    const nextBtn = k.add([
        k.rect(200, 50, { radius: 8 }),
        k.color(COLORS.primary),
        k.pos(k.width() / 2, k.height() - 40),
        k.anchor('center'),
        k.area(),
        k.opacity(0),
    ]);
    const nextBtnText = k.add([
        k.text('Next', { size: 20, font: 'Inter' }),
        k.color(COLORS.text),
        k.pos(k.width() / 2, k.height() - 40),
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

        // Shuffle options for display
        const shuffledOptions = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
        // Keep track of correct answer after shuffle
        const correctOriginalIndex = q.correct;

        shuffledOptions.forEach((opt, i) => {
            optionButtons[i].color = COLORS.bgLight;
            optionButtons[i].opacity = 1;
            optionTexts[i].text = opt.text;
            optionButtons[i].optionIndex = opt.originalIndex;
        });

        feedbackText.opacity = 0;
        nextBtn.opacity = 0;
        nextBtnText.opacity = 0;
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

    if (!passed) {
        createButton('Try Again', k.width() / 2 - 120, buttonY, () => {
            k.go('quiz', { skillId, level });
        }, COLORS.warning);
    }

    createButton('Skill Tree', k.width() / 2 + (passed ? 0 : 120), buttonY, () => {
        k.go('skillTree');
    });

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
