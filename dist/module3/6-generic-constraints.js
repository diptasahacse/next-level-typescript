"use strict";
// Generic with type alias
function addMyCrush3(myInfo) {
    const crush = "Keya";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
}
const myInfo3 = {
    name: "Dipta Saha",
    age: 29,
    salary: 15000,
};
const withMyCrush3 = addMyCrush3(myInfo3);
// in above function we can pass any type of object that can contain any property. But we can forcely set the minimum property that you must have to passed
// For example,
function addMyCrush4(myInfo) {
    const crush = "Keya";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
}
/**
 *  That means, you have to pass minimum,
 *  name: string;
    age: number;
    salary: number;
    these property

    you can pass extra property also that are optional.
 */
const myInfo4 = {
    name: "Dipta Saha",
    age: 29,
    salary: 4000,
    role: "Developer", // extra property which is not mandatory or optional
};
const withMyCrush4 = addMyCrush4(myInfo4);
function addMyCrush5(myInfo) {
    const crush = "Keya";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
}
const myInfo5 = {
    name: "Dipta Saha",
    age: 29,
    salary: 4000,
    role: "Developer",
    married: true
};
const withMyCrush5 = addMyCrush5(myInfo5);
;
function addMyCrush6(myInfo) {
    const crush = "Keya";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
}
const myInfo6 = {
    name: "Dipta Saha",
    age: 29,
    salary: 4000,
    role: "Developer",
    married: true
};
const withMyCrush6 = addMyCrush5(myInfo6);
console.log(withMyCrush6);
