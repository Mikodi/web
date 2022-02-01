import getDateDiff from "./getDateDiff.js";
import { printError, printResultDate } from "./printResult.js";

export function getDate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const firstData = formData.get('firstDate');
    const secondData = formData.get('secondDate');

    if (!firstData || !secondData) {
            printError('Введите дату', event);
    } else {
        const dateDiff = getDateDiff(firstData, secondData);
        return printResultDate(dateDiff, event);
    }
};