// Variables in ECMAScript 6
// =========================

// There are three way to declare a variable
// var, let, const


var foo = "foo";  // function scope, global right now
let bar = "bar";  // block scope, global right now
const baz = "baz";   // block scope, global right now, and it's immutable

function varTest(){
    var varName = "Someone";
    for(var i=0; i<6; i++){
        var varName = "Leonel";
        console.log(varName);  // Leonel
        console.log(i);  // 0 1 2 3 4 5
    }
    
    console.log(varName);  // Leonel
    console.log(i);  // 6
}
// console.log(varName);  Error: varNmae is not defined 

function letTest(){
    let letName = "Someone";
    for(let i=0; i<6; i++){
        let letName = "Leonel";
        console.log(letName);  // Leonel
        console.log(i);  // 0 1 2 3 4 5
    }
    console.log(letName);  // Someone
    // console.log(i); ReferenceError: i is not defined
}

// call functions

console.log("var");
varTest();
console.log("let");
letTest();
