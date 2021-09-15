
import { getTimeZone, getDateZone, getGeolocation } from './assets/js/locationAndTime.js';
import Regres from './assets/js/ApiRequest.js';

// Weather section
document.getElementById("weatherButton").addEventListener("click", function (event) {
    event.preventDefault();
    let weatherContent = document.getElementById("weatherContentId")

    weatherContent.innerHTML = `
        ${getTimeZone()} \n
        ${getDateZone()}
    `;

});

// Api Section
let request = new Regres("https://reqres.in/api/users");
// Get user 1
request.get();

// create new user
document.getElementById("createUserButton").addEventListener("click", function (e) {
    e.preventDefault();
    let request = new Regres("https://reqres.in/api/users");
    request.post({
        name: "Leonel",
        job: "Software Enginer"
    });
});

// update user
document.getElementById("updateUserButton").addEventListener("click", function (e) {
    e.preventDefault();
    let request = new Regres("https://reqres.in/api/users");
    request.put("2", {
        name: "Leonel",
        job: "Software Enginer"
    });
});