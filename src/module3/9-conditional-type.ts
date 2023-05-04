// A type is dependent on another type
// Let see an example
type a1 = string;
type a2 = a1 extends string ? string : null;
// Means, type of a1 is string then a1 will be string, otherwise the type of a1 will be null

// nested conditional type
type a3 = undefined;
type a4 = number;

type d = a1 extends null ? null : a3 extends null ? null : never;
// let's breakdown the above code,
/**
type d = a1 extends null ? null : a3 extends null ? null : never

Step 1 => d1 = a1 extends null ? null : a3   => this result will come a3 that means, d1 = a3
Step 2 => d2 = a3 extends null ? null : never => this result will come 'never' that means, 

type of d will be 'never' type


 */

// Let's see with real life example,
type Sheikh = {
  wife1: string;
  wife2: string;
};
/*
Check, if Sheikh type has whife2 property or not. if has then return true, otherwise false
*/
type CheckProperty<T> = T extends { wife1: string } ? true : false;
type CheckWife1 = CheckProperty<Sheikh>;

/**
 

I have passed Sheikh object to CheckProperty, Means, T will be an object,
That means code will be look like,
{
  wife1: string;
  wife2: string;
} extends { wife1: string }

means, { wife1: string } this property with type is present Sheikh object or not.
means, output will be true

 */
// Let's check for wife2 with multiple parameter example,
