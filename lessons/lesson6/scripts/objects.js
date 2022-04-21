// module system reminder

// import { utils } from "./utils.js";
// const { log } = utils;

export const pet = {
  type: "cat",
  name: "Johnny",
};

export const dog = {
  type: "dog",
  name: "Bertha",
};

const horse = "Bojack";

const pets = {
  cat: pet,
  dog, // dog: dog
  horse,
};

export default pets;

// Prototypes

const obj = {}; // object literal ( use this )

const obj2 = new Object(); // object constructor

// log("from objects.js", obj);
console.log(obj);
console.log(obj2);

const x = obj.__proto__; // legacy, don't use in production
const y = Object.getPrototypeOf(obj); // use this

console.log(x === y);

console.log(obj.__proto__); //dunder proto
console.log(Object.getPrototypeOf(obj)); // Object method

const arr = [];

console.log(arr);

const arrayPrototype = Object.getPrototypeOf(arr);

const arrayPrototypePrototype = arrayPrototype.__proto__;

console.log(arrayPrototype);
console.log(arrayPrototypePrototype);

// [] -> Array -> Object -> null

const arrayPrototypePrototypePrototype = arrayPrototypePrototype.__proto__;

console.log(arrayPrototypePrototypePrototype);

// Constructor

const obj3 = {};
console.log(obj.constructor);

const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  //   console.log(this);
};

const rafa = new Person("Rafa", "Lyovson", 30);
const jess = new Person("Jess", "Lyovson", 30);

const SuperHero = function (firstName, lastName, age, superPower) {
  Person.call(this, firstName, lastName, age);
  //   Person.apply(this, [firstName, lastName, age]);
  this.superPower = superPower;
};

const batman = new SuperHero("Bruce", "Wayne", 24, "rich");

console.log(batman.firstName);
console.log(batman.superPower);

// call, apply, bind

const increment = function (num, ...args) {
  return this.num + args.reduce((acc, curr) => acc + curr);
};

// const inc = (num) => num + 1;  // doesn't have "this".

const objWithaNum = {
  num: 10,
};

console.log(increment.call(objWithaNum, 2, 3, 4));
console.log(increment.apply(objWithaNum, [2, 3, 4]));

const add2nums = function (num1, num2) {
  return num1 + num2;
};

const bindInc = add2nums.bind(this, 1, 3);
console.log(bindInc(5000));

// add2(num1, num2) -> add2(num1)(num2) (curried)

const curry = function (func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func.apply(this, [...args]); // add2.apply(this,[1,2])
    } else {
      return function (...args2) {
        console.log([...args, ...args2]);
        return curriedFunc.apply(this, [...args, ...args2]);
      };
    }
  };
};

const addNums = function (num1, num2) {
  return num1 + num2;
};

const curriedAdd = curry(addNums);

console.log(curriedAdd(1)(2));

const incrementX = curriedAdd(1);

console.log(incrementX(1));

// class syntax
