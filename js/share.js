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

function watchForm( user) {
    let depart = document.getElementById('from').value;
    let arrive = document.getElementById('to').value;
    document.getElementById('formShare').addEventListener('submit', e => {
        newRide = {
            status:'sharing', //si el usuario es el dueño del carro 'sharing' si no 'riding'
            seatsAvailable: document.getElementById('seats').value,
            riders: [],
            date: document.getElementById('dateSel').value,
            time: document.getElementById('timeSel').value,
            depart: user.address[depart],
            arrive: user.address[arrive],
            radius: document.getElementById('radius').value
        }
        /*
         * Pasar el nuevo Viaje al arreglo de 'rides' dentro del usuario
         user.rides.push(newRide);
         */
    });
}

function init() {
    watchForm(user);
}