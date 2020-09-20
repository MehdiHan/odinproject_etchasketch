const etchSketch = () => {
  const container = document.getElementById("app");
  const resetButton = document.getElementById("reset");
  const colorPicker = document.getElementById("colorPicker");

  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);

    div.addEventListener("mouseenter", function (event) {
      event.target.style.backgroundColor = colorPicker.value;
    });
  }

  resetButton.addEventListener("click", function (event) {
    event.preventDefault();
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.removeAttribute("style");
    });
  });
};

etchSketch();
