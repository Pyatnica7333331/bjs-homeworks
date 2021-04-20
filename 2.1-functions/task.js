function getSolutions(a, b, c) {
    
    let D = b ** 2 - 4 * a * c;
    
    let Object = {
        D: D,
        roots: []
        };
    if (D < 0) {
        return Object;
    } else if (D == 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        Object.roots = [x1];
        return Object;
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
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


function getAverageMark(marks) {
  let sum = 0;
  if (marks.length === 0) {
    return 0;
  } else if (marks.length > 0) {
      for(i = 0; i < marks.length; i++) {
      sum += marks[i];
    };
    return sum / marks.length;
  };


};
function getAverageScore(data) {
  let studentPerfomance = {};

  let count = 0;
  for (let subject in data ) {
    studentPerfomance[subject] = getAverageMark(data[subject]);
    count ++;
    if (count >= 10) {
      return "Оценок больше 10";
    };
    
  };
  studentPerfomance.average = getAverageMark(Object.values(studentPerfomance));
  return studentPerfomance;
};

function getPersonData(secretData) {
  let person = {};
   
  person.firstName = getDecodedValue(Object.values(secretData)[0]);
  person.lastName = getDecodedValue(Object.values(secretData)[1]);
  
  return person;
};  

function getDecodedValue(secret) {
  
  if (secret === 0) {
    return "Родриго";
  } else if (secret === 1) {
    return "Эмильо";
  };
};
