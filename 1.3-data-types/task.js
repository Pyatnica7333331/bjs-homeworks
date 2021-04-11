"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    if (typeof percent != "number") {
      return `Параметр Процентная ставка содержит неправильное значение ${percent}`;
    } else if (typeof contribution != "number") {
        return `Параметр Начальный взнос содержит неправильное значение ${contribution}`;
    } else if (typeof amount != "number") {
        return `Параметр Общая стоимость содержит неправильное значение ${amount}`;
    };
    
    let bodyOfMortgage = amount - contribution;
    let duration = (date.getFullYear() -new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    let P = percent / 100 / 12;
    let mounthPayment = bodyOfMortgage * (P + P / (Math.pow(1 + P, duration) - 1));
    let totalAmount = mounthPayment * duration;
    
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    
    if (name != false & name != undefined) {
      return `Привет, мир! Меня зовут ${name}.`;
    } else {
      return "Привет, мир! Меня зовут Аноним.";
    };
    
}