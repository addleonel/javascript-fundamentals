// Loops

// Loop While
console.log("While")
let i = 0;
while (i<13){
	console.log(i+"*"+5+"=",i*5);
	i++;
}

// Loop Do While
console.log("Do while")
let j=0
do{
	console.log(j+"*"+5+"=",j*5);
	j++;
}while(j<13);

// Loop For
console.log("For")
for(let i=0; i<13; i++){
	console.log(i+"*"+5+"=",i*5);
}

// for/of
// lets you loop over data structures that are iterable such as 
// Arrays, Strings, Maps, NodeLists, and more
console.log("For/of")
let items = [2, 3, 4, 5, 6];
let sum = 0;
for (const item of items){
	sum += item;
}
console.log(sum);

// for/in
// Loops through the properties of an object:
console.log("For/in");
let person = {name:"Jhon", age:23};
let message = "";
for (const x in person){
	message += person[x];
}
console.log(message);


// Example 1 
console.log("Example 1: Multiply Table");
const multiplyTable = (toThis) =>{
	let allTable = [];
	let subTable = [];
	for(let i=1; i<toThis+1; i++){
		for (let j = 0; j<=13; j++) {
			subTable.push(i*j);
		}
		allTable.push(subTable);
		subTable = [];
	}
	return allTable;
}
console.log(multiplyTable(13));

// Example 2
console.log("Example 2: Multiply Matrix");
const multiplyMatrix = (m1, m2) =>{
	let result = [];
	let subValue = [];
	let sum = 0;
	if (m1[0].length == m2.length){
		for (let i = 0; i < m1.length; i++) {
			for (let j = 0; j < m2[0].length; j++) {
				for (let k = 0; k < m1[0].length; k++) {
					sum += m1[i][k]*m2[k][j];
				}
				subValue.push(sum);
				sum = 0;
			}
			result.push(subValue);
			subValue = [];
		}
		return result;
	}else{
		return "It's not valid";
	}
}
m1 = [
[1, 2, 3, 3],
[2, 3, 1, 4],
[2, 3, 4, 4],
];

m2 = [
[1, 2, 3],
[2, 1, 3],
[0, 2, 0],
[2, 3, 1],
];

console.log(multiplyMatrix(m1, m2));
