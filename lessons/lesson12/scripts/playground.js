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
  if (isNaN(val)) return "NaN";
  if (val === null) return "null";

  return typeof val;
};

getType(1); //?
getType(null); //?
getType([]); //?
getType(NaN); //?
