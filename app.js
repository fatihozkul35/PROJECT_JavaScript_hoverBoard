const container = document.querySelector(".container");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexColor = "#";

let colors = [];
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

for (let i = 0; i < hex.length; ++i) {
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  colors.push(hexColor);
  hexColor = "#";
}

const squares = 120;

for (let i = 0; i < squares; ++i) {
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
}

const setColor = (tag) => {
  tag.style.background = colors[getRandomNumber()];
};

const removeColor = (tag) => {
  tag.style.background = "rgb(19, 18, 18)";
};
