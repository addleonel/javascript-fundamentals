// USAGE OF FUNCTIONS

// DECLARATIVE FUNCTION

console.log(multiply(2, 4)); // This logs 8
function multiply(x, y){
	return x*y;
}
console.log(multiply(3, 4))


//If the function was invoked from a statement,
//JavaScript will "return" to execute the code after the invoking statement.
let result = addition(20, 3);
console.log(result);

function addition(x, y){
	return x + y;
}

// A function with local variables
function sumOfItems(arr){
	let totalSum = 0; // This is a local variable
	for(let i=0;i<arr.length; i++){
		totalSum += arr[i];
	}
	return totalSum;
}

console.log(sumOfItems([4, 6, 2, 3]))

// FUNCTION EXPRESSION OR ANONYMOUS FUNCTION

// console.log(subtraction(45, 23)); This logs an error
const subtraction = function(x, y){
	return `The result is: ${x - y}`;
}
console.log(subtraction(30, 23));

// DIFFRENCE BETWEEN 
// Declarative functions are hoisting, and the function expression is not. Since hoisting only applies to var and function keywords.
// This means that with declarative functions, we can call the function before it is declared,
// and with the function expression, no, we would have to declare it first, and then call it.
