let email = document.getElementById('inputEmail');
let password = document.getElementById('inputPassword');
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let inputAddress = document.getElementById('inputAddress');
let sw = document.getElementById('customSwitch1');
let plate = document.getElementById('plate');
let carColor = document.getElementById('carColor');
let seats = document.getElementById('seats');

function watchToggle() {
    let carFormE = document.getElementsByClassName('carForm');
    sw.addEventListener('change', e => {
        console.log(sw.value);
        if (sw.checked)
            carFormE[0].style.display = 'initial';
        else
            carFormE[0].style.display = 'none';
    });
}

function watchForm() {
    let form = document.getElementById('signUpForm');
    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });
}

function validateInputs(){
    let valid = email.value.search('@itesm.mx');
    if (valid < 0) {
        email.style.borderColor = 'red';
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'initial';
    }
    else {
        email.style.borderColor = '#ced4da';
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'none';
    }
}
function init() {
    watchForm();
    watchToggle();
}

init();