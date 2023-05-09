"use strict";
//interface
// I am telling that type of Vehicle class will be IVehicle by using implements
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    // By using IVehicle, I must have to use below properties
    startEngine() {
        console.log("I am starting engine..");
    }
    StopEngine() {
        console.log("I am stopping engine..");
    }
    move() {
        console.log("I am moving");
    }
    //   I can use any other method. It will be ok like this
    test() {
        console.log("I am for testing purpose");
    }
}
const vehicle1 = new Vehicle("Car", "Toyota", "55022");
//using abstract class
class Vehicle1 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    //   I can use any other method. It will be ok like this
    test() {
        console.log("I am for testing purpose");
    }
}
class Child1 extends Vehicle1 {
    // I can now use all prpperty of abstract class, but here i have to write function body because we did not use function body in parent
    startEngine() {
        console.log("Starting Engine");
    }
    StopEngine() {
        console.log("Stopping Engine");
    }
    move() {
        console.log("Moving");
    }
}
const c1 = new Child1("car", "BMW", "#87e87y8e");
c1.StopEngine();
