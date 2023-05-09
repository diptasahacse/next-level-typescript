"use strict";
const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfString = arrayOfNumbers.map((item) => item.toString());
console.log(arrayOfString);
const rectangleArea = {
    height: 23,
    width: 50,
};
// Now, we can use, modify any of the property of rectangleArea like this,
rectangleArea.height = 566; //
const rectangleArea1 = {
    height: 23,
    width: 50,
};
const Area3 = {
    name: "Dipta",
    age: 29,
};
const Area4 = {
    height: 5,
    width: 29,
    depth: "4",
};
const Area6 = {
    height: 5,
    width: 29,
    depth: "4",
};
// now we can't modify anyof the value of Area6 object
// 
// Area6.depth = 44// not possible because of readonly
console.log(Area6);
