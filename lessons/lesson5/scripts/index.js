import something from "./export.js";
import utils, { log, add } from "../common/utils.js";
const something = logFolder;

console.log("index");
something();
console.log(add(2, 3));

const log = (label, value) => {
  console.log(`${label}: ${value}`);
};

utils.log("number", add(2, 3));
log("first name:", utils.first);
log("multiply", utils.multiply(2, 3));

import { powArr } from "./arrayMethods.js";

console.log(powArr);
