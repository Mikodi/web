import { timer } from "./timer.js";

const result = document.getElementById('datecalc_result');
const timerResult = document.getElementById('timer_result');

export const printError = (errorText, event) => {
    if (event.target.id == "datecalc") {
        result.innerText = errorText;
    } else {
        timerResult.innerText = errorText;
    }
    
}

export const printResultDate = ({years, months, weeks, days, hours,  minutes, seconds}, event) => {
    if (event.target.id == "datecalc") {
        result.innerHTML = `Год: ${years} - Месяц: ${months} - День: ${days}`;
    } else {
        timerResult.innerHTML = `Год: ${years} - Месяц: ${months} - Недель ${weeks}  - День: ${days} - Час - ${hours} - Минуты ${minutes} - Секунды ${seconds}`;
        // timer({years, months, days, weeks, hours,  minutes, seconds}, timerResult);
        return [{years, months, weeks, days, hours,  minutes, seconds}, timerResult];
    }
}
