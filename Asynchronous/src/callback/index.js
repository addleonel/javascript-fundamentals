
/*
 * HIGHER-ORDER FUNCTION: Una función que recibe otra función como parámetro.
 * CALLBACK: en este caso sería la función que es pasada como parámetro, mas no la función que lo recibe.
*/


// EXAMPLE 1:

// This is a callback
function sum(num1, num2){
	return num1 + num2;
}

// This is a higher-order function
function calculate(num1, num2, callback){
	return callback(num1, num2);
}

console.log(calculate(45, 23, sum));  // 68

// EXAMPLE 2:

// Higher-order function
function date(callback){
	const dateNow1 = new Date();
	console.log("First print: ");
	setTimeout(()=>{
		callback(dateNow1);
	}, 3000);

	const dateNow2 = new Date();
	console.log(`Second print: ${dateNow2}`)
}

// Callback
function printDate(dateNow){
	console.log("Callback print:", dateNow);
}

date(printDate);