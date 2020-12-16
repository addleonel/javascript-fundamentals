
// PRIMITIVE DATA
// string, number, boolean, and undefined

// STRINGS
let firstString = "Hi eveyone!";  // With double quotes
let secondString = 'Bye bye';  // With single quotes

let message1 = "let's go";  // Single quotes inside double quotes
let message2 = 'he is "strange"';  // Double quotes inside single quotes


// NUMBERS
let firstNumber = 23;  // Without decimal
let secondNumber = 23.43;  // With decimal

let largeNumber = 349e5;  // 34900000 with scientific notation
let smallerNumber = 349e-5;  // 0.00349 With scientific notation  

// BOOLEANS
let isMale = true;
let isDeveloper = false;
console.log(isMale && isDeveloper);  // Output false
console.log(isMale || isDeveloper);  // Output true

// UNDEFINED
let myvariable;  // Value is undefined, type is undefined
myvariable = undefined;  // Value is undefined, type is undefined
console.log(typeof myvariable);  //Output undefined

// COMPLEX DATA
// function, object

// FUNCTION
function myfunc(){
	return "Mars, here we come!"
};
console.log(typeof myfunc);  // Output function

const sum = (x, y) => x+y;
console.log(typeof sum, sum(23, 34));  // Output function 57


// OBJECT
let mydata = {
	name: 'Leonel',
	age: 21,
}
console.log(typeof mydata);  // Output object

// null is also a object
let nullValue = null;
console.log(typeof nullValue);

// arrays are also objects
let myarray = [23, 2, 71, 73];
console.log(typeof myarray);  // Output object

