"use strict";
function calculateTotalMortgage(percentInput, contributionInput, amountInput, date) {
    let percent = Number(percentInput);
    let contribution =  Number(contributionInput);
    let amount = Number(amountInput);
    let duration = (date.getFullYear() -new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());

    if (Number.isNaN(percent) || (percent <= 0)) {
      return `Параметр Процентная ставка содержит неправильное значение ${percentInput}`;
    } else if (Number.isNaN(contribution) || (contribution < 0)) {
        return `Параметр Начальный взнос содержит неправильное значение ${contributionInput}`;
    } else if (Number.isNaN(amount) || (amount <= 0)) {
        return `Параметр Общая стоимость содержит неправильное значение ${amountInput}`;
    } else if ((duration <= 1) && ((date.getDate() - new Date().getDate()) < 0)) {
      let month = date.getMonth() + 1;
      let date1 = date.getDate() + '.' + (month < 10 ? '0' : '') + month + '.' + date.getFullYear();
      return `Параметр Дата содержит неправильное значение ${date1}, срок кредита должен быть не менее 1 месяца`;
    };
    
    
    if ((percent > 0) && (contribution >= 0) && (amount > 0) && (duration > 0)) {
      let bodyOfMortgage = amount - contribution;
      let P = percent / 100 / 12;
      let mounthPayment = bodyOfMortgage * (P + P / (Math.pow(1 + P, duration) - 1));
      let totalAmount = mounthPayment * duration;
      return Number(totalAmount.toFixed(2));
    };
}

function getGreeting(name) {
    
    if (name && (name != " ")) {
      return `Привет, мир! Меня зовут ${name}.`;
    } else {
      return "Привет, мир! Меня зовут Аноним.";
    };
    
}