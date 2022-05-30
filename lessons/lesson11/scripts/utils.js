const qs = (selector) => document.querySelector(selector);

const qsa = (selector) => [...document.querySelectorAll(selector)];

const ce = (tag, params) => {
  const el = document.createElement(tag);

  if (params?.id) el.id = params.id;
  if (params?.type) el.type = params.type;
  if (params?.name) el.name = params.name;
  if (params?.placeholder) el.placeholder = params.placeholder;
  if (params?.method) el.method = params.method;
  if (params?.src) el.src = params.src;
  if (params?.href) el.href = params.href;
  if (params?.target) el.target = params.target;
  if (params?.alt) el.alt = params.alt;
  if (params?.text) el.innerText = params.text;
  if (params?.classList) params.classList.map((cl) => el.classList.add(cl));
  if (params?.style)
    Object.entries(params.style).map(([key, value]) => (el.style[key] = value));
  if (params?.dataSet)
    Object.entries(params.dataSet).map(
      ([key, value]) => (el.dataset[key] = value)
    );
  return el;
};

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

const cce = curry(ce);

export default {
  qs,
  qsa,
  ce,
  curry,
  cce,
};
