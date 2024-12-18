let countdown;
let timerDisplay = document.querySelector('.display-time-left');
let endTime = document.querySelector('.display-end-time');
const buttons = document.querySelectorAll('[data-time]');

const timer = seconds => {
    // clear existing timers
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    // run this once because setInterval starts after 1 second
    displayTimeLeft(seconds);
    displayEndTime(then);
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

const displayEndTime = timestamp => {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `timer ends at ${hour}:${
        minutes < 10 ? '0' : ''
    }${minutes}`;
};

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    const secs = mins * 60;
    timer(secs);
    this.reset();
});
