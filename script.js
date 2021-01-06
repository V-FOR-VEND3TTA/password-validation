const name = document.getElementById("name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

// To catch errors before they are submitted
form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }
  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }
  if (password.value.length > 13) {
    messages.push("Password must be less than 13 characters");
  }
  if (password.value === "password") {
    messages.push("Password cannot be 'password'");
  }
  if (password.value === "123456") {
    messages.push("Password cannot be 123456");
  }
  if (confirmPassword.value !== password) {
    messages.push("Passwords do not match");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(" & ");
  }
});
