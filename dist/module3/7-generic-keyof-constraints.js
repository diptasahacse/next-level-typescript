"use strict";
// Means, Now we can only use or access name,age, address with newType by create a new Object
// Example,
const a1 = "address";
const a2 = "age";
const a3 = "name";
/**
 * Now, newType and newTypeUsingKeyOf is got same thing.
 *
 */
const b1 = "address";
const b2 = "name";
const b3 = "age";
// const b4:newTypeUsingKeyOf = "role"//We can't use any other property name like this
// Let's see an example with extends and keyof concept,
function getProperty(obj, key) {
    return obj[key];
}
// Here, Y receive a string, which extends a mandatory keys of X (name, age). means now Y is look like this = 'name' | 'age' 
const property = getProperty({ name: "Dipta", age: 27 }, "age"); // we can not pass any other string like 'role', 'salary' except name, age. because Y extends all keys of X. and X has 'name' and 'age'
console.log(property);
