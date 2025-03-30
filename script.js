// Get elements
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Event Listeners for button clicks on index.html


// Basic form validation for login.html
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === '' || password === '') {
            alert('Please enter both email and password.');
            event.preventDefault(); // Prevent form submission if fields are empty
        }
        //  Add more robust validation as needed (e.g., email format)
    });
}

// Basic form validation for register.html
if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
        const fullName = document.getElementById('fullName').value;
        const contact = document.getElementById('contact').value;
        const dob = document.getElementById('dob').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;

        if (fullName === '' || contact === '' || dob === '' || email === '' || password === '' || gender === '') {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission if fields are empty
        }
        //  Add more robust validation here
    });
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("registerBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
