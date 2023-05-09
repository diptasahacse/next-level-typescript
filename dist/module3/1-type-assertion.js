"use strict";
// Syntax
/*
Way to use 'as'. Both are same thing.
 1. variable as string
 2. <string>variable
 */
let myValue;
myValue = "I am learning Type assertion in TS";
const stringValue = myValue; // Think like a string
const num = myValue; // Think like a number
////Example//////
const gramToKg = (value) => {
    if (typeof value === "string") {
        return `${parseFloat(value) / 1000}`;
    }
    if (typeof value === "number") {
        return value / 1000;
    }
};
const resultWithString = gramToKg("2000"); // <string>gramToKg("2000");
/**
 * By Default, type of  resultWithString is number | string | undefined.
 * But, I know the output value type is must come a string type value.  That's why I made it a single string type by using "as string"
 */
const resultWithNumber = gramToKg(2000); // <number>gramToKg(2000);
const MyError = {
    message: "This is my Custom Error",
};
try {
    //expression
}
catch (error) {
    console.log(error.message);
    // console.log((<ErrorType>error).message); //Both are same
}
