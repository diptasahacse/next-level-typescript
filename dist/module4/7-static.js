"use strict";
class Counter {
    constructor(counter) {
        this.counter = counter;
    }
    increment() {
        return (this.counter += 1);
    }
    decrement() {
        return (this.counter -= 1);
    }
}
const instance1 = new Counter(0);
const instance2 = new Counter(5);
// console.log(instance1.increment());
// console.log(instance2.decrement());
// instance2.decrement()
// console.log(instance2)
// Lets use static
class Counter1 {
    // here i initialize counter statically or set as fixed. that's why i don't need to use constructor
    increment() {
        // I also can't use counter with this keyword. I need to use That ClassName.counter
        return (Counter1.counter += 1);
    }
    decrement() {
        return (Counter1.counter -= 1);
    }
}
Counter1.counter = 0;
const count1 = new Counter1();
// console.log(count1.increment());
// console.log(count1.decrement());
// static method
class Counter2 {
    static increment() {
        return (Counter1.counter += 1);
    }
    static decrement() {
        return (Counter1.counter -= 1);
    }
}
Counter2.counter = 0;
const instance3 = new Counter2();
//   to use static method, now i can not use instance3.increment() like this, i have to use Counter2.increment() like this, example,
// console.log(instance3.increment())// we can't do like this
console.log(Counter2.increment());
