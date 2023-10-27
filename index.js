// signup button functionality
let signupForm = document.getElementById("signupForm")

// add the eventlistener
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username")
  let email = document.getElementById("email")
  let password = document.getElementById("password")

  if (username.value == "" || email.value == "" || password.value == "") {
    alert("all field required")
  } else {
    alert("account created successfully")
    console.log(`login with your email: ${email.value} and your password:
     ${password.value}. Your username is ${username.value} `);

  username.value = "";
  email.value = "";
  password.value = "";
}
})