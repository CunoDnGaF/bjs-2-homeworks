﻿function parseCount(a) {
   if(Number.isNaN(Number.parseFloat(a))) {
    throw new Error("Невалидное значение")
   }
    return Number.parseFloat(a);
}


function validateCount(a) {
    try {
        parseCount(a);
    } catch (error) {
       return error;
    } 
    return parseCount(a);
}

class Triangle {
    constructor(a, b, c) {
    this.a = a; 
    this.b = b; 
    this.c = c;
    if(a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует")
    }
    }

    get perimeter() {
        return (this.a + this.b + this.c)
    }

    get area() {
        let p = this.perimeter / 2;
        let s = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)).toFixed(3);
        return Number(s)
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {get area() {
            return "Ошибка! Треугольник не существует"
            },
        get perimeter() {
            return "Ошибка! Треугольник не существует"   
            }
        }
    }   
}