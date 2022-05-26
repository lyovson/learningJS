import utils from "./utils/index.js";

const { capitalize, uppercase } = utils;

// create a factory function { Person } that takes a name, a last name and an age and returns a new person when called in /students.js
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.greet = function () {
  return `Hi, I'm ${this.name}`;
};

// create another factory function called { Student } that inherits from { Person } with additional argument { University } and returns a new student when applied in /students.js

function Student(firstName, lastName, age, university) {
  Person.call(this, firstName, lastName, age);
  this.university = university;
}

// const createPerson = (name, lastName) => {
//   return {
//     name,
//     lastName,
//   };
// };

// const vahan = createPerson("Vahan", "Khachatryan");
// console.log(vahan);

// convert the { Person } and { Student } factory functions to use the class syntax in /students.js

const PersonClass = class {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }
};

class StudentClass extends Person {
  constructor(firstName, lastName, age, university) {
    super(firstName, lastName, age);
    this.university = university;
  }

  celebrate() {
    return `I've graduated from ${this.university} Yaay!!!`;
  }
}

const hayk = new StudentClass("Hayk", "Boyajyan", 23, "YSU");
console.log(hayk.celebrate());
