// PICK

interface CustomPerson {
  name: string;
  email: string;
  contact: string;
}

// If i want to use the type of Person's email in my Email Type,
/*
To do that thing, I have to use Pick this is a another generic

*/
type Email = Pick<CustomPerson, "email">; // Here, I used email property with type is which Person used for email
type Contact = Pick<CustomPerson, "email" | "contact">; // Here, I used email and contact property with type is which Person used for email and contact

// OMIT   //It is alternative of Pick
// If i want to use all property of Person except email property then,
type user = Omit<CustomPerson, "email">;

// take all property except email, contact,
type user1 = Omit<Person, "email" | "contact">;

// Partial => To make all the property to be optional
type myOptionalType = Partial<CustomPerson>;

// Require => To make all the property to be Require
interface CustomPerson1 {
  name: string;
  email: string;
  contact: string;
  age?: number;
}

type MyRequireType = Required<CustomPerson1>;

// Readonly => to make the property readonly

type MyData = Readonly<CustomPerson1>;

// Record Type

type mmyObjectType = {
  a: string;
  b: string;
  c: string;
};
const obbj: mmyObjectType = {
  a: "abc",
  b: "def",
  c: "ghi",
};
// Same thing using index signature
type mmyObjectType1 = {
  [key: string]: string;
};

// const mmyyObj:mmyObjectType1={
//   a:'a',
//   b:'bbbxx',
//   c:'bxx',
// }
// type mmyObjectType1 = {
//   [key: 'a'|'b'|'c']: string;  // I can not use like this
// };
// Let's use Record utility
const mmmmyObj: Record<"name" | "role" | "address", string> = {
  name: "Dipta",
  role: "Developer",
  address: "Khulna",
  // age:455 // i can't use
};
