let login = document.getElementById('login');
let user = document.getElementById('defaultForm-email');
let password = document.getElementById('defaultForm-pass');


function watchLogin() {
    console.log(login);
    login.addEventListener('click', e => {
        if (valido())
            location.replace('./myRide.html');
    });
}

/* Auth steps */
function valido() {
    Auth = { user: user, password: password };
    return true;
}
watchLogin();