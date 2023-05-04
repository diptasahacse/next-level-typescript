// Generic with type alias

function addMyCrush3<T>(myInfo: T): T {
  const crush = "Keya";
  const newData = { ...myInfo, crush };
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

function addMyCrush4<
  T extends {
    name: string;
    age: number;
    salary: number;
  }
>(myInfo: T): T {
  const crush = "Keya";
  const newData = { ...myInfo, crush };
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
  name: "Dipta Saha", //Mandatory
  age: 29, //Mandatory
  salary: 4000, //Mandatory
  role: "Developer", // extra property which is not mandatory or optional
};
const withMyCrush4 = addMyCrush4(myInfo4);

// Same thing with type alias

type MandatoryType = {
  name: string;
  age: number;
  salary: number;
};
function addMyCrush5<T extends MandatoryType>(myInfo: T): T {
  const crush = "Keya";
  const newData = { ...myInfo, crush };
  return newData;
}
const myInfo5 = {
  name: "Dipta Saha", //Mandatory
  age: 29, //Mandatory
  salary: 4000, //Mandatory
  role: "Developer", // optional
  married: true
};
const withMyCrush5 = addMyCrush5(myInfo5);
// console.log(withMyCrush5)


// Same thing with Interface
interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
};
function addMyCrush6<T extends MandatoryInterface>(myInfo: T): T {
  const crush = "Keya";
  const newData = { ...myInfo, crush };
  return newData;
}
const myInfo6 = {
  name: "Dipta Saha", //Mandatory
  age: 29, //Mandatory
  salary: 4000, //Mandatory
  role: "Developer", // optional
  married: true
};
const withMyCrush6 = addMyCrush5(myInfo6);
console.log(withMyCrush6)
