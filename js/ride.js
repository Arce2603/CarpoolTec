let lista = document.getElementById('list');
let departure = document.getElementById('from');
let arrive = document.getElementById('to');
let options = [];

/*
    Previamente se requiere
         - Los datos del usuario: direcciones 
 */

function populateList() {
    //lista.innerHTML = '';
    for (let i = 0; i < options.length; i++) {
        lista.innerHTML += `
                <li class="list-group-item list-group-item-action">
                    <div class="media">
                        <div class="userImg">
                            <img src="./img/user.png" class="thmbnl" alt="profile-picture">
                        </div>
                        <div class="media-body">
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="userName">${options.riders[0].name}</div>
                                    <div>Spots left:<span class="spots"> ${options.seatsAvailable} </span></div>
                                    <div>Date: <span class="date"> ${options.date}</span></div>
                                    <div>Departure time: <span class="time"> ${options.time}</span></div>
                                </div>
                                <div class="col-xs-6">
                                    <div class="join">
                                        <button class="btn btn-success joinBtn">JOIN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>`
    }
}

//Se va a tener que hacer una busqueda en toda la collection de RIDES ???
function lookForRides(user) {
    if (arrive.value == 0) {
        //comparar todos los valores de user.address[departure.value] con TODOS los rides  (GET all) a ver cuales si entran en el radio

        //if(entran)
            //options.push(ObjetoRide)
    }
    else
        if (departure.value == 0) {
            //comparar todos los valores de user.address[arrive.value] con TODOS los rides (GET all) a ver cuales si entran en el radio

             //if(entran)
            //options.push(ObjetoRide)
        }

    populateList();
}

function watchSelect(user) {
    //Obtener los datos de este usuario y pasarlo a lookForRides
   arrive.addEventListener('change', e => {
        lookForRides(/*user*/ null);
    });
    departure.addEventListener('change', e => {
        lookForRides(/*user*/ null);
    });
}

function getThisUser() {
    //hacer un fetch de los datos del usuario y pasarlo a las functiones
    watchSelect(/*user*/ null);
}

function init() {
    getThisUser();
}

init();