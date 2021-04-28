
// Functions in ECMAScript 6
// =========================

let es6Function = {};

// normal function (function declaration)

function greating(){
    return "Good Morning";
}

// arrow function (function expression)

const printMessage = msg => "Hi " + msg;

const printNewMessage = () => "Good Evening";

// functions with default parameters;

const addingNumber = (a, b=23, c=34) => {
    return a + b + c;
}


console.log(greating());  // Good Morning
console.log(printMessage("everyone, I'm here!"));  // Hi everyone, I'm here!
console.log(printNewMessage());  // Good Evening
console.log(addingNumber(20));  // 77
