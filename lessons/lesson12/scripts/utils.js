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

const querySelector = (selector) => document.querySelector(selector);

const querySelectorAll = (selector) => [...document.querySelectorAll(selector)];

const createElement = (tag, params) => {
  const el = document.createElement(tag);
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
      Object.entries(value).forEach(([k, v]) => (el.dataset[k] = v));
      return;
    }

    if (key === "style") {
      Object.entries(value).forEach(([k, v]) => (el.style[k] = v));
      return;
    }

    el.setAttribute(key, value); //el[key] = value
  });
  return el;
};

const curriedCreateElement = curry(createElement);

const appendElements = (els, parent) => {
  els.forEach((el) => {
    if (getType(el) !== "array") {
      parent.append(el);
      return;
    }
    // el == array
    parent.append(el[0]);
    appendElements(el.slice(1), el[0]);
  });
};

//ae([h1, p] , root)
export default {
  querySelector,
  querySelectorAll,
  createElement,
  curry,
  curriedCreateElement,
  appendElements,
};
