// DIFFERENCE BETWEEN let, const, AND var

// - Recommendation of usage
//      const > let > var

// - History

//        var               let, const
// ________|____________________|_________
//        1995             ECMAScript 2015
//                              or 
//                             ES6

//                |     var      |    let     |       const
// ===============|==============|============|===============
//  Compatibility |    check     | compatible |  compatible
//                |              | with Babel |  with Babel
// ===========================================================
//  Scope         |    Function  |   Block    |    Block
//                |     Scope    |   scope    |    scope
// ===========================================================
//  Reassignment  |     check    |   check    |    not reassign,
//                |              |            |    but is mutable


// let
function changeName(name){
    // this variable is into function scope
    let newName = "";
    for(let i = name.length -1 ; i >= 0; i--){
        // let i variable in into for loop scope
        newName += name[i];
    }
    return newName;
}

console.log(changeName("Tom")); 
console.log(changeName("Thomas"));



// const 
function sumElementOfArray(arr){
    const numberList = []; // this is a constant but is not immutable in arrays or objects
    const increment = 3;  // this is a constant, doesn't change
    let i = arr.length-1; // let i can be changed
    while(i>=0){
        numberList.push(arr[i] + increment);
        i--;
    }
    return numberList;
}

console.log(sumElementOfArray([2, 3, 4, 5]));



// var
function substractElement(arr){
    var newArray = [];
    var decrement = 5;
    for (var i = 0; i < arr.length; i++){
        var intoTheLoop = "hello I'm here";
        newArray.push(arr[i]-decrement);
    }
    console.log(intoTheLoop); // 'intoTheLoop' can be accessed any time and place
    // into this function after the declaration
    console.log("i = ", i); // As 'var' has a function scope 'i' keep having a value
    return newArray;
}

console.log(substractElement([10, 13, 24]));