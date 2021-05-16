// Set in ECMAScript 6
// ===================

/* more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * - A Set object can be used to hold unique values (no repetitions are allowed).
 * - A value in a set can be anything (objects and primitive values).
 * - Syntax new Set(iterable)
 * */

// Create a Set
let mySet = new Set([1, 2, 3, 4, 5, 6, 6, 6]);

console.log(mySet);  // Set {1, 2, 3, 4, 5, 6}

// 'size' property
console.log(mySet.size);  // 6

/* 
 * Set methods
 * ===========
 * add, clear, delete, has, values
 * */

let set = new Set();

// add(value) method
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

console.log(set);  // Set { 1, 2, 3, 4, 5 }

// delete(value) method
console.log(set.delete(5));  // true, and delete
console.log(set);  // Set { 1, 2, 3, 4 }

// has(value) method
console.log(set.has(3));  // true
console.log(set.has(5));  // false

// values() method
console.log(set.values());  // [Set Iterator] { 1, 2, 3, 4 }
for(let value of set.values()){
	console.log(`-> ${value}`);
}

// forEach() method
mySet.forEach((value)=>{
	console.log(typeof value, value);
});

// clear() method
mySet.clear();
console.log(mySet);  // Set {}

