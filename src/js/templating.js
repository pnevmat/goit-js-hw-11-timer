import labels from '../template-data-array.json';
import timerTemplate from '../templates/timer-marcup-template.hbs';

const timerContainerRef = document.querySelector('#timer-1');

const timerMarcup = timerTemplate(labels);

timerContainerRef.insertAdjacentHTML('beforeend', timerMarcup);