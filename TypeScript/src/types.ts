// More info: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// PRIMITIVES 
// number, string, boolean

let myName: string = 'Leonel';
let age: number = 22;
let programmer: boolean = true;
let message: string = `${myName}-${age}-${programmer}`; 
console.log(message);


// ARRAYS

// first syntax notation
let coordinate: number[] = [23.34, 128.78];
let myWords: string[] = ['Awesome', 'Better', 'Ellegant'];
let twoDimension: number[][] = [
    [1, 0, 0, 0],
    [0, 1, 0, 0], 
    [0, 0, 1, 0],
    [0, 0, 0, 1],
]

// second syntax notation
let myNumbers: Array<number> = [6, 1, 61];
let letters: Array<string> = ['a', 'b', 'c'];
let myMatrix: Array<Array<number>> = [    
    [1, 0, 0, 0],
    [0, 1, 0, 0], 
    [0, 0, 1, 0],
    [0, 0, 0, 1],
]

// ANY
let anyValue: any = "Any String";  // string
anyValue = 23;  // number
anyValue = {};  // object
anyValue = false;  // boolean
anyValue = [87, 45];  // array

console.log(anyValue);

// FUNCTIONS

// Parameter and return type annotations
function palindrome(word: string): boolean {
    return word == word.split('').reverse().join('');
}

// Object parameter with optional property
function concatData(data: { username: string, email: string, apply?: boolean}): string {
    return `username: ${data.username}\n        
            email: ${data.email}\n
            apply: ${data.apply}
    `;
}
console.log(concatData({username: 'addleonel', email: 'eg@eg.com'}));

// Anonymous functions
let names = ['Charlotte', 'Albert', 'Marie'];

names.forEach((name_) => {
    name_.toUpperCase();
});

console.log(names);

// UNION TYPES

let manyTypeVariable: number | string | boolean = 23;
manyTypeVariable = '23';
manyTypeVariable = true;
console.log(manyTypeVariable);

// union type in a function
function getUserId(id: string | number): void {
    let msg: number | string = (typeof id === "string") ? id.toUpperCase() : id;
    console.log(msg);
}

getUserId("120");
getUserId(132);

// TUPLE 
// To create an tuple is necesary create a custom type with types in an array
type formFields = [number, string, string, boolean];
let userFormFields: formFields = [2, 'Thomas', 'Edison', true];