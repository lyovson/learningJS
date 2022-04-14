// Global Scope

var globalScoped = 100;

// after 2015

let somethingElse = 200;
const someConstant = 300;

function test() {
  //function scope
  var functionScoped = "400";

  if (functionScoped < 5) {
    // block scope
    let blockScoped = 500;
    console.log("it's small!");
    return;
  }

  console.log("it's big!");
}
// console.log(functionScoped);

// Always use const, if value changes use let.

console.log("lesson5");
