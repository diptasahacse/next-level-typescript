"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Let's create a promise with string type
const makePromiseString = () => {
    /**
     *  if we can't return anything then by default return type is void. That's why i have to return something. We return the whole promise
     *
     */
    return new Promise((resolved, rejected) => {
        const data = "Some Data";
        if (data) {
            resolved(data);
        }
        else {
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
const getPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    const myPromise1 = yield makePromiseString();
    return myPromise1;
});
// When iam not use await/async in getPromise then When, We call getPromise() then output will come Promise { <pending> } because of it's asynchronous behavior. It will come when that exicute
// Same thing with boolean
const makePromiseBoolean = () => {
    return new Promise((resolved, rejected) => {
        const data = true;
        if (data) {
            resolved(data);
        }
        else {
            rejected("Failed to fetch data");
        }
    });
};
const getPromiseBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const myPromise1 = yield makePromiseBoolean();
    return myPromise1;
});
// Same thing with boolean
const makePromiseArray = () => {
    return new Promise((resolved, rejected) => {
        const data = ["Data", "Data"];
        if (data) {
            resolved(data);
        }
        else {
            rejected("Failed to fetch data");
        }
    });
};
const getPromiseArray = () => __awaiter(void 0, void 0, void 0, function* () {
    const myPromise1 = yield makePromiseArray();
    return myPromise1;
});
// Same thing with object
const makePromiseObject = () => {
    return new Promise((resolved, rejected) => {
        const data = { name: "Dipta" };
        if (data) {
            resolved(data);
        }
        else {
            rejected("Failed to fetch data");
        }
    });
};
const getPromiseObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const myPromise1 = yield makePromiseObject();
    return myPromise1;
});
const makePromiseObject1 = () => {
    return new Promise((resolved, rejected) => {
        const data = { name: "Dipta", roll: 45 };
        if (data) {
            resolved(data);
        }
        else {
            rejected("Failed to fetch data");
        }
    });
};
const getPromiseObject1 = () => __awaiter(void 0, void 0, void 0, function* () {
    const myPromise1 = yield makePromiseObject1();
    return myPromise1;
});
const makePromiseObject2 = () => {
    return new Promise((resolved, rejected) => {
        const data = { name: "Dipta", roll: 45 };
        if (data) {
            resolved(data);
        }
        else {
            rejected("Failed to fetch data");
        }
    });
};
const getPromiseObject2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const myPromise1 = yield makePromiseObject1();
    return myPromise1;
});
const makeData = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    //   When i use fetch, then it will return any type.
    return res.json();
});
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makeData();
    console.log(data);
});
getData();
