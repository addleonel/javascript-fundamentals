// Rest Operator in ECMAScript 6
// =============================

/*
 * more info:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 *
 * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
 */

// Example in a function declaration
function reduceValues(...args){
	return args.reduce((firstArg, secondArg)=> firstArg*secondArg);
}


/* - A function can have only one ...restParam
* - The rest parameter must be the last parameter in the function 
*/

const multiplyBy = (multiplier, ...items) =>{
	return items.map(item => item*multiplier);
}

const divideBy = (divisor, multiplier, ...number) =>{
	if (divisor == 0){
		throw "Not divide By zero";
	}

	return number.map(item => item*multiplier/divisor);
}

/* Rest operator in destructuring
* - The declaration can have only one rest operator
* - Rest element must be last element
*
* Example in an array destructuring:
*/

let [a, b, c, ...rest] = [1, 2, 3, 4, 5, 7, 8];
// Example in an object destructuring:

let {name, age, ...otherData} = {name: "Leonel", age: 22, city: "Huánuco", country: "Peru"};


// We can input indefinite number of arguments as an array.
console.log(reduceValues(4, 3, 5, 6, 1, 6, 7));  // 15120
console.log(reduceValues(2, 3, 4));  // 24

console.log(multiplyBy(3, 2, 3, 4, 5, 5));  // [6, 9, 12, 15, 15]
console.log(divideBy(5, 3, 3, 4, 5, 6));  // [1.8, 2.4, 3, 3.6] 

console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3
console.log(rest); // [4, 5, 7, 8]

console.log(otherData);  // {city: 'Huánuco', country: 'Peru'}


