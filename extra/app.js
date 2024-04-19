const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
document.getElementById("login-btn").addEventListener("click", login);
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function login(event) {
  let username = document.getElementById("log-username").value;
  let password = document.getElementById("log-password").value;

  if (username == "" || password == "") alert("Enter Username and Password!");
  else if (username == "admin" && password == "admin") {
    event.preventDefault();
    window.location.href = "book_appointment.html";
  } else if (username != "admin" || password != "admin")
    alert("Incorrect Username and Password!");
}

function register() {
  let username = document.getElementById("sign-username").value;
  let email = document.getElementById("sign-email").value;
  let password = document.getElementById("sign-password").value;

  if (username == "" || password == "" || email == "") {
    alert("Enter Username, Email and Password!");
    event.preventDefault();
  }
  else {
    alert(username + " your registration is successfull.");
  }
}
