// Login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    
    // Perform login validation here
    if (validateLogin(email, password)) {
      // Redirect to home page or user profile
      window.location.href = 'home.html';
      // or window.location.href = 'profile.html';
    }
  });
  
  // Register form submission
  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('register-name').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    
    // Perform registration validation here
    if (validateRegistration(name, email, password)) {
      // Redirect to home page or user profile
      window.location.href = 'home.html';
      // or window.location.href = 'profile.html';
    }
  });
  
  // Login form validation
  function validateLogin(email, password) {
    // Perform validation logic here
    if (email === 'example@example.com' && password === 'password') {
      return true;
    } else {
      var errorElement = document.createElement('p');
      errorElement.className = 'error';
      errorElement.textContent = 'Invalid email or password.';
      document.getElementById('login-form').appendChild(errorElement);
      return false;
    }
  }
  
  // Register form validation
  function validateRegistration(name, email, password) {
    // Perform validation logic here
    if (name && email && password) {
      return true;
    } else {
      var errorElement = document.createElement('p');
      errorElement.className = 'error';
      errorElement.textContent = 'All fields are required.';
      document.getElementById('register-form').appendChild(errorElement);
      return false;
    }
  }
  
  
  