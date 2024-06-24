const password= document.getElementById("password");
const passwordConfirm = document.getElementById("confirmPassword");
const passwordMessage = document.getElementById("passwordMessage");
const submitButton = document.getElementById('submitButton');
var passwordsMatch = false;

function addPasswordClass() {
  password.classList.add("password");
  passwordConfirm.classList.add("password");
}

function removePasswordClass() {
  password.classList.remove("password");
  passwordConfirm.classList.remove("password");
}

function addPasswordMessage(message) { passwordMessage.innerText = message; }

function checkPassword() {
  const passwordValue = password.value;
  const passwordConfirmValue = passwordConfirm.value;

  if(passwordValue === passwordConfirmValue) {
    console.log("The passwords match!")
    removePasswordClass();
    addPasswordMessage("");
    buttonEnable();
    passwordsMatch = true;
  } else {
    console.log("The passwords do not match!")
    addPasswordClass();
    addPasswordMessage("*Passwords do not match");
    buttonDisable();
    passwordsMatch = false;
  }
}

function buttonDisable() { submitButton.disabled = true; }
function buttonEnable() { submitButton.disabled = false; }

addPasswordClass();
addPasswordMessage("*Passwords do not match");
buttonDisable()