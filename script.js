const horrorMessages = [
    // Japanese Messages
    "あなたの魂は私のもの",
    "死は避けられない",
    "地獄へようこそ",
    "永遠の闇があなたを待っている",
    "あなたの運命は決まった",
    "逃げ場はない",
    "目を閉じても終わらない",
    "ここから出られない",
    "恐怖は始まったばかり",
    "あなたの心は闇に沈む",
    "あなたの影は私のもの",
    "永遠の苦しみが始まる",
    "あなたの声は聞こえない",
    "闇があなたを飲み込む",
    "終わりは始まり",
    
    // Korean Messages
    "당신의 영혼은 이미 죽었습니다",
    "지옥의 문이 열립니다",
    "영원한 고통이 시작됩니다",
    "당신의 선택은 잘못되었습니다",
    "죽음이 당신을 기다립니다",
    "도망칠 수 없어",
    "어둠이 너를 삼킨다",
    "네 목소리는 들리지 않는다",
    "끝없는 악몽이 시작된다",
    "네 마음은 이미 내 것이다",
    "네 그림자는 내 것이다",
    "영원한 고통이 시작된다",
    "네 목소리는 들리지 않아",
    "어둠이 너를 삼킬 거야",
    "끝은 시작이다",
    
    // English Messages
    "YOUR SOUL IS MINE",
    "DEATH IS INEVITABLE",
    "WELCOME TO HELL",
    "ETERNAL DARKNESS AWAITS",
    "YOUR FATE IS SEALED",
    "YOU CANNOT ESCAPE",
    "THE NIGHTMARE NEVER ENDS",
    "I SEE YOU",
    "YOU WILL NEVER WAKE UP",
    "FEAR CONSUMES YOU",
    "TURN OFF THE LIGHT",
    "LOOK BEHIND YOU",
    "I'M IN YOUR ROOM",
    "DON'T TRUST THE SHADOWS",
    "YOUR SCREEN IS MY WINDOW",
    "I CAN HEAR YOUR BREATHING",
    "THE DOOR IS LOCKED",
    "YOUR REFLECTION IS LYING",
    "I'M CLOSER THAN YOU THINK",
    "YOUR MIND IS MINE NOW",
    "THE DARKNESS IS CALLING",
    "YOUR SHADOW BELONGS TO ME",
    "I CAN SEE YOUR FEAR",
    "YOUR SOUL IS LOST",
    "THE VOID AWAITS YOU",
    "YOUR SCREAMS ARE MINE",
    "I'M IN YOUR MIRROR",
    "YOUR DREAMS ARE NIGHTMARES",
    "THE ABYSS STARES BACK",
    "YOUR HOPE IS GONE"
];

const correctMessages = [
    "正解... でも代償は大きい",
    "CORRECT... BUT AT WHAT COST?",
    "맞았지만... 대가가 클 거야",
    "正解... でも地獄は始まった",
    "CORRECT... BUT HELL HAS BEGUN",
    "맞았지만... 지옥이 시작됐어",
    "正解... でも恐怖は続く",
    "CORRECT... BUT THE HORROR CONTINUES",
    "맞았지만... 공포는 계속돼",
    "正解... でも終わりはない"
];

const songLyrics = [
    // Japanese Lyrics
    "暗闇の中で あなたを待っている",
    "永遠の夜が 始まる",
    "あなたの魂は 私のもの",
    "地獄の扉が 開く",
    "恐怖が あなたを包む",
    "終わりのない 悪夢が続く",
    "あなたの心は 闇に沈む",
    "死の影が 近づく",
    "逃げ場は どこにもない",
    "あなたの運命は 決まった",
    "永遠の苦しみが 始まる",
    "あなたの声は 聞こえない",
    "闇が あなたを飲み込む",
    "終わりは 始まり",
    "あなたの影は 私のもの",

    // Korean Lyrics
    "어둠 속에서 당신을 기다려요",
    "영원한 밤이 시작돼요",
    "당신의 영혼은 내 것이에요",
    "지옥의 문이 열려요",
    "공포가 당신을 감싸요",
    "끝없는 악몽이 계속돼요",
    "당신의 마음은 어둠에 잠겨요",
    "죽음의 그림자가 다가와요",
    "도망칠 곳은 없어요",
    "당신의 운명은 정해졌어요",
    "영원한 고통이 시작돼요",
    "당신의 목소리는 들리지 않아요",
    "어둠이 당신을 삼켜요",
    "끝은 시작이에요",
    "당신의 그림자는 내 것이에요",

    // English Lyrics
    "In the darkness I wait for you",
    "The eternal night begins",
    "Your soul belongs to me",
    "The gates of hell open wide",
    "Fear consumes your mind",
    "The nightmare never ends",
    "Your heart sinks into darkness",
    "Death's shadow draws near",
    "There's nowhere to run",
    "Your fate is sealed",
    "Eternal suffering begins",
    "Your voice cannot be heard",
    "The darkness swallows you whole",
    "The end is just the beginning",
    "Your shadow is mine",
    "I can see your fear",
    "Your screams echo in the void",
    "The abyss stares back at you",
    "Your hope fades away",
    "The horror never ends"
];

const options = document.querySelectorAll('.lyric-option');
const horrorMessage = document.getElementById('horrorMessage');
const coverImage = document.getElementById('coverImage');
const body = document.body;

let currentMessageIndex = 0;
let messageQueue = [];

function resetMessageQueue() {
    messageQueue = [...horrorMessages];
    // Shuffle the queue
    for (let i = messageQueue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [messageQueue[i], messageQueue[j]] = [messageQueue[j], messageQueue[i]];
    }
}

// Initialize the queue
resetMessageQueue();

// Function to shake screen
function shakeScreen() {
    document.body.style.animation = 'shake 0.5s';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

// Function to flip screen
function flipScreen() {
    document.body.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        document.body.style.transform = '';
    }, 1000);
}

// Function to show multiple horror messages
function showHorrorMessages() {
    // Show 12-15 random horror messages
    const messageCount = Math.floor(Math.random() * 4) + 12; // Random number between 12-15
    const usedMessages = new Set(); // To avoid duplicate messages

    // Function to create and show a single message
    function createMessage(index) {
        if (index >= messageCount) return; // Stop if we've shown enough messages

        // Get a random message that hasn't been used yet
        let message;
        do {
            message = horrorMessages[Math.floor(Math.random() * horrorMessages.length)];
        } while (usedMessages.has(message));
        usedMessages.add(message);

        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = 'horror-message';
        messageElement.textContent = message;

        // Random position
        const x = Math.random() * (window.innerWidth - 300);
        const y = Math.random() * (window.innerHeight - 100);
        messageElement.style.left = `${x}px`;
        messageElement.style.top = `${y}px`;

        // Random rotation
        const rotation = Math.random() * 40 - 20; // -20 to 20 degrees
        messageElement.style.transform = `rotate(${rotation}deg)`;

        // Random size
        const size = Math.random() * 0.8 + 0.8; // 0.8 to 1.6 times normal size
        messageElement.style.fontSize = `${size}em`;

        document.body.appendChild(messageElement);

        // Remove message after 1.5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 1500);

        // Schedule next message
        setTimeout(() => {
            createMessage(index + 1);
        }, 150); // Show next message after 150ms
    }

    // Start showing messages
    createMessage(0);
}

// Add click event to all options
document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.lyric-option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            console.log('Lyric clicked!'); // Debug log

            // Shake screen
            shakeScreen();

            // Flip screen
            flipScreen();

            // Show blood effect at random position
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            createBloodEffect(randomX, randomY);

            // Show multiple horror messages
            showHorrorMessages();

            // Show more messages after a delay
            setTimeout(() => {
                showHorrorMessages();
            }, 1500);

            // Show even more messages after another delay
            setTimeout(() => {
                showHorrorMessages();
            }, 3000);

            // Show even more messages after another delay
            setTimeout(() => {
                showHorrorMessages();
            }, 4500);
        });
    });
});

// Remove test horror messages button
// document.getElementById('testHorrorMessages').addEventListener('click', () => {
//     showHorrorMessages();
// });

function showHorrorMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'horror-message';
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
    
    // Force a reflow to ensure the animation starts
    messageElement.offsetHeight;
    
    // Show the message
    messageElement.style.display = 'block';
    
    // Remove message after animation
    setTimeout(() => {
        messageElement.remove();
    }, 1500);
}

function showNextHorrorMessage() {
    if (messageQueue.length === 0) {
        resetMessageQueue();
    }
    const message = messageQueue.shift();
    showHorrorMessage(message);
}

function invertColors() {
    body.style.filter = 'invert(1) hue-rotate(180deg)';
    setTimeout(() => {
        body.style.filter = '';
    }, 1000);
}

function bloodEffect() {
    const blood = document.createElement('div');
    blood.className = 'blood-effect';
    document.body.appendChild(blood);
    setTimeout(() => {
        blood.remove();
    }, 1000);
}

function flashScreen() {
    const flash = document.createElement('div');
    flash.className = 'flash';
    document.body.appendChild(flash);
    setTimeout(() => {
        flash.remove();
    }, 200);
}

function distortText() {
    const elements = document.querySelectorAll('.lyric-option');
    elements.forEach(element => {
        element.style.transform = 'skew(10deg, 10deg)';
        element.style.textShadow = '2px 2px #ff0000';
        setTimeout(() => {
            element.style.transform = '';
            element.style.textShadow = '';
        }, 500);
    });
}

// Add hover effect to cover image
coverImage.addEventListener('mouseover', () => {
    coverImage.style.filter = 'grayscale(100%) brightness(50%) hue-rotate(180deg)';
    // Add blood effect on hover
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    createBloodEffect(randomX, randomY);
    // Flash screen
    flashScreen();
});

coverImage.addEventListener('mouseout', () => {
    coverImage.style.filter = 'grayscale(50%) brightness(80%)';
});

// Add hover effect to options
document.querySelectorAll('.lyric-option').forEach(option => {
    option.addEventListener('mouseover', () => {
        option.style.backgroundColor = '#ff0000';
        option.style.color = '#000000';
        option.style.transform = 'scale(1.1)';
        // Add blood effect
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        createBloodEffect(randomX, randomY);
    });

    option.addEventListener('mouseout', () => {
        option.style.backgroundColor = '#fff';
        option.style.color = '#000000';
        option.style.transform = 'scale(1)';
    });
});

// Add video toggle functionality
const toggleVideoButton = document.getElementById('toggleVideo');
const playerContainer = document.querySelector('.player-container');

toggleVideoButton.addEventListener('click', () => {
    if (playerContainer.style.display === 'none') {
        playerContainer.style.display = 'block';
        coverImage.style.display = 'none';
        toggleVideoButton.style.display = 'none';
        // Add horror effects when showing video
        bloodEffect();
        flashScreen();
        shakeScreen();
        invertColors();
    } else {
        playerContainer.style.display = 'none';
        coverImage.style.display = 'block';
        toggleVideoButton.style.display = 'flex';
    }
});

// Function to create blood effect
function createBloodEffect(x, y) {
    const blood = document.createElement('div');
    blood.className = 'blood-splash';
    blood.style.left = x + 'px';
    blood.style.top = y + 'px';
    blood.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(blood);

    // Remove blood effect after animation
    setTimeout(() => {
        blood.remove();
    }, 2000);
}

// Modify the checkAnswer function to use the new message system
function checkAnswer(selectedOption) {
    console.log('Answer checked');
    const selectedText = selectedOption.textContent;
    const correctAnswer = currentLyric;

    // Always play error sound for horror effect
    const errorSound = new Audio('sounds/error.mp3');
    errorSound.play();

    // Always show blood effect at random position
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    createBloodEffect(randomX, randomY);

    // Show multiple horror messages
    showHorrorMessages();

    // Show more messages after a delay
    setTimeout(() => {
        showHorrorMessages();
    }, 1500);

    // Show even more messages after another delay
    setTimeout(() => {
        showHorrorMessages();
    }, 3000);

    // Show even more messages after another delay
    setTimeout(() => {
        showHorrorMessages();
    }, 4500);

    if (selectedText === correctAnswer) {
        // Increase score silently
        score++;
        updateScore();
        
        // Show next question after longer delay
        setTimeout(() => {
            showNextQuestion();
        }, 7000); // Increased delay to allow all messages to be seen
    } else {
        // Decrease score
        score = Math.max(0, score - 1);
        updateScore();
    }
} 