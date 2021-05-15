// Map in ECMAScript 6 
// ====================

/*
 * more info: The Map object holds key-value pairs and remembers 
 * - the original insertion order of the keys. Any value 
 *   (both objects and primitive values) may be used 
 *   as either a key or a value.
 * - A Map object can be used to hold key/value pairs. 
 * - A key or value in a map can be anything (objects and primitive values).
 * - The syntax new Map([iterable]) creates a Map object where iterable
 *   is an array or any other iterable object whose elements are arrays 
 *   (with a key/value pair each).
 *
 * */

// Create a map

let map1 = new Map([["key1", "value1"], ["key2", "value2"]]);

console.log(map1);  // Map { 'key1' => 'value1', 'key2' => 'value2' } 
console.log(typeof map1);  // object

// call 'size' property
console.log(map1.size);  // 2

let myIter = [["k1", "v1"], ["k2", "v2"], ["k3", "v3"]];
let map2 = new Map(myIter);

console.log(map2.size);  // 3


