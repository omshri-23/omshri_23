document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const loginBtn = document.querySelector('.login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Dummy credentials for login
    const validUsername = 'techuser';
    const validPassword = 'tech1234';

    // Pre-fill username from localStorage (if available)
    if (localStorage.getItem('username')) {
        usernameInput.value = localStorage.getItem('username');
    }

    // Login form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorMessage.style.display = 'none'; // Clear previous errors

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Both fields are required.';
            errorMessage.style.display = 'block';
            return;
        }

        if (username === validUsername && password === validPassword) {
            // Successful login
            if (rememberMeCheckbox.checked) {
                localStorage.setItem('username', username);
            }
            setTimeout(() => {
                window.location.href = 'index.html'; // Redirect to dashboard
            }, 1000);
        } else {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        }
    });
});
