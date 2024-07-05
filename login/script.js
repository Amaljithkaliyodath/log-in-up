const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Modal logic
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const passwordResetModal = document.getElementById('passwordResetModal');
const signupSuccessModal = document.getElementById('signupSuccessModal');
const closeButtons = document.getElementsByClassName('close');

forgotPasswordLink.addEventListener('click', () => {
    passwordResetModal.style.display = 'block';
});

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        this.parentElement.parentElement.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target == passwordResetModal) {
        passwordResetModal.style.display = 'none';
    }
    if (event.target == signupSuccessModal) {
        signupSuccessModal.style.display = 'none';
    }
}

// Handle signup form submission
const signUpForm = document.getElementById('signUpForm');
const signUpName = document.getElementById('signUpName');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPassword = document.getElementById('signUpPassword');
const signupSuccessMessage = document.getElementById('signupSuccessMessage');
const closeSignupSuccess = document.getElementById('closeSignupSuccess');

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = signUpName.value;
    const email = signUpEmail.value;
    const password = signUpPassword.value;
    
    // Here you can add your form validation and AJAX request to send form data to the server

    // For demonstration, we'll just show a success message
    signupSuccessMessage.textContent = `Signup successful! Welcome, ${name}.`;
    signupSuccessModal.style.display = 'block';

    // Reset form fields
    signUpName.value = '';
    signUpEmail.value = '';
    signUpPassword.value = '';
});

closeSignupSuccess.addEventListener('click', () => {
    signupSuccessModal.style.display = 'none';
});
