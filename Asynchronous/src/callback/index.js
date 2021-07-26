
/*
 * HIGHER-ORDER FUNCTION: Una función que recibe otra función como parámetro.
 * CALLBACK: en este caso sería la función que es pasada como parámetro, mas no la función que lo recibe.
*/


// This is a callback
function sum(num1, num2){
	return num1 + num2;
}

// This is a higher-order function
function calculate(num1, num2, callback){
	return callback(num1, num2);
}

console.log(calculate(45, 23, sum));  // 68
