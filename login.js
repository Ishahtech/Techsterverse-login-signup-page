// logIn button functionality
let loginForm = document.getElementById("loginForm")

// add wvent listener
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // fetch the form elements
let email = document.getElementById("login-email")
let password = document.getElementById("login-password")

if (email.value == "" || password.value == ""){
  alert("complete all field")
} else{
  alert("login successful")
  console.log(`email: ${email.value} and password ${password.value}`)
email.value =""
password.value = "";
}
})