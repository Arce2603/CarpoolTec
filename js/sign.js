let email = document.getElementById('inputEmail');
let password = document.getElementById('inputPassword');
let name = document.getElementById('name');
let cellphone = document.getElementById('cellphone');
let inputAddress = document.getElementsByClassName('inputAddress');
let sw = document.getElementById('customSwitch1');
let plate = document.getElementById('plate');
let carColor = document.getElementById('carColor');
let seats = document.getElementById('seats');
let extraAdd = document.getElementById('plus');
let adrGroup = document.getElementsByClassName('adrGroup');
let count = 0;
let car = false;
let addresses = [];

let User = {};

function watchButton() {
    extraAdd.addEventListener('click', e =>{
        adrGroup[0].innerHTML += `
<label for="inputExtAddress">Extra address</label>
<input type="text" class="form-control inputExtAddress" placeholder = "1234 Main St">`
        count++;
        console.log(adrGroup);
    });
}

function watchToggle() {
    let carFormE = document.getElementsByClassName('carForm');
    sw.addEventListener('change', e => {
        console.log(sw.value);
        if (sw.checked) {
            carFormE[0].style.display = 'initial';
            car = true;
        }
        else {
            carFormE[0].style.display = 'none';
            car = false;
        }
    });
}

function watchForm() {
    let form = document.getElementById('signUpForm');
    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
        let addressArr = adrGroup[0].getElementsByTagName('input');
        for (let i = 0; i < addressArr.length; i++) {
            addresses.push(addressArr[i].value);
        }
    });
}

//checa los inputs. si son validos cosntruye el objeto
function validateInputs(){
    let valid = email.value.search('@itesm.mx');
    if (valid < 0) {
        email.style.borderColor = 'red';
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'initial';
    }
    else {
        email.style.borderColor = '#ced4da';
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'none';
        sendObject();
    }
}

//objeto a enviar
function sendObject() {
    User = {
        name: name.value,
        cellphone: cellphone.value,
        email: email.value,
        password: password.value,
        address: addresses,
        car: car,
        plate: car ? plate.value: undefined,
        carColor: car ? carColor.value:undefined,
        seats: car? seats.value:undefined,
    }
    console.log(User);
}

function init() {
    watchForm();
    watchToggle();
    watchButton();
}

init();