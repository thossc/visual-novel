console.log("idkwhatisthislol.com loaded. welcome to chaos.");

// DOM Elements
const chaosButton = document.getElementById('chaosButton');
const clickCounter = document.getElementById('clickCounter');
const actionResult = document.getElementById('actionResult');
const ventInput = document.getElementById('ventInput');
const ventSubmit = document.getElementById('ventSubmit');
const ventContainer = document.getElementById('ventContainer');
const rickrollBtn = document.getElementById('rickroll');
const darkModeBtn = document.getElementById('darkMode');
const panicBtn = document.getElementById('panic');

// State
let clickCount = localStorage.getItem('clickCount') || 0;
clickCounter.textContent = clickCount;
let isDarkestMode = false;

// Meme URLs (use these or replace with your own)
const memeUrls = [
    'https://media.tenor.com/images/2f87ec4b2cb378b5e3c4b2e5c5f5b5e0/tenor.gif',
    'https://media.tenor.com/images/3b388fe03daa4b3b3c55b5e5c5f5b5e0/tenor.gif',
    'https://media.tenor.com/images/4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b/tenor.gif',
    'https://i.imgur.com/Vy5Yq5j.jpg',
    'https://i.imgur.com/5Z5Z5Z5.jpg',
    'https://i.imgur.com/8L8L8L8.jpg'
];

// Random messages
const messages = [
    "bruh moment activated",
    "your computer is now 0.0001% slower. youre welcome.",
    "did you know? i dont know thats why im asking u.",
    "this button does nothing. just like your last brain cell.",
    "mom help me",
    "your screen time is up by 300% today. impressive.",
    "go drink some water, you dry sponge.",
    "wow look behind you",
    "your posture is giving shrimp vibes. sit up.",
    "im literally burned up gng",
    "this website is a cry for help. and were listening.",
    "couldnt give less of a shit whenever im rudely interrupting",
    "let me out",
    "im theoretically gay",
    "you could be doing literally anything else right now."
];

// Chaos actions
const chaosActions = [
    () => {
        // Change to random gradient
        const gradients = [
            'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
            'linear-gradient(135deg, #ff00ff, #ffff00)',
            'linear-gradient(90deg, #00ffff, #ff00ff)',
            'linear-gradient(180deg, #000000, #8b00ff)'
        ];
        const gradient = gradients[Math.floor(Math.random() * gradients.length)];
        document.body.style.background = gradient;
        showResult("wpw cool background, wonder that bullet of your isnt going straight");
    },
    () => {
        // Show random meme
        const memeUrl = memeUrls[Math.floor(Math.random() * memeUrls.length)];
        const img = document.createElement('img');
        img.src = memeUrl;
        img.alt = 'random chaos meme';
        img.className = 'meme-image';
        img.onerror = () => {
            showResult("meme failed to load. just like my will to live.");
        };
        showResult("here, have some shit to fuel your procrastination:", img);
    },
    () => {
        // Play random sound (using free sound library)
        const sounds = [
            'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-cartoon-tile-whine-1092.mp3',
            'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3'
        ];
        const sound = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
        sound.volume = 0.3;
        sound.play().catch(e => console.log("sound failed (probably autoplay block)"));
        showResult("played a sound. hope you weren't in a library.");
    },
    () => {
        // Random fun fact
        const facts = [
            "octopuses have three hearts.",
            "a group of flamingos is called a 'flamboyance'.",
            "honey never spoils. archaeologists have found 3000-year-old honey that's still good.",
            "bananas are berries, but strawberries aren't.",
            "the shortest war in history was 38 minutes long."
        ];
        const fact = facts[Math.floor(Math.random() * facts.length)];
        showResult(`fucking useless fun fact: ${fact}`);
    },
    () => {
        // Make everything shake
        document.body.classList.add('shake');
        showResult("everything is shaking i wonder why? you did this.");
        setTimeout(() => document.body.classList.remove('shake'), 1000);
    },
    () => {
        // Random color text
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        actionResult.style.color = color;
        showResult(`changed text color to ${color}. wow very aesthetic.`);
    },
    () => {
        // Fake error message
        const errors = [
            "nigga what stfu just refresh shit",
            "hey??",
            "procrastinatioanas ugh whatever is it called'",
            "might need to look through your dms"
        ];
        const error = errors[Math.floor(Math.random() * errors.length)];
        showResult(`insert skull emoji ${error}`);
    },
    () => {
        // Random compliment/roast
        const roasts = [
            "youre (not) doing great.",
            "you look dumb as hell js like yesterday ",
            "why are you reading this?",
            "wow gang youre like a cloud. when you disappear, its a beautiful day."
        ];
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        showResult(roast);
    }
];

// Event Listeners
chaosButton.addEventListener('click', triggerChaos);
ventSubmit.addEventListener('click', postVent);
ventInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') postVent();
});

rickrollBtn.addEventListener('click', () => {
    document.getElementById('secret').style.display = 'block';
    showResult("prolly need something to relax to... (rickroll activated)");
    setTimeout(() => {
        document.getElementById('secret').style.display = 'none';
    }, 10000);
});

darkModeBtn.addEventListener('click', () => {
    if (!isDarkestMode) {
        document.body.style.background = '#000';
        document.body.style.color = '#000';
        setTimeout(() => {
            document.body.style.color = '#00ff88';
            showResult("dark mode: activated (it's just blacker black)");
        }, 100);
        isDarkestMode = true;
    } else {
        document.body.style.background = '';
        document.body.style.color = '';
        showResult("dark mode: deactivated (welcome back to slightly less dark)");
        isDarkestMode = false;
    }
});

panicBtn.addEventListener('click', () => {
    // Trigger all chaos at once
    document.body.style.background = 'linear-gradient(45deg, #ff0000, #ffff00, #ff0000)';
    chaosButton.style.animation = 'shake 0.5s infinite';
    actionResult.innerHTML = '<div class="glitch-text" data-text="uh idk ig?">uh cool ig</div>';
    
    setTimeout(() => {
        chaosButton.style.animation = '';
        showResult("uh its over ig. that was not even intense huh.");
    }, 3000);
});

// Functions
function triggerChaos() {
    clickCount++;
    clickCounter.textContent = clickCount;
    localStorage.setItem('clickCount', clickCount);
    
    // Random action
    const action = chaosActions[Math.floor(Math.random() * chaosActions.length)];
    action();
    
    // Random button text sometimes
    if (Math.random() > 0.7) {
        const buttonTexts = [
            "press again, i dare you",
            "more of something stupid please",
            "you're addicted to this",
            "seriously? again?",
            "ok we get it, you like buttons"
        ];
        chaosButton.querySelector('.button-text').textContent = 
            buttonTexts[Math.floor(Math.random() * buttonTexts.length)];
    }
}

function showResult(text, element = null) {
    actionResult.innerHTML = '';
    const textEl = document.createElement('p');
    textEl.textContent = text;
    actionResult.appendChild(textEl);
    
    if (element) {
        actionResult.appendChild(element);
    }
    
    // Add timestamp
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const timeEl = document.createElement('small');
    timeEl.textContent = ` @ ${time}`;
    timeEl.style.opacity = '0.6';
    actionResult.appendChild(timeEl);
}

function postVent() {
    const text = ventInput.value.trim();
    if (!text) return;
    
    const ventEl = document.createElement('div');
    ventEl.className = 'vent-message';
    ventEl.textContent = text;
    
    ventContainer.prepend(ventEl);
    ventInput.value = '';
    
    // Remove after animation
    setTimeout(() => {
        if (ventEl.parentNode) {
            ventEl.remove();
        }
    }, 5000);
}

// Easter egg: konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showResult("wow you really did that, konami code is it, who told you ts shit?");
        document.body.style.background = 'linear-gradient(45deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff)';
        setTimeout(() => {
            document.body.style.background = '';
        }, 5000);
        konamiCode = [];
    }
});

setTimeout(() => {
    showResult("welcome to idkwhatisthislol.com. press the button for something. or don't. whatever.");
}, 1000);
