// Arrow functions
// Arrow functions were introduced in ES6
// Arrow function allow us to write shorter function syntax:

// Without arrow syntax
const message = function(){
	return "TENET";
}
console.log(message());

const messageWithParameter = function(message){
	return message;
}
console.log(messageWithParameter("I've already seen TENET."));


//With arrow syntax
const message2 = () => "TENET";
console.log(message2());

const messageWithParameter2 = (message) => message + ".";
console.log(messageWithParameter2("I've already seen TENET"))


// Returns with arrow function
const square = (x => x*x);
console.log(square(12));  // output 144

const num = (x) => x*x;
console.log(num(5)); // output: 25

const sqrtPlusOne = x => x*x+1;
console.log(sqrtPlusOne(20));  // output: 401

const isInteger = x => Number.isInteger(x) && x > 30;
console.log(isInteger(34));  // output: true


// Using higher order arrow function
// Using map function
const squareNumber = (arr) =>{
	const numbers = arr.map(x => x*x)
	return numbers;
}

console.log(squareNumber([4, 6, 7, 2, 5]));

// Using filter function
const evenNumbers = (arr) =>{
	const numbers = arr.filter(x => x%2===0);
	return numbers; 
}

console.log(evenNumbers([3, 5, 2, 6, 1, 8]));

// Using filter and map functions

const oddSquareNumbers = (arr) =>{
	const numbers = arr.filter(x => x%2 !==0 && x > 2).map(x => x*x);
	return numbers;
}

console.log(oddSquareNumbers([1, 3, 4, 2, 7, 11]));