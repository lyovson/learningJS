export default "async";
console.log("async");

`JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. 

It has dynamic typing, prototype-based object-orientation, and first-class functions. 

It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. 

It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).`;

let timeoutID = setTimeout(() => console.log(1), 5000);
let timeoutID2 = setTimeout(() => console.log(2), 10000);
let timeoutID3 = setTimeout(() => console.log(3), 7000);

// Promises

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// myPromise
//   .then(handleResolvedA, handleRejectedA)
//   .then(handleResolvedB, handleRejectedB)
//   .then(handleResolvedC, handleRejectedC);

console.log(Promise);

const promiser = (resolve, reject) => {};
const myPromise = new Promise(promiser); //reverse of control

const arr = [1, 2, 3, 4, 5];

const mapper = (el) => console.log(el);
arr.map(mapper); // higher order function
// mapper()
