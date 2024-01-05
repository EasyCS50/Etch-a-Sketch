const SIZE = 16;
const grid = document.querySelector('#container');

const gridSize = grid.clientWidth;
const itemSize = gridSize / SIZE;

// Each div size is relative to the grid size
for (let i = 0; i < SIZE * SIZE; i++) {
    const div = document.createElement('div');
    div.setAttribute(
        'style', 
        `width: ${itemSize}px; 
        height: ${itemSize}px;
        border: 1px solid #3f3f3f;
        box-sizing: border-box;`);
    grid.appendChild(div);
}