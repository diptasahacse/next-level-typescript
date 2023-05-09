"use strict";
// Let's see how to write generic interface by seeing an example
// Now, If i pass boolean then husband type will be boolean, If i pass string then husband type will be string accordingly.
// here, I am using boolean value for husband type. That means i have to passed boolean in CrushInterface <>
const crush1 = {
    name: "Keya",
    husband: true,
};
// here, I am using string value for husband type. That means i have to passed string in CrushInterface <>
const crush2 = {
    name: "Keya",
    husband: "Dipta",
};
// here, I am using object for husband type. That means i have to passed object in CrushInterface <>
const crush3 = {
    name: "Keya",
    husband: {
        name: "Dipta Saha",
        developer: true,
    },
};
// using those concept, I can explicitly define that object for husband in <>
const crush4 = {
    name: "Keya",
    husband: {
        name: "Dipta Saha",
        developer: true,
    },
};
const crush5 = {
    name: "Keya",
    husband: {
        name: "Dipta Saha",
        developer: true,
    },
};
const crush6 = {
    name: "Keya",
    husband: {
        name: "Dipta Saha",
        developer: true,
    },
};
const crush7 = {
    name: "Keya",
    husband: {
        name: "Dipta Saha",
        developer: true,
    },
    child: "Baby Name",
};
const crush8 = {
    name: "Keya",
    husband: {
        name: "Dipta Saha",
        developer: true,
    },
    child: "Baby Name",
    moreChild: true, // it will replace with null
};
console.log(crush8);
