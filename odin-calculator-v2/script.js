const buttonArray = ["C","←","+/-","/","7","8","9","+","4","5","6","-","1","2","3","*","0",".","="];
const operatorsArray = ["C","←","+/-","/","+","-","*",".","="]
let operationCheck = false;
let operator = "";
let firstNumber;
let secondNumber;
let result;

const buttonDisplay = document.getElementById("calculator-buttons");
const display = document.getElementById("display");
const buttonDisplayWidth = buttonDisplay.clientWidth;
const buttonDisplayHeight = buttonDisplay.clientHeight;

function createButtons() {
  for (let i = 0; i < buttonArray.length; i++){
    let button = document.createElement("button");
    button.innerText = buttonArray[i];
    
    if (button.innerText === "0") { button.style.width = (buttonDisplayWidth / 4) * 2 + "px"} else { button.style.width = (buttonDisplayWidth / 4) + "px"; }
    
    button.style.height = (buttonDisplayHeight / 5) + "px";
    buttonDisplay.appendChild(button);

    button.addEventListener("click", function() { buttonAction(button.innerText) });
  }
}

function buttonAction(text) {
  if ( operatorsArray.includes(text) ) {
    console.log("Operation: " + text)
    operation(text)
  } else {
      display.innerText += text;    
      operationCheck = true;
      console.log("Number: " + text)
  }
}

function operation(text) {
  if (operationCheck === true ) {
    if( text === "C") { clearDisplay(); }
    else if( text === "=") { equals() }
    else {
      display.innerText += text
      operator = text;
    }
  }
}

function equals() {
  textArray = display.innerText.split(operator)
  firstNumber = textArray[0];
  secondNumber = textArray[1];

  if( operator === "+") { result = firstNumber + secondNumber }
  else if ( operator === "-" ) { result = firstNumber - secondNumber }
  else if ( operator === "/" ) { result = firstNumber / secondNumber }
  else if ( operator === "*" ) { result = firstNumber * secondNumber }

  display.innerText = result;
}

function clearDisplay() {
  display.innerText = "";
  operationCheck = false;
}

createButtons();