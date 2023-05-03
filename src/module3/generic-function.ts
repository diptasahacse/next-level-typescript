// Let's see an simple example with previous concept
const createArray = (para: string): string[] => {
  return [para];
};
const result1 = createArray("Hello");

// Same thing with generic concept
const createArray2 = <T>(para: T): [T] => {
  return [para]; // simply return that parameter in an array
};
// OR
// const createArray2 = <T>(para: T): T[] => {
//   return [para]; // simply return that parameter in an array
// };
const result2 = createArray2<string>("Hello"); // call style with string for generic function
const result3 = createArray2<number>(5); // call style with number for generic function
const result4 = createArray2(6); // I have not say the type. but it is still ok, because TS implicitly infer to number
const result5 = createArray2({ name: "Dipta Saha" }); // I have not say the type. but it is still ok, because TS implicitly infer to object

const result6 = createArray2<{ name: string }>({ name: "Dipta Saha" }); // Explicitly set type in <>
type userType = {
  name: string;
};
const result7 = createArray2<userType>({ name: "Dipta Saha" }); // Same thing with type alias
interface userInterface {
  name: string;
}
const result8 = createArray2<userInterface>({ name: "Dipta Saha" }); // Same thing with interface

// same thing with multiple parameter style
const createArray3 = <T, Y>(num1: T, num2: Y): [T, Y] => {
  return [num1, num2];
};
const result9 = createArray3<string, number>("Dipta", 11332); // pass string and number
const result10 = createArray3<{ name: string }, number>(
  { name: "Dipta" },
  11332
); // same thing with object and number
type nameType = {
  name: string;
};
const result11 = createArray3<nameType, number>({ name: "Dipta" }, 11332); // same thing with type alias
interface nameInterface {
  name: string;
}
const result12 = createArray3<nameInterface, number>({ name: "Dipta" }, 11332); // same thing with Interface

// we can use old system like number[]
const result13 = createArray3<nameInterface, number[]>({ name: "Dipta" }, [
  11332,
]); // With number[]
// Same thing with Array<number>
const result14 = createArray3<nameInterface, Array<number>>({ name: "Dipta" }, [
  11332,
]); // With Array<number>

// Example with spreed operator
const crush = "Keya";
const myInfo = {
  name: "Dipta Saha",
  age: 29,
  salary: 15000,
};
const newData = { ...myInfo, crush };

// Same thing with function
const addMyCrush = (myInfo: object) => {
  const crush = "Keya";
  const newData = { ...myInfo, crush };
  return newData;
};
const withMyCrush = addMyCrush(myInfo);
// Problem of above code is, I am not able to access all property of withMyCrush by using (.) notation. to solve that issues, I have to use generic
// Same thing with Generic
const addMyCrush1 = <T>(myInfo: T): T => {
  const crush = "Keya";
  const newData = { ...myInfo, crush };
  return newData;
};
const myInfo1 = {
  name: "Dipta Saha",
  age: 29,
  salary: 15000,
};

// Same thing with normal function
function addMyCrush2<T>(myInfo: T): T {
  const crush = "Keya";
  const newData = { ...myInfo, crush };
  return newData;
}
const myInfo2 = {
  name: "Dipta Saha",
  age: 29,
  salary: 15000,
};

const withMyCrush2 = addMyCrush2(myInfo1);
console.log(withMyCrush2);
