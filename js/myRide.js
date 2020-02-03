/*
 * User{
 *      ...
 *      rides: [{ride1}, {ride2}]
 *      ...
 * }
   Objeto ride {
        status: {type: string} //si el usuario es el dueño del carro 'sharing' si no 'riding'
        seatsAvailable: {type: Integer},
        riders: {type: arrString},
        date: {type :date},
        time: {type : time},
        depart: {type: location/string},
        arrive: {type: location/string}
    }
 */
let html_info = '';
let listGroup = document.getElementsByClassName('pending');

//Previamente hacer un GET de de todos los ID's del arreglo de 
function addRides(user) {
    for (let i = 0; i < user.rides.length; i++) {
        extraInfo(user.rides[i].riders);
        listGroup[0].innerHTML += `<div class="card">
                    <div class="card-header" id="heading${i}">
                        <div class="media" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                                <div class="userImg">
                                    <img src="./img/user.png" class="thmbnl" alt="profile-picture">
                                </div>
                                <div class="media-body">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <div class="userName">${user.name}</div>
                                            <div class="ride_share">${user.rides[i].status} </div>
                                            <div class="date">${user.rides[i].date}<span class="time"> ${user.rides[i].time}</span></div>
                                            <div class="departing">Departing from ${user.rides[i].depart}</div>
                                            <div class="arrival">Arriving to ${user.rides[i].arrive}</div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="buttons">
                                                <button class="btn btn-success" id="edBtn${i}"><i class="fas fa-edit"></i></button>
                                                <button class="btn btn-danger" id="delBtn${i}"><i class="fas fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="status"><span class="bold text-center">DRIVER</span></div>
                                    <div class="name"><span class="bold">Name: </span>${user.rides[i].riders[0].name}</div>
                                    <div class="cellphone"><span class="bold">Cellphone: </span>${user.rides[i].riders[0].cellphone}</div>
                                    <div class="email"><span class="bold">Email: </span>${user.rides[i].riders[0].email}</div>
                                </div>
                                ${html_info}
                            </div>
                        </div>
                    </div>
                </div>`
    }
}

function extraInfo(riders) {
    html_info = '';
    for (let x = 1; x < 3; x++) {
        if (riders[x]) {
            html_info += `<div class="col-sm-3">
                                    <div class="status"><span class="bold text-center">RIDER</span></div>
                                    <div class="name"><span class="bold">Name: </span>${riders[x].name}</div>
                                    <div class="cellphone"><span class="bold">Cellphone: </span>${riders[x].cellphone}</div>
                                    <div class="email"><span class="bold">Email: </span>${riders[x].email}</div>
                             </div>`
        }
    }
}

function watchButtons(user) {
    let edit = document.getElementsByClassName('btn-success');
    let del = document.getElementsByClassName('btn-danger');
    edit[0].addEventListener('click', e => {
        console.log(e.target.parentElement.parentElement); console.log(e.target.id);
        let num = e.target.id;
    });
    del[0].addEventListener('click', e => { console.log('d'); console.log(e.target.id); });

}

let ride = [{
    status: "sharing", //si el usuario es el dueño del carro 'sharing' si no 'riding'
    seatsAvailable: 2,
    riders: [{
        name: "Arcelia",
        cellphone: "123456",
        email: "a@t"
    },
        {
            name: "Ana",
            cellphone: "7654",
            email: "a@t"
        }],
    date: "15/03/2020",
    time: "10:00",
    depart: "Aqui",
    arrive: "Alla"
}
];
let User = {
    name: "Arcelia",
    cellphone: "123456",
    email: "a@t",
    password: "asd",
    address: "address",
    car: true,
    plate:"12asd12",
    carColor: "blue",
    seats: 2,
    rides: ride
}

function init() {
    //Hacer un GET del obeto user
    addRides(User);
    watchButtons(User);
}

init();

