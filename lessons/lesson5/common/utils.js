export const log = (label, value) => {
  console.log(`${label}: ${value}`);
  // console.log(label, ": ", value);
};

export const add = (num1, num2) => num1 + num2;

const utils = {
  first: "Rafa",
  last: "Lyovson",
  multiply(num1, num2) {
    return num1 * num2;
  },
  add, //add: add,
  log,
};

// const utils = {
//   add,
//   multiply,
//   log,
// };

export default utils;

//underscores
//lodash
//ramda
