"use strict";
/**
 * Difference is,
 * We will use interface when we use oject type data like function, object, array.
 */
// Object with type alias
const userWithTypeAlias = {
    name: "Dipta",
    age: 29,
};
// Object with interface
const userWithInterface = {
    name: "Dipta",
    age: 29,
};
const nextUser = {
    name: "Dipta",
    age: 28,
    role: "Admin",
};
// Object with interface with extends
const exUser = {
    name: "Dipta",
    age: 34,
    role: "Admin",
};
const addNumberWithType = (num1, num2) => num1 + num2;
const addNumberWithInterface = (num1, num2) => num1 + num2;
const arrayWithType = [1, 2, 3, 4]; // [index]
console.log(arrayWithType);
// Here, also will use type alias for array. Because, Interface is mainly invented to handle object and class related concept.we will also use type alias for array instead of interface. because using type alias with array, which is more readable than interface with function type. Summery of this topic is, we will use interface, when we use object, class. Otherwise we always use type alias.
