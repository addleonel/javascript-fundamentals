// COERCION

// IMPLICIT COERCION
let variable1 = 2 + "4";  // string
let variable2 = 2 + 3 + 4 + "8";  // string
let variable3 = "2" + 3 + 4;  // string
let variable4 = true + 2;  // number
let variable5 = 4 - false;  // number
let variable6 = 3*"12";  // number 

console.log(variable1);  // "24"
console.log(variable2);  // "98"
console.log(variable3);  // "234"
console.log(variable4);  // 3
console.log(variable5);  // 3
console.log(variable6);  // 36

// EXPLICIT COERCION

let myNumber = 23;  // number
console.log(myNumber, typeof myNumber);  // 23 number

let myStringNumber = String(myNumber);  // string
console.log(myStringNumber, typeof myStringNumber);  // "23" string

let myNumberAgain = Number(myStringNumber);  // number
console.log(myNumberAgain, typeof myNumberAgain);  // 23 number


