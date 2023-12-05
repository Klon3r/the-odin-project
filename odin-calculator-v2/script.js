const buttonArray = ["C","←","+/-","/","7","8","9","+","4","5","6","-","1","2","3","*","0",".","="];
const operatorsArray = ["C","←","+/-","/","+","-","*",".","="]
let operationCheck = false;
let operator = "";
let firstNumber;
let secondNumber;
let result;
let canUseDecimal = true;

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
    else if( text === "=" ) { equals(); }
    else if( text === "←" ) { backspace(); }
    else if( text === "." ) { decimal(); }
    else if( text === "+/-" ) { positiveNegative(); }
    else {
      display.innerText += text
      operator = text;
      canUseDecimal = true;
      operationCheck = false;
    }
  }
}

function equals() {
  textArray = display.innerText.split(operator)
  firstNumber = parseFloat(textArray[0]);
  secondNumber = parseFloat(textArray[1]);

  if( operator === "+") { result = firstNumber + secondNumber }
  else if ( operator === "-" ) { result = firstNumber - secondNumber }
  else if ( operator === "/" ) { result = firstNumber / secondNumber }
  else if ( operator === "*" ) { result = firstNumber * secondNumber }

  result = Math.round(result * 1000) / 1000;
  display.innerText = result;
  operationCheck = true;
  if(result.toString().includes(".")) { canUseDecimal = false;}
}

function clearDisplay() {
  display.innerText = "";
  operationCheck = false;
  canUseDecimal = true;
}

function backspace() {
  if(display.innerText != "") {
    let textArray = display.innerText.split("");
    if(textArray[textArray.length-1] === "."){ canUseDecimal = true;}
    textArray.pop();
    display.innerText = textArray.join("");
  } 
}

function decimal() {
  if(canUseDecimal === true ) { 
    display.innerText += "."; 
    canUseDecimal = false; 
  }
}

function positiveNegative() {
  let displayText = display.innerText;
  if (!displayText.includes("+") && !displayText.includes("-") && !displayText.includes("/") && !displayText.includes("*")) {
    let textArray = displayText.split("");
    if (textArray[0] === "-") { textArray.shift();} 
    else { textArray.unshift("-"); }
    display.innerText = textArray.join("");
  } else {
    let textArray = displayText.split(operator);
    let textArray2 = textArray[1].split("")
    if(textArray2[0] === "-") { textArray2.shift();}
    else { textArray2.unshift("-") }; 
    textArray[1] = textArray2.join("");
    display.innerText = textArray[0] + operator + textArray [1];
  }
}

createButtons();