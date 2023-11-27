const calculatorDisplay = document.getElementById("calc-body")
const calculatorDisplayWidth = calculatorDisplay.clientWidth;

const numberButtonDisplay = document.getElementById("number-buttons")
const textDisplay = document.getElementById("text-display");

// Create buttons 1 - 9
function createNumberButtons() {
  // Set the width/height based on the numberButtonsDisplay
  const buttonWidth = Math.floor(calculatorDisplayWidth / 3);

  for( let i = 1; i <= 9; i++){
    // Create button
    let numberButton = document.createElement("button");
    numberButton.innerText = i;
    numberButton.style.width = buttonWidth + "px";
    numberButton.style.height = "60px"

    // Add button to the screen
    numberButtonDisplay.appendChild(numberButton)

    numberButton.addEventListener("click", function() {textDisplay.innerText += numberButton.innerText})
  }
}


createNumberButtons();
