const loginFormBox = document.getElementById("login-form");
const registerFormBox = document.getElementById("register-form");

const registerLink = document.querySelector("#login-form a");
const loginLink = document.querySelector("#register-form a");

// Show Register Form
registerLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginFormBox.classList.remove("active");
    registerFormBox.classList.add("active");
});

// Show Login Form
loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    registerFormBox.classList.remove("active");
    loginFormBox.classList.add("active");
});
