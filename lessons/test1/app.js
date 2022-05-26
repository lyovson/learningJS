// import the { utils } object using the default import and the { range } and { curry } methods using named import on the same line in /index.js
import utils from "./utils/index.js";

console.log(utils);

const { curry, range } = utils; // const curry = utils.curry

// partially apply number 2 to the basic math methods of the object utils using the { curry } method of the same object and save them in 4 new variables in /index.js

const curriedSum = utils.curry(utils.add);
const curriedSubtract = curry(utils.subtract);
const curriedMultiply = curry(utils.multiply);
const curriedDivide = curry(utils.divide);

const add2 = curriedSum(2); //partial application
const subtract2 = curriedSubtract(2); //partial application
const multiply2 = curriedMultiply(2); //partial application
const divide2 = curriedDivide(2); //partial application

// create an array of numbers 1 to  10 using the { range } method of the object { utils } in /index.js

let range10 = range(1, 10);
range10;

// apply the 4 partially applied functions to the newly created array and save the results to 4 new variables in /index.js

let x = range10.map(add2);
let y = range10.map(subtract2);
let z = range10.map(multiply2);
let w = range10.map(divide2);
