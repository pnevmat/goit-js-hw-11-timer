class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    timerStart() {
        const timerRef = document.querySelector(`${this.selector}`);
        const time = this.targetDate - Date.now();
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        timerRef.children[0].children[0].innerHTML = days;
        timerRef.children[1].children[0].innerHTML = hours;
        timerRef.children[2].children[0].innerHTML = mins;
        timerRef.children[3].children[0].innerHTML = secs;
    }
}

export default CountdownTimer;