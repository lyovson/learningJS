console.log("lesson8");

// asynchronous

const inc = (num) => num + 1;

const add3 = (num1, num2, num3) => num1 + num2 + num3;

let arr = [1, 2, 3, 4, 5];
const newArr = arr.map(inc); //callback
// console.log(arr.map(add3));

console.log(newArr);
console.log(arr);

class Person {
  constructor(name) {
    this.name = name;
  }
}

// const rafa = rafa.name
// const rafa = this.name;
// console.log(rafa);

const rafa = new Person("Rafa");

const obj = {}; //syntactic sugar

const obj2 = new Object(); //don't do this

const text = "string"; //syntactic sugar

const string2 = new String("string");

const func = (resolve, reject) => {
  let x = 10; // any async task
  if (x < 100) {
    resolve("100");
  } else if (x < 50) {
    resolve("50");
  } else {
    reject("Nope!");
  }
};

const prm = new Promise(func);

prm
  //   .then((el) => 1)
  .then((el) => el.toUpperCase())
  .then((el) => el.split(""))
  .then((el) => console.log(el))
  .catch((err) => console.log(err));

const stringArr = arr
  .map((el) => el + 1)
  .map((el) => el * 2)
  .map((el) => String(el));

console.log(stringArr);

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(matrix.map(([el1, el2]) => [el1 + 1, 1 + el2]));
console.log(matrix.flatMap(([el1, el2]) => [el1 + 1, 1 + el2]));

// Promise(Promise(val)) Promise(val)
// Array(Array(val)) Array(val) [val]

try {
  const x = 1;
  x.toUpperCase();
} catch (err) {
  //   console.log(err);
}

function* gen() {
  for (let i = 0; i < 10; i++) {
    yield x;
  }
  return;
}

const waiting = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("10");
    }, 3000);
  });
};

waiting()
  .then((el) => console.log(el))
  .catch((err) => console.log("err"));
// console.log("while waiting");

try {
  async function asyncWaiting() {
    let x = await waiting();
    console.log(x);
  }
} catch (err) {
  console.log(err);
}
