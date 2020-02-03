/*
Aqui se crea el objeto de ride.
   Objeto ride {
        status: {type: string} //si el usuario es el dueño del carro 'sharing' si no 'riding'
        seatsAvailable: {type: Integer},
        riders: {type: arrString},
        date: {type :date},
        time: {type : time},
        depart: {type: location/string},
        arrive: {type: location/string},
        radius : {type: Integer}
    }
 */
let newRide = {};

function watchForm(user) {
    let depart = document.getElementById('from').value;
    let arrive = document.getElementById('to').value;
    document.getElementById('formShare').addEventListener('submit', e => {
        newRide = {
            status:'sharing', //si el usuario es el dueño del carro 'sharing' si no 'riding'
            seatsAvailable: document.getElementById('seats').value,
            riders: [/* ID del usuario actual*/],  
            /////////////AGERGAR EL PARAMETRO DE ID del usuario actual/////////////////
            date: document.getElementById('dateSel').value,
            time: document.getElementById('timeSel').value,
            depart: user.address[depart],
            arrive: user.address[arrive],
            radius: document.getElementById('radius').value
        }
        /*
         Hacer un POST del ride a la collection de rides...
         y Hacer un PUT/(push) de la ID que regrese al arreglo de 'rides' dentro del usuario
         */
    });
}

function init() {
    watchForm(user);
}