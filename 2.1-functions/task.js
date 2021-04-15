function getSolutions(a, b, c) {
    
    let D = b ** 2 - 4 * a * c;
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    let Object = {
        D: D,
        roots: []
        };
    if (D < 0) {
        return Object;
    } else if (D == 0) {
        Object.roots = [x1];
        return Object;
    } else if (D > 0) {
        Object.roots = [x1, x2];
        return Object;
    };
};

function showSolutionsMessage( a, b, c) {
   let result = getSolutions(a, b, c);
   console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
   console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D == 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  };
};

//function getAverageScore(data) {};
//function getAverageMark(marks) {
//    let data = {
//    algebra : [4, 5, 5, 4],
//    geometry : [2, 5],
//    russian : [3, 3, 4, 5],
//    physics : [5, 5],
//    music : [ 2, 2, 5],
//    english : [4, 4, 3, 3],
//    poetry : [5, 3, 4],
//    chemistry : [2],
//    french : [4, 4]
//    };
//};

//function getPersonData(secretData) {
//  let secretData = {
//  aaa: person.firstName,
//  bbb: person.lastName
// }
// let person = {
//  firstName: getDecodedValue(),
//  lastName: getDecodedValue()
//  };
//return person;
//   
//
//function getDecodedValue(secret) {
//  let name = "";
//  if (secret === 1) {
//     name = Родриго;
//  } else if (secret === 0) {
//     name = Эмильо
//  };
//  return name;
//  
//
