// Generic with type alias

function addMyCrush3<T>(myInfo: T): T {
  const crush = "Keya";
  const newData = { ...myInfo, crush };
  return newData;
}
type myInfoType = {
  name: string;
  age: number;
  salary: number;
};
const myInfo3 = {
  name: "Dipta Saha",
  age: 29,
  salary: 15000,
};

const withMyCrush3 = addMyCrush3<myInfoType>(myInfo3);
console.log(withMyCrush3);
