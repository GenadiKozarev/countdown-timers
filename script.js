let countdown;
let timerDisplay = document.querySelector('.display__time-left');

const timer = seconds => {
    const now = Date.now();
    const then = now + seconds * 1000;
    // run this once because setInterval starts after 1 second
    displayTimeLeft(seconds);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
};

const displayTimeLeft = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${
        remainderSeconds < 10 ? '0' : ''
    }${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
};

timer(63);
