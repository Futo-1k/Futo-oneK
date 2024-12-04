// Initialize Firebase
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);

// Get the login form elements
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const errorMessage = document.getElementById("error-message");

// Add an event listener to the login button
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Get the email and password values
  const email = emailInput.value;
  const password = passwordInput.value;

  // Login with Firebase Authentication
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful, redirect to a protected page
      window.location.href = "protected-page.html";
    })
    .catch((error) => {
      // Login failed, display an error message
      errorMessage.textContent = error.message;
    });
});
