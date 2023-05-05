type PersonType = {
  name: string;
  age: number;
  address: string;
};
type newType = "name" | "age" | "address"; //Manual process as we know

// Means, Now we can only use or access name,age, address with newType by create a new Object
// Example,
const a1: newType = "address";
const a2: newType = "age";
const a3: newType = "name";
// const a4:newType = "roll" // we can't use any other property like this , because, that is is exist in newType

// same thing using keyOf
type PersonType1 = {
  name: string;
  age: number;
  address: string;
};
type newTypeUsingKeyOf = keyof PersonType1; // saying that, you have to use all keys in PersonType1. means newTypeUsingKeyOf will work like, "name" | "age" | "address". 

/**
 * Now, newType and newTypeUsingKeyOf is got same thing.
 * 
 */
const b1: newTypeUsingKeyOf = "address";
const b2: newTypeUsingKeyOf = "name";
const b3: newTypeUsingKeyOf = "age";
// const b4:newTypeUsingKeyOf = "role"//We can't use any other property name like this

// Let's see an example with extends and keyof concept,
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}
// Here, Y receive a string, which extends a mandatory keys of X (name, age). means now Y is look like this = 'name' | 'age' 

const property = getProperty({ name: "Dipta", age: 27 }, "age"); // we can not pass any other string like 'role', 'salary' except name, age. because Y extends all keys of X. and X has 'name' and 'age'

console.log(property);
