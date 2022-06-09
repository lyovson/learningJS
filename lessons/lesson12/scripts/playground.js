// const obj = {
//   cat: "meow",
//   dog: "woof",
//   cow: "moo",
// };

// Object.keys(obj); //?
// Object.values(obj); //?
// Object.entries(obj); //?

// Object.entries(obj).forEach(([k, v]) => console.log(k, v));

const arr = [1, 2, 3];

typeof 1; //?
typeof "str"; //?
typeof false; //?
typeof [1, 2, 3]; //?
typeof { a: 1 }; //?
typeof null; //?
typeof undefined; //?
typeof 1n; //?
typeof NaN; //?

isNaN(NaN); //?
isNaN("2"); //?

const getType = (val) => {
  if (val instanceof Array) return "array";
  // val instanceof Array ? "array" : "object";
  if (isNaN(val)) return "NaN";
  if (val === null) return "null";

  return typeof val;
};

getType(1); //?
getType(null); //?
getType([]); //?
getType(NaN); //?

const person = {
  name: "Rafa",
  lastName: "Lyovson",
  age: 31,
};

const personName = "Rafa";
const personLastname = "Lyovson";
const personAge = 30;

const add = (num1, num2) => num1 + num2;

add(2, 3); // 2 + 3

function addToArray(val, arr) {
  arr.push(val);
}

let nums = [1, 2, 3];

addToArray(5, nums);

nums;

const addToArr = (val, arr) => {
  arr.unshift(val);

  return arr;
};
addToArr(3, [1]); //?

let man = {
  name: "Lyov",
  lastname: "smith",
  age: 20,
  sayHi: (name) => `Hi, ${name}!`,
};

typeof man; //?

nums[0]; //?

man["age"]; //?

man.age; //?

man.sayHi("Hendo"); //?

function getVal(key, obj) {
  return obj[key];
}

const getVal2 = (key, obj) => obj[key];

getVal("name", man); //?

getVal2("sayHi", man)("Tyom"); //?
man.sayHi("Tyom");

getVal2(man, "sayHi"); //?

const reverseCall = (func) => {
  return (par1, par2) => {
    return func(par2, par1);
  };
};

let numb = "10";

+numb; //?

Number(numb);
String(10);

const stuff = [1, 2, 3];
const copyStuff = [...[1, 2, 3]]; //spread
const [el1, el2, el3] = stuff; //destructuring

el1;
copyStuff;

const reverseCall2 = (func) => (par1, par2) => func(par2, par1);
const reverseCall3 =
  (func) =>
  (...pars) =>
    func(...[pars.reverse()]);
//let  pars = [par1, par2, par3]
// pars.reverse() -> [par3, par2, par1]
// func(par3, par2, par1)

const reversedGetVal = reverseCall2(getVal2);

getVal2("age", man); //?
reversedGetVal(man, "age"); //?

typeof getVal2; //?
typeof reversedGetVal; //?

// const reverseCall2 = (func) => (par1, par2) => func(par2, par1);

const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }

    return function (...args2) {
      return curried(...args, ...args2);
    };
  };
};

const obj2 = {
  name: "John",
  lastName: "Smith",
};

obj2.name = "Jane";

console.log(obj2); //?

Object.freeze(obj2);

obj2;

obj2.name = "James";

obj2;

let obj3 = Object.fromEntries(Object.entries(obj2)); //?

obj3;

obj3.name = "James";

obj3;
obj2;
const curriedgetVal = curry(getVal2);

typeof curriedgetVal(1); //?

getVal2("name", man); //?
getVal2.length; //?
curriedgetVal("name", man); //?
let getName = curriedgetVal("name"); //?
getName(man); //?

const car = {
  name: "Model Y",
  brand: "Tesla",
};

getName(car); //?
