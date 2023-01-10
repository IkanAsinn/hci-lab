const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const username = form.elements["username"];
    const email = form.elements["email"];
    const password = form.elements["password"];
    const confirmPassword = form.elements["confirm-password"];
    const date = form.elements["date"];
    const gender = form.elements["gender"];
    const terms = form.elements["terms"];

    // Remove all error messages
    $(".error-message").remove();

    // Required field validation
    if (username.value === "") {
        $('#username').after(`<div class="error-message">Username is required</div>`);
    }
    if (email.value === "") {
        $('#email').after(`<div class="error-message">Email is required</div>`);
    }
    if (password.value === "") {
        $('#password').after(`<div class="error-message">Password is required</div>`);
    }
    if (confirmPassword.value === "") {
        $('#confirm-password').after(`<div class="error-message">Confirm password is required</div>`);
    }
    if (date.value === "") {
        $('#date').after(`<div class="error-message">Date is required</div>`);
    }

    // Minimum and maximum length validation
    if (password.value.length < 8 && password.value.length > 20) {
        $('#password').after(`<div class="error-message">Password must be at least 8-20 characters long</div>`);
    }


    // Email validation
    if ((!email.value.includes("@") || !email.value.includes(".")) && email.value.length > 0) {
        $('#email').after(`<div class="error-message">Email is invalid</div>`);
    }

    // Password validation
    if (password.value !== confirmPassword.value) {
        $('#confirm-password').after(`<div class="error-message">Passwords do not match</div>`);
    }

    let hasUppercase = false;
    for (let i = 0; i < password.value.length; i++) {
        if (password.value[i] >= "A" && password.value[i] <= "Z") {
            hasUppercase = true;
            break;
        }
    }
    if (!hasUppercase && password.value.length > 0) {
        $('#password').after(`<div class="error-message">Password must contain at least one uppercase letter</div>`);
    }

    let hasSpecialCharacter = false;
    const specialCharacters = "!@#$%^&*";
    for (let i = 0; i < password.value.length; i++) {
        if (specialCharacters.includes(password.value[i])) {
            hasSpecialCharacter = true;
            break;
        }
    }
    if (!hasSpecialCharacter && password.value.length > 0) {
        $('#password').after(`<div class="error-message">Password must contain at least one special character (! @ # $ % ^ & *)</div>`);
    }

    // Gender validation
    let genderSelected = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        $('#gender').after(`<div class="error-message">Gender is required</div>`);
    }

    // Terms and conditions validation
    if (!terms.checked) {
        $('label[for="terms"]').after(`<div class="error-message"> You must accept the terms and conditions to continue</div>`);
    }

    // If there are no error messages, submit the form
    if ($(".error-message").length === 0) {
        window.location.replace('./gallery.html');
    }

});

