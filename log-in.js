function createLoginPage() {
    const container = document.getElementById("login-container");

    const heading = document.createElement("h2");
    heading.textContent = "log in to your account";
    heading.style.textAlign = "center";

    const usernameField = document.createElement("input");
    usernameField.type = "text";
    usernameField.placeholder = "username";
    usernameField.className = "input-field";

    const passwordField = document.createElement("input");
    passwordField.type = "password";
    passwordField.placeholder = "password";
    passwordField.className = "input-field";

    const loginButton = document.createElement("button");
    loginButton.textContent = "log in";
    loginButton.className = "btn-primary";

    const signUpLink = document.createElement("p");
    signUpLink.innerHTML = `don't have an account? <a href="sign-in.html">sign in</a>`;
    signUpLink.style.textAlign = "center";

    container.appendChild(heading);
    container.appendChild(usernameField);
    container.appendChild(passwordField);
    container.appendChild(loginButton);
    container.appendChild(signUpLink);
}

window.onload = createLoginPage;
