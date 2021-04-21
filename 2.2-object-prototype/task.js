String.prototype.isPalindrome = function() {
    
  let stringNew = new String;
  let stringModified = this.replace(/\s/g,'').toLowerCase();
  console.log(stringModified);
  for (i = 0; i < stringModified.length; i++) {
    stringNew[stringModified.length - 1- i] = stringModified[i];
  };
  console.log(stringNew);
  stringNew = JSON.stringify(stringNew);
  console.log(stringNew);
  if (stringNew === stringModified) {
    return true;
  } else {
    return false;
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
      let average = sum / marks.length;
      let roundedAverage = Math.round(average);
      return roundedAverage;
    }; 
};

function checkBirthday(birthday) {
    let now = +new Date();
    let birthdaySupp = new Date(birthday);
    birthday = +new Date(birthdaySupp);
    let diff = now - birthday;
    let age  = diff / 31557600000;
    if ( age > 18) {
        return true;
    } else {
        return false;
    };
};