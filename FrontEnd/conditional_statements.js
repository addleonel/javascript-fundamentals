// Using if else statements

let number = 23;

if (number >= 20){
	console.log("Yes");
}else{
	console.log("No");
}


let score = 20;
let message = "";
if (score <= 11){
	message = "Prepare more";
}else if(score <= 16){
	message = "You've passed";
}else if (score <= 20){
	message = "Excellent";
}else{
	message = "You're amazing";
}
console.log(message);  // Output: You're awesome


// Using switch statements
// Switch cases use strict comparison (===).
let lecture = "Math";
let send = "";
switch (lecture){
	case "Math":
		send = "You'll become Mathematician";
		break;
	case "Physics":
		send = "You'll become Physicist";
		break;
	case "Chemistry":
		send = "You'll become Chemist";
		break;
	case "Biology":
		send = "You'll become Biologist";
		break;
	default:
		send = "It's not in our list";
}
console.log(send);

