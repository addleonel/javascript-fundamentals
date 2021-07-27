let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
	return new Promise((resolve, reject) => {

		const xhttp = new XMLHttpRequest();
		// open url api
		xhttp.open('GET', url_api, true);  // true because is asynchronous
		xhttp.onreadystatechange = (() => {
			if (xhttp.readyState === 4) {	
				(xhttp.status === 200)
					? resolve(JSON.parse(xhttp.responseText))
					: reject(new Error(`${url_api}, Status: ${xhttp.status}`))
			}
		});
		xhttp.send();  // send the response
	});
}

module.exports = fetchData;