// PICK

interface Person {
  name: string;
  email: string;
  contact: string;
}

// If i want to use the type of Person's email in my Email Type,
/*
To do that thing, I have to use Pick this is a another generic

*/
type Email = Pick<Person, "email">; // Here, I used email property with type is which Person used for email
type Contact = Pick<Person, "email" | "contact">; // Here, I used email and contact property with type is which Person used for email and contact


// OMIT   //It is alternative of Pick
// If i want to use all property of Person except email property then,
type user= Omit<Person, "email"> 

// take all property wxcept email, contact,
type user1= Omit<Person, "email"|"contact"> 