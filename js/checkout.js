// Get the input fields
var firstName = document.querySelector('.firstName');
var email = document.querySelector('.email');
var address = document.querySelector('.address');
var lastName = document.querySelector('.lastName');
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');


// Get the error elements
var errorFirstName = document.getElementById('errorFirstName'); 
var errorEmail = document.getElementById('errorEmail');
var errorAddress = document.getElementById('errorAddress');
var errorLastName = document.getElementById('errorLastName');
var errorPassword = document.getElementById("errorPassword");
var errorPhone = document.getElementById('errorPhone');  

const expressions = {
    firstname: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    address: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    lastname: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    password: /^[a-zA-Z0-9]{3,8}$/,
    phone: /^\d{3,14}$/
}

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    if(expressions.firstname.test(firstName.value)) {
        firstName.classList.remove("is-invalid");
        firstName.classList.add("is-valid");
        errorFirstName.style.display = 'none';
    } else {
        firstName.classList.remove("is-valid");
        firstName.classList.add("is-invalid");
        errorFirstName.style.display = 'block';
    }

    if(expressions.email.test(email.value)) {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        errorEmail.style.display = 'none';
    } else {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        errorEmail.style.display = 'block';
    }

    if(expressions.address.test(address.value)) {
        address.classList.remove("is-invalid");
        address.classList.add("is-valid");
        errorAddress.style.display = 'none';
    } else {
        address.classList.remove("is-valid");
        address.classList.add("is-invalid");
        errorAddress.style.display = 'block';
    }

    if(expressions.lastname.test(lastName.value)) {
        lastName.classList.remove("is-invalid");
        lastName.classList.add("is-valid");
        errorLastName.style.display = 'none';
    } else {
        lastName.classList.remove("is-valid");
        lastName.classList.add("is-invalid");
        errorLastName.style.display = 'block';
    }

    if(expressions.password.test(password.value)) {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        errorPassword.style.display = 'none';
    } else {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        errorPassword.style.display = 'block';
    }

    if(expressions.phone.test(phone.value)) {
        phone.classList.remove("is-invalid");
        phone.classList.add("is-valid");
        errorPhone.style.display = 'none';
    } else {
        phone.classList.remove("is-valid");
        phone.classList.add("is-invalid");
        errorPhone.style.display = 'block';
    }
}