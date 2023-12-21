const password= document.getElementById("password");
const passwordConfirm = document.getElementById("confirmPassword");
const passwordMessage = document.getElementById("passwordMessage");

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
  } else {
    console.log("The passwords do not match!")
  }
}

addPasswordClass();
passwordMessage.innerText = "*Passwords do not match";