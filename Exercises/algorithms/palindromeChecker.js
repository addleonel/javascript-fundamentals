// PALINDROME CHECKER

function palindrome(str){
	const REGEXDATA = /[a-zA-Z0-9]+/;
    let newStr = [];
    let invertNewStr = [];

	for(let letter  of str){
		if (REGEXDATA.exec(letter)){
	    	newStr.push(letter);
		}
    }
	// console.log(typeof newStr.join(''));
	
	for(let i=newStr.length-1; i>=0; i--){
		invertNewStr.push(newStr[i]);
	}

	if (invertNewStr.join('').toLowerCase() == newStr.join('').toLowerCase()){
		return true;
	}
	return false;

}
console.log(palindrome('A man, a plan, a canal. Panama'));


