String.prototype.isPalindrome = function() {
    
  let stringBase = this.trim().split(" ").join("").toLowerCase();
  let stringModified = stringBase.split("").reverse().join("");
  if (stringBase === stringModified) {
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