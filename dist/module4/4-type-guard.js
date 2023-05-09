"use strict";
function addNumber(para1, para2) {
    if (typeof para1 == "number" && typeof para2 == "number") {
        return para1 + para2;
    }
    else {
        return para1.toString() + para2.toString();
    }
}
console.log(addNumber(444, 555));
const normalUser = {
    name: "Dipta",
};
const adminUser = {
    name: "Keya",
    role: "admin",
};
function getUser(user) {
    if ("role" in user) {
        //in guard
        return `${user.name} is Admin`;
    }
    else {
        return `${user.name} is user`;
    }
}
const normalUser1 = {
    name: "Keya",
};
const adminUser1 = {
    name: "Dipta",
    role: "admin",
};
// console.log(getUser(adminUser1));
// console.log(getUser(normalUser1));
// instanceof guard => It guard class and object
class Fish {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSwim() {
        console.log(`${this.name} swim in water`);
    }
}
class Elish extends Fish {
    constructor(name, species) {
        super(name, species);
    }
    makeNationalFish() {
        console.log(`${this.name} is a national fish`);
    }
}
class Koi extends Fish {
    constructor(name, species) {
        super(name, species);
    }
    makeTestyFish() {
        console.log(`${this.name} is a testy fish`);
    }
}
const elish = new Elish("Elish", "Elish");
// elish.makeNationalFish()
const koi = new Koi("Koi", "Koi");
// koi.makeSwim()
// koi.makeTestyFish()
function getFish(fishObject) {
    /*
      here, fishObject is used Fish,which is a class
      means we can use all the things of Fish class
      means,
      // name: string;
      // species: string;
    
      // makeSwim() {
      //   console.log(`${this.name} swim in water`);
      // }
      but i have to check, what type of class you passed
      */
    if (fishObject instanceof Koi) {
        /*
      here checked if fishObject is type of Koi class nor not by using instanceof.
      here check Koi, that means fishObject is have also all property of Key class,
        fishObject has
        // name: string;
        // species: string;
      
        // makeSwim() {
        //   console.log(`${this.name} swim in water`);
        // }
        makeTestyFish(){
        console.log(`${this.name} is a testy fish`)
      }
      */
        fishObject.makeTestyFish();
    }
    if (fishObject instanceof Elish) {
        fishObject.makeNationalFish();
    }
}
const fish1 = new Elish("Padmar elish", "Elish"); //this is instance of Elish class
const fish2 = new Koi("Biler koi", "Koi"); //this is instance of Koi class
getFish(fish2);
getFish(fish1);
// Lets do same thing with Is syntax
function isKoi(fishObject) {
    // i explicitly say fishObject is Koi
    return fishObject instanceof Koi;
}
function isElish(fishObject) {
    // i explicitly say fishObject is Elish
    return fishObject instanceof Elish;
}
function getFish1(fishObject) {
    if (isKoi(fishObject)) {
        fishObject.makeTestyFish();
    }
    if (isElish(fishObject)) {
        fishObject.makeNationalFish();
    }
}
getFish1(fish1);
