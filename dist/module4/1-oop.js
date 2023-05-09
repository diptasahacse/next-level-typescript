"use strict";
// Add with function
const add = (a, b) => {
    return a + b;
};
const sum = add(25, 50);
console.log(sum);
// Add with OOP
class Calculator {
    add(a, b) {
        return a + b;
    }
}
const calculator = new Calculator();
const sum1 = calculator.add(2, 4);
console.log(sum1);
// Building blocks of OOP in TS
/*
1. Encapsulations
2. Polymorphism
3. Abstraction
4. Inheritance

*/ 
