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
