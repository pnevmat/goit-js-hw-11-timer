// Это вызов класса

//  const CountdownTimer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2021'),
// }), {};

setInterval(() => {
    const timerRef = document.querySelector('#timer-1');
    const time = new Date('Jul 17, 2021') - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    timerRef.childNodes[2].childNodes[1].innerHTML = days;
    timerRef.childNodes[4].childNodes[1].innerHTML = hours;
    timerRef.childNodes[6].childNodes[1].innerHTML = mins;
    timerRef.childNodes[8].childNodes[1].innerHTML = secs;
}, 1000);





