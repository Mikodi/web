import {Howler} from 'https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js';

export function timer({years, months, weeks, days, hours,  minutes, seconds}, timerResult, event) {
    days = 0;
    hours = 0;
    minutes = 1;
    seconds = 0;

    const interval = setInterval(() => {
        if (seconds <= 0 && minutes > 0) {
                minutes = minutes - 1;
                seconds = 59;
            if (minutes <= 0 && hours > 0) {
                hours = hours - 1;
                minutes = 59;
                if (hours <= 0 && days > 0) {
                    days = days - 1;
                    hours = 23;
                    if (days <= 0 && weeks > 0) {
                        weeks = weeks - 1;
                        days = 6;
                        if (weeks <= 0 && months > 0) {
                            months = months - 1;
                            weeks = 3; 
                            if (months <= 0 && years > 0) {
                                years = years - 1;
                                months = 11
                            } 
                        } 
                    } 
                } 
            } 
        } else {
            seconds = seconds - 1;
        }
        
        timerResult.innerHTML = `Год: ${years} - Месяц: ${months} - Недель ${weeks} - День: ${days} - Час ${hours} - Минуты ${minutes} - Секунды ${seconds}`;

        if (years == 0 && months == 0 && weeks == 0 && days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(interval);
        }
        
    }, 1000);
    

    if (event == "timer_off") {
        clearInterval(interval);
        return
    } else {
        setInterval(interval)
    }
}