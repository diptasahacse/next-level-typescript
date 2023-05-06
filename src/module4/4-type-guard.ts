// of guard
// keyof guard
type AddType1 = string | number;
function addNumber(para1: AddType1, para2: AddType1): AddType1 {
  if (typeof para1 == "number" && typeof para2 == "number") {
    return para1 + para2;
  } else {
    return para1.toString() + para2.toString();
  }
}
console.log(addNumber(444, 555));

// in guard
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "admin";
};
const normalUser: NormalUser = {
  name: "Dipta",
};
const adminUser: AdminUser = {
  name: "Keya",
  role: "admin",
};

type NormalUser1 = {
  name: string;
};
type AdminUser1 = {
  name: string;
  role: "admin";
};
function getUser(user: NormalUser1 | AdminUser1) {
  if ("role" in user) {
    //in guard
    return `${user.name} is Admin`;
  } else {
    return `${user.name} is user`;
  }
}
const normalUser1: NormalUser1 = {
  name: "Keya",
};
const adminUser1: AdminUser1 = {
  name: "Dipta",
  role: "admin",
};
// console.log(getUser(adminUser1));
// console.log(getUser(normalUser1));

// instanceof guard => It guard class and object

class Fish {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSwim() {
    console.log(`${this.name} swim in water`);
  }
}

class Elish extends Fish {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeNationalFish() {
    console.log(`${this.name} is a national fish`);
  }
}
class Koi extends Fish {
  constructor(name: string, species: string) {
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

function getFish(fishObject: Fish) {
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

function isKoi(fishObject: Fish): fishObject is Koi {
  // i explicitly say fishObject is Koi
  return fishObject instanceof Koi;
}
function isElish(fishObject: Fish): fishObject is Elish {
  // i explicitly say fishObject is Elish
  return fishObject instanceof Elish;
}
function getFish1(fishObject: Fish) {
  if (isKoi(fishObject)) {
    fishObject.makeTestyFish();
  }

  if (isElish(fishObject)) {
    fishObject.makeNationalFish();
  }
}
getFish1(fish1);
