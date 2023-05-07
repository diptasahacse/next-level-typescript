// Convert the following JavaScript array into a TypeScript tuple
const userInfo = [101, "Ema", "John", true, , "2023"];

type UserTupleType = [number, string, string, boolean, undefined, string];
const userTuple: UserTupleType = [101, "Ema", "John", true, , "2023"];
console.log(userTuple);
