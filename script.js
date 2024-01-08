const SIZE = 24;
const grid = document.querySelector('#grid');

const gridSize = grid.clientWidth;
const divSize = gridSize / SIZE;

createGrid(SIZE);

function createGrid(squares) {
    // Each div size is relative to the grid size
    for (let i = 0; i < squares * squares; i++) {
        const div = document.createElement('div');
        div.style.height = `${divSize}px`;
        div.style.width = `${divSize}px`;
        grid.appendChild(div);

        div.addEventListener('mouseover', (event) => {
            div.classList.add('color');
        });
    }
}
// string = '#' + Math.floor(Math.random()*16777215).toString(16);
// div.style.backgroundColor = string;