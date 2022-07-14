import utils from "../scripts/utils.js";

const { createElement: ce } = utils;

const card = (params = {}) =>
  ce("div", {
    id: params.id,
    style: {
      width: "300px",
      border: "5px solid var(--accent-color)",
      padding: "1rem",
      background: "var(--light-color)",
      // theme === "dark" ? var(--dark-color) : var(--light-color)
      color: "var(--dark-color)",
      boxShadow: "10px 10px var(--light-color)",
      fontFamily: "'Kdam Thmor Pro', sans-serif",
      ...params.style,
    },
  });
export default card;
