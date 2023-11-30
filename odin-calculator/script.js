const calculatorDisplay = document.getElementById("calc-body");
const calculatorDisplayWidth = calculatorDisplay.clientWidth;
const numberButtonDisplay = document.getElementById("number-buttons");
const miscButtonDisplay = document.getElementById("misc-buttons")
const operatorButtonDisplay = document.getElementById("operator-buttons");
const textDisplay = document.getElementById("text-display");
const textHistory = document.getElementById("text-history");

const buttonWidth = Math.floor(calculatorDisplayWidth / 4);
const miscbuttonWidth = Math.floor(calculatorDisplayWidth / 5);

let firstNumber;
let secondNumber;
let result;
let operator;
let checker = true;
let zeroError = false;

function createNumberButtons() {
  // ONE TO NINE
  for( let row = 0; row < 3; row++){
    for( let col = 0; col < 3; col++){
      // Calculate the digit
      let digit = 7 - row * 3 + col;

      let numberButton = document.createElement("button");
      numberButton.innerText = digit;
      numberButton.style.width = buttonWidth + "px";
      numberButton.style.height = "60px";
      numberButton.id = "numberButton";

      numberButtonDisplay.appendChild(numberButton)
      
      numberButton.addEventListener("click", function() {clearZero()})
      numberButton.addEventListener("click", function() {textDisplay.innerText += numberButton.innerText; autoScrollTextDisplay()})
      numberButton.addEventListener("click", function() {textHistory.innerText += numberButton.innerText; autoScrollTextHistory()})
    }
  }

  // ZERO
  let zeroButton = document.createElement("button");
  zeroButton.innerText = 0;
  zeroButton.style.width = (buttonWidth * 2)+ "px";
  zeroButton.style.height = "60px";
  zeroButton.id = "numberButton";

  numberButtonDisplay.appendChild(zeroButton)

  zeroButton.addEventListener("click", function() {clearZero()})
  zeroButton.addEventListener("click", function() {textDisplay.innerText += zeroButton.innerText; autoScrollTextDisplay();})
  zeroButton.addEventListener("click", function() {textHistory.innerText += zeroButton.innerText; autoScrollTextHistory();})

  // DECIMAL
  let decimalButton = document.createElement("button");
  decimalButton.innerText = ".";
  decimalButton.style.width = buttonWidth + "px";
  decimalButton.style.height = "60px"
  decimalButton.id = "numberButton";

  numberButtonDisplay.appendChild(decimalButton);

  decimalButton.addEventListener("click", function() {clearZero()});
  decimalButton.addEventListener("click", function() {decimal()});
}

function createOpereratorButtons() {
  let operators = ["+","-","*","="];

  for (let i = 0; i < operators.length; i++){
    let operatorButton = document.createElement("button");
    operatorButton.innerText = operators[i];
    operatorButton.style.width = buttonWidth + "px";
    operatorButton.style.height = "60px";
    operatorButton.id = "operatorButton"

    operatorButtonDisplay.appendChild(operatorButton);

    // ADD
    if (operatorButton.innerText === "+"){
      operatorButton.addEventListener("click", function() { add() });
    }
    // SUBTRACT
    if (operatorButton.innerText === "-"){
      operatorButton.addEventListener("click", function() { subtract() });
    }
    // MULTIPLY
    if (operatorButton.innerText === "*") {
      operatorButton.addEventListener("click", function() { multiply() });
    }
    // EQUALS
    if(operatorButton.innerText === "=") {
      operatorButton.addEventListener("click", function() { operate() });
    } 

  }
}

function createMiscButtons() {
  let misc = ["C","←","+/-","/"]

  for (let i = 0; i < misc.length; i++) {
    let miscButton = document.createElement("button");
    miscButton.innerText = misc[i];
    miscButton.style.width = buttonWidth + "px";
    miscButton.style.height = "60px";
    miscButton.id = "miscButton";

    miscButtonDisplay.appendChild(miscButton);

    // CANCEL
    if(miscButton.innerText === "C"){ 
      miscButton.id = "clearButton";
      miscButton.addEventListener("click", function() { clearDisplay() });
    } 
    //DIVIDE
    if (miscButton.innerText === "/") {
      miscButton.addEventListener("click", function() { divide() });
    }
    // BACKSPACE
    if (miscButton.innerText === "←") {
      miscButton.id = "backspaceButton";
      miscButton.addEventListener("click", function() { backspace() });
    }
    // POSITIVE/NEGATIVE
    if (miscButton.innerText === "+/-") {
      miscButton.addEventListener("click", function() { positiveNegative()})
    }


  }
}

function decimal() {
  let array = textDisplay.innerText.split("");
  if(!array.includes(".")) {
    textDisplay.innerText += "."
    textHistory.innerText += "."
    autoScrollTextDisplay();
    autoScrollTextHistory();
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

function clearZero(){
  if(zeroError === true) {
    textDisplay.innerText = "";
    textHistory.innerText = "";
  }
  zeroError = false;
}

function backspace(){
  let array = textDisplay.innerText.split("");
  if(array.length >= 1) {
    let arrayHistory = textHistory.innerText.split("");
    array.pop();
    arrayHistory.pop();
    textDisplay.innerText = array.join("");
    textHistory.innerText = arrayHistory.join("");
  }

}

function positiveNegative() {
  let array = textDisplay.innerText.split("");
  let arrayHistory = textHistory.innerText.split("");
  let indexNumber = (arrayHistory.length - array.length);
  if(array[0] === "-"){
    arrayHistory.splice((indexNumber),1,"");
    array.shift();

    textDisplay.innerText = array.join("");
    textHistory.innerText = arrayHistory.join("");
  } else {
    arrayHistory.splice((indexNumber),0,"-")
    array.unshift("-")

    textDisplay.innerText = array.join("");
    textHistory.innerText = (arrayHistory.join(""));
  }
}

function operate() {
  // NOT NULL
  if(!operator == ""){
    secondNumber = parseFloat(textDisplay.innerText);
    textHistory.innerText += "=";
  }
  // ADD
  if(operator === "+"){
    result = new Decimal(addResult(firstNumber, secondNumber));
    textDisplay.innerText = result;
    textHistory.innerText += result;
    checker=true;
    operator = "";
  }
  // SUB
  if(operator === "-"){
    result = new Decimal(subtractResult(firstNumber, secondNumber));
    textDisplay.innerText = result;
    textHistory.innerText += result;
    checker=true;
    operator = "";
  }
  // MULTIPLY
  if(operator === "*"){
    result = new Decimal(multiplyResult(firstNumber,secondNumber));
    textDisplay.innerText = result;
    textHistory.innerText += result;
    checker = true;
    operator = "";
  }
  // DIVIDE
  if(operator === "/") {
    if(secondNumber === 0){
      textDisplay.innerText = "You can't divide by 0";
      checker = true;
      textHistory.innerText = "";
      zeroError = true;
      operator = "";

    } else {
      result = divideResults(new Decimal(firstNumber), new Decimal(secondNumber));
      textDisplay.innerText = result;
      textHistory.innerText += result;
      checker = true;
      operator = "";
    }
  }
  autoScrollTextHistory() 
  autoScrollTextDisplay() 
  
}

function add(){
  if(checker && textDisplay.innerText != ""){
    // Store number
    firstNumber = parseFloat(textDisplay.innerText);
    operator = "+";
    textDisplay.innerText = "";
    textHistory.innerText += "+";
    checker = false;
  }
}

function subtract(){
  if(checker && textDisplay.innerText != ""){
    // Store number
    firstNumber = parseFloat(textDisplay.innerText);
    operator = "-";
    textDisplay.innerText = "";
    textHistory.innerText += "-";
    checker = false;
  }
  
}

function multiply(){
  if(checker && textDisplay.innerText != "") {
    //Store number
    firstNumber = parseFloat(textDisplay.innerText);
    operator = "*";
    textDisplay.innerText = "";
    textHistory.innerText += "*";
    checker = false;
  }
}

function divide() {
  if(checker && textDisplay.innerText != "") {
    firstNumber = parseFloat(textDisplay.innerText);
    operator = "/";
    textDisplay.innerText = "";
    textHistory.innerText += "/"
    checker = false;
  }
}

function addResult(a, b){ return a + b };
function subtractResult(a,b) { return a - b };
function multiplyResult(a,b) { return a * b };
function divideResults(a,b) { return a / b };

document.addEventListener('keydown', function(event) {
  // 1
  if(event.code == 'Digit1') {
    textDisplay.innerText += 1;
    textHistory.innerText += 1;
  }
  // 2
  if(event.code == 'Digit2') {
    textDisplay.innerText += 2;
    textHistory.innerText += 2;
  }
  // 3
  if(event.code == 'Digit3') {
    textDisplay.innerText += 3;
    textHistory.innerText += 3;
  }
  // 4
  if(event.code == 'Digit4') {
    textDisplay.innerText += 4;
    textHistory.innerText += 4;
  }
  // 5
  if(event.code == 'Digit5') {
    textDisplay.innerText += 5;
    textHistory.innerText += 5;
  }
  // 6
  if(event.code == 'Digit6') {
    textDisplay.innerText += 6;
    textHistory.innerText += 6;
  }
  // 7
  if(event.code == 'Digit7') {
    textDisplay.innerText += 7;
    textHistory.innerText += 7;
  }
  // 8
  if(event.code == 'Digit8') {
    textDisplay.innerText += 8;
    textHistory.innerText += 8;
  }
  // 9
  if(event.code == 'Digit9') {
    textDisplay.innerText += 9;
    textHistory.innerText += 9;
  }
  // 0
  if(event.code == 'Digit0') {
    textDisplay.innerText += 0;
    textHistory.innerText += 0;
  }

  autoScrollTextHistory() 
  autoScrollTextDisplay() 
})

function autoScrollTextDisplay() {
  textDisplay.scrollLeft = textDisplay.scrollWidth;
}

function autoScrollTextHistory() {
  textHistory.scrollLeft = textHistory.scrollWidth;
}

createNumberButtons();
createOpereratorButtons();
createMiscButtons();