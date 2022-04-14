const logFolder = () => {
  console.log("from scope.js file");
};

export const add = (num1, num2) => num1 + num2;

export default logFolder;
