// Let's create a promise with string type
const makePromiseString = (): Promise<string> => {
  /**
   *  if we can't return anything then by default return type is void. That's why i have to return something. We return the whole promise
   *
   */
  return new Promise<string>((resolved, rejected) => {
    const data = "Some Data";
    if (data) {
      resolved(data);
    } else {
      rejected("Failed to fetch data");
    }
  });

  //   It now return Promise, But type id unknown, if i want to change that thing also, then I explicitly use string with generic <> way
};

/**
 * now, I can use makePromise() for create a promise.
 * but, the problem is, As we know that, this is asynchronous things, that's why we should use async await like this,
 * const myPromise1= await makePromise()
 *
 * but we can't use await with out async. to solve this problem, let's create a function which solve this problem.
 *
 *
 *
 */

// const getPromise = () => {
//   const myPromise1 = makePromise();
// };
// If we can't use async await here, then return type will be void. but If i use async await , then getPromise() return Promise<void> Here I can explicitly say those type as string using generic, like this,
const getPromise = async (): Promise<string> => {
  const myPromise1 = await makePromiseString();

  return myPromise1;
};
// When iam not use await/async in getPromise then When, We call getPromise() then output will come Promise { <pending> } because of it's asynchronous behavior. It will come when that exicute

// Same thing with boolean
const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolved, rejected) => {
    const data = true;
    if (data) {
      resolved(data);
    } else {
      rejected("Failed to fetch data");
    }
  });
};
const getPromiseBoolean = async (): Promise<boolean> => {
  const myPromise1 = await makePromiseBoolean();

  return myPromise1;
};

// Same thing with boolean
const makePromiseArray = (): Promise<string[]> => {
  return new Promise<string[]>((resolved, rejected) => {
    const data: string[] = ["Data", "Data"];
    if (data) {
      resolved(data);
    } else {
      rejected("Failed to fetch data");
    }
  });
};
const getPromiseArray = async (): Promise<string[]> => {
  const myPromise1 = await makePromiseArray();

  return myPromise1;
};

// Same thing with object
const makePromiseObject = (): Promise<object> => {
  return new Promise<object>((resolved, rejected) => {
    const data: object = { name: "Dipta" };
    if (data) {
      resolved(data);
    } else {
      rejected("Failed to fetch data");
    }
  });
};
const getPromiseObject = async (): Promise<object> => {
  const myPromise1 = await makePromiseObject();
  return myPromise1;
};
// Same thing with object and type alias
type DataType = {
  name: string;
  roll: number;
};
const makePromiseObject1 = (): Promise<DataType> => {
  return new Promise<DataType>((resolved, rejected) => {
    const data: DataType = { name: "Dipta", roll: 45 };
    if (data) {
      resolved(data);
    } else {
      rejected("Failed to fetch data");
    }
  });
};
const getPromiseObject1 = async (): Promise<DataType> => {
  const myPromise1 = await makePromiseObject1();
  return myPromise1;
};
// Same thing with object and interface
interface DataInterface {
  name: string;
  roll: number;
}
const makePromiseObject2 = (): Promise<DataInterface> => {
  return new Promise<DataInterface>((resolved, rejected) => {
    const data: DataInterface = { name: "Dipta", roll: 45 };
    if (data) {
      resolved(data);
    } else {
      rejected("Failed to fetch data");
    }
  });
};
const getPromiseObject2 = async (): Promise<DataInterface> => {
  const myPromise1 = await makePromiseObject1();
  return myPromise1;
};

// Let's see with a real life example with api
interface ObjectInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const makeData = async (): Promise<ObjectInterface> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   When i use fetch, then it will return any type.
  return res.json();
};

const getData = async (): Promise<void> => {
  const data = await makeData();
  console.log(data);
};

getData();
