// First I need to install XMLHttpRequest object

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
	let xhttp = new XMLHttpRequest();

	// open url api
	xhttp.open('GET', url_api, true);  // true because is asynchronous
	xhttp.onreadystatechange = function (event){
		if(xhttp.readyState === 4){
			if(xhttp.status === 200){
				callback(null, JSON.parse(xhttp.responseText));  // (an error argument, an response argument)

			}else{
				const error = new Error('Error: ' + url_api + ' status: ' + xhttp.status);
				callback(error, null);
			}
		}
	}
	xhttp.send();  // send the response
}


fetchData(API, function(error1, data1){
	if (error1) return console.error(error1);
	console.log('1st callback:', API);
	fetchData(API + data1.results[0].id, function(error2, data2){
		if (error2) return console.error(error2);
		console.log('2nd callback: '+ API + data1.results[0].id);
		fetchData(data2.origin.url, function(error3, data3){
			if (error3) return console.error(error3);
			console.log('3th callback:', data2.origin.url);
			console.log('All result finally:')
			console.log(data1.info.count);
			console.log(data2.name);
			console.log(data3.dimension);
		});
	});
});