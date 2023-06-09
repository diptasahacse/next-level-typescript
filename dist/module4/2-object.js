"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} is saying ${this.sound}`);
    }
}
const dog = new Animal("German Shephard", "Dog", "Ghew Ghew");
const cat = new Animal("Parshian", "Cat", "Mew Mew");
cat.makeSound();
// Use parameter property,
/*
Let's do type+initialize in shortcut way,
In class,
By default name, species, sound and makeSound all are public, we can explicitly set as public like this,
 public name: string;
  public species: string;
 public sound: string;

if i use public with parameter in constractor then we won't need to write like before and initialize in constractor like this,


*/
// Simplified version
class Person {
    constructor(name, role, salary) {
        this.name = name;
        this.role = role;
        this.salary = salary;
    }
    makeSalary() {
        console.log(`Salary of ${this.name} is ${this.salary}`);
    }
}
const dipta = new Person("Dipta", "Developer", 4555);
dipta.makeSalary();
