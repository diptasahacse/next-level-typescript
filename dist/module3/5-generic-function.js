"use strict";
// Let's see an simple example with previous concept
const createArray = (para) => {
    return [para];
};
const result1 = createArray("Hello");
// Same thing with generic concept
const createArray2 = (para) => {
    return [para]; // simply return that parameter in an array
};
// OR
// const createArray2 = <T>(para: T): T[] => {
//   return [para]; // simply return that parameter in an array
// };
const result2 = createArray2("Hello"); // call style with string for generic function
const result3 = createArray2(5); // call style with number for generic function
const result4 = createArray2(6); // I have not say the type. but it is still ok, because TS implicitly infer to number
const result5 = createArray2({ name: "Dipta Saha" }); // I have not say the type. but it is still ok, because TS implicitly infer to object
const result6 = createArray2({ name: "Dipta Saha" }); // Explicitly set type in <>
const result7 = createArray2({ name: "Dipta Saha" }); // Same thing with type alias
const result8 = createArray2({ name: "Dipta Saha" }); // Same thing with interface
// same thing with multiple parameter style
const createArray3 = (num1, num2) => {
    return [num1, num2];
};
const result9 = createArray3("Dipta", 11332); // pass string and number
const result10 = createArray3({ name: "Dipta" }, 11332); // same thing with object and number
const result11 = createArray3({ name: "Dipta" }, 11332); // same thing with type alias
const result12 = createArray3({ name: "Dipta" }, 11332); // same thing with Interface
// we can use old system like number[]
const result13 = createArray3({ name: "Dipta" }, [
    11332,
]); // With number[]
// Same thing with Array<number>
const result14 = createArray3({ name: "Dipta" }, [
    11332,
]); // With Array<number>
// Example with spreed operator
const crush = "Keya";
const myInfo = {
    name: "Dipta Saha",
    age: 29,
    salary: 15000,
};
const newData = Object.assign(Object.assign({}, myInfo), { crush });
// Same thing with function
const addMyCrush = (myInfo) => {
    const crush = "Keya";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const withMyCrush = addMyCrush(myInfo);
// Problem of above code is, I am not able to access all property of withMyCrush by using (.) notation. to solve that issues, I have to use generic
// Same thing with Generic
const addMyCrush1 = (myInfo) => {
    const crush = "Keya";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo1 = {
    name: "Dipta Saha",
    age: 29,
    salary: 15000,
};
// Same thing with normal function
function addMyCrush2(myInfo) {
    const crush = "Keya";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
}
const myInfo2 = {
    name: "Dipta Saha",
    age: 29,
    salary: 15000,
};
const withMyCrush2 = addMyCrush2(myInfo1);
console.log(withMyCrush2);
