class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };
    fix() {
        return this.state = this.state * 1.5;
    };
    set state (state) {
        if (state <= 0) {
            this._state = 0; 
        } else if (state >= 100) {
            this._state = 100;   
        } else {
            this._state = state * 1.5;
        };
        
    };
    get state (){
        return this._state ;
    };
    
};

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    };
};
class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
        
    };
};
class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    };
};
class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    };
};
class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    };
};

class Library {
    constructor (name, books) {
    this.name = name;
    this.books = [];
    };
    addBook(book) {
        if (book.state > 30) {
            this.books.push (book)
        };
    };

    findBookBy(type, value) {
        for( let i = 0; i < this.books.length; i++) {
            for (let a = 0; a < Object.entries(this.books[i]).length; a++) {
                if (Object.entries(this.books[i])[a][0] === type && Object.entries(this.books[i])[a][1] === value) {
                    return this.books[i]
                };
            };
        };
        return null
    };

    giveBookByName(bookName) {
        for( let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let copyBook = this.books[i];
                this.books.splice(i, 1);
                return copyBook;
            };
        };
        return null

    };
};

class StudentLog {
    constructor (name) {
        this.name = name
        
    };
    getName() {
        return this.name
    };

    addGrade(grade, subject) {
                
        if (!this[subject]) {
            this[subject] = []
        };
        if (grade <= 5 && grade >= 1)  {
            this[subject].push(grade);
            
        } else {
            
            return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`
        };
        return this[subject].length 
    };

    getAverageBySubject(subject)  {
        let sum = 0;
        let averageMark;
        if (this[subject]) {
            for (let i = 0; i < this[subject].length; i++) {
            sum += this[subject][i];
            };
            averageMark = sum / this[subject].length;
        };
        return (averageMark || 0);
    };

    getTotalAverage() {
        let sum = 0;
        let averageMark;
        let allGrades=[];
        for (let value of Object.values(this)) {
            for (let i = 0; i < value.length; i++) {
                if (typeof value[i] === 'number') {
                    allGrades.push(value[i])
                };
            };
        };
        for (let i = 0; i < allGrades.length; i++) {
            sum += allGrades[i]
        };
        averageMark = sum / allGrades.length;
        return (averageMark || 0);
    };
};




