// CAESARS CIPHER

const LETTERS = [
	'A','B','C','D','E','F','G','H','I','J','K','L','M',
	'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
];

function rotateLetter(letter){
	const STEP = 13;
	let targetIndex = LETTERS.indexOf(letter) + STEP; 
	
	if (targetIndex > LETTERS.length - 1) {
		targetIndex = LETTERS.indexOf(letter) - STEP;
	}
	
	return LETTERS[targetIndex];
}

function rot13(str){
	let newStr = [];
	for (let letter of str){
		if (! LETTERS.includes(letter)){
			newStr.push(letter);
			continue;
		}
		newStr.push(rotateLetter(letter));
	}
	return newStr.join('');
}

console.log(rot13('SERR CVMMN!'));
