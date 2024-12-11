let countdown;

const timer = seconds => {
    const now = Date.now();
    const then = now + seconds * 1000;
    // run this once because setInterval starts after 1 second
    displayTimeLeft(secondsLeft);
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
    console.log(seconds);
};

timer(3);
