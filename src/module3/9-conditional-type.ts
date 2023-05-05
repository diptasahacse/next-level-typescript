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
// Let's check for wife2 with multiple parameter example,wife1 and wife2
type CheckPropertyWithMultipleParameter<T, X> = X extends keyof T
  ? true
  : false;

type CheckWife2 = CheckPropertyWithMultipleParameter<Sheikh, "wife2">;

/**
 * 1st parameter : I passed Sheikh which is an object type like this,
{
  wife1: string;
  wife2: string;
}
2st parameter : I passed a string which will store in X,

keyof T means, > 
'wife1' | 'wife2'

now, 'X extends keyof T' means
'wife2' extends 'wife1' | 'wife2' => 'wife2' is 'wife1' or 'wife2' or not
 'wife2' extends 'wife1' | 'wife2' is true that means, means, CheckWife2 will be true
 same thing with 'wife3'
 */
type CheckWife3 = CheckPropertyWithMultipleParameter<Sheikh, "wife3">; // will return false

// let's see an another example,

type Players = "Sakib" | "Musfik" | "Mostafiz";

type RemovePlayer1<T> = T extends "Musfik" ? never : T; // "Sakib" | "Musfik" | "Mostafiz" extends "Musfik" ans is true that means "Musfik" will replace with never. but, when any value of union is changed by never then that value will be remove from that type.

type CurrentPlayer = RemovePlayer1<Players>;  // when any value of union is changed by never then that value will be remove from that type. means CurrentPlayer will be "Sakib" | "Mostafiz"

// let's do same thing with more dynamic with parameter
type RemovePlayer2<T, X> = T extends X ? never : T;
type CurrentPlayer1 = RemovePlayer2<Players, "Sakib">;