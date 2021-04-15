"use strict";
function calculateTotalMortgage(percentInput, contributionInput, amountInput, date) {
    let percent = Number(percentInput);
    let contribution =  Number(contributionInput);
    let amount = Number(amountInput);

    if (Number.isNaN(percent)) {
      return `Параметр Процентная ставка содержит неправильное значение ${percentInput}`;
    } else if (Number.isNaN(contribution)) {
        return `Параметр Начальный взнос содержит неправильное значение ${contributionInput}`;
    } else if (Number.isNaN(amount)) {
        return `Параметр Общая стоимость содержит неправильное значение ${amountInput}`;
    };
    let duration = (date.getFullYear() -new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    
    if ((percent > 0) && (contribution >= 0) && (amount > 0) && (duration > 0)) {
      let bodyOfMortgage = amount - contribution;
      let P = percent / 100 / 12;
      let mounthPayment = bodyOfMortgage * (P + P / (Math.pow(1 + P, duration) - 1));
      let totalAmount = mounthPayment * duration;
      return Number(totalAmount.toFixed(2));
    } else 
      return "Ошибка введенных значений";
}

function getGreeting(name) {
    
    if (name) {
      return `Привет, мир! Меня зовут ${name}.`;
    } else {
      return "Привет, мир! Меня зовут Аноним.";
    };
    
}