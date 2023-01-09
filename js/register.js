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

    const errors = [];

    // Required field validation
    if (username.value === "") {
        errors.push("Username is required");
    }
    if (email.value === "") {
        errors.push("Email is required");
    }
    if (password.value === "") {
        errors.push("Password is required");
    }
    if (confirmPassword.value === "") {
        errors.push("Confirm password is required");
    }
    if (date.value === "") {
        errors.push("Date is required");
    }

    // Minimum and maximum length validation
    if (username.value.length < 3) {
        errors.push("Username must be at least 3 characters long");
    }
    if (password.value.length < 8) {
        errors.push("Password must be at least 8 characters long");
    }
    if (password.value.length > 20) {
        errors.push("Password must be at most 20 characters long");
    }

    // Email validation
    if (!email.value.includes("@") || !email.value.includes(".")) {
        errors.push("Email is invalid");
    }

    // Password validation
    if (password.value !== confirmPassword.value) {
        errors.push("Passwords do not match");
    }

    let hasUppercase = false;
    for (let i = 0; i < password.value.length; i++) {
        if (password.value[i] >= "A" && password.value[i] <= "Z") {
            hasUppercase = true;
            break;
        }
    }
    if (!hasUppercase) {
        errors.push("Password must contain at least one uppercase letter");
    }

    let hasSpecialCharacter = false;
    const specialCharacters = "!@#$%^&*";
    for (let i = 0; i < password.value.length; i++) {
        if (specialCharacters.includes(password.value[i])) {
            hasSpecialCharacter = true;
            break;
        }
    }
    if (!hasSpecialCharacter) {
        errors.push("Password must contain at least one special character (!, @, #, $, %, ^, &, *)");
    }

    if (password.value.length < 8) {
        errors.push("Password must be at least 8 characters long");
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
        errors.push("Gender is required");
    }

    // Terms and conditions validation
    if (!terms.checked) {
        errors.push("You must accept the terms and conditions to continue");
    }

    if (errors.length > 0) {
        // Clear any existing error messages
        $('.error-message').remove();

        // Display error messages
        for (let i = 0; i < errors.length; i++) {
            $('form').before(`<div class="error-message">${errors[i]}</div>`);
        }

        // Scroll to the error messages
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    } else {
        // Form is valid, submit the form
    }

});

