document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    let valid = true;

    // Username validation
    const username = document.getElementById("userRegistername");
    const usernameError = document.getElementById("usernameRegisterError");
    if (username.value.trim() === "") {
      usernameError.textContent = "Username is required.";
      valid = false;
    } else {
      usernameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById("userRegisterEmail");
    const emailError = document.getElementById("userEmailRegisterError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(email.value)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Password validation
    const password = document.getElementById("passwordRegister");
    const passwordError = document.getElementById("passwordRegisterError");
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.value.trim() === "") {
      passwordError.textContent = "Password is required.";
      valid = false;
    } else if (!passwordRegex.test(password.value)) {
      passwordError.textContent =
        "Password must be at least 8 characters, include a letter, a number, and a special character.";
      valid = false;
    } else {
      passwordError.textContent = "";
    }

    // Role validation
    const roleError = document.getElementById("roleRegisterError");
    const roleSelected = document.querySelector('input[name="role"]:checked');
    if (!roleSelected) {
      roleError.textContent = "Please select a role.";
      valid = false;
    } else {
      roleError.textContent = "";
    }

    // Submit form if valid
    if (valid) {
      console.log({
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value,
        role: roleSelected.value,
      });
      alert("Form submitted successfully!");
    }
  });
