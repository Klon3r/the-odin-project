const buttonArray = ["C","←","+/-","/","7","8","9","+","4","5","6","-","1","2","3","*","0",".","="];
const operators = ["C","←","+/-","/","+","-","*",".","="]

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
  if ( operators.includes(text) ) {
    console.log("Operation: " + text)
  } else {
    console.log("Text: " + text);
    display.innerText += text;
  }
}

createButtons();