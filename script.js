const SIZE = 32;
const grid = document.querySelector('#grid');

const gridSize = grid.clientWidth;
const itemSize = gridSize / SIZE;

// Each div size is relative to the grid size
for (let i = 0; i < SIZE * SIZE; i++) {
    const div = document.createElement('div');
    div.style.height = `${itemSize}px`;
    div.style.width = `${itemSize}px`;
    grid.appendChild(div);

    div.addEventListener('mouseover', (event) => {
        div.classList.add('color');
    });
}

// string = '#' + Math.floor(Math.random()*16777215).toString(16);
// div.style.backgroundColor = string;