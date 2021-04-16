// HOISTING (for < ECS5)
// read more about hoisting: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

hello();  // Hello undefined

function hello(){
	console.log(`Hello ${myName}`);
}

var myName = "Leonel";
