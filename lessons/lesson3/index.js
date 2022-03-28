// function add2numbers(num1, num2) {
//   return num1 + num2;
// }

// const add2numbers = function (num1, num2) {
//   return num1 + num2;
// };

// const add2numbers = (num1, num2) => {
//   return num1 + num2;
// };

// const add2numbers = (num1, num2) => num1 + num2;

// function add2numbers(num1) {
//   return function (num2) {
//     return num1 + num2;
//   };
// }

// const add2numbers = (num1) => (num2) => num1 + num2; //curried dunction

// function increment(num) {
//   return num + 1;
// }

// const increment = (num) => num + 1;

// const increment = add2numbers(1); // partial application
// const add2 = add2numbers(2); // partial application
// const add3 = add2numbers(3); // partial application

// console.log(increment); // num  => 1 + num

// let x = add2numbers(2, 3);
// let x = add2numbers(2)(3);
// let x = add3(add2(increment(2))); //
// let x = add2(3);
// console.log(x);

// const person = {
//   firstName: "Rafa",
//   lastName: "Lyovson",
//   age: 30,
//   //   7: 8,

//   //   introduce: function () {
//   //     return `Hi, I'm ${this.firstName}`;
//   //   },

//   //   introduce: () => `Hi, I'm ${this.firstName}`,
//   introduce() {
//     // "Hi, I'm " + this.firstName
//     return `Hi, I'm ${this.firstName}`;
//   },

//   greet(name) {
//     return `Hi ${name}, I'm ${this.firstName}`;
//   },
// };

// let y = "firstName";

// let x = person.firstName;
// let x = person["firstName"];
// let x = person[y];
// let x = person.y; // person['y']
// let x = person[3 + 4];

// let x = y.toUpperCase();
// let x = person.firstName.toUpperCase();
// let x = person["firstName"].toUpperCase();
// let x = person[y].toUpperCase();

// const toUpperCase = (str) => str.toUpperCase();

// let x = toUpperCase(y);

// let x = person.introduce();

// let x = person.greet("Jess");

// let x = "random text";

// let x = new String("random text");
// let x = new Number(10);
// let obj = {};
// let obj = new Object();
// obj.greet = "hi";

// factory function
// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }

class Student extends Person {
  constructor(firstName, lastName, age, university) {
    super(firstName, lastName, age);
    this.university = university;
  }
}

const rafa = new Student("Rafa", "Lyovson", 30, "AUA");
const jess = new Student("Jess", "Lyovson", 29, "YSU");

// let x = Object.keys(rafa);
let x = Object.values(rafa);

// let x = new String(10)

const list = [rafa, jess];

// const list = {
//   0: rafa,
//   1: jess,
// };

const touple = ["rafa", 10, false];

const names = ["rafa", "jess", "mary"];

// const names = new Array();

// let x = names[2].toUpperCase();
// let x = touple[0] + 5;

// let x = names.map((name) => name.toUpperCase());
// let x = names.map((name, i) => i);

console.log(x);
