// Make Type use type
type UserType = {
  name: string;
  age: number;
};

// Make Type use Interface
interface IUser {
  name: string;
  age: number;
}

/**
 * Difference is,
 * We will use interface when we use oject type data like function, object, array.
 */
// Object with type alias
const userWithTypeAlias: UserType = {
  name: "Dipta",
  age: 29,
};
// Object with interface
const userWithInterface: IUser = {
  name: "Dipta",
  age: 29,
};
// Type alias with extended => I already leaned
type ExtendUserType = UserType & {
  role: string;
};
const nextUser: ExtendUserType = {
  name: "Dipta",
  age: 28,
  role: "Admin",
};
// Same thing with interface
// Interface with extend
interface IExtendedUserType extends IUser {
  role: string;
}
// Object with interface with extends
const exUser: IExtendedUserType = {
  name: "Dipta",
  age: 34,
  role: "Admin",
};

/**
 *
 * *Main difference between type alias and interface is, We can extend interface with 'extends' keyword, where in type alias, we can easily do same thing with union and intersection. We can use anyone type alias or interface for non primitive type like Oject/function/array. We can not use interface for primitive type because of the syntax style of interface. but We should use type alias for primitive type.
 */
// Why we can't use interface instead of type alias for a primitive type.
// Syntax of type alias is like,

// For primitive
type valueType = number;
type customerType = string;
// For non primitive
type adminType = {
  name: string;
  age: number;
};
// That means type alias syntax is depend of the type of value.
// But Interface syntax is fixed. that's why we can't use interface for primitive type value;

// Some Examples

// type alias for non primitive type (Function)
type CustomFuncType = (num1: number, num2: number) => number;

// Same thing with interface
interface ICustomFuncType {
  (num1: number, num2: number): number;
}
const addNumberWithType: CustomFuncType = (num1, num2) => num1 + num2;
const addNumberWithInterface: ICustomFuncType = (num1, num2) => num1 + num2;

// interface is invented for non primitive type. but we will only use type alias for function instead of interface. because using type alias with function, which is more readable than interface with function type.

/**
 * Most difference in array is,
 * In type alias we simply write,
 * number[] for type
 * but in interface,
 * [index: number]: number
 *
 * [index: that type of value you store]: what type of array
 *
 */
// Example

// type alias with array
type CustomArrayWithType = number[];

// Same thing with interface
interface CustomArrayWithInterface {
  [index: number]: number; // indexing nature
}
const arrayWithType: CustomArrayWithInterface = [1, 2, 3, 4]; // [index]
console.log(arrayWithType);
// Here, also will use type alias for array. Because, Interface is mainly invented to handle object and class related concept.we will also use type alias for array instead of interface. because using type alias with array, which is more readable than interface with function type. Summery of this topic is, we will use interface, when we use object, class. Otherwise we always use type alias.
