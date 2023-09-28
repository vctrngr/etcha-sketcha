const container = document.querySelector('div.container');

let gridSize = 16;

const totalWidth = 960;


function makeGrid(size){

    if (size > 100){
        size = 100;
    }

    let borders = 1;

    let realWidth = totalWidth + (borders * (2 * size));

    container.style = `display: flex; width: ${realWidth}px; height: ${realWidth}px; flex-wrap: wrap; padding: 8px; margin: 10px; gap: 0`;

   
    for (let i = 0; i < size * size; i++){
        const sqr = document.createElement('div');
        sqr.classList.add('square');
        sqr.style = 'margin: 0; padding: 0;';
        sqr.style.border = `solid #666666 ${borders}px`;
        sqr.style.width = `${totalWidth / size}px`;
        sqr.style.height = `${totalWidth / size}px`;
        // sqr.style.flex = '0 2 0';
        container.appendChild(sqr);
    }
}

makeGrid(gridSize);
hoverColor();

function hoverColor(){
    const squares = document.querySelectorAll('.square');

    function bgChange(e){
        e.style.backgroundColor = 'black';
    }
    
    squares.forEach(square => 
        square.addEventListener('mouseover', function(e){
            console.log(e.target);
            e.target.style.backgroundColor = 'black';
        }))
    
}

const button = document.querySelector('#optionsButton');

button.addEventListener('click', function(e){
    gridSize = parseInt(prompt('Choose the size of the grid', '12'));
    console.log(gridSize);
    container.innerHTML = '';
    makeGrid(gridSize);
    hoverColor();
})