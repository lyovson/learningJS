const arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i);
}

// for (let el of arr) {
//   el; //?
// }

arr.map((el, i) => (arr[i] = el + 1));

arr;

// arr.reduce((el, x) => el + x, ""); //?
// arr.reduce((_, x) => x + 1, 0); //?

let newArr = arr
  .reduce((x, el) => {
    x.push(el + 1);
    return x;
  }, [])
  .map((el) => el * 3)
  .filter((el) => el % 2 !== 0);

newArr;

// el1 -f-> el1

// el1, x -f-> el1, x

let smth = newArr.push(3);

smth;

newArr;

let arr3 = [1, 5, 18, 3, 44, 107, 67];

arr3.sort(); //?
arr3.sort((a, b) => a - b); //?
arr3.sort((x, y) => y - x); //?

arr4 = ["dog", "cat", "horse", "mouse", "rabbit", "cow", "hamster", "snake"];

arr4.sort(); //?
arr4.sort((a, b) => a - b); //?
arr4.sort((a, b) => b - a).reverse(); //?

let arr5 = [1, 2, 3]; // {0: 1, 1:2, 2:3}

console.log(Array.prototype.map);
