
class Regres {

    constructor (URL) {
        this.URL = URL;
    }

    get(data=null) {
        const request = new XMLHttpRequest();

        request.open("GET", this.URL, true);
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                console.log(JSON.parse(request.responseText));
            }
        }
        request.send(data);
    }

    post(data) {
        const request = new XMLHttpRequest();
        request.open("POST", this.URL, true);
        request.setRequestHeader("Content-Type", "aplication/json");
        request.onload = function () {
            console.log(JSON.parse(request.responseText));
        }
        request.send(JSON.stringify(data));
    } 

    put(id, data) {
        const request = new XMLHttpRequest();
        request.open("PUT", `${this.URL}/${id}`, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onload = function () {
            console.log(JSON.parse(request.responseText));
        }
        request.send(JSON.stringify(data));
    }
}


export default Regres;