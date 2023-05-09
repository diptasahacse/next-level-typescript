"use strict";
class Person1 {
    takeNap() {
        console.log(`I am sleeping 8 hr`);
    }
}
class Clild1 extends Person1 {
    takeNap() {
        console.log(`I am sleeping 10 hr`);
    }
}
class Clild2 extends Person1 {
    takeNap() {
        console.log(`I am sleeping 12 hr`);
    }
}
function getNap(instanceObject) {
    instanceObject.takeNap();
}
const person1 = new Person1();
const child1 = new Clild1();
const child2 = new Clild2();
getNap(person1);
getNap(child1);
getNap(child2);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShape(instanceObj) {
    console.log(instanceObj.getArea());
}
const circle1 = new Circle(23);
const rectangle1 = new Rectangle(23, 25);
getAreaOfShape(circle1);
getAreaOfShape(rectangle1);
