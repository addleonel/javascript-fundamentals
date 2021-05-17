// problem: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

const invertData = (arr)=> {
	let newArr = [];
	for(let [key, value] of arr){
		newArr.push([value, key]);
	}

	return newArr;
}


function updateInventory(arr1, arr2) {	

	let result;
	let map1 = new Map(invertData(arr1));
	let map2 = new Map(invertData(arr2));
	
	
	for(let [product, quantity] of map2.entries()){
		if (map1.has(product)){
			map1.set(product, quantity + map1.get(product));
		}else{
			map1.set(product, quantity);
		}
	}
	
	
	result = invertData([...map1].sort());
				
	return [...result];
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];


// console.log();
// console.log(updateInventory(curInv, newInv));


console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));















