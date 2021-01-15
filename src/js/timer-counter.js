import CountdownTimer from './timerClass'

// Передача классу параметров таймера

 const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});

const timerRef = document.querySelector('#timer-1');
console.dir(timerRef);

setInterval(() => {
    const time = new Date('Jul 17, 2021') - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    timerRef.children[0].children[0].innerHTML = days;
    timerRef.children[1].children[0].innerHTML = hours;
    timerRef.children[2].children[0].innerHTML = mins;
    timerRef.children[3].children[0].innerHTML = secs;
}, 1000);





