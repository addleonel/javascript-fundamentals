// Flat Method 

let myArray = [1, 2, [3, 4, [45, 65]]];

console.log(myArray.flat(0));  // [1, 2, [3, 4, [45, 65]]] 
console.log(myArray.flat(1));  // [1, 2, 3, 4, [45, 65]]
console.log(myArray.flat(2));  // [1, 2, 3, 4, 45, 65]

// Flat Map Method

let myArray2 = [2, 3, 7, 12]

console.log(myArray2.flatMap((number) => [number, number*2]));
// The output is [2, 4, 14, 12, 24]