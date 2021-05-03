// Spread Operator
// ===============

/*
 * More info:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * Spread syntax (...) allows an iterable such as an array expression or string to be expanded
 * in places where zero or more arguments (for function calls) or elements (for array literals) 
 * are expected, or an object expression to be expanded in places where zero or more 
 * key-value pairs (for object literals) are expected.
 * */

/* Some Features:
 *   - Spread operator can be used to clone arrays and objects.
 *   - create new array/object from array/objects that already exist. 
 *   - pass all elements of iterableObj as arguments to function myFunction.
 *     myFunction(...iterableObj);
 *   - combine two arrays by inserting all elements from iterableObj.
 *     [...iterableObj, '4', 'five', 6];
 *   - pass all key:value pairs from an object.
 *     let objClone = { ...obj };
 **/


// Example in a function declaration
function sum(a, b, c){
	return a + b + c;
}

let inputNumbers = [34, 12, 34];

console.log(sum(...inputNumbers));  // 80

// Clone array
let originalArrayA = [1, 2, 3, 4, 5];
let originalArrayB = originalArrayA;

let cloneArray = [...originalArrayA];

console.log(originalArrayA === originalArrayB);  // true, because they are in the same pointer
console.log(originalArrayA === cloneArray);  // false, because cloneArray is other object

// clone object
let vector1 = {x: 12, y: 23};
let vector2 = vector1;

let vector3 = {...vector1};

console.log(vector1 === vector2);  // true
console.log(vector1 === vector3);  // false

// create new array from array

let array1 = [1, 1, 2, 3, 5];
let array2 = [8, 13, 21, 34, 55];

let fibo = [...array1, ...array2];

console.log(fibo);  // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// create new object from objects

let data1 = {name: "Leonel", age:22};
let data2 = {city: "Huanuco", country: "Peru"};

let fullData = {...data1, ...data2};


console.log(fullData);  // {name: "Leonel", age:22, city: "Huanuco", country:"Peru"}

