const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    //Using Contraint API
    isValid = form.checkValidity();
    //Style main message for an error
    if (!isValid){
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if password match
    if (password1El.value === password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'blue';
        password2El.style.borderColor = 'blue';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // if form valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'blue';
        messageContainer.style.borderColor = 'blue';
    }
}

function storeFormData(){
    const user = {
        name: form.name.value,
        name: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.name.value
    };
    //Do something with user data
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit Data is Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}
// Event Listener
form.addEventListener('submit', processFormData);