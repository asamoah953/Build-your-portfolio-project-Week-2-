function togglePassword() {
    // Get the password input field by its ID
    const passwordInput = document.getElementById('password');

    // Get the toggle icon (eye icon) by its ID
    const toggleIcon = document.getElementById('togglePassword');

    // Check if the password input type is currently 'password'
    if (passwordInput.type === 'password') {
        // Change the input type to 'text' to make the password visible
        passwordInput.type = 'text';

        // Change the icon from 'eye' (fa-eye) to 'eye-slash' (fa-eye-slash) to indicate visibility
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        // If the password is already visible, switch it back to 'password' type to hide it
        passwordInput.type = 'password';

        // Change the icon back from 'eye-slash' to 'eye'
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}
