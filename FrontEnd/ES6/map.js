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
 * Differences between object and map
 * ==================================
 * An Object is similar to Map but there are important differences 
 * that make using a Map preferable in certain cases:
 * 
 * 1) The keys can be any type including functions, objects, and any primitive.
 * 2) You can get the size of a Map.
 * 3) You can directly iterate over Map.
 * 4) Performance of the Map is better in scenarios involving 
 *    frequent addition and removal of key/value pairs.
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

/*
 * Map Methods
 * =========== 
 * set(key, value), get(value), has(value), delete(), 
 * clear(), keys(), values(), entries()
 * 
 * */

let data = new Map();

// set(key, value) method
data.set("name", "Leonel");
data.set("age", 22);
data.set("city", "Huanuco");
data.set("country", "Peru");
data.set("other", "I don´t know")

console.log(data);


// get(key) method
console.log(data.get("name"));  // Leonel

// has(value) method

console.log(data.has("city"));  // true
console.log(data.has("Peru"));  // false, bacause "Peru" is not a key

// delete(value) method
console.log(data.delete("other"));  // true, and then delete
console.log(data);

// keys() method
console.log(data.keys());  // [Mao Iterator] {'name', 'age', 'city', 'country' }

// values mathod
console.log(data.values());  // [Mao Iterator] {'Leonel', 22, 'Huanuco', 'Peru'}

// entries() method
console.log(data.entries())

for(let [key, value] of data.entries()){
	console.log(`${key}: ${value} `);
}

// forEach()
data.forEach((key, value, map)=>{
	console.log(`${key}: ${value}`)
});

// clear() method
data.clear();
console.log(data);  // Map {}

