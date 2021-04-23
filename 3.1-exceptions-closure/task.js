function parseCount (countToBuy) {
    
    if (isNaN(Number.parseInt(countToBuy, 10))) {
      throw new Error ("Невалидное значение");
    };  
    return Number.parseInt(countToBuy, 10);  
};

function validateCount(countToBuy) {
    try {
        return parseCount (countToBuy);
    } catch(err) {
        return new Error ("Невалидное значение");
    };  
       
};

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    if ( (this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.b + this.c) < this.a) {
        throw new Error ("Треугольник с такими сторонами не существует");
      }; 
    };
    
    getPerimeter() {
        return (this.a + this.b + this.c);
    };
    getArea() {
        let p = 1/2 * (this.a + this.b + this.c);
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    };
    
};
function getTriangle (a, b, c) {
    const triangle = new Triangle (a, b, c);
    
    try {
        return triangle;
    } catch(e) {
        return triangle.getPerimeter() = "Ошибка! Треугольник не существует";
    };
};
