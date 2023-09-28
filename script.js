const container = document.querySelector('div.container');

let gridSize = 16;

const totalWidth = 960;

container.style = `display: flex; width: ${totalWidth}px`;

const sqr = document.createElement('div');
sqr.style.border = 'solid black 1px';
sqr.style.width = `${totalWidth / gridSize}px`

// make the grid in the specified grid size

container.appendChild(sqr);