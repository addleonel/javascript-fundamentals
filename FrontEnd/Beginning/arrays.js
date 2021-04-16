// USAGE OF ARRAYS


//  Usage on left     |   Usage on right
// ======================================
//  unshift() to add  |   push() to add
//  shift() to remove |   pop() to remove

// Create an array
let fruits = ['Apple', 'Banana']

console.log(fruits.length)


// EXAMPLE WITH ARRAY

// EXAMPLE 1
// This Variable returns the sum of all elements from an array
const sumOfElements = (arr) =>{
    let sumTotal = [];
    let subSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            subSum += arr[i][j];
        }
        sumTotal.push(subSum);
        subSum = 0;
    }

    return sumTotal;
}
matrix = [
    [4, 3, 6],
    [4, 5, 6], 
    [2, 3, 4],
]

console.log(sumOfElements(matrix));


// EXAMPLE 2
// This variable returns even numbers from an array of numbers
const evenNumbers = (arr) =>{
    let listEvenNumbers = [];
    for(let i = 0; i< arr.length; i++){
        if (arr[i] % 2== 0){
            listEvenNumbers.push(arr[i]);
        }
    }
    return listEvenNumbers;
}

let myNumbers = [34, 65, 23, 11, 33, 22, 66, 87, 98];
console.log(evenNumbers(myNumbers));


// EXAMPLE 3
// This variable reverses an array
let anyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reverse = (arr) =>{
    let arrayReversed = []
    for(let i = 0; i< arr.length; i++){
        arrayReversed.unshift(arr[i]);
    }
    return arrayReversed;
}
console.log(anyNumbers);
console.log(reverse(anyNumbers));
