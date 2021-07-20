// Object to convert to an array


const data = {
	name: "Leonel",
	age: 22,
	country: "Peru",
}

// convert to an matrix
let entries = Object.entries(data);
console.log(entries);

let keys = Object.keys(data);
console.log(keys);

let values = Object.values(data);
console.log(values);
