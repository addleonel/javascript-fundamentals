// Generators in ECMAScript 6
// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
// create a generator function

function* evenNumbers(number){
	let count = 1;
	while (true){
		yield count*2;
		if (count === number){
			break;
		}
		count += 1;
	}
}
console.log(evenNumbers(20));  // Object [Generator] {}

for(let number of evenNumbers(5)){
	console.log(number);
}
// above code print 5 even numbers: 2, 4, 6, 8, 10

// or also we can get values step by step
console.log("Step by step:");
let fetn = evenNumbers(10);
console.log(fetn.next().value);  // 2
console.log(fetn.next().value);  // 4
