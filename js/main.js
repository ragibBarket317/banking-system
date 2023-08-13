document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passwordField = document.getElementById("user-pass");
  const password = passwordField.value;

  if (email === "ragib@mim.com" && password === "12345") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
