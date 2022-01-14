const container = document.querySelector(".container");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colors = [];

function getRandomNumber() {
  return Math.floor(Math.random() * 16);
}

for (let i = 0; i < 16; ++i) {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  colors.push(hexColor);
}

const squares = 450;

for (let i = 0; i < squares; ++i) {
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
}
function setColor(tag) {
  tag.style.background = colors[getRandomNumber()];
}

function removeColor(tag) {
  tag.style.background = "rgb(19, 18, 18)";
}
// const removeColor = (tag) => {
//   setTimeout(10000);
//   tag.style.background = "rgb(19, 18, 18)";
// };
