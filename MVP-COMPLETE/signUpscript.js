// Function to toggle the visibility of the password field
function togglePassword() {
    // Get the password input field and the toggle icon
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');
    
    // Check if the password is currently hidden
    if (passwordInput.type === 'password') {
        // If hidden, change the input type to text to show the password
        passwordInput.type = 'text';
        // Change the eye icon to 'eye-slash' to indicate visibility
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        // If visible, change the input type back to password to hide it
        passwordInput.type = 'password';
        // Change the icon back to 'eye' to indicate the password is hidden
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Function to toggle the visibility of the confirm password field
function toggleConfirmPassword() {
    // Get the confirm password input field and the toggle icon
    const confirmPasswordInput = document.getElementById('confirm-password');
    const toggleIcon = document.getElementById('toggleConfirmPassword');
    
    // Check if the confirm password is currently hidden
    if (confirmPasswordInput.type === 'password') {
        // If hidden, change the input type to text to show the password
        confirmPasswordInput.type = 'text';
        // Change the eye icon to 'eye-slash' to indicate visibility
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        // If visible, change the input type back to password to hide it
        confirmPasswordInput.type = 'password';
        // Change the icon back to 'eye' to indicate the password is hidden
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}
