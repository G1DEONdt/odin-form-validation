const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#confirmation");
const country = document.querySelector("#country");
const postcode = document.querySelector("#postcode");
const submit = document.querySelector(".submit");

const elementArray = [postcode, country, confirmation, password, email];

email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address.");
    } else {
        email.setCustomValidity("");
        removeError(email);
    }
})

password.addEventListener("input", () => {
    if (password.validity.patternMismatch) {
        password.setCustomValidity("Password must be longer than 8 characters and must contain at least one letter and one number.")
    } else {
        password.setCustomValidity("");
        removeError(password);
    }
})

confirmation.addEventListener("input", () => {
    if (confirmation.value !== password.value) {
        confirmation.setCustomValidity("Passwords must match.");
    } else {
        confirmation.setCustomValidity("");
        removeError(confirmation);
    }
})

country.addEventListener("input", () => {
    if (country.validity.valueMissing) {
        country.setCustomValidity("Please enter the name of a country.")
    } else {
        country.setCustomValidity("");
        removeError(country);
    }
})

postcode.addEventListener("input", () => {
    if (postcode.validity.patternMismatch) {
        postcode.setCustomValidity("Postcodes must contain 4 digits.");
    } else {
        postcode.setCustomValidity("");
        removeError(postcode);
    }
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    for (let index in elementArray) {
        if (!elementArray[index].checkValidity()) {
            setError(elementArray[index]);
            elementArray[index].reportValidity();
        }
    }

    if (checkError()) {
        alert("Success");
    }
})

function setError(element) {
    element.classList.add("error");

}

function removeError(element) {
    element.classList.remove("error");
}

function checkError() {
    for (let index in elementArray) {
        if (!elementArray[index].checkValidity()) {
            return false;
        } else {
            return true;
        }
    }
}