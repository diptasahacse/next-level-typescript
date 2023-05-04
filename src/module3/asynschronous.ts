// Let's create a promise with string type
const makePromise = (): Promise<string> => {
  /**
   *  if we can't return anything then by default return type is void. That's why i have to return something. We return the whole promise
   *
   */
  return new Promise((resolved, rejected) => {
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
  const myPromise1 = await makePromise();

  return myPromise1;
};
// When iam not use await/async in getPromise then When, We call getPromise() then output will come Promise { <pending> } because of it's asynchronous behavior. It will come when that exicute

