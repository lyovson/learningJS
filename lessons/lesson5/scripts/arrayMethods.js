const arr = [1, 2, 3, 4, 5];

// higher order functions

const pow = (num) => num * num;

// export const powArr = arr.map(num => num * num);
// export const powArr = arr.map(pow);

const map = (func, arr) => {
  let newArr = [];

  for (let el of arr) {
    newArr.push(func(el));
  }

  return newArr;
};

export const powArr = map(pow, arr);
// -> num => num * num

//1 -> 1
//2 -> 4
//3 -> 9
//4 -> 16
//5 -> 25

const isOdd = (num) => num % 2 !== 0; //not equal

console.log(arr.filter(isOdd));

// predicate -> an expression that resolves to true or false

const x = true;

console.log(x);
console.log(!x);

console.log(!!x);

const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort((a, b) => a - b));
// console.log(points);

const goodSort = (func, arr) => {
  // let copyArr = arr; refernce
  let copyArr = [...arr]; //copy
  copyArr.sort(func);
  return copyArr;
};

// goodSort((a, b) => a - b, points);

console.log(points.slice(2));

console.log(points);

console.log(points.splice(2));

console.log(points);

// use slice not splice

const map2 = (func, arr) => {
  let newArr = [];

  for (let el of arr) {
    newArr.push(func(el));
  }

  return newArr;
};

console.log(arr.map((el) => "cat"));

function sumArray(arr) {
  let sum = 0;

  for (let el of arr) {
    sum += el;
  }

  return sum;
}

console.log(sumArray(arr));
console.log(sumArray([1, 2, 3, 4]));

const reducer = (sum, el) => {
  return sum + el;
};

const reducer2 = (sum, el) => {
  return [...sum, el];
};

console.log(arr.reduce(reducer));
console.log(arr.map((el) => el + 1));
console.log(arr.reduce((sum, el) => sum + el));
// console.log(arr.reduce(reducer2));
