// TELEPHONE NUMBER VALIDATOR

function telephoneCheck(str){
	const TELEPHONEREGEX = /^(1\s?)*(\([0-9]{3}\)|[0-9]{3})[-\s]*([0-9]{3})[-\s]*([0-9]{4})$/;
	console.log(TELEPHONEREGEX.exec(str));
	if (TELEPHONEREGEX.exec(str)){
		return true;
	}
	return false;
}

console.log(telephoneCheck("1(555)555-5555"));