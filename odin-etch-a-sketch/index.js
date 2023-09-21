const display = document.getElementById("display");
const displayWidth = display.clientWidth;
const displayHeight = display.clientHeight;
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
  const cellWidth = Math.floor(displayWidth / size);
  console.log(cellWidth)
  console.log(displayWidth)
  const cellHeight = displayHeight / size;
  
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j<= size; j++){
      let grid = document.createElement("div");
      
      grid.style.width = cellWidth + "px";
      // grid.style.height = cellHeight - 1 + "px";
      grid.classList.add("grid");
      grid.addEventListener("mousedown", function(){ isMouseDown = true; color = document.getElementById("colorChoice").value; grid.style.background = color;})
      grid.addEventListener("mouseup", function(){ isMouseDown = false; })
      grid.addEventListener("mouseenter", function() { changeColor(grid); });
      display.appendChild(grid);
    }
  }
}

function changeColor(grid) {
  if(isMouseDown){
    color = document.getElementById("colorChoice").value;
    grid.style.background = color;
  }
}

