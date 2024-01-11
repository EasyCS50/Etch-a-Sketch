const slider = document.querySelector("#slider");
const sliderText = document.querySelector("#slider-text");
const change = document.querySelector("#change");
const clear = document.querySelector("#clear");
const black = document.querySelector("#black");
const random = document.querySelector("#random")
const grid = document.querySelector("#grid");

const gridSize = grid.clientWidth;
const DEFAULT_SIZE = 16;
let randomClicked = false;

slider.addEventListener("mousemove", () => {
    let num = slider.value;
    sliderText.innerHTML = `${num} x ${num}`;
})

black.addEventListener("click", () => {
    randomClicked = false;
})

random.addEventListener("click", () => {
    randomClicked = true;
})

function initializeGrid(size) {
  const divSize = gridSize / size;
  createGrid(size, divSize);
}

function updateGrid() {
  deleteGrid();
  const newSize = slider.value;
  const divSize = gridSize / newSize;
  createGrid(newSize, divSize);
}

function createGrid(squares, divSize) {
  // Each div size is relative to the grid size
  for (let i = 0; i < squares * squares; i++) {
    const div = document.createElement("div");
    div.style.height = `${divSize}px`;
    div.style.width = `${divSize}px`;
    grid.appendChild(div);

    div.addEventListener("mouseover", (event) => {
      if (randomClicked === true) {
        string = '#' + Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor = string;
      } else {
        div.style.backgroundColor = `#3f3f3f`;
      }
      div.classList.add("square");
    });
  }
}

function deleteGrid() {
  while (grid.lastElementChild) {
    grid.removeChild(grid.lastElementChild);
  }
}

initializeGrid(DEFAULT_SIZE);
sliderText.innerHTML = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`;

change.addEventListener("click", updateGrid);
clear.addEventListener("click", updateGrid);
// string = '#' + Math.floor(Math.random()*16777215).toString(16);
// div.style.backgroundColor = string;
