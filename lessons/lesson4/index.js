console.log("lewson4");

// function range2(num1, num2) {
//   let x = [];
//   for (let i = num1; i < num2; i++) {
//     x.push(i);
//   }
//   return x;
// }

const range = (num1, num2) => {
  let x = [];
  for (let i = num1; i < num2; i++) {
    x.push(i);
  }
  return x;
};

const curriedRange = (num1) => (num2) => {
  let x = [];
  for (let i = num1; i < num2; i++) {
    x.push(i);
  }
  return x;
};

// [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums2 = curriedRange(5)(15);

// const rangeFrom1 = (num) => {
//   let x = [];
//   for (let i = 1; i < num; i++) {
//     x.push(i);
//   }
//   return x;
// };

const rangeFrom1 = curriedRange(1);
const rangeFrom10 = curriedRange(10);
const rangeFrom0 = curriedRange(0);

let nums = range(1, 10);
console.log(nums);
console.log(rangeFrom10(20));

// for (num of nums) {
//   console.log(num);
// }

const word = "yes";
console.log(word[0]);
console.log(word.length);
console.log(word.split(""));
console.log(word.split("").reverse().join(""));

nums;
console.log(nums[0]);
// console.log(nums.reverse());
console.log(nums.length);
console.log(nums[nums.length - 1]);
console.log(nums.join(""));

let x = nums.join("");
let y = Number(x);
console.log(typeof x);
console.log(typeof y);

nums;

// const reversedNums = nums.reverse();

// reversedNums;
nums;

nums.push(11);
nums;

nums.pop();
nums;

nums.unshift(10);
nums;

nums.shift();
nums;

const reverseArray = (arr) => {
  let newArr = [];

  for (item of arr) {
    newArr.unshift(item);
  }

  return newArr;
};
const reverseNums = reverseArray(nums);

reverseNums;
nums;

const add2nums = (num1, num2) => num1 + num2;
console.log(add2nums(2, 3));

const curriedAdd2Nums = (num1) => (num2) => num1 + num2;
console.log(curriedAdd2Nums(2)(3));

const increment = curriedAdd2Nums(1);
console.log(increment(2));

let newArr = [];
for (num of nums) {
  newArr.push(increment(num));
}

newArr;

newArr = nums.map((num) => increment(num));

newArr;

// nums.map();

const map = (func, arr) => {
  let newArr = [];
  for (el of arr) {
    let x = func(el);
    newArr.push(x);
  }
  return newArr;
};

const curriedMap = (func) => (arr) => {
  let newArr = [];
  for (el of arr) {
    let x = func(el);
    newArr.push(x);
  }
  return newArr;
};

increment;

console.log(map(increment, nums));
console.log(curriedMap(increment)(nums));

console.log(["rafa", "jess", "mary"].map((name) => name.toUpperCase()));
console.log(["rafa", "jess", "mary"].map((name, index) => index));

const isEven = (num) => num % 2 === 0;

nums;
console.log(nums.filter(isEven));

const curiedFilter = (func) => (arr) => {
  let newArr = [];

  for (el of arr) {
    if (func(el) === true) {
      newArr.push(el);
    }
  }

  return newArr;
};

console.log(curiedFilter(isEven)(nums));
console.log(curiedFilter((num) => num > 3)(nums));

console.log(
  ["armen", "artyom", "mko", "hayko"].filter((name) => name[0] === "a")
);

[{ name: "armen" }, { name: "Tyom" }].filter(
  (person) => person.name[0] === "a"
);
