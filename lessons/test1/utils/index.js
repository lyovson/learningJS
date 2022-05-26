// declare 4 variables using 4 ways allowed in JS containing values of 4 different data types in /utils/index.js

const str = "String";
let num = 10;
var obj = {
  name: "rafa",
};
// x = false;

// declare 3 functions doing addition, subtraction and multiplication of 2 numbers using 3 ways allowed in JS in /utils/index.js

function add(num1, num2) {
  return num1 + num2;
}

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = (num1, num2) => num1 * num2;

// declare an object { utils } with a method to divide 2 numbers in /utils/index.js

export const utils = {
  divide(num1, num2) {
    return num1 / num2;
  },
  add: add,
  subtract, // subtract: subtract
};

// add the 3 functions created outside of the { utils } object to the object without re-creating them

utils.multiply = multiply;

// add a method to the object utils called { range }that takes 2 numbers and creates an array containing all the numbers between those 2 in /utils/index.js

utils.range = (num1, num2) => {
  let arr = [];
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      arr.push(i);
    }
  } else if (num1 > num2)
    for (let i = num1; i >= num2; i--) {
      arr.push(i);
    }
  else {
    arr.push(num1);
    // return num1;
  }

  return arr;
};

// console.log(utils.range(10, 10));
// console.log(utils.range(1, 10));
// console.log(utils.range(10, 1));

// add a method { curry } to the object { utils } that takes a function taking multiple argumets and returns a function that can take the same amount of arguments one at a time in /utils/index.js

// console.log(utils.range.length);
const add3 = (num1, num2, num3) => num1 + num2 + num3;
// console.log(add3.length);

// higher order function
// recursion
// arity

// curriedAdd = (num1) => (num2) => num1 + num2;

utils.curry = function (argumentFunc) {
  return function returnedFunc(...args) {
    if (args.length >= argumentFunc.length) {
      return argumentFunc.apply(this, args);
    }
    return function (...newArgs) {
      return returnedFunc.apply(this, [...args, ...newArgs]);
    };
  };
};

const curriedAdd3 = utils.curry(add3);

// console.log(add3(1, 2, 3));
// console.log(curriedAdd3(1)(2)(3));

console.log(utils);

const curriedRange = utils.curry(utils.range);
const rangeFromZero = curriedRange(0);

curriedRange(1)(10);
console.log(rangeFromZero(10));

// add 2 new methods { capitalize } and { uppercase } to the object { utils } that take a string and respectively capitalize and uppercase it in /utils/index.js

utils.capitalize = (str) =>
  str // "cat"
    .split("") // ['c', 'a' ,'t']
    .map((char, i) => (i === 0 ? char.toUpperCase() : char)) // ['C', 'a'  't']
    .join("");

utils.uppercase = (str) => str.toUpperCase();

console.log(utils.capitalize("cat"));

// export the object utils using both named and default export methods

export default utils;

// let x  =  === 0 ? char.toUpperCase() : char
// if (i === 0) {
//   return char.toUpperCase();
// } else {
//   return char;
// }
