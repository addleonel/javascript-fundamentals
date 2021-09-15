
export function getTimeZone() {
    const timezone = new Date();
    return `${timezone.toLocaleTimeString()}` 
}

export function getDateZone() {
    const timezone = new Date();
    return `${timezone.toLocaleDateString()}`;
}


/*
    IP Geolocation Services
    > Paid 
        - https://ipregistry.co/
        - https://www.maxmind.com/en/home
        - https://ip2location.com/
    > Free
        - https://about.ip2c.org/#about

    Reference XMLHttpRequest
    - https://stackoverflow.com/questions/3038901/how-to-get-the-response-of-xmlhttprequest
    - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send

*/


export function getGeolocation() {
    const locationRequest = new XMLHttpRequest();
    locationRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }else {
            console.error("Your request has not got successfully.");
        }
    }
    
    locationRequest.open('GET', 'https://ip2c.org/s', true);
    locationRequest.send(null);
}