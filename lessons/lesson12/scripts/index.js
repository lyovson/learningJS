import utils from "./utils.js";

const {
  querySelector: qs,
  querySelectorAll: qsa,
  createElement: ce,
  curriedCreateElement: cce,
  appendElements: aes,
  curry,
} = utils;

const root = qs("#root");

const h1 = ce("h1", { text: "Lesson 12" });

const paragraph = ce("p", { text: "Lorem ipsum dolor sit amet." });

// ae(h1, root);
// ae(paragraph, root);

aes(
  [
    h1,
    [
      ce("div", { id: "mama" }),
      [
        ce("div", { classList: ["section"] }),
        ce("h3", { text: "section 1:" }),
        paragraph,
        ce("p", { text: "London is the capital of great britain" }),
      ],
      [
        ce("div", { classList: ["section"] }),
        ce("h3", { text: "section 2:" }),
        ce("p", { text: "another paragraph" }),
        [
          ce("div", { id: "imgDiv" }),
          ce("p", { text: "image with p" }),
          ce("img", {
            id: "featuredImage",
            src: "https://peakvisor.com/img/news/mount_fuji.jpg",
            alt: "image",
            style: {
              width: "90%",
              borderRadius: "2rem",
            },
            dataSet: { cat: "meow" },
          }),
        ],
      ],
    ],
  ],
  root
);
