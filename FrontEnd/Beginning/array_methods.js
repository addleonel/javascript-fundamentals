// ARRAY METHODS

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// toString method
let myArrayToString = myArray.toString();  // returns a string
console.log(`myArrayToString=${myArrayToString}, type=${typeof myArrayToString}`);

// join method
console.log(myArray.join("-")); // returns a string with a separator

// pop method: Removes the last item from an array
let myPoppedValue = myArray.pop();  // returns the value that was popped out '9'
console.log(`myPoppedValue=${myPoppedValue}, myArray=${myArray}`);

// push method: Adds a new item at the end
let lengthOfNewArray = myArray.push(10); // returns new length from the new array
console.log(`lengthOfNewArray=${lengthOfNewArray}, myArray=${myArray}`);

// shift method: Removes the first items from an array
let myFirstValue = myArray.shift();  // returns the value that was shifted out '1'
console.log(`myFirstValue=${myFirstValue}, myArray=${myArray}`);

// unshift method: Adds a new item at the beginning
let lengthOfMyNewArray = myArray.unshift(23);  // returns new length from the new array
console.log(`lengthOfMyNewArray=${lengthOfNewArray}, myArray=${myArray}`);

// splice method: Adds new items to an array
// splice(<index>, <removed_items>, <new_items> ...)
let removedValues = myArray.splice(1, 3, 51, 34, 56, 76); // returns removed items
console.log(`removedValues=${removedValues}, myArray=${myArray}`);

// concat method: creates new array by merging existing arrays
// .concat(arr1, arr2, arr3, ...) or
// .concat(val1, val2, val3, ...)
let myArray2 = [101, 102, 103, 104];
let concatenatedArray = myArray.concat(myArray2);
console.log(`myArray=${myArray}, myArray2=${myArray2}, concatenatedArray=${concatenatedArray}`);

// slice method: slices out a piece of an array into a new array.
// .slice(<from>, <to>)
let slicedArray = myArray.slice(3, 6);
console.log(`slicedArray=${slicedArray}, myArray=${myArray}`);

// sorted method: Sorts an array alphabetically
myArray.sort();
console.log(`myArray=${myArray}`);
// using compare function
myArray.sort((a, b)=> a-b);  // sorts an array numerically
console.log(`myArray=${myArray}`);

// reverse method: reverses the items in an array
myArray.reverse();
console.log(`myArray=${myArray}`);
