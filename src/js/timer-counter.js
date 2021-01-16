import CountdownTimer from './timerClass'

// Передача классу параметров таймера

 const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});

timer.timerStart();





