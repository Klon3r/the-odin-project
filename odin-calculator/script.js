const calculatorDisplay = document.getElementById("calc-body");
const calculatorDisplayWidth = calculatorDisplay.clientWidth;

const numberButtonDisplay = document.getElementById("number-buttons");
const operatorButtonDisplay = document.getElementById("operator-buttons");
const textDisplay = document.getElementById("text-display");

let firstNumber;
let secondNumber;
let result;
let operator;

// Create buttons 1 - 9
function createNumberButtons() {
  // Set the width/height based on the numberButtonsDisplay
  const buttonWidth = Math.floor(calculatorDisplayWidth / 4);

  // ONE TO NINE
  for( let row = 0; row < 3; row++){
    for( let col = 0; col < 3; col++){
      // Calculate the digit
      let digit = 7 - row * 3 + col;

      // Create button
      let numberButton = document.createElement("button");
      numberButton.innerText = digit;
      numberButton.style.width = buttonWidth + "px";
      numberButton.style.height = "60px"


      // Add button to the screen
      numberButtonDisplay.appendChild(numberButton)

      numberButton.addEventListener("click", function() {textDisplay.innerText += numberButton.innerText})
    }
  }

  // ZERO
  let zeroButton = document.createElement("button");
  zeroButton.innerText = 0;
  zeroButton.style.width = (buttonWidth * 2)+ "px";
  zeroButton.style.height = "60px"
  // Add button to the screen
  numberButtonDisplay.appendChild(zeroButton)

  zeroButton.addEventListener("click", function() {textDisplay.innerText += numberButton.innerText})

  // DECIMAL
  let decimalButton = document.createElement("button");
  decimalButton.innerText = ".";
  decimalButton.style.width = buttonWidth + "px";
  decimalButton.style.height = "60px"
  // Add button to the screen
  numberButtonDisplay.appendChild(decimalButton)

  decimalButton.addEventListener("click", function() {textDisplay.innerText += numberButton.innerText})


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

    // CANCEL
    if(operatorButton.innerText === "C"){
      operatorButton.addEventListener("click", function() { clearDisplay() })
    } 
    // EQUALS
    if(operatorButton.innerText === "=") {
      operatorButton.addEventListener("click", function() { operate() })
    } 
    // ADD
    if (operatorButton.innerText === "+"){
      operatorButton.addEventListener("click", function() { add() })
    }
  }
}

// Clear the text display
function clearDisplay(){
  textDisplay.innerText = "";
}

// Operate the equation
function operate() {
  secondNumber = parseFloat(textDisplay.innerText);

  if(operator === "+"){
    result = addResult(firstNumber, secondNumber);
    textDisplay.innerText = result;
  }
  
}

function add(){
  // Store number
  firstNumber = parseFloat(textDisplay.innerText);
  operator = "+"
  textDisplay.innerText = ""
}

function addResult(a, b){ return a + b };

// function add(a, b){return a + b};

createNumberButtons();
createOpereratorButtons();
