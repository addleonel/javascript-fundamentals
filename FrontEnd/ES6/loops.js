// Loops in ECMAScript 6
// =====================


// for normal
const forNormal = ()=>{
    for(let i=1; i<6; i++){
        console.log(i);  // 0 1 2 3 4 5
    }
}

// for/in
// is intended for iterating over the enumerable keys of an object.

const forIn = ()=>{
    let object = {a:1, b:2, c:3, d:4};
    let logResult = "";
    for(let item in object){
        logResult += item + " "  // the iterating variable is a string
    }
    console.log(logResult);  // a b c d
}  

// for/of
// creates a loop iterating over iterable objects (arrays, string, etc).
const forOf = () => {
    let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    let logResult = "";
    for(let number of primeNumbers){
        logResult += number + " ";  // the iterating variable is a number (in this case)
    }
    console.log(logResult);  // 2 3 5 7 11 17 19 23 29 31
}

forNormal();
forIn();
forOf();
