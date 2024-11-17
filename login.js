const container = document.querySelector(".container");
const LoginLink = document.querySelector(".SignInLink");
const Registerlink = document.querySelector(".SignUpLi");

Registerlink.addEventListener("click", () => {
  container.classList.add("active");
});
LoginLink.addEventListener("click", () => {
  container.classList.remove("active");
});
function myFunction() {
  var x = document.getElementById("passwordRegister");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
    y.style.color = "#ff27cd";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
    y.style.color = "#ff27cd";
  }
}
function myFunc() {
  var x = document.getElementById("password");
  var y = document.getElementById("hide3");
  var z = document.getElementById("hide4");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
    y.style.color = "#ff27cd";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
    y.style.color = "#ff27cd";
  }
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Reset error messages
    usernameError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    // Validate username
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username.value.trim() === "") {
      usernameError.textContent = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(username.value)) {
      usernameError.textContent = "Please enter a valid email address.";
      valid = false;
    }

    // Validate password (8 characters, at least 1 number, 1 letter, 1 special character)
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.value.trim() === "") {
      passwordError.textContent = "Password is required.";
      valid = false;
    } else if (!passwordRegex.test(password.value)) {
      passwordError.textContent =
        "Password must be at least 8 characters, include a letter, a number, and a special character.";
      valid = false;
    }

    // If valid, submit form (for demonstration)
    if (valid) {
        console.log(">>>>>>>>>>>>>>>>>>", username.value,password.value);
        console.log("payload", {name:username.value, password: password.value });
        
        
    //   this.submit();
    }
  });
  

  // document.getElementById("registerForm").addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   let valid = true;
  
  //   // Username validation
  //   const username = document.getElementById("userRegistername");
  //   const usernameError = document.getElementById("usernameRegisterError");
  //   if (username.value.trim() === "") {
  //     usernameError.textContent = "Username is required.";
  //     valid = false;
  //   } else {
  //     usernameError.textContent = "";
  //   }
  
  //   // Email validation
  //   const email = document.getElementById("userRegisterEmail");
  //   const emailError = document.getElementById("userEmailRegisterError");
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (email.value.trim() === "") {
  //     emailError.textContent = "Email is required.";
  //     valid = false;
  //   } else if (!emailRegex.test(email.value)) {
  //     emailError.textContent = "Please enter a valid email address.";
  //     valid = false;
  //   } else {
  //     emailError.textContent = "";
  //   }
  
  //   // Password validation
  //   const password = document.getElementById("passwordRegister");
  //   const passwordError = document.getElementById("passwordRegisterError");
  //   const passwordRegex =
  //     /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   if (password.value.trim() === "") {
  //     passwordError.textContent = "Password is required.";
  //     valid = false;
  //   } else if (!passwordRegex.test(password.value)) {
  //     passwordError.textContent =
  //       "Password must be at least 8 characters, include a letter, a number, and a special character.";
  //     valid = false;
  //   } else {
  //     passwordError.textContent = "";
  //   }
  
  //   // Role validation
  //   const roleError = document.getElementById("roleRegisterError");
  //   const roleSelected = document.querySelector('input[name="role"]:checked');
  //   if (!roleSelected) {
  //     roleError.textContent = "Please select a role.";
  //     valid = false;
  //   } else {
  //     roleError.textContent = "";
  //   }
  
  //   // Submit form if valid
  //   if (valid) {
  //     console.log({
  //       username: username.value.trim(),
  //       email: email.value.trim(),
  //       password: password.value,
  //       role: roleSelected.value,
  //     });
  //     alert("Form submitted successfully!");
  //   }
  // });
  