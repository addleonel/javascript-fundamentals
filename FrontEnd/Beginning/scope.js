// SCOPE 

var name = "Leonel"  // Global Scope

function callFullName(){
	var surname = "Aquino"  // Local Scope
	return `Hello ${name} ${surname}`
}

console.log(callFullName());
// console.log(surname);  // This logs an error because it's a local scope
