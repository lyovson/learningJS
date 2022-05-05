const arr = [1, 2, 3, 4, 5];
const arr2 = [10, 20, 30, 40, 50];
// const newArr = new Array();

const inc = (el) => el + 1;
const isEven = (el) => el % 2 === 0;
const gather = (acc, el) => acc + el;

// Map

const x = arr.map(inc);

x;

const myMap = (func, arr) => {
  let newArr = [];
  for (let el of arr) {
    newArr.push(func(el));
  }

  return newArr;
};

let xs = myMap(inc, arr);

console.log(xs);

// Filter

const y = arr.filter(isEven);

y;

const myFilter = (func, arr) => {
  let newArr = [];

  for (let el of arr) {
    if (func(el) === true) {
      newArr.push(el);
    }
  }

  return newArr;
};

let ys = myFilter(isEven, arr);
console.log(ys);

// Reduce

const z = arr.reduce(gather);

z; // [15]

//   const gather = (acc, el) => acc + el;
const myReduce = (func, arr) => {
  let newArray = [];
  let val = 0;

  for (let el of arr) {
    val = func(val, el);
  }

  newArray.push(val);

  return newArray;
};

const myReduce2 = (func, acc, arr) => {
  let val = acc;

  for (let el of arr) {
    func(val, el);
  }

  return val;
};

const zs = myReduce(gather, arr);
console.log(zs.map(inc).map(inc).map(inc).map(inc));
console.log(myReduce2((acc, curr) => acc.push(curr * 2), [], arr));
console.log(myReduce2(gather, 0, arr));

console.log([1, 2, 3] + [4, 5, 6]);
console.log([1, 2, 3].concat([4, 5, 6]));
console.log([...[1, 2, 3], ...[4, 5, 6]]);
