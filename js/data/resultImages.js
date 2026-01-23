// Result reaction images - displayed on quiz completion
// Uses a mix of emoji reactions and hosted images

const RESULT_REACTIONS = {
    // Positive reactions for passing/perfect scores
    positive: [
        {
            type: 'emoji',
            emoji: '🎉',
            caption: "You're on fire!"
        },
        {
            type: 'emoji',
            emoji: '🚀',
            caption: "To the moon!"
        },
        {
            type: 'emoji',
            emoji: '💪',
            caption: "Absolute unit!"
        },
        {
            type: 'emoji',
            emoji: '🏆',
            caption: "Champion material!"
        },
        {
            type: 'emoji',
            emoji: '🌟',
            caption: "Star performer!"
        },
        {
            type: 'emoji',
            emoji: '🧠',
            caption: "Big brain energy!"
        },
        {
            type: 'emoji',
            emoji: '👑',
            caption: "Royalty detected!"
        },
        {
            type: 'emoji',
            emoji: '🔥',
            caption: "Straight fire!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/g9582DNuQppxC/giphy.gif',
            caption: "Nailed it!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif',
            caption: "Success!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
            caption: "You did it!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif',
            caption: "Brilliant!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
            caption: "Awesome!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/YRuFixSNWFVcXaxpmX/giphy.gif',
            caption: "Great job!"
        },
    ],

    // Negative reactions for failing
    negative: [
        {
            type: 'emoji',
            emoji: '😅',
            caption: "Almost had it!"
        },
        {
            type: 'emoji',
            emoji: '🤔',
            caption: "Hmm, interesting approach..."
        },
        {
            type: 'emoji',
            emoji: '😬',
            caption: "Well, that happened..."
        },
        {
            type: 'emoji',
            emoji: '🙈',
            caption: "We don't talk about this"
        },
        {
            type: 'emoji',
            emoji: '☕',
            caption: "Maybe try after coffee?"
        },
        {
            type: 'emoji',
            emoji: '🤷',
            caption: "It be like that sometimes"
        },
        {
            type: 'emoji',
            emoji: '💀',
            caption: "RIP that attempt"
        },
        {
            type: 'emoji',
            emoji: '🫠',
            caption: "Melting from effort"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/3o6wrebnKWmvx4ZBio/giphy.gif',
            caption: "This is fine..."
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/3o7TKnO6Wve6502iJ2/giphy.gif',
            caption: "Next time!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif',
            caption: "Oops!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
            caption: "Keep trying!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
            caption: "So close!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif',
            caption: "Don't give up!"
        },
    ],

    // Perfect score reactions (extra special)
    perfect: [
        {
            type: 'emoji',
            emoji: '🏅',
            caption: "FLAWLESS VICTORY!"
        },
        {
            type: 'emoji',
            emoji: '🦸',
            caption: "Superhero status!"
        },
        {
            type: 'emoji',
            emoji: '🎯',
            caption: "Bullseye! Perfect!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif',
            caption: "PERFECT!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/3o6fJ1BM7R2EBRDnxK/giphy.gif',
            caption: "Legendary!"
        },
        {
            type: 'image',
            url: 'https://media.giphy.com/media/xT77XWum9yH7zNkFW0/giphy.gif',
            caption: "Mind = Blown!"
        },
    ]
};

// Streak milestone reactions (shown during quiz)
const STREAK_REACTIONS = {
    3: [
        { emoji: '🔥', caption: "On fire!", sound: 'streak' },
        { emoji: '⚡', caption: "Lightning fast!", sound: 'streak' },
        { emoji: '💥', caption: "Boom!", sound: 'streak' },
    ],
    5: [
        { emoji: '🌟', caption: "Superstar!", sound: 'streak_big' },
        { emoji: '🚀', caption: "Unstoppable!", sound: 'streak_big' },
        { emoji: '💪', caption: "Beast mode!", sound: 'streak_big' },
        { emoji: '🎯', caption: "Sharpshooter!", sound: 'streak_big' },
    ],
    10: [
        { emoji: '👑', caption: "LEGENDARY!", sound: 'streak_epic' },
        { emoji: '🏆', caption: "CHAMPION!", sound: 'streak_epic' },
        { emoji: '🦸', caption: "SUPERHERO!", sound: 'streak_epic' },
        { emoji: '🔱', caption: "GODLIKE!", sound: 'streak_epic' },
    ]
};

// Get streak milestone if applicable
function getStreakMilestone(streak) {
    if (streak >= 10 && streak % 5 === 0) return 10; // Every 5 after 10
    if (streak === 10) return 10;
    if (streak === 5) return 5;
    if (streak === 3) return 3;
    return null;
}

// Get a random streak reaction for a milestone
function getStreakReaction(streak) {
    const milestone = getStreakMilestone(streak);
    if (!milestone) return null;
    const pool = STREAK_REACTIONS[milestone] || STREAK_REACTIONS[10];
    return { ...pool[Math.floor(Math.random() * pool.length)], streak };
}

// Get a random reaction based on result
function getResultReaction(passed, perfect) {
    let pool;
    if (perfect) {
        pool = RESULT_REACTIONS.perfect;
    } else if (passed) {
        pool = RESULT_REACTIONS.positive;
    } else {
        pool = RESULT_REACTIONS.negative;
    }
    return pool[Math.floor(Math.random() * pool.length)];
}
