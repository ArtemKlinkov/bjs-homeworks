"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(+percent)) {
        return `Параметр <Процентная ставка> содержит неправильное значение <${percent}>`;
    }
    const parsedPercent = parseFloat(percent);
    
    if (isNaN(+contribution)) {
        return `Параметр <Первоначальный взнос> содержит неправильное значение <${contribution}>`;
    }
    const parsedСontribution = parseFloat(contribution);

    if (isNaN(+amount)) {
        return `Параметр <Сумма кредита> содержит неправильное значение <${amount}>`;
    }
    const parsedAmount = parseFloat(amount); 

    const S = parsedAmount - parsedСontribution;
    const P = (parsedPercent / 100) / 12;
    const n = (date.getFullYear() - new Date().getFullYear()) * 12;

    return parseFloat(((S * (P + P / (Math.pow(1 + P, n) - 1))) * n).toFixed(2));
}

function getGreeting(name) {

    return `Привет, мир! Меня зовут ${name ? name : 'Аноним'}`;

}