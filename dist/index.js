"use strict";
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const arrTwo = generateAdder(2);
console.log(arrTwo(3));
console.log(arrTwo(5));
