const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfString = arrayOfNumbers.map((item) => item.toString());
console.log(arrayOfString);

// let's apply map on type

type AreaNumber = {
  height: number;
  width: number;
};
type AreaString = {
  height: string;
  width: string;
};

// const obj = {
//     name: "Dipta"
// }
// console.log(obj['name'])
// As we know, We can access object property by using obj['name'] or obj.name

// Lets do same thing with type
type A = AreaNumber["height"]; // this is called look up type
type B = keyof AreaNumber; // 'height' | 'width'

const rectangleArea: AreaNumber = {
  height: 23,
  width: 50,
};
// Now, we can use, modify any of the property of rectangleArea like this,
rectangleArea.height = 566; //

// But if I want to prevent modify value then,
type AreaReadonly = {
  readonly height: number;
  readonly width: number;
};
const rectangleArea1: AreaReadonly = {
  height: 23,
  width: 50,
};
//   NOw, we can not modify like this. but we can use
//   rectangleArea1.height = 566// no
// console.log(rectangleArea1.height)

//

type Volume = {
  height: number;
  width: number;
  depth: number;
};

//example
type Area1 = {
  [key in "height" | "width" | "depth"]: number;
};
//Area1 type is like,
/*
Area1{
  height: number;
  width: number;
  depth: number;
}

*/
// example with little bit dynamic
type Area2 = {
  [key in keyof Volume]: Volume[key]; //keyof Volume means 'height' | 'weight' | 'depth', Volume[key] means, Volume['height'](for first iteration) ---> number, that means, height: number will come first iteration,
};

// example with more dynamic
type Area3<T> = {
  [key in keyof T]: T[key];
};

const Area3: Area3<{ name: string; age: number }> = {
  name: "Dipta",
  age: 29,
};
type Volume1 = {
  height: number;
  width: number;
  depth: string;
};
const Area4: Area3<Volume1> = {
  height: 5,
  width: 29,
  depth: "4",
};

// example
type Area5<T> = {
  readonly [key in keyof T]: T[key];
};
const Area6: Area5<Volume1> = {
  height: 5,
  width: 29,
  depth: "4",
};
// now we can't modify anyof the value of Area6 object
// 
// Area6.depth = 44// not possible because of readonly
console.log(Area6);
