function addPasswordClass() {
  
}

function checkPassword() {
  // get values
  const passwordInput = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("confirmPassword").value;


  if(passwordInput === passwordConfirm) {
    console.log("The passwords match!")
  } else {
    console.log("The passwords do not match!")
  }
}
