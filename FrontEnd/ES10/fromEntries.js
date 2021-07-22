// Convert from an array to an object

// create an array with pairs subarrays
let entries = [['name', 'Leonel'], ['age', 22], ['country', 'Peru']];

// convert to an object
let myData = Object.fromEntries(entries);

console.log(myData);  // {'name': 'Leonel', 'age': 22, 'country': 'Peru'}