const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function (...args2) {
      return curried(...args, ...args2);
    };
  };
};

const getType = (val) => {
  if (val instanceof Array) return "array";
  if (isNaN(val)) return "NaN";
  if (val === null) return "null";

  return typeof val;
};

const reverseCall = (func) => (par1, par2) => func(par2, par1);

const querySelector = (selector) => document.querySelector(selector);

const querySelectorAll = (selector) => [...document.querySelectorAll(selector)];

const createElement = (tag, params = {}) => {
  const el = document.createElement(tag);

  /*
    { 
      key: value,
      name: Rafa,
      lastName: Lyovson
    } 

    Object.entries ->[[key, value], [name, Rafa], [lastName, Lyovson]]

  */

  Object.entries(params).forEach(([key, value]) => {
    if (key === "text") {
      el.innerText = value;
      return;
    }

    if (key === "classList") {
      value.forEach((cl) => el.classList.add(cl));
      return;
    }

    if (key === "dataSet") {
      Object.entries(value).forEach(
        ([key, value]) => (el.dataset[key] = value)
      );
      return;
    }

    if (key === "style") {
      Object.entries(value).forEach(([key, value]) => (el.style[key] = value));
      return;
    }

    el.setAttribute(key, value); //el[key] = value
  });
  return el;
};

const curriedCreateElement = curry(createElement);
// const btn = cce("button") const blueBtn = btn({style: {background: "blue"}})
// cce(tag)(params)

const appendElements = (elements, parent) => {
  //      ( [ h3, [div, p], p ] , div )
  elements.forEach((element) => {
    if (getType(element) !== "array") {
      parent.append(element);
      return;
    }
    // el == array
    parent.append(element[0]);

    appendElements(element.slice(1), element[0]); // ( [p], div )
  });
};

// const body = querySelector("body");
// const h1 = createElement("h1", { text: "Hello, World!" });
// const subheading = createElement("p", {
//   id: "subheading",
//   text: "This is a test website!",
// });
// appendElements(
//   [h1, subheading, [div, [div, h3, p, img], [div, h3, p, img]]],
//   body
// );

export default {
  querySelector,
  querySelectorAll,
  createElement,
  curry,
  curriedCreateElement,
  appendElements,
  reverseCall,
};
