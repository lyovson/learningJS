const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

console.log(...arr); //spread
console.log(...arr2); //spread
const copyArr = [...arr];
console.log(copyArr);
const mergeArr = [...arr, ...arr2];
console.log(mergeArr);

// for (let el of arr) {

// }

const addNums = (...nums) => {
  console.log(nums);
  //   return nums.map((num) => num * num);
  return nums.reduce((sum, el) => sum + el);
};

const addNums2 = (num1, num2, ...nums) => {
  console.log(`${num1}: ${nums.reduce((sum, el) => sum + el)}`);
};

console.log(addNums2(1, 2, 3, 4, 5));

console.log(addNums(1, 2, 3, 4, 5));

const person = {
  firstName: "Rafa",
  lastName: "Lyovson",
  age: 30,
  nationality: "Armenian",
};

const { lastName } = person;
const { firstName: name, age } = person;

console.log(age);
console.log(name);
