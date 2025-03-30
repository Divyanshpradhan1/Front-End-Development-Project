// Get elements
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Event Listeners for button clicks on index.html


// Basic form validation for login.html
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
      let [key, value] = cookie.split('=');
      if (key === name) {
          return decodeURIComponent(value);
      }
  }
  return null;
}

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      if (email === '' || password === '') {
          alert('Please enter both email and password.');
           // Prevent form submission if fields are empty
          return;
      }

      // Get stored user data from the cookie
      const storedUserData = getCookie('userData');

      if (email.trim()=="dpradhan711@gmail.com" && password.trim()=="Qaz@12345") {
          alert('Login successful!');
          // Redirect to the main page after successful login
          window.location.href = 'logged-in-user.html';
      } else {
          alert('No user data found. Please register first.');
           // Prevent login if no cookie exists
      }
  });
}

// Basic form validation for register.html
if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
      const fullName = document.getElementById('fullName').value;
      const contact = document.getElementById('contact').value;
      const dob = document.getElementById('dob').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const gender = document.getElementById('gender').value;

      if (fullName === '' || contact === '' || dob === '' || email === '' || password === '' || gender === '') {
          alert('Please fill in all fields.');
      
      } else {
          // Store email and password in a single cookie
          //document.cookie = `userData=${encodeURIComponent(email + '|' + password)}; path=/; secure; HttpOnly`;
          alert('Registration successful!');
          // Redirect to login page after successful registration
      }
  });
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("registerBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
if(btn){
btn.onclick = function() {
  modal.style.display = "block";
}
}

// When the user clicks on <span> (x), close the modal
if(span){
  span.onclick = function() {
    modal.style.display = "none";
  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
