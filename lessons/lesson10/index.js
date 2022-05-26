// const root = document.getElementById("root");
const root = document.querySelector("#root");

// const h1 = document.createElement("h1");
// h1.innerText = "Lesson 10";
// h1.id = "title";
// h1.classList.add("heading");
// h1.dataset.age = "10";
// h1.dataset.firstName = "John";
// h1.style.textDecoration = "underline";
// root.append(h1);

const createElement = (tag, params) => {
  let el = document.createElement(tag);

  if (params.text) el.innerText = params.text;

  if (params.id) el.id = params.id;

  if (params.classList) {
    for (let cl of params.classList) {
      el.classList.add(cl);
    }
  }

  if (params.style) {
    for (let key in params.style) {
      el.style[key] = params.style[key];
    }
  }

  return el;
};

const h1 = createElement("h1", {
  text: "Lesson 10",
  id: "title",
  classList: ["heading"],
  style: { textDecoration: "underline" },
});

h1.addEventListener("mouseenter", (e) => (e.target.style.color = "steelblue"));
h1.addEventListener("mouseleave", (e) => (e.target.style.color = "#fafafa"));

root.append(h1);

root.append(
  createElement("h2", {
    text: "Hello, World!",
    id: "subHeading",
    classList: ["heading", "test"],
    style: {
      color: "steelblue",
    },
  })
);

const hiddenDiv = createElement("div", {
  style: {
    opacity: 0,
    transition: "1s",
  },
});

hiddenDiv.innerHTML = `<p>In a Hidden Div</p>`;

root.append(hiddenDiv);

const btn = createElement("button", {
  text: "Push Me!",
  style: {
    color: "var(--main-color)",
    background: "var(--bck-color)",
    border: "1px solid var(--main-color)",
    padding: "1rem",
    borderRadius: "1rem",
  },
});

const toggleDiv = () => {
  hiddenDiv.style.opacity == "0"
    ? (hiddenDiv.style.opacity = 1)
    : (hiddenDiv.style.opacity = 0);
};

btn.addEventListener("click", (e) => toggleDiv());

window.addEventListener("keypress", (e) =>
  e.key == "Enter" ? toggleDiv() : null
);

root.append(btn);

const getCoffee = async () => {
  let card = "";

  if (!window.localStorage.getItem("card")) {
    const res = await fetch(
      " https://random-data-api.com/api/coffee/random_coffee"
    );
    const data = await res.json();

    card = `
          <h3>${data.blend_name}</h3>
          <p>${data.variety}</p>
          ${data.notes.split(", ").map((note) => {
            return "<span>" + note + "</span>";
          })}
      `;

    window.localStorage.setItem("card", card);
  } else {
    card = window.localStorage.getItem("card");
  }

  hiddenDiv.innerHTML = card;
};

// blend_name: "Wake-up Bean"
// id: 7848
// intensifier: "astringent"
// notes: "dry, silky, rubber, plum, banana"
// origin: "Cacahuatique, El Salvador"
// uid: "e5adb1f4-fad0-4909-931c-e62eb57ebeb2"
// variety: "Villa Sarchi"

getCoffee();
