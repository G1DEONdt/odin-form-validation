const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#confirmation");
const country = document.querySelector("#country");
const postcode = document.querySelector("#postcode");
const submit = document.querySelector(".submit");

email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address.");
    } else {
        email.setCustomValidity("");
    }
})

password.addEventListener("input", () => {
    if (password.validity.patternMismatch) {
        password.setCustomValidity("Password must be longer than 8 characters and must contain at least one letter and one number.")
    } else {
        password.setCustomValidity("");
    }
})

confirmation.addEventListener("input", () => {
    if (confirmation.value !== password.value) {
        confirmation.setCustomValidity("Passwords must match.");
    } else {
        confirmation.setCustomValidity("");
    }
})

country.addEventListener("input", () => {
    if (country.validity.valueMissing) {
        country.setCustomValidity("Please enter the name of a country.")
    } else {
        country.setCustomValidity("");
    }
})

postcode.addEventListener("input", () => {
    if (postcode.validity.patternMismatch) {
        postcode.setCustomValidity("Postcodes must contain 4 digits.");
    } else {
        postcode.setCustomValidity("");
    }
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    email.reportValidity();
    password.reportValidity();
    confirmation.reportValidity();
    country.reportValidity();
    postcode.reportValidity();

    // console.log(email.validity);
})