"use strict";
// Let's see some example first
const students1 = ["Amir", "Kamir"]; // use type alias
const students11 = ["Amir", "Kamir"]; //We can use the same thing with the help of Array angle bracket<>
const students2 = [1, 2, 3, 4, 5];
const students3 = [1, 2, 3, 4, 5]; // similarly this one also.
const employee = [true, false];
const employee1 = [true, false]; // similarly this one also.
// Let's see a little bit complex example with array of object.
const studentDetails = [
    {
        name: "Dipta",
        roll: 3,
    },
    {
        name: "Keya",
        roll: 4,
    },
];
const studentDetails1 = [
    {
        name: "Dipta",
        roll: 3,
    },
    {
        name: "Keya",
        roll: 4,
    },
];
const genericStudentRoll = [1, 2, 3, 4, 5, 6]; // here we GenericArray generic by passing a number type.
const genericStudentName = ["Dipta", "Keya"]; // here we also use the same GenericArray generic by passing a string type. This means, Now we can use a same generic by passing different different type
const genericObjectArray = [
    {
        name: "Dipta",
        roll: 1,
    },
    {
        name: "Keya",
        roll: 2,
    },
];
// Here, I have passed a object to GenericArray generic
// We can easily define the type of object like this,
const genericObjectArray1 = [
    {
        name: "Dipta",
        roll: 1,
    },
    {
        name: "Keya",
        roll: 2,
    },
];
const genericObjectArray2 = [
    {
        name: "Dipta",
        roll: 1,
    },
    {
        name: "Keya",
        roll: 2,
    },
];
const genericObjectArray3 = [
    {
        name: "Dipta",
        roll: 1,
    },
    {
        name: "Keya",
        roll: 2,
    },
];
// Let's see an example with tuple
const relation = ["Dipta", "Keya"];
// here, I have passed double string to GenericTuple generic that means I must have to use string for first and second index. because this a tuple.
const relationWithSalary = [
    {
        name: "Dipta",
        salary: 1000000,
    },
    "Keya",
];
const relationWithSalary2 = [
    {
        name: "Dipta",
        salary: 1000000,
    },
    "Keya",
];
// Now we can simply passed just object, string
const relationWithSalary3 = [
    {
        name: "Dipta",
        salary: 1044400000,
    },
    "Keya",
];
const relationWithSalary5 = [
    {
        name: "Dipta",
        salary: 10445500000,
    },
    "Keya",
];
const relationWithSalary6 = [
    {
        name: "Dipta",
        salary: 10445500000,
    },
    "Keya",
];
const relationWithSalary7 = [
    {
        name: "Dipta",
        salary: 10445500000,
    },
    "Keya",
];
