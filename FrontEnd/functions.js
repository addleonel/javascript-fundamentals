// usage of functions

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