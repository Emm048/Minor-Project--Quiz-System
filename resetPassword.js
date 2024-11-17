const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function togglePasswordVisibility(inputId, eyeId, eyeSlashId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeId);
  const eyeSlashIcon = document.getElementById(eyeSlashId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.style.display = "none";
    eyeSlashIcon.style.display = "inline";
    eyeSlashIcon.style.color = "#ff27cd";
  } else {
    passwordInput.type = "password";
    eyeIcon.style.display = "inline";
    eyeSlashIcon.style.display = "none";
    eyeSlashIcon.style.color = "#ff27cd";
  }
}

// Form Validation
const resetForm = document.getElementById("resetPasswordForm");
resetForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("resetUsername").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  let isValid = true;

  // Username validation
  if (username === "") {
    document.getElementById("resetUsernameError").textContent =
      "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(username)) {
    document.getElementById("resetUsernameError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  } else {
    document.getElementById("resetUsernameError").textContent = "";
  }


  // Password validation
  if (!passwordRegex.test(newPassword)) {
    document.getElementById("newPasswordError").textContent =
      "Password must be at least 8 characters long and include a letter, a number, and a special character.";
    isValid = false;
  } else {
    document.getElementById("newPasswordError").textContent = "";
  }

  // Confirm Password validation
  if (newPassword !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    isValid = false;
  } else {
    document.getElementById("confirmPasswordError").textContent = "";
  }

  // If all validations pass
  if (isValid) {
    console.log("Username:", username);
    alert("Password reset successful!");
    resetForm.reset();
  }
});
