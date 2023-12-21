const password= document.getElementById("password");
const passwordConfirm = document.getElementById("confirmPassword");
const passwordMessage = document.getElementById("passwordMessage");
const form = document.getElementById('form');
const submitButton = document.getElementById('submitButton');
var passwordsMatch = false;

function addPasswordClass() {
  password.classList.add("password");
  passwordConfirm.classList.add("password");
}

function checkPassword() {
  // get values
  const passwordValue = document.getElementById("password").value;
  const passwordConfirmValue = document.getElementById("confirmPassword").value;


  if(passwordValue === passwordConfirmValue) {
    password.classList.remove("password");
    passwordConfirm.classList.remove("password");
    passwordMessage.innerText = "";
    console.log("The passwords match!")
    passwordsMatch = true;
  } else {
    addPasswordClass()
    passwordMessage.innerText = "*Passwords do not match";
    console.log("The passwords do not match!")
    passwordsMatch = false;
    
  }
}

function validateForm(){
  if(passwordsMatch === true){
    return true;
  } else return false;
}

addPasswordClass();
passwordMessage.innerText = "*Passwords do not match";
// submitButton.setAttribute('disabled','disabled');