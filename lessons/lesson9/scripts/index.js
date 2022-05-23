// console.log(document);

document.title = "Lesson 11";
// console.log(document.title);

let p = document.querySelector("p");

let title = document.querySelector("#title");
// title.id = "newtitle";
p.id = "paragraph";
// console.log(title.id);
//Document Object Model

let ps = document.querySelectorAll("p");

// console.log(ps);

for (p of ps) {
  p.classList.add("paragraph");
}

// console.log(ps[2].classList);

const qs = (selector) => {
  return document.querySelector(selector);
};

// console.log(qs("#newtitle"));

const qsa = (selector) => {
  return [...document.querySelectorAll(selector)];
};

// console.log(qsa("p"));

qsa("p").forEach((node) => (node.style.backgroundColor = "blue"));

title.innerText = "Lesson 11";

const newBody = qs("body");

// newBody.innerHTML = `<div class = "div1"><p>yaay!</p></div>`;
qsa("p")[0].dataset.addeddata = "added data";
// console.log(qsa("p")[0].dataset);

let button = document.createElement("button");
button.innerText = "Push me!";

button.style.color = "green";

button.classList.add("btn");

button.id = "btn";

// console.log(button);

newBody.append(button);

const elem = (type, params, parent = document.body) => {
  const el = document.createElement(type);
  parent.append(el);

  if (!params) return;

  if (params.id) el.id = params.id;

  if (params.text) el.innerText = params.text;

  if (params.classList) {
    for (let cl of params.classList) {
      el.classList.add(cl);
    }
  }

  for (let key in params.style) {
    el.style[key] = params.style[key];
  }

  return el;
};

// console.log(elem("div", { id: "newDiv", text: "div text" }, title));

elem(
  "button",
  {
    text: "Submit",
    classList: ["mainBtn", "newBtn"],
  },
  title
);

elem(
  "button",
  {
    text: "Submit",
    classList: ["mainBtn", "newBtn"],
  },
  title
);

elem("button", {
  text: "Submit",
  classList: ["mainBtn", "newBtn"],
  style: {
    color: "limegreen",
    backgroundColor: "magenta",
  },
});

const curry = function (argumentFunc) {
  return function returnedFunc(...args) {
    if (args.length >= argumentFunc.length) {
      return argumentFunc.apply(this, args);
    }
    return function (...newArgs) {
      return returnedFunc.apply(this, [...args, ...newArgs]);
    };
  };
};

const curriedElem = curry(elem);
console.log(curriedElem);
const createBtn = curriedElem("button");
const createDiv = curriedElem("div");
console.log(createBtn);
createBtn({
  text: "curried",
  style: {
    color: "red",
  },
});

createBtn({
  text: "another",
  style: {
    color: "cyan",
  },
});
