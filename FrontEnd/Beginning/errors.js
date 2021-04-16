// Errors
// Using try, catch, finally and throw statements

// Using try, catch into a function
const division = (num1, num2) => {

	let result;
	try{
		result = num1/num2;
		console.log(result)
	}catch(err){
		console.log(err.message);
	}finally{
		console.log("Finished process");
	}
}

division(23, 23);

// Using throw statement
// The throw statement allows you to create a custom error.
// Technically you can throw an exception (throw an error).
// The exception can be a JavaScript String, a Number, a Boolean or an Object:

const selectNumber = (number) =>{
	if (number < 10){
		throw "Very lower";
	}else{
		return "It's better";
	}
}

console.log(selectNumber(1));