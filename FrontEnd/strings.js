// STRING

// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// String primitive
let message = "This is a simple message";

// String object
let message_object = new String("I'm string object");

// Log types
console.log(typeof message);  // "string"
console.log(typeof message_object);  // "object"
console.log(typeof message_object.valueOf());  // "string"

// Using eval(), eval() is a function of the global object 
let string_primitive = "2 + 2";
let string_object = new String("2 + 2");

console.log(eval(string_primitive));  // 4
console.log(eval(string_object));  // [string: '2 + 2']
console.log(eval(string_object.valueOf())); // 4

// Length of a string
console.log(message.length);  // 24

// Get a char with index
console.log(message[3]);

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

// Find a string in a string
console.log(message.indexOf("is"));  // 2, return -1 if there isn't

// Accept a second parameter as the starting position for the search
console.log(message.indexOf("is", 3));  // 5, return -1 if there isn't 

// Find the position of the last occurrence of a specified text
console.log(message.lastIndexOf("s"));  // 20, return -1 if there isn't

// Accept a second parameter as the starting position for the search
console.log(message.lastIndexOf("s", 5));  // 3, return -1 if there isn't 

// Search a string for a specified value and return the first occurrences
console.log(message.search("simple"));  // 10, return -1 if there isn't

// slice(start, end) extracts a part of a string and returns the extracted part in a new string.
console.log(message.slice(5, 17));  // return "is a simple"

// split() method, divides a string into an ordered list of substrings
console.log(message.split(" ")); // ["This", "is", "a", "simple", "message"]
console.log(message.split(" ", 2)); // ["This", "is"]
