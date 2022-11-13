/*
 * We can use genercis with interface, functions, methods, and classes 
*/

function getArray(items: Array<any>): Array<any> {
    return new Array().concat(items);
}

console.log(getArray(['hello', 1, 2, 3]));

/* 
* If you need to get an array with only numbers or only strings
* acording to the type of the arguments. For this we use generics
*   function getArray<T>(items: T[]): T[] {}
* where T could be any name, but in this case is called "T"
*
* This could represent types such as number, string, ans so on:
*   
*   function getArray<number>(items: number[]): number[] {}
*   when the function is called we can force the type
*   getArray<number>([1, 2, 3, 4])
*     
*   function getArray<string>(items: string[]): string[] {}
*   getArray<string>(['a', 'b', 'c']) 
*/

function getArrayGenerics<T>(items: Array<T>): Array<T> {
    return new Array().concat(items);
}

// This works but we could be stric with types
const numbersArray = getArrayGenerics([2, 3, 4, '23']);
console.log(numbersArray);

const stringArray = getArrayGenerics<string>(['h', 'e']); // This means only string
console.log(stringArray);

// We can use many types as T, U, and so on
function indentity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
}

indentity<number, string>(1, 'me');
indentity<string, number>('you', 2);

// using a generic interface (is like a contract with annex collections or mold)
// in an object
interface Identity<T, U> {
    value: T;
    message: U;
}

const indentityOne: Identity<number, string> = {
    value: 1,
    message: 'hi',
}

const indentityTwo: Identity<string, number> = {
    value: 'hello',
    message: 123,
}

