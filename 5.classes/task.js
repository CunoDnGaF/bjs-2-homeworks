class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount
        this.state = state;
        this.type = type;
    }

        fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if(newState < 0) {
            this.state = 0;
        } else if(newState > 100) {
            this.state = 100;
        } else {
            this._state = newState;
        }
    }
    get state() {
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "book";
        this.author = author;
    }
} 

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "novel";
        this.author = author;
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
        this.author = author;
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "detective";
        this.author = author;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] == value) || null;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy('name', bookName);
        if (book) {
          this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
      }

}

class Student {
    constructor (name) {
        this.name = name;
        this.marks = {}
    }

    addMark(mark, subject) {
        if(mark > 5 || mark < 2) {
            return;
        } 
        if(this.marks.hasOwnProperty([subject]) === false) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }

    getAverageBySubject(subject) {
        if(this.marks.hasOwnProperty([subject]) === false) {
            return 0;
        }
        return this.marks[subject].reduce((x, y) => x + y, 0)/ this.marks[subject].length 
    } 

    getAverage() {
        if(Object.keys(this.marks).length === 0) {
            return 0;
        }
        let sumOfAverage = []
        for(let i = 0; i < Object.keys(this.marks).length; i++) {
            let a = Object.keys(this.marks)[i];
            sumOfAverage.push(this.getAverageBySubject(a));
        }
        return sumOfAverage.reduce((x, y) => x + y, 0) / Object.keys(this.marks).length
    }
}