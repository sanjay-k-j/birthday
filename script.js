// Romantic Website JavaScript - A Digital Love Sanctuary
// Created with love for your special someone 💕

// Configuration
const CONFIG = {
    password: "Muddu", // Change this to your special word
    typewriterSpeed: 100,
    heartTrailDuration: 2000,
    quotesInterval: 5000,
    musicEnabled: false
};

// Love reasons array - customize these with your own reasons
const loveReasons = [
    "The way you light up my world with your beautiful smile ✨",
    "How you make even the most ordinary moments feel magical 🌟",
    "Your laugh - it's my favorite sound in the entire universe 🎵",
    "The way you hold my hand like you never want to let go 💕",
    "How you make me feel like the luckiest person alive every single day 🍀",
    "Your beautiful eyes that see right into my soul 👁️‍🗨️",
    "The way you scrunch your nose when you're thinking 😊",
    "How you dance in the kitchen when you think no one's watching 💃",
    "Your incredible kindness that makes everyone around you smile 🌸",
    "The way you remember all the little things that matter to me 💭",
    "How you make me want to be a better person every day 🌱",
    "Your adorable morning voice that makes my heart flutter 🌅",
    "The way you steal my hoodies and look better in them than I do 👕",
    "How you always know exactly what to say when I need comfort 🤗",
    "Your incredible strength that inspires me constantly 💪",
    "The way you make me laugh until my stomach hurts 😂",
    "How you love with your whole heart, completely and fearlessly ❤️",
    "Your beautiful dreams and the way you chase them with passion 🌙",
    "The way you make every day feel like an adventure 🗺️",
    "How perfectly you fit in my arms, like you were made for me 🤲"
];

// Love quotes array
const loveQuotes = [
    "In all the world, there is no heart for me like yours. — Maya Angelou",
    "You're my favorite notification 📱💕",
    "I love you more than yesterday, but less than tomorrow 💫",
    "You are my today and all of my tomorrows 🌅",
    "Every love story is beautiful, but ours is my favorite 📚💖",
    "You're the reason I believe in love at first sight 👀💕",
    "Home is wherever I'm with you 🏠❤️",
    "You make my heart skip beats and my soul dance 💃✨"
];

// Typewriter messages
const typewriterMessages = [
    "Words can't describe the feelings you initiated in my soul... 💕",
    "Welcome to our digital love sanctuary, beautiful ✨",
    "Every pixel on this page was crafted with love for you 🎨",
    "You are the poetry my heart has been trying to write 📝💖"
];

// Global variables
let currentReasonIndex = 0;
let currentQuoteIndex = 0;
let currentTypewriterIndex = 0;
let musicAudio = null;
let isPasswordCorrect = false;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    console.log('💕 Initializing romantic website...');
    
    // Set up password protection
    setupPasswordProtection();
    
    // Initialize cursor effects
    initializeCursor();
    
    // Create floating hearts background
    createFloatingHearts();
    
    // Setup music toggle
    setupMusicToggle();
    
    // Setup navigation
    setupNavigation();
    
    // Setup love reasons functionality
    setupLoveReasons();
    
    // Start quote carousel
    startQuoteCarousel();
    
    // Add event listeners
    addEventListeners();
    
    console.log('✨ Website initialized with love!');
}

// Password Protection
function setupPasswordProtection() {
    const passwordScreen = document.getElementById('passwordScreen');
    const passwordInput = document.getElementById('passwordInput');
    
    if (!passwordScreen || !passwordInput) return;
    
    // Add enter key listener
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    // Add input animation
    passwordInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    passwordInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
}

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordScreen = document.getElementById('passwordScreen');
    const mainContent = document.getElementById('mainContent');
    const curtainLeft = document.getElementById('curtainLeft');
    const curtainRight = document.getElementById('curtainRight');
    
    if (!passwordInput || !passwordScreen) return;
    
    const enteredPassword = passwordInput.value.toLowerCase().trim();
    
    if (enteredPassword === CONFIG.password.toLowerCase()) {
        isPasswordCorrect = true;
        
        // Success animation
        passwordInput.style.borderColor = '#28a745';
        passwordInput.style.boxShadow = '0 0 20px rgba(40, 167, 69, 0.5)';
        
        // Create success hearts
        createSuccessHearts();
        
        setTimeout(() => {
            // Hide password screen
            passwordScreen.style.opacity = '0';
            passwordScreen.style.transform = 'scale(0.8)';
            
            // Show curtains
            if (curtainLeft && curtainRight) {
                curtainLeft.classList.add('show');
                curtainRight.classList.add('show');
            }
            
            setTimeout(() => {
                passwordScreen.style.display = 'none';
                
                // Hide curtains and show main content
                setTimeout(() => {
                    if (curtainLeft && curtainRight) {
                        curtainLeft.classList.remove('show');
                        curtainRight.classList.remove('show');
                    }
                    
                    if (mainContent) {
                        mainContent.classList.add('visible');
                    }
                    
                    // Start typewriter effect
                    setTimeout(() => {
                        startTypewriterEffect();
                    }, 1000);
                    
                }, 1500);
            }, 1000);
        }, 1000);
        
    } else {
        // Wrong password animation
        passwordInput.style.borderColor = '#dc3545';
        passwordInput.style.boxShadow = '0 0 20px rgba(220, 53, 69, 0.5)';
        passwordInput.value = '';
        passwordInput.placeholder = 'Try again, my love 💕';
        
        // Shake animation
        passwordInput.parentElement.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            passwordInput.parentElement.style.animation = '';
            passwordInput.style.borderColor = '#ffb6c1';
            passwordInput.style.boxShadow = '';
            passwordInput.placeholder = 'Our special word ✨';
        }, 500);
    }
}

// Create success hearts animation
function createSuccessHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = Math.random() * window.innerHeight + 'px';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '10001';
            heart.style.animation = 'heartFloat 3s ease-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 100);
    }
}

// Cursor Effects
function initializeCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;
    
    document.addEventListener('mousemove', function(e) {
        if (!isPasswordCorrect) return;
        
        // Update cursor position
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Create heart trail
        createHeartTrail(e.clientX, e.clientY);
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
        if (isPasswordCorrect) {
            cursor.style.opacity = '1';
        }
    });
}

function createHeartTrail(x, y) {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '🌸', '✨'];
    const heart = document.createElement('div');
    
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.className = 'heart';
    heart.style.left = (x - 10) + 'px';
    heart.style.top = (y - 10) + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, CONFIG.heartTrailDuration);
}

// Floating Hearts Background
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    function addFloatingHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = ['💕', '💖', '💗', '💓', '💝', '🌸'][Math.floor(Math.random() * 6)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 20000);
    }
    
    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(addFloatingHeart, i * 1000);
    }
    
    // Continue adding hearts
    setInterval(addFloatingHeart, 3000);
}

// Typewriter Effect
function startTypewriterEffect() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    
    typewriterElement.innerHTML = '';
    
    function typeMessage(message, callback) {
        let index = 0;
        const typing = setInterval(() => {
            if (index < message.length) {
                typewriterElement.innerHTML += message.charAt(index);
                index++;
            } else {
                clearInterval(typing);
                if (callback) {
                    setTimeout(callback, 2000);
                }
            }
        }, CONFIG.typewriterSpeed);
    }
    
    function cycleMessages() {
        const currentMessage = typewriterMessages[currentTypewriterIndex];
        typeMessage(currentMessage, () => {
            // Clear after displaying
            setTimeout(() => {
                typewriterElement.innerHTML = '';
                currentTypewriterIndex = (currentTypewriterIndex + 1) % typewriterMessages.length;
                setTimeout(cycleMessages, 500);
            }, 3000);
        });
    }
    
    cycleMessages();
}

// Quote Carousel
function startQuoteCarousel() {
    setInterval(() => {
        const quotes = document.querySelectorAll('.quote');
        if (quotes.length === 0) return;
        
        // Hide current quote
        quotes[currentQuoteIndex].classList.remove('active');
        
        // Show next quote
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quotes[currentQuoteIndex].classList.add('active');
    }, CONFIG.quotesInterval);
}

// Love Reasons Functionality
function setupLoveReasons() {
    const reasonsCard = document.getElementById('reasonsCard');
    if (reasonsCard) {
        reasonsCard.addEventListener('click', showLoveReasons);
    }
}

function showLoveReasons() {
    const homeContent = document.querySelector('#home .love-dashboard, #home .quotes-section, #home .begin-story');
    const loveReasonsSection = document.getElementById('loveReasons');
    
    if (homeContent && loveReasonsSection) {
        // Hide main home content
        Array.from(homeContent).forEach(element => {
            if (element) element.style.display = 'none';
        });
        
        // Show love reasons section
        loveReasonsSection.style.display = 'block';
        loveReasonsSection.style.animation = 'fadeIn 0.8s ease-in';
        
        // Show first reason
        showNextReason();
    }
}

function showNextReason() {
    const reasonText = document.getElementById('reasonText');
    if (!reasonText || loveReasons.length === 0) return;
    
    // Fade out current text
    reasonText.classList.remove('show');
    
    setTimeout(() => {
        // Update text
        reasonText.innerHTML = loveReasons[currentReasonIndex];
        currentReasonIndex = (currentReasonIndex + 1) % loveReasons.length;
        
        // Fade in new text
        reasonText.classList.add('show');
        
        // Create celebration hearts
        createCelebrationHearts();
    }, 300);
}

function hideLoveReasons() {
    const homeContent = document.querySelector('#home');
    const loveReasonsSection = document.getElementById('loveReasons');
    
    if (loveReasonsSection) {
        loveReasonsSection.style.display = 'none';
    }
    
    if (homeContent) {
        const dashboard = homeContent.querySelector('.love-dashboard');
        const quotes = homeContent.querySelector('.quotes-section');
        const beginStory = homeContent.querySelector('.begin-story');
        
        if (dashboard) dashboard.style.display = 'grid';
        if (quotes) quotes.style.display = 'block';
        if (beginStory) beginStory.style.display = 'block';
    }
}

function createCelebrationHearts() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'fixed';
            heart.style.left = (Math.random() * window.innerWidth) + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = (Math.random() * 15 + 20) + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.animation = 'heartCelebration 3s ease-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 100);
    }
}

// Navigation
function setupNavigation() {
    // Add hover effects to nav items
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px) scale(1)';
        });
    });
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        
        // Add page-specific effects
        addPageEffects(pageId);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function addPageEffects(pageId) {
    switch(pageId) {
        case 'gallery':
            animateGalleryItems();
            break;
        case 'story':
            animateTimelineItems();
            break;
        case 'letters':
            animateLetters();
            break;
        case 'video':
            animateVideoSection();
            break;
    }
}

function animateGalleryItems() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'fadeIn 0.6s ease-in-out forwards';
            item.style.animationDelay = (index * 0.1) + 's';
        }, index * 100);
    });
}

function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'slideInFromSide 0.8s ease-out forwards';
            item.style.animationDelay = (index * 0.2) + 's';
        }, index * 200);
    });
}

function animateLetters() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.animation = 'fadeInUp 0.8s ease-out forwards';
            letter.style.animationDelay = (index * 0.3) + 's';
        }, index * 300);
    });
}

function animateVideoSection() {
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.style.animation = 'heartPulse 2s ease-in-out infinite';
    }
}

// Music Toggle
function setupMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    if (!musicToggle) return;
    
    musicToggle.addEventListener('click', toggleMusic);
    
    // Initialize music (you can replace this URL with your own music file)
    // Note: Due to browser policies, music won't autoplay - user must click
    musicAudio = new Audio();
    // musicAudio.src = 'path/to/your/romantic-music.mp3'; // Add your music file
    musicAudio.loop = true;
    musicAudio.volume = 0.3;
}

function toggleMusic() {
    const musicToggle = document.getElementById('musicToggle');
    const icon = musicToggle.querySelector('i');
    
    if (!musicAudio || !icon) return;
    
    if (CONFIG.musicEnabled) {
        musicAudio.pause();
        icon.className = 'fas fa-play';
        CONFIG.musicEnabled = false;
        musicToggle.style.background = 'rgba(255, 105, 180, 0.9)';
    } else {
        // musicAudio.play(); // Uncomment when you add music file
        icon.className = 'fas fa-pause';
        CONFIG.musicEnabled = true;
        musicToggle.style.background = 'rgba(255, 69, 0, 0.9)';
    }
}

// Event Listeners
function addEventListeners() {
    // Love card hover effects
    const loveCards = document.querySelectorAll('.love-card');
    loveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02) rotate(1deg)';
            createCardHearts(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
    });
    
    // Story button effect
    const storyButton = document.querySelector('.story-button');
    if (storyButton) {
        storyButton.addEventListener('click', function(e) {
            e.preventDefault();
            createButtonExplosion(this);
            setTimeout(() => showPage('story'), 500);
        });
    }
    
    // Gallery item hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 182, 193, 0.7)';
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 182, 193, 0.3)';
            this.style.transform = 'scale(1.05)';
        });
    });
    
    // Letter hover effects
    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
        letter.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.02)';
            this.style.background = 'rgba(255, 255, 255, 1)';
        });
        
        letter.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(5px)';
            this.style.background = 'rgba(255, 255, 255, 0.95)';
        });
    });
}

function createCardHearts(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'fixed';
            heart.style.left = (rect.left + Math.random() * rect.width) + 'px';
            heart.style.top = (rect.top + Math.random() * rect.height) + 'px';
            heart.style.fontSize = '12px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1001';
            heart.style.animation = 'heartFloat 2s ease-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 2000);
        }, i * 100);
    }
}

function createButtonExplosion(button) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = ['💕', '💖', '💗', '✨', '🌟'][Math.floor(Math.random() * 5)];
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '16px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1001';
        
        const angle = (i / 20) * Math.PI * 2;
        const distance = 100 + Math.random() * 50;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        heart.style.animation = `explodeHeart 1s ease-out forwards`;
        heart.style.setProperty('--endX', endX + 'px');
        heart.style.setProperty('--endY', endY + 'px');
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 1000);
    }
}

// Add custom CSS animations via JavaScript
function addCustomAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes heartCelebration {
            0% {
                transform: translateY(0) scale(0);
                opacity: 1;
            }
            50% {
                transform: translateY(-200px) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(-400px) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes slideInFromSide {
            0% {
                opacity: 0;
                transform: translateX(-50px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(30px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes explodeHeart {
            0% {
                opacity: 1;
                transform: translate(0, 0) scale(0.5);
            }
            50% {
                opacity: 1;
                transform: translate(calc(var(--endX) - 50%), calc(var(--endY) - 50%)) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(calc(var(--endX) - 50%), calc(var(--endY) - 50%)) scale(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize custom animations
addCustomAnimations();

// Special surprise functions (call these for extra magic)
function createLoveExplosion() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const element = document.createElement('div');
            element.innerHTML = ['💕', '💖', '💗', '💓', '💝', '🌸', '✨', '🌟', '💫'][Math.floor(Math.random() * 9)];
            element.style.position = 'fixed';
            element.style.left = Math.random() * window.innerWidth + 'px';
            element.style.top = Math.random() * window.innerHeight + 'px';
            element.style.fontSize = (Math.random() * 30 + 20) + 'px';
            element.style.pointerEvents = 'none';
            element.style.zIndex = '10000';
            element.style.animation = 'heartFloat 4s ease-out forwards';
            
            document.body.appendChild(element);
            
            setTimeout(() => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }, 4000);
        }, i * 50);
    }
}

// Konami code easter egg (up, up, down, down, left, right, left, right, B, A)
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        createLoveExplosion();
        konamiCode = [];
    }
});

// Console message for the curious
console.log(`
💕 Welcome to your digital love sanctuary! 💕

This website was crafted with infinite love and care.
Every line of code, every animation, every heart was placed
with you in mind. You are loved, cherished, and celebrated.

Happy Birthday, Beautiful! 🎂✨

P.S. Try the Konami code for a special surprise! 😉
`);

// Export functions for global access
window.showPage = showPage;
window.checkPassword = checkPassword;
window.showNextReason = showNextReason;
window.hideLoveReasons = hideLoveReasons;