// Add with function

type AddType = (a: number, b: number) => number;

const add: AddType = (a, b) => {
  return a + b;
};

const sum = add(25, 50);
console.log(sum);

// Add with OOP
class Calculator {
  add(a: number, b: number) {
    return a + b;
  }
}

const calculator = new Calculator();
const sum1 = calculator.add(2, 4);

console.log(sum1)


// Building blocks of OOP in TS
/*
1. Encapsulations
2. Polymorphism
3. Abstraction
4. Inheritance

*/