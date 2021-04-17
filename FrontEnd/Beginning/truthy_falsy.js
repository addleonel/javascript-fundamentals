// TRUTHY AND FALSY

// TRUTHY
// More info: https://developer.mozilla.org/es/docs/Glossary/Truthy

console.log(Boolean(false));  //false
console.log(Boolean());  // false
console.log(Boolean(0));  // false
console.log(Boolean(null));  //  false
console.log(Boolean(NaN));  // false.  NaN means Not a Number
console.log(Boolean(undefined));  // false
console.log(Boolean(""));  // false

// FALSY
// More info: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

console.log(Boolean(true));  // true
console.log(Boolean(1));  // true, and true to other number different to zero
console.log(Boolean(" "));  // true to a space or another characters
console.log(Boolean("a"));  // true
console.log(Boolean([]));  // true. Don’t matter if the array is  empty
console.log(Boolean({}));  // true. Don’t matter if the object is empty
console.log(Boolean(function(){}));  // true

