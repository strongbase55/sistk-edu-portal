// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Add your authentication logic here
    // For simplicity, let's assume a hardcoded username and password
    if (username === 'admin' && password === 'password') {
      // Redirect to the admin page or perform any other actions
      alert('Login successful! Redirecting to the admin page.');
    } else {
      // Display error message
      document.getElementById('error-message').classList.remove('hidden');
    }
  });

function maths(){
  window.location.href="1year-maths.html"
}


function showTab(tabId) {
  // Hide all tabs
  var tabs = document.querySelectorAll('.tab-pane');
  tabs.forEach(function (tab) {
      tab.classList.remove('active');
  });

  // Show the selected tab
  var selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');

  // Deactivate all nav links
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
      link.classList.remove('active');
  });

  // Activate the clicked nav link
  var clickedLink = document.querySelector(`[href="#${tabId}"]`);
  clickedLink.classList.add('active');

  // Show/hide Mathematics navbar based on the selected tab
  if (tabId === 'mathematics-content') {
      var mathematicsNav = document.getElementById('mathematics-nav');
      mathematicsNav.style.display = 'block';
  } else {
      var mathematicsNav = document.getElementById('mathematics-nav');
      mathematicsNav.style.display = 'none';
  }
}
function showMathematicsContent() {
  // Trigger the Mathematics tab click
  showTab('1year');
  // Show the Mathematics content
  showMathsTab('mathematics-content');
}

function logout() {
  // Implement logout functionality if needed
}


// admin.js

function showTab(tabId) {
  // Hide all tabs
  var tabs = document.querySelectorAll('.tab-pane');
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  // Show the selected tab
  var selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');

  // Deactivate all nav links
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.classList.remove('active');
  });

  // Activate the clicked nav link
  var clickedLink = document.querySelector(`[href="#${tabId}"]`);
  clickedLink.classList.add('active');
}


//  back option 

function goBackToAdmin(){
  window.location.href='admin.html'
}


// athuntication 

function authenticate() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('errorMessage');

  // Predefined username and password
  var predefinedUsername = 'admin';
  var predefinedPassword = 'password';

  // Perform authentication logic
  if (username === predefinedUsername && password === predefinedPassword) {
    // Hide the login container and show the admin page
    document.getElementById('login-section').style.display = 'none'; // Use 'flex' to keep it centered
    document.getElementById('total-code').style.display = 'block';
    // Clear any previous error messages
    errorMessage.innerText = '';
  } else {
    // Display error message
    errorMessage.innerText = 'Invalid credentials. Please try again.';
    // Make sure the login container is visible
    document.getElementById('login-container').style.display = 'block'; // Use 'flex' to keep it centered
    // Hide the admin page
    document.getElementById('total-code').style.display = 'none';
  }

  // Prevent form submission
  return false;
}

function maths(){
  window.location.href="1year-maths.html"
}
