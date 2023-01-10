$('form').submit(e => {
    e.preventDefault();

    const username = $('#username');
    const email = $('#email');
    const password = $('#password');
    const confirmPassword = $('#confirm-password');
    const date = $('#date');
    const genders = $('input[name="gender"]');
    const terms = $('#terms');

    // Remove all error messages
    $(".error-message").remove();

    // Required field validation
    if (username.val() === "") {
        username.after(`<div class="error-message">Username is required</div>`);
    }
    if (email.val() === "") {
        email.after(`<div class="error-message">Email is required</div>`);
    }
    if (password.val() === "") {
        password.after(`<div class="error-message">Password is required</div>`);
    }
    if (confirmPassword.val() === "") {
        confirmPassword.after(`<div class="error-message">Confirm password is required</div>`);
    }
    if (date.val() === "") {
        date.after(`<div class="error-message">Date is required</div>`);
    }

    // Minimum and maximum length validation
    if (password.val().length < 8 && password.val().length > 20) {
        password.after(`<div class="error-message">Password must be at least 8-20 characters long</div>`);
    }


    // Email validation
    if ((!email.val().includes("@") || !email.val().includes(".")) && email.val().length > 0) {
        email.after(`<div class="error-message">Email is invalid</div>`);
    }

    // Password validation
    if (password.val() !== confirmPassword.val() && password.val().length > 0 && confirmPassword.val().length > 0) {
        confirmPassword.after(`<div class="error-message">Passwords do not match</div>`);
    }

    let hasUppercase = false;
    for (let i = 0; i < password.val().length; i++) {
        if (password.val()[i] >= "A" && password.val()[i] <= "Z") {
            hasUppercase = true;
            break;
        }
    }
    if (!hasUppercase && password.val().length > 0) {
        password.after(`<div class="error-message">Password must contain at least one uppercase letter</div>`);
    }

    let hasSpecialCharacter = false;
    const specialCharacters = "!@#$%^&*";
    for (let i = 0; i < password.val().length; i++) {
        if (specialCharacters.includes(password.val()[i])) {
            hasSpecialCharacter = true;
            break;
        }
    }
    if (!hasSpecialCharacter && password.val().length > 0) {
        password.after(`<div class="error-message">Password must contain at least one special character (! @ # $ % ^ & *)</div>`);
    }

    // Gender validation
    let genderSelected = false;
    
    genders.each(function() {
        if ($(this).prop('checked')) {
            genderSelected = true;
            return false;
        }
    });

    if (!genderSelected) {
        $('.gender-form').after(`<div class="error-message">Gender is required</div>`);
    }

    // Terms and conditions validation
    if (!terms.prop('checked')) {
        $('label[for="terms"]').after(`<div class="error-message"> You must accept the terms and conditions to continue</div>`);
    }

    // If there are no error messages, submit the form
    if ($(".error-message").length === 0) {
        window.location.replace('./gallery.html');
    }

});

