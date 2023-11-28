const calculatorDisplay = document.getElementById("calc-body");
const calculatorDisplayWidth = calculatorDisplay.clientWidth;
const numberButtonDisplay = document.getElementById("number-buttons");
const operatorButtonDisplay = document.getElementById("operator-buttons");
const textDisplay = document.getElementById("text-display");
const textHistory = document.getElementById("text-history");

let firstNumber;
let secondNumber;
let result;
let operator;
let checker = true;

function createNumberButtons() {
  const buttonWidth = Math.floor(calculatorDisplayWidth / 4);

  // ONE TO NINE
  for( let row = 0; row < 3; row++){
    for( let col = 0; col < 3; col++){
      // Calculate the digit
      let digit = 7 - row * 3 + col;

      let numberButton = document.createElement("button");
      numberButton.innerText = digit;
      numberButton.style.width = buttonWidth + "px";
      numberButton.style.height = "60px"

      numberButtonDisplay.appendChild(numberButton)
      
      numberButton.addEventListener("click", function() {textDisplay.innerText += numberButton.innerText})
      numberButton.addEventListener("click", function() {textHistory.innerText += numberButton.innerText})
    }
  }

  // ZERO
  let zeroButton = document.createElement("button");
  zeroButton.innerText = 0;
  zeroButton.style.width = (buttonWidth * 2)+ "px";
  zeroButton.style.height = "60px";

  numberButtonDisplay.appendChild(zeroButton)

  zeroButton.addEventListener("click", function() {textDisplay.innerText += zeroButton.innerText})

  // DECIMAL
  let decimalButton = document.createElement("button");
  decimalButton.innerText = ".";
  decimalButton.style.width = buttonWidth + "px";
  decimalButton.style.height = "60px"

  numberButtonDisplay.appendChild(decimalButton)

  decimalButton.addEventListener("click", function() {textDisplay.innerText += decimalButton.innerText})
}

function createOpereratorButtons() {
  let operators = ["C", "+","-","="];

  for (let i = 0; i < operators.length; i++){
    let operatorButton = document.createElement("button");
    operatorButton.innerText = operators[i];
    operatorButton.style.width = "60px";
    operatorButton.style.height = "60px";

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
    // SUBTRACT
    if (operatorButton.innerText === "-"){
      operatorButton.addEventListener("click", function() { subtract() })
    }
  }
}

function clearDisplay(){
  textDisplay.innerText = "";
  textHistory.innerText = "";
  // Reset
  firstNumber = undefined;
  secondNumber = undefined;
  result = undefined;
  operator = undefined;
  checker = true;
}

function operate() {
  // NOT NULL
  if(!operator == ""){
    secondNumber = parseFloat(textDisplay.innerText);
    textHistory.innerText += "=";
  }
  // ADD
  if(operator === "+"){
    result = addResult(firstNumber, secondNumber);
    textDisplay.innerText = result;
    textHistory.innerText += result;
    checker=true;
    operator = "";
  }
  // SUB
  if(operator === "-"){
    result = subtractResult(firstNumber, secondNumber);
    textDisplay.innerText = result;
    textHistory.innerText += result;
    checker=true;
    operator = "";
  }
  
}

function add(){
  if(checker){
    // Store number
    firstNumber = parseFloat(textDisplay.innerText);
    operator = "+";
    textDisplay.innerText = "";
    textHistory.innerText += "+";
  }
  checker = false;
}

function subtract(){
  if(checker){
    // Store number
    firstNumber = parseFloat(textDisplay.innerText);
    operator = "-";
    textDisplay.innerText = "";
    textHistory.innerText += "-";
  }
  checker = false;
}

function addResult(a, b){ return a + b };
function subtractResult(a,b) { return a - b};

createNumberButtons();
createOpereratorButtons();