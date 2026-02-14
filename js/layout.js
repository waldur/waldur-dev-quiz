// Waldur Quest - Viewport Detection & Layout Constants
// Must load before main.js

(function() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const isPortrait = h > w * 1.2;
    const W = isPortrait ? 720 : 1280;
    const H = isPortrait ? 1280 : 720;
    const isMobile = isPortrait || w < 800;

    const pad = isMobile ? 24 : 50;
    const contentW = W - pad * 2;

    window.LAYOUT = {
        W: W,
        H: H,
        isMobile: isMobile,
        isPortrait: isPortrait,
        pad: pad,
        contentW: contentW,

        quiz: {
            progressBarH: 6,
            headerH: 50,
            questionY: isMobile ? 160 : 140,
            questionSize: isMobile ? 20 : 20,
            questionWidth: contentW,
            optionWidth: isMobile ? contentW : W - 200,
            optionHeight: isMobile ? 64 : 55,
            optionStartY: isMobile ? 320 : 240,
            optionSpacing: isMobile ? 12 : 10,
            optionFontSize: isMobile ? 16 : 17,
            checkBtnY: H - (isMobile ? 80 : 60),
            checkBtnH: isMobile ? 56 : 50,
            feedbackBannerH: isMobile ? 280 : 240,
        },

        results: {
            headerH: isMobile ? 120 : 150,
            emojiY: isMobile ? 200 : 180,
            emojiSize: isMobile ? 80 : 100,
            captionY: isMobile ? 290 : 280,
            skillInfoY: isMobile ? 340 : 340,
            scoreY: isMobile ? 390 : 390,
            scoreSize: isMobile ? 48 : 48,
            statsY: isMobile ? 460 : 460,
            primaryBtnY: isMobile ? H - 180 : H - 160,
            secondaryBtnY: isMobile ? H - 110 : H - 90,
            btnWidth: isMobile ? contentW : 320,
            btnHeight: isMobile ? 56 : 50,
        },

        button: {
            minHeight: 48,
            defaultWidth: isMobile ? contentW : 220,
            defaultHeight: isMobile ? 56 : 50,
            fontSize: isMobile ? 18 : 18,
        }
    };

    // Reload on orientation change so layout recalculates
    window.addEventListener('orientationchange', function() {
        setTimeout(function() { location.reload(); }, 300);
    });
})();
