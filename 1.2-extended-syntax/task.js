function getResult(a,b,c){
    "use strict";
    let x = [];
    let d = b ** 2 - 4 * a * c;
    if (d < 0) {
       x = [];
    } else if (d == 0) {
       x[0] = -b / (2 *a);
       
    } else {
        x[0] = (-b + Math.sqrt(d)) / (2 *a);
        x[1] = (-b - Math.sqrt(d)) / (2 *a);
        
    };
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    let averageMark;
    
    if (marks.length > 5) {
        console.log("Оценок очень много, считаются первые 5 штук");
        marks = marks.slice(0, 5);
    };     
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    };
   
    averageMark = sum / marks.length;

    return (averageMark || 0);
}

function askDrink(name,dateOfBirthday){
    let result = "";
    let age = 2021 - dateOfBirthday.getFullYear();

    if (age >= 18) {
      result = `Не желаете ли олд-фэшн, ${name}?`;
    } else if (age < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    };

    return result;
}