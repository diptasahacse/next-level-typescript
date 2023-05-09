"use strict";
class PersonUser {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `${this.name} is sleep ${hours} hr in every day`;
    }
}
class Student extends PersonUser {
    //   name: string;
    //   age: number;
    //   address: string;
    //   constructor(name: string, age: number, address: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    //   }
    //   makeSleep(hours: number): string {
    //     return `${this.name} is sleep ${hours} hr in every day`;
    //   }
    //now, above commented code is accessable in this class because of Student extends PersonUser
    //to set value in name,age,address in this class then i need to use constructor, let's create
    //   constructor(name: string, age: number, address: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    //   }
    //   if i do like that, it will throw error. which is
    /*
    Constructors for derived classes must contain a 'super' call.
    that means,
    Here, Student class is called derived class. means, it extended to any other class. here, It extends PersonUser class. means, here PersonUser is parent class and Student class.
  
    in OOP, you can not use constructor directly like this
  //   constructor(name: string, age: number, address: string) {
  //     this.name = name;
  //     this.age = age;
  //     this.address = address;
  //   }
  
  because, name, age, address is not in this class. If i want to set name, age,
  address property value from child class, then to set property from child class to parent class, I have to call supper() and pass property name as a parameter which i want to use.
  
  like this  */
    constructor(name, age, address) {
        super(name, age, address);
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const student = new Student("Dipta", 34, "Khulna");
// now, we can use Student class like before. even we can call or use method also like this,
student.makeSleep(45);
// Let's do same thing with own property
class Teacher extends PersonUser {
    constructor(name, age, address, role) {
        super(name, age, address);
        this.name = name; //extended property
        this.age = age; //extended property
        this.address = address; //extended property
        this.role = role; //initialize value for own property of Teacher
    }
    takeClasses(nClass) {
        return `${this.name} will take ${nClass} class in every day`;
    }
}
/*
Above two class, the common property is, makeSleep(){}, name, age and address. different property is takeClasses(){} in Teacher class.

*/
const teacher = new Teacher("Dipta", 34, "Khulna", "CSE");
console.log(teacher.takeClasses(4));
