import utils from "./utils.js";
import card from "../components/card.js";

const {
  querySelector: qs, // const qs = utils.querySelector
  querySelectorAll: qsa,
  createElement: ce,
  curriedCreateElement: cce,
  appendElements: aes,
  curry,
} = utils;

// const root = qs("#root");
// const h1 = ce("h1", { text: "Hello, World!" });
// aes([h1], root);
aes(
  [
    ce("h1", {
      text: "Hello, World!",
      id: "heading",
      style: { color: "steelblue" },
    }),
    ce("p", { text: "This is a test site!", id: "subHeading" }),

    [
      ce("div", {
        style: {
          display: "flex",
          gap: "1rem",
          justifyContent: "space-evenly",
        },
      }),
      [
        card({ id: "card1" }),
        ce("h3", { text: "Card 1" }),
        ce("p", {
          text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        }),
        ce("img", {
          src: "https://peakvisor.com/img/news/mount_fuji.jpg",
          alt: "mountain",
          style: { width: "100%" },
        }),
      ],
      [
        card({ id: "card2", style: {} }),

        ce("h3", { text: "Card 2" }),
        ce("p", {
          text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        }),
        ce("img", {
          src: "https://res.cloudinary.com/dtpgi0zck/image/upload/s--OVQzqYFL--/c_fit,h_580,w_860/v1/EducationHub/photos/jinsha-river.jpg",
          alt: "river",
          style: { width: "100%" },
        }),
      ],
      [card({ id: "card3" }), ce("h2", { text: "another card" })],
    ],
  ],
  qs("#root")
);
