const container = document.getElementById("app");
const squareNumbers = document.getElementById("squareNumbers");
const squareSetup = document.getElementById("squareSetup");
const squareColorReset = document.getElementById("squareColorReset");
const colorPicker = document.getElementById("squareColorPicker");

const createArea = (area) => {
  for (let i = 0; i < area ** 2; i++) {
    const div = document.createElement("div");
    const width = 500 / area;
    const height = 500 / area;

    div.style.width = String(width) + "px";
    div.style.height = String(height) + "px";
    div.classList.add("square");

    container.appendChild(div);

    div.addEventListener("mouseenter", function (event) {
      event.target.style.backgroundColor = squareColorPicker.value;
    });
  }
};

squareSetup.addEventListener("click", function (event) {
  container.innerHTML = "";
  let squareSettings = squareNumbers.value;
  createArea(squareSettings);
});

squareColorReset.addEventListener("click", function (event) {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.removeProperty("background-color");
  });
});
