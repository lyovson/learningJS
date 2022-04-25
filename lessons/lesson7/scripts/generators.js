const arr = [1, 2, 3, 4, 5];

//for of loop (iterator) use with arrays and interators

for (let el of arr) {
  console.log(el);
}

// generator functions

function* test() {
  // for loop

  for (let i = 0; i < 10; i++) {
    yield i;
  }
  return;
}

let x = test();

console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

const tesla = {
  brand: "Tesla", // key: value
  model: "S",
  speed: 250,
};

// for in loop ( use with objects )

for (let key in tesla) {
  console.log(tesla[key]);
}

console.log(Object.keys(tesla));
console.log(Object.values(tesla));
console.log(Object.entries(tesla));

export default "test";
