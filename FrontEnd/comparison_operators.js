// Comparison Operators
// Are used in logical statements to determine equality or difference between
// variables or values

number = 20;

// Using '==' (equal to)
console.log(number == 20);  // output: true
console.log(number == "20");  // output: true
console.log(number == 20.0);  // output: true
console.log(number == 30);  // output: false

// Using '!=' (equal to)
console.log(number != "20");  // output: false
console.log(number != 45);  // output: true
console.log(number != 20.0);  // output: false

// Using '===' (equal to and equal type)
console.log(number === 20);  // output: true
console.log(number === "20");  // output: false
console.log(number === 20.0);  // output: true
console.log(number === 30);  // output: false

// Using '!==' (not equal to and not equal type)
console.log(number !== "20");  // output: true
console.log(number !== 20.0);  // output: false
console.log(number !== 76);  // output: true

// Using '>' (greater than)
console.log(number > 10);  // output: true
console.log(number > 40);  // output: false

// Using '<' (less than)
console.log(number < 40);  // output: true
console.log(number < 10);  // output: false

// Using '>=' (greater than or equal to)
console.log(number >= 20);  // output: true
console.log(number >= 73);  // output: false

// Using '<=' (less than or equal to)
console.log(number <= 20);  // output: true
console.log(number <= 13);  // output: false

// Logical Operators 
value1 = 12;
value2 = 9;

// && (and)
console.log(value1 < 10 && value2 >= 0);  // output: false
//          ->   false   &&  true  
//          ->     0    and   1
//          ->           0 
//          ->         false

// || (or)
console.log(value1 >= 0 || value2 >= 0);  // output: true
//          ->   true   &&  true  
//          ->     1    or   1
//          ->          1 
//          ->         true

// ! (not)
console.log(!(value1 >= 10));  // output: false
//          -> !(true)
//          -> not true
//          ->  false   


// Comparing Different Types
console.log(3.5 < 4);  // output: true
console.log(3.5 < "5");  // output: true
console.log(4 > "foo");  // output: false
console.log(4 < "bar");  // output: false 
console.log(4 == "faz");  // output: false
console.log("3" > "27");  // output: true
console.log("3" < "27");  // output: false
console.log("3" == "27");  // output: false
