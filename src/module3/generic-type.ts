// Let's see some example first

const students1: string[] = ["Amir", "Kamir"]; // use type alias
const students11: Array<string> = ["Amir", "Kamir"]; //We can use the same thing with the help of Array angle bracket<>
const students2: number[] = [1, 2, 3, 4, 5];
const students3: Array<number> = [1, 2, 3, 4, 5]; // similarly this one also.

const employee: boolean[] = [true, false];
const employee1: Array<boolean> = [true, false]; // similarly this one also.

// Let's see a little bit complex example with array of object.
const studentDetails: Array<{ name: string; roll: number }> = [
  {
    name: "Dipta",
    roll: 3,
  },
  {
    name: "Keya",
    roll: 4,
  },
];
// Here, I pass just a object. we can also write like this,
type StudentType = { name: string; roll: number };
const studentDetails1: Array<StudentType> = [
  {
    name: "Dipta",
    roll: 3,
  },
  {
    name: "Keya",
    roll: 4,
  },
];

/**
 * Till now, We have passed a single type in Array<>.
 * Let's see how we can set parameter with generic style
 */

// Generic - One Parameter syntax
type GenericArray<T> = Array<T>; // This means, we created a custom generic which can take any type and return that type you have passed before.

const genericStudentRoll: GenericArray<number> = [1, 2, 3, 4, 5, 6]; // here we GenericArray generic by passing a number type.
const genericStudentName: GenericArray<string> = ["Dipta", "Keya"]; // here we also use the same GenericArray generic by passing a string type. This means, Now we can use a same generic by passing different different type

const genericObjectArray: GenericArray<object> = [
  {
    name: "Dipta",
    roll: 1,
  },
  {
    name: "Keya",
    roll: 2,
  },
];
// Here, I have passed a object to GenericArray generic

// We can easily define the type of object like this,
const genericObjectArray1: GenericArray<{ name: string; roll: number }> = [
  {
    name: "Dipta",
    roll: 1,
  },
  {
    name: "Keya",
    roll: 2,
  },
];
// We can also use type alias with the help of type alias by doing the same thing, see the example
type NameRollType2 = { name: string; roll: number };
const genericObjectArray2: GenericArray<NameRollType2> = [
  {
    name: "Dipta",
    roll: 1,
  },
  {
    name: "Keya",
    roll: 2,
  },
];
// We can also use interface instead of type alias by doing the same thing.
interface NameRollType3 {
  name: string;
  roll: number;
}
const genericObjectArray3: GenericArray<NameRollType3> = [
  {
    name: "Dipta",
    roll: 1,
  },
  {
    name: "Keya",
    roll: 2,
  },
];

// Let's go to the deep and play with multiple type

type GenericTuple<X, Y> = [X, Y]; // here, X take a type and Y also take a type, also return what i passed before.
// Let's see an example with tuple
const relation: GenericTuple<string, string> = ["Dipta", "Keya"];
// here, I have passed double string to GenericTuple generic that means I must have to use string for first and second index. because this a tuple.
const relationWithSalary: GenericTuple<object, string> = [
  {
    name: "Dipta",
    salary: 1000000,
  },
  "Keya",
];
// Same thing but different approach (with explicitly use type)
type GenericTuple2<X, Y> = [X, Y];
const relationWithSalary2: GenericTuple2<
  {
    name: string;
    salary: number;
  },
  string
> = [
  {
    name: "Dipta",
    salary: 1000000,
  },
  "Keya",
];
// Here, I can set the type explicitly in GenericTuple3 generic. where X will be an object and it should contain name and salary property with string and number accordingly. and Y with use string type
type GenericTuple3<X, Y> = [
  X: {
    name: string;
    salary: number;
  },
  Y: string
];
// Now we can simply passed just object, string
const relationWithSalary3: GenericTuple3<object, string> = [
  {
    name: "Dipta",
    salary: 1044400000,
  },
  "Keya",
];

/**
 * before example we used like this,
 * X: {
    name: string;
    salary: number;
  }
 * now we can simply remove X: from X: {
    name: string;
    salary: number;
  }
  Means, Now We can simply write {
    name: string;
    salary: number;
  }
  
  let's see an example
 * 
 */

type GenericTuple5<X, Y> = [
  {
    name: string;
    salary: number;
  },
  string
]; // pass personWithSalary type with type alias without using any parameter variable like X,Y

const relationWithSalary5: GenericTuple5<object, string> = [
  {
    name: "Dipta",
    salary: 10445500000,
  },
  "Keya",
];

// Even, We also use type alias to short more. let's see
type personWithSalary = {
  name: string;
  salary: number;
};
type GenericTuple6<X, Y> = [personWithSalary, string]; // pass personWithSalary type with type alias

const relationWithSalary6: GenericTuple6<object, string> = [
  {
    name: "Dipta",
    salary: 10445500000,
  },
  "Keya",
];

// We already know the interface concept. All the example of about with type alias, we could also use interface instead of type alias
interface personWithSalary1 {
  name: string;
  salary: number;
}
type GenericTuple7<X, Y> = [personWithSalary1, string];
const relationWithSalary7: GenericTuple7<object, string> = [
  {
    name: "Dipta",
    salary: 10445500000,
  },
  "Keya",
];
