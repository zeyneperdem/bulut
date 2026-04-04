function createSignInPage() {
    const container = document.getElementById("sign-in-container");

    const heading = document.createElement("h2");
    heading.textContent = "create a new account";
    heading.style.textAlign = "center";

    const usernameField = document.createElement("input");
    usernameField.type = "text";
    usernameField.placeholder = "username";
    usernameField.className = "input-field";

    const emailField = document.createElement("input");
    emailField.type = "email";
    emailField.placeholder = "email";
    emailField.className = "input-field";

    const passwordField = document.createElement("input");
    passwordField.type = "password";
    passwordField.placeholder = "password";
    passwordField.className = "input-field";

    const signInButton = document.createElement("button");
    signInButton.textContent = "sign in";
    signInButton.className = "btn-primary";

    const loginLink = document.createElement("p");
    loginLink.innerHTML = `already have an account? <a href="log-in.html">log in</a>`;
    loginLink.style.textAlign = "center";

    container.appendChild(heading);
    container.appendChild(usernameField);
    container.appendChild(emailField);
    container.appendChild(passwordField);
    container.appendChild(signInButton);
    container.appendChild(loginLink);
}

window.onload = createSignInPage;
