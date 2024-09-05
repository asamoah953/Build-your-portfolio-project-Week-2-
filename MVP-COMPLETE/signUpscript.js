function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function toggleConfirmPassword() {
    const confirmPasswordInput = document.getElementById('confirm-password');
    const toggleIcon = document.getElementById('toggleConfirmPassword');
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        confirmPasswordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

