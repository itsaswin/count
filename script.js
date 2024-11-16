let countdown;
const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('startButton');

// Set the countdown time in seconds (1 hour 15 minutes)
const countdownTime = 75 * 60; // 75 minutes in seconds
let timeRemaining = countdownTime;

function updateDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    countdownDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startCountdown() {
    if (countdown) return; // Prevent multiple countdowns
    updateDisplay();

    countdown = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(countdown);
            countdown = null;
            countdownDisplay.textContent = "Time's up!";
            return;
        }
        timeRemaining--;
        updateDisplay();
    }, 1000);
}

startButton.addEventListener('click', startCountdown);
