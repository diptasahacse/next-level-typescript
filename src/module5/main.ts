import { myAddFunction as myAddFunction2 } from "./module";
const myAddFunction = (
  param1: number,
  param2: number,
  param3: number
): number => {
  return param1 + param2 + param3;
};
const res = myAddFunction(4, 5, 6);
export const sqrt = (param1: number): number => {
  return param1 ** param1;
};
