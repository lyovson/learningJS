console.log("test");

let a = 1;
let b = 2;
const add2 = (x, y) => x + y;

function add3(x, y, z) {
  return x + y + z;
}

const add = function (x, y) {
  return x + y;
};

console.log(add(a, add(1, 2)));

const number = add2(a, b);
console.log(number);

function add2numbers(number1, number2) {
  console.log("I'm in a function");
  return number1 + number2;
}

console.log(add2numbers(5, 5));

console.log(add2numbers(5));

const double = (num) => num * 2;

const double2 = (num) => {
  console.log("arrow function");
  return num * 2;
};

console.log(double(4));

const log = (label, statement) => {
  console.log(`${label}: 
    
               ${statement}`);
};

log("add2numbers", add2numbers(4, 5));

// const / function name / (arguments) / {body}
function fullName(firstName, lastName) {
  return `I am ${firstName} ${lastName}`;
}

const fullNameArrow = (firstName, lastName) => `I am ${firstName} ${lastName}`;

log("name", fullName("rafa", "lyovson"));
log("namearrow", fullNameArrow("rafa", "lyovson"));

let author = "J. K. Rowling";

function isAdult(num) {
  const book = "Harry Potter";
  console.log(book);
  console.log(author);
  author = "C. W. Lewis";
  const fullBookName = (bookName, authorName) => {
    return {
      name: bookName,
      author: authorName,
    };
  };
  return fullBookName(book, author);
}

console.log(isAdult(5));

isAdult(18);

4 + 2;
4 + add2numbers(1, add2numbers(1, 1));

const x = (y) => y * 2;

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 15,
  children: [
    { firstName: "first", lastname: "Doe" },
    { firstName: "last", lastname: "Doe" },
  ],
  address: {
    city: "Yerevan",
  },
  sing: (song) => "Happy New year",

  toAge: function () {
    this.age = this.age + 1;
  },
};

console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
person.age = 19;
console.log(person.age);

const z = 20;
const test = { x: 10, y: 20 };
// obj = { z: 30 };
test.y = 30;
test.z = 40;

console.log(test);

console.log(person.sing());

console.log(person.age);
person.toAge();
console.log(person.age);

console.log(console);

console.log(Math.PI);

console.log(person.children[1].firstName);

const numbers = [1, 2, 3, 4, 5]; // {0: 1, 1: 2, 2: 3}
console.log(numbers[0]);

// document.querySelector("title").style.color = "blue";

const isAdult2 = (age) => {
  if (age >= 21) {
    return "adult even in the USA";
  } else if (age >= 18) {
    return "adult in most of the world";
  } else {
    return "not an adult";
  }
};

console.log(isAdult2(person.age));

const checkName = (name) => {
  const x = 0;
  if (name === "John") {
    return "Hi John";
  } else {
    return "Hi there";
  }
  console.log("after if");
};

console.log(checkName("Alice"));

const fruit = "Papayas";
switch (person.firstName) {
  case "John":
    console.log("Hi John!");
    break;
  case "Alice":
    console.log("Hi Alice!");
    break;
  default:
    console.log(`Hi there!`);
}

// ternery

// (predicate) ? true : false
const greeting = (name) => (name === "John" ? "Hi John!" : "Hi there.");

log("?", greeting(person.firstName));

const greeting2 = (name) => (name ? `Hi ${name}!` : "Hi there.");

console.log(greeting2());

// loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let k = 20;

// while (k > 10) {
//   console.log(k);
//   k--;
// }

numbers.push(100);

console.log(numbers);

let acc = 0;

for (h of numbers) {
  console.log(h);
  acc += h;
}

console.log(acc);

numbers.map((h) => log("map", h));
numbers.forEach((h) => log("forEach", h));

numbers.map(function (h) {
  console.log(h);
});
