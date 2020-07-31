"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    let totalAmount = 0;
    let param = '';
    let value = '';

    let str = `Параметр ${param} содержит неправильное значение ${value}`;
    
    if (!Number(percent)) {
        param = 'percent';
        value = percent;
        console.log(str);
    }
    
    if (!Number(contribution)) {
        param = 'contribution';
        value = contribution;
        console.log(str);
    }

    if (!Number(amount)) {
        param = 'amount';
        value = amount;
        console.log(str);
    }    

    let S = amount - contribution;
    let P = (percent / 100) / 12;
    let n = (date.getFullYear() - new Date().getFullYear()) * 12;
    
    totalAmount = parseFloat(((S * (P + P / (Math.pow(1 + P, n) - 1))) * n).toFixed(2));

    return totalAmount;
}

function getGreeting(name) {

    return `Привет, мир! Меня зовут ${name ? name : 'Аноним'}`;
    
}