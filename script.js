let countdown;
const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('startButton');

// Set the countdown time in seconds (10 minutes)
const countdownTime = 10 * 60; // 10 minutes in seconds
let timeRemaining = countdownTime;

function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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

startButton.addEventListener('click', startCountdown);1
