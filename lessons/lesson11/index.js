import utils from "/scripts/utils.js";

const { qs, qsa, ce, cce } = utils; // const qs = utils.qs

const body = document.querySelector("body");
const root = qs("#root");

const div = ce("div", {
  id: "secondDiv",
  text: "appended to body from ce",
  classList: ["div"],
  style: {
    background: "green",
    color: "yellow",
  },
  dataSet: {
    name: "John",
  },
});

// div.innerText = "appended to body";

const h1 = document.createElement("h1");

h1.id = "title";

h1.innerText = "Lesson 11";

root.append(h1);

body.append(div);

// console.log(qsa("div"));

//<label for = "email>Email:</label>"

const input = ce("input", { type: "password", placeholder: "name" });
// input.type = "email";
// input.placeholder = "enter your mail";
input.name = "email";
console.log(input);
root.append(input);

console.log(root.dataset);

const button = ce("button", {
  text: "Submit",
  style: {
    background: "blue",
    color: "yellow",
  },
});

root.append(button);

const createButton = cce("button");

root.append(createButton({ text: "Wow!" }));
root.append(createButton({ text: "Yay!", style: { color: "red" } }));

const createLink = cce("a");

const params = {
  href: "https://wikipedia.org",
  text: "wikipedia",
  target: "blank",
};

root.append(createLink(params));
