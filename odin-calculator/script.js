const calculatorDisplay = document.getElementById("calc-body");
const calculatorDisplayWidth = calculatorDisplay.clientWidth;

const numberButtonDisplay = document.getElementById("number-buttons");
const operatorButtonDisplay = document.getElementById("operator-buttons");
const textDisplay = document.getElementById("text-display");

// Create buttons 1 - 9
function createNumberButtons() {
  // Set the width/height based on the numberButtonsDisplay
  const buttonWidth = Math.floor(calculatorDisplayWidth / 4);

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

// Create operator buttons
function createOpereratorButtons() {
  // Create an array of operators;
  let operators = ["C", "+", "="];

  for (let i = 0; i < operators.length; i++){
    // Create buttons
    let operatorButton = document.createElement("button");
    operatorButton.innerText = operators[i];
    operatorButton.style.width = "60px";
    operatorButton.style.height = "60px";

    // Add button to screen
    operatorButtonDisplay.appendChild(operatorButton);

    // Eventlisteners based on what the button is
    if(operatorButton.innerText === "C"){
      operatorButton.addEventListener("click", function() { clearDisplay() })
    } else {
      operatorButton.addEventListener("click", function() { textDisplay.innerText += operatorButton.innerText })

    }



  }
}

// Clear the text display
function clearDisplay(){
  textDisplay.innerText = "";
}

createNumberButtons();
createOpereratorButtons();
