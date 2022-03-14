// comment

/* 

multiline
comment

*/

// variable and constant declarations

x = "hey"; // never do this!

var y = "5"; // old style, don't use this.

let z = 7; // use this only when you know you gotta change it.

const A = 8; // always use this.

// types

const str = "word";
console.log(typeof str);

const char = "a";
console.log(typeof char);

const newStr = `another string ${str}`;
console.log(newStr);

const num = 7;
console.log(typeof num);

const num2 = 0.7;
console.log(typeof num2);

const big = 1n;
console.log(typeof big);

let bool = false; // false or true only
console.log(typeof bool);

let undef;
console.log(undef);

let undef1 = null;

console.log(typeof undef1);

undef1 = 5;

const obj = {};
console.log(typeof obj);

const func = (x) => x + 2;
console.log(func);

function func2(x) {
  return x + 2;
}
console.log(func2);

func.firstname = "Rafa";

console.log(typeof NaN);

// coercion

console.log(5 + "5");

console.log(-1 == true);
console.log(0 == true);
console.log(1 == true);
console.log("true" == true);
console.log(1 == "1");
console.log(1 === "1");
console.log(2 > "1");

console.log("" == true);
console.log({} == true);

// always use ===, >==, <==, not ==, <=, >=

let o = "1";
console.log(o);
console.log(Number(o));

Number("1");
String(1);

function inc(num) {
  return number + 1;
}

const add3 = (num) => num + 3;

const arr = [1, 2, 3]; //{0: 1, 1: 2, 2: 3};
console.log(typeof arr);
const obj2 = { first: 1, sec: 2, third: 3 };
console.log(typeof obj2);
const add2 = (num1, num2) => num1 + num2;

console.log(add2(4, 5));

1 + 1;
1 - 1;
1 * 1;
1 / 1;
5 % 2;

2.5 > 1;
2 < 3;

const hey = "hey";
const man = "man!";

console.log(hey + " " + man);

console.log(`${hey}  ${man}`);
