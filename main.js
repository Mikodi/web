import { dateCalc, datetimer } from './transition.js';
import { getDate } from './getDate.js';
import { timer } from './timer.js';

const form = document.getElementById('datecalc');
const btnCalcDate = document.getElementById('btn_calc_date');
const btnTimer = document.getElementById('btn_timer');
const dateTime = document.getElementById('datetimer');
const timerOn = document.getElementById('timer_on');
const timerOff = document.getElementById('timer_off');

btnCalcDate.addEventListener('click', () => {
    return dateCalc(dateTime, form);
});

btnTimer.addEventListener('click', () => {
   return datetimer(dateTime, form);
});

form.onsubmit = (event) => {
    event.preventDefault();
    getDate(event);
}

dateTime.onsubmit = (event) => {
    event.preventDefault();
    const [getFullDate, timerResult] = getDate(event);

    timerOn.addEventListener('click', onTimer(getFullDate, timerResult, event.currentTarget[3].id));

    timerOff.addEventListener('click', offTimer(timerOn, timerOff, getFullDate, timerResult, event.currentTarget[4].id)); 

    function onTimer(getFullDate, timerResult, event) {
        timer(getFullDate, timerResult, event);
    }
    
    function offTimer(timerOn, timerOff, getFullDate, timerResult, event) {
        timer(getFullDate, timerResult, event);
        timerOn.removeEventListener('click', onTimer);
    }

}







 