const display = document.getElementById("display");
const displayWidth = document.getElementById("display").clientWidth;
const slider = document.getElementById("gridSlider");
const sliderOutput = document.getElementById("gridSliderOutput");

let isMouseDown = false;  // track mouse state

sliderOutput.innerHTML = slider.value;

slider.oninput = function() {
  sliderOutput.innerHTML = this.value;
  document.querySelectorAll('.grid').forEach(e => e.remove());
  createGrid(slider.value)


}

createGrid(slider.value)

function createGrid(size){ 
  let gridWidth = (displayWidth / size) - 2;

  for (let i = 1; i <= (size*size); i++) {
    let grid = document.createElement("div");
    grid.style.width = gridWidth + "px";
    grid.classList.add("grid");
    grid.addEventListener("mousedown", function(){ isMouseDown = true; color = document.getElementById("colorChoice").value; grid.style.background = color;})
    grid.addEventListener("mouseup", function(){ isMouseDown = false; })
    grid.addEventListener("mouseenter", function() { changeColor(grid); });
    display.appendChild(grid);
  }
}

function changeColor(grid) {
  if(isMouseDown){
    color = document.getElementById("colorChoice").value;
    grid.style.background = color;
  }
}

