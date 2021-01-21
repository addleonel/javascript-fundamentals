// STRING

let message = "This is a simple message";

// length of a string
console.log(message.length);  // 24

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

// slice(strat, end) extracts a part of a string and returns the extracted part in a new string.
console.log(message.slice(5, 17));  // return "is a simple"
