const display = document.getElementById("display");
const displayWidth = document.getElementById("display").clientWidth;
console.log(displayWidth);

function createGrid(size){ 
  let gridWidth = (displayWidth / size) - 2;

  for (let i = 1; i <= (size*size); i++) {
    let grid = document.createElement("div");
    grid.innerText = i;
    grid.style.width = gridWidth + "px";
    grid.classList.add('grid');
    display.appendChild(grid);
    
  }
}

