// Function to toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;
  togglePassword.textContent = type === "password" ? "👁" : "🙈";
});

// Handle form submission
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // For demonstration, check admin credentials and user credentials
  const adminUsername = "admin";
  const adminPassword = "admin123";
  const userUsername = "iqbal";
  const userPassword = "12345";

  // Clear previous error messages
  document.getElementById("usernameError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Check for missing fields
  if (!username) {
    document.getElementById("usernameError").textContent = "Username is required";
  }
  if (!password) {
    document.getElementById("passwordError").textContent = "Password is required";
  }

  if (username && password) {
    if (username === adminUsername && password === adminPassword) {
      // Simulate admin login success
      setTimeout(() => {
        alert("Admin login successful! Redirecting...");
        const link = document.createElement("a");
        link.href = "admin.html"; // Admin dashboard page
        link.click();
      }, 1000);
    } else if (username === userUsername && password === userPassword) {
      // Simulate user login success
      setTimeout(() => {
        alert("User login successful! Redirecting...");
        const link = document.createElement("a");
        link.href = "hotelzdn.html"; // User dashboard page
        link.click();
      }, 1000);
    } else {
      // Invalid credentials
      document.getElementById("usernameError").textContent = "Invalid credentials";
      document.getElementById("passwordError").textContent = "Invalid credentials";
    }
  }
});
