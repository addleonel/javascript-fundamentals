// Arrow functions

const square = (x => x*x);
console.log(square(12));  // output 144

const num = (x) => x*x;
console.log(num(5)); // output: 25

const sqrtPlusOne = x => x*x+1;
console.log(sqrtPlusOne(20));  // output: 401

const isInteger = x => Number.isInteger(x) && x > 30;
console.log(isInteger(34));  // output: true
