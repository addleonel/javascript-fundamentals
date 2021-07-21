// Object.entries/Object.values/Object.keys

// Object to convert to an array format
const data = {
	name: "Leonel",
	age: 22,
	country: "Peru",
}

// Object.entries(): convert data to an matrix
let entries = Object.entries(data);
console.log(entries);  // [ [ 'name', 'Leonel' ], [ 'age', 22 ], [ 'country', 'Peru' ] ]

// Object.keys(): Return keys of data 
let keys = Object.keys(data);
console.log(keys);  // ['name', 'age', 'country']

// Object.values(): Return values of data
let values = Object.values(data);
console.log(values);  // ['Leonel', 22, 'Peru']
