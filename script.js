function validateForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        alert('Please fill out both fields.');
        return false; // Prevent form submission
    }

    // Here you might check credentials or use AJAX to verify the login
    // For simplicity, assume login is successful

    window.location.href = 'dashboard.html'; // Redirect to dashboard page
    return false; // Prevent form submission
}

function validateSignup() {
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (email === '' || password === '') {
        alert('Please fill out both fields.');
        return false; // Prevent form submission
    }

    // Perform further validation or AJAX request here if needed

    return true; // Allow form submission
}

