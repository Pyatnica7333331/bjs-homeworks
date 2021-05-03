function parseCount (countToBuy) {
    let count = Number.parseInt(countToBuy, 10);
    
    if (isNaN(count)) {
      throw new Error ("Невалидное значение");
    };  
    return count;  
};

function validateCount(countToBuy) {
    try {
        return parseCount (countToBuy);
    } catch(err) {
        return err
    };
    
       
};

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    if ( (a + b) < c || (a + c) < b || (b + c) < a) {
        throw new Error ("Треугольник с такими сторонами не существует");
      }; 
    };
    
    getPerimeter() {
        return (this.a + this.b + this.c);
    };
    getArea() {
        let p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    };
    
};
function getTriangle (a, b, c) {
    
    
    try {
        const triangle = new Triangle (a, b, c);
        return triangle;
    } catch {
        let triangleErr = {
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            },
            getArea() {
                return "Ошибка! Треугольник не существует"
            }
        };        
        return triangleErr
    };
};
