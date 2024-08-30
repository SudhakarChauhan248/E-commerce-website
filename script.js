
// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

    // Password limitations
	if (password.length < 8) {
		alert('Password must be at least 8 characters long');
		return;
	}
	if (password.length > 20) {
		alert('Password must be no longer than 20 characters');
		return;
	}
	if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
		alert('Password must contain at least one special character');
		return;
	}
	if (!/\d/.test(password)) {
		alert('Password must contain at least one number');
		return;
	}

    // email id limitation
	if (!/^[a-zA-Z0-9._%+-]+@(gmail|outlook)\.com$/.test(username)) {
		alert('Invalid email address. Please use a Gmail or Outlook email.');
		return;
	}


	if (username && password) {

		window.location.href = 'index.html';
	} else {
		alert('Please enter both username and password');
	}
});


