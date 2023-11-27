const calculatorDisplay = document.getElementById("calc-body");
const calculatorDisplayWidth = calculatorDisplay.clientWidth;

const numberButtonDisplay = document.getElementById("number-buttons");
const operatorButtonDisplay = document.getElementById("operator-buttons");
const textDisplay = document.getElementById("text-display");

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

    if(operatorButton.innerText === "C"){
      // Cancel
      operatorButton.addEventListener("click", function() { clearDisplay() })
    } else if(operatorButton.innerText === "=") {
      // Equals
      operatorButton.addEventListener("click", function() { operate() })
    } else {
      operatorButton.addEventListener("click", function() { textDisplay.innerText += operatorButton.innerText })
    }
  }
}

// Clear the text display
function clearDisplay(){
  textDisplay.innerText = "";
}

// Operate the equation
function operate() {
  let text = textDisplay.innerText;
  let textSplit = text.split("");
  console.log(textSplit);

  let firstNumber = "";
  let secondNumber = "";
  let checker = false;
  let operator;

  // Go through the array and calculate the numbers
  for (let i = 0; i < textSplit.length; i++) {
    // If operator is first give an error
    if(textSplit[0] === "+"){
      textDisplay.innerText = "ERROR"
      break;
    }     
    
    // Check for operator
    if(textSplit[i] === "+"){
      operator = "add";
      checker = true;
      continue;
    }

    // Add to first or second number  
    if(checker === false) {
      firstNumber = firstNumber + textSplit[i];
    } else {
      secondNumber += textSplit[i];
    }
  }

  // Convert string to int
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  // Do operator function
  if(operator === "add"){
    textDisplay.innerText = add(firstNumber, secondNumber);
  }

  console.log("First Number = " + firstNumber);
  console.log("Second Number = " + secondNumber);
}

function add(a, b){return a + b};

createNumberButtons();
createOpereratorButtons();
