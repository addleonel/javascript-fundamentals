// var a;
// var b = 5;
// console.log(a)

// a = 30;
// b = a;
// console.log(a)

// var a = 3;
// var b = 20;
// var c = "I am a ";

// a = a + 2;
// b = b + 20;
// c = c + "String!";

// console.log(a)
// console.log(b)
// console.log(c)
// console.log("\thello everyone this is 'Leonel' and I am learning\n\tweb development")
// console.log("through this lecture\n 	\fI'm learning better\n in windows C:\\User\\")
// list_name = ["Einstein","Turing", "Gates", "Linus"]
// for(k=0; k<10; k++){
// 	console.log(list_name[k])
// }

/*myStr = "jello"
console.log(myStr)
myStr[0] = "H"
console.log(myStr)*/


// function wordBlanks(mysubject, myadjetive ,myverb){
// 	var result = "";
// 	result += "That " + mysubject + "is " + myadjetive + "and also is " + myverb;

// 	return result;
// }

// console.log(wordBlanks("Backpack", "white", "running"));

// var myArray = ["first", "second", "third"];
// console.log(myArray)
// myArray.push(["fourth", "fifth", "sixth"])
// console.log(myArray)
// myArray.push("seven");
// console.log(myArray)


// var myGlobal = 10;

// function fun1(){
// 	oopsGlobal = 5;
// }

// function fun2(){
// 	var result = "";

// 	if (typeof myGlobal != "undefined"){
// 		result += "my global is " + myGlobal;
// 	}

// 	if(typeof oopsGlobal != 'undefined'){
// 		result+= "my oopGlobal "+ oopsGlobal;
// 	}

// 	console.log(result)

// }

// fun1();
// fun2();


// function myLocalScope(){
// 	var myVar = 5;
// 	console.log(myVar);
// }
// myLocalScope();
// // this jump and error because myVAr is not defined-->console.log(myVar);


// GLOBAL VS LOCAL SCOPE
// var ourBook = "From the earth to the moon"; //--> GLOBAL 
// function bookFunction(){
// 	var ourBook = "Machine Learning introduction"; // --> LOCAL
// 	return ourBook;
// }

// console.log(bookFunction());
// console.log(ourBook);

// function rotateByLine(arr, item){
// 	arr.push(item);
// 	return arr.shift();
// }

// var arr = [1, 2, 3, 4, 5];
// console.log('before: ' + JSON.stringify(arr));
// console.log(rotateByLine(arr, 20));
// console.log('after: '+ JSON.stringify(arr));

// function isPrime(number){
// 	for(var k = 2; k<number;k++){
// 		if (number%k == 0){
// 			return false;
// 		}	
// 	}
// 	return true;
// }

// numbers = [34, 23, 5, 6, 7, 9, 87];

// k = 0
// while (k < numbers.length){
// 	if(isPrime(numbers[k])){
// 		console.log(numbers[k] + " --> is prime")
// 	}else{
// 		console.log(numbers[k] + " --> is not prime")
// 	}

// 	k++;
// }


// function categories(item){
// 	if(item < 5){
// 		return "very small";
// 	}

// 	else if (item < 10){
// 		return "small";
// 	}
// 	else if(item < 20){
// 		return "medium";
// 	}
// 	else{
// 		return "Large";
// 	}

// }

// console.log(categories(30));

// function categories(num){
// 	answer = "";
// 	switch(num){
// 		case 1:
// 		case 2:
// 		case 3:
// 			answer = "low";
// 			break;
// 		case 4:
// 		case 5:
// 		case 6:
// 			answer = "medium";
// 			break;
// 		case 7:
// 		case 8:
// 		case 9:
// 			answer = "high";
// 			break;
// 		default:
// 			answer = "very high"
// 	}
// 	return answer;
// }
// for(var k = 1; k <=20; k++){
// 	console.log(categories(k));
// }


// function pitagoras(a, b){
// 	return Math.sqrt(Math.pow(a, 2)+ Math.pow(b, 2));
// }

// function randomValueWithTwoNumbers(a, b){
// 	if (a < 0 || b < 0){
// 		return undefined;
// 	}
// 	return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2));
// }
// console.log(pitagoras(4, 3));
// console.log(randomValueWithTwoNumbers(4, 5));

// function forLookByNames(name){
// 	var nameCity = {
// 		"Charlie":"Borton",
// 		"Thomas":"New York",
// 		"Albert":"Berlin",
// 		"Mary":"Lima",
// 	}
// 	return nameCity[name];
// }

// console.log(forLookByNames("Albert"));

// var obj = {
// 	one:"hello",
// 	two:"good morning",
// 	three:"bye",
// }
// function testingObjectProperty(property_){
// 	if (obj.hasOwnProperty(property_)){
// 		return obj[property_];
// 	}else{
// 		return "Not property"
// 	}
// }
// console.log(testingObjectProperty('three'));


// var myPlaylist = [
// 	{
// 		"artist": "The Tikiyaki Orchestra",
// 		"album":"StereoExotique",
// 		"description":"Blending elements of lounge, surf, latin, jazz, and Hawaiian music, The Tikiyaki Orchestra is the perfect soundtrack to your TIKI BAR, LUAU or SPACE AGE BACHELOR PAD. A sonic adventure to a far away South Pacific island.",
// 	},
// 	{
// 		"artist": "Sara K",
// 		"album":"Made in the Shade",
// 		"description":"Intimate and laid back, this newly released folk/blues SACD Surround Sound recording features concert harp, smooth vocals, new songs and new arrangements of earlier songs, taking you once again to the desert Southwest.",
// 	},
// 	{
// 		"artist": "Sub-Motive",
// 		"album":"Chasing Memories",
// 		"description":"Face-melting guitar rock chopped and sauteed with heart-wrenching ballads, and elegantly garnished with thoughtful lyrics. 0 carbs.",
// 	},
// 	{
// 		"artist": "California Gold",
// 		"album":"California Gold",
// 		"description":" This California based trio creates a unique acoustic sound with pianos, guitars, ukuleles, and uplifting harmonies.",
// 	},
// ]

// for (var k = 0; k< myPlaylist.length; k++){
// 	console.log(myPlaylist[k]["album"]);
// }


// var myFirstObject = {
// 	"mySecondObject":{
// 		"myThirdObject":{
// 			"name":"nothing",
// 			"age":21,
// 			"email":"example@gmail.com",
// 			"your artist":"Illenium",	
// 		}
// 	}
// }
// console.log(myFirstObject.mySecondObject.myThirdObject.name);
// console.log(myFirstObject.mySecondObject.myThirdObject.age);
// console.log(myFirstObject.mySecondObject.myThirdObject.email);
// console.log(myFirstObject.mySecondObject.myThirdObject["your artist"]);


// var myObj = {
// 	"name":"John",
// 	"age":30,
// 	"cars": [
// 		{ "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
// 	    { "name":"BMW", "models":[ "320", "X3", "X5" ] },
// 	    { "name":"Fiat", "models":[ "500", "Panda" ] }
//   	]
// }
// console.log(myObj.cars[2].models[1]);
// console.log(myObj.cars[0].models[0]);
// console.log(myObj.cars[1].models[2]);

// var collection = [
// 	{
// 		"id": "0001",
// 		"type": "donut",
// 		"name": "Cake",
// 		"ppu": 0.55,
// 		"batters":
// 			{
// 				"batter":
// 					[
// 						{ "id": "1001", "type": "Regular" },
// 						{ "id": "1002", "type": "Chocolate" },
// 						{ "id": "1003", "type": "Blueberry" },
// 						{ "id": "1004", "type": "Devil's Food" }
// 					]
// 			},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5007", "type": "Powdered Sugar" },
// 				{ "id": "5006", "type": "Chocolate with Sprinkles" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0002",
// 		"type": "donut",
// 		"name": "Raised",
// 		"ppu": 0.55,
// 		"batters":
// 			{
// 				"batter":
// 					[
// 						{ "id": "1001", "type": "Regular" }
// 					]
// 			},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0003",
// 		"type": "donut",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 			{
// 				"batter":
// 					[
// 						{ "id": "1001", "type": "Regular" },
// 						{ "id": "1002", "type": "Chocolate" }
// 					]
// 			},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	}
// ]

// for (var k = 0; k < collection.length; k++){ 
// 	console.log(collection[k].topping[k]);
// }

// function createIndexArray(){
// 	var k = 0;
// 	var arr = []
// 	numElements = prompt("number of elements: ");
// 	while(k < numElements){
// 		value = prompt("type new value: ");
// 		arr[k] = value;
// 		k++;
// 	}
// 	confirm("All is in a list. Finished process.")
// 	return arr;
// }
// console.log(createIndexArray());


// function oddNumbers(num){
// 	var listOfOddNumbers = []
// 	for(var i = 0; i<=num; i++){
// 		if (i % 2 != 0){
// 			listOfOddNumbers.push(i);
// 		}
// 	}
// 	return listOfOddNumbers;
// }
// console.log(oddNumbers(20));


// function findOddNumber(num){
// 	var listOfOddNumbers = [];
// 	for(var i=num; i>0; i-=2){
// 		listOfOddNumbers.push(i);
// 	}
// 	return listOfOddNumbers;
// }
// console.log(findOddNumber(20));


// function sumOfArrayNumber(arr){
// 	var sum_ = 0;
// 	for(var i = 0; i<arr.length; i++){
// 		sum_ += arr[i];
// 	}
// 	return sum_;
// }
// console.log(sumOfArrayNumber([1, 2, 3, 4, 5, 6]));


// var m1 = [
// 	[1, 2],
// 	[4, 5]
// ]

// var m2 = [
// 	[4, 6],
// 	[7, 8]
// ]

// function sumOfMatrix(matrix_1, matrix_2){
// 	var sum_ = [];
// 	var sub_sum_ = [];
// 	var s = 0;
	
// 	for(var i = 0; i < matrix_1.length; i++){
// 		for(var j = 0; j < matrix_1[0].length; j++){
// 			s = matrix_1[i][j] + matrix_2[i][j];
// 			sub_sum_.push(s);
// 		}
// 		sum_.push(sub_sum_);
// 		sub_sum_ = [];
// 	}
// 	console.log(i, j);
// 	return sum_;
// }
// console.log(sumOfMatrix(m1, m2));



// // using let keyword
// let k = 20;

// //=======================================
// // this is a for scope
// for(let k = 0; k < 5; k++){
// 	console.log(k); // output: 0, 1, 2, 3, 4
// }
// //======================================
// console.log(k); // output: 20


// function blockScope(){
// 	for(let k =0;k<20;k++){
// 		let message = "-->"
// 		if (k % 2 == 0){
// 			console.log(message+ " " + k);
// 		} 
// 	}
// }
// blockScope();



// const MY_ARRAY = [10, 30, 50];

// function addItemInArray(num){
// 	// const in not inmutable
// 	MY_ARRAY.push(num);
// 	return MY_ARRAY;
// }

// console.log(addItemInArray(67));
// console.log(addItemInArray(90));
// console.log(addItemInArray(70));


// function freezeObj(){
// 	const MATH_CONSTANTS = {
// 		PI: 3.141592653589,
// 	}
// 	object.freeze(MATH_CONSTANTS); // No change MATH_CONSTANTS 
// 	try{
// 		MATH_CONSTANTS.PI = 2.7182818284;
// 	}catch(ex){
// 		console.log(ex);
// 	}
// 	return MATH_CONSTANTS.PI;
// }

// const PI = freezeObj();
// console.log(PI);



// const magic = function(a, b){
// 	return a + b;
// }

// console.log(magic(2, 4));

// const sum_ = (a, b) => a+b;

// console.log(sum_(5, 6));

// const addArray = (arr1, arr2) => arr1.concat(arr2);
// console.log(addArray([5, 6, 4], [7, 8, 9]));



// let numbers = [4, -6, 0, 31, 3.5, 7.8, -56, 7]

// const square = (arr) => {
// 	const squareNumber = arr.filter(n => Number.isInteger(n) && n >=0).map(x => x*x);
// 	return squareNumber;
// }

// const square_odd = (arr) =>{
// 	const sodd = arr.filter(n => n%2 != 0 && Number.isInteger(n)).map(x => x*x);
// 	return sodd;
// }

// const increment = (function (){
// 	return function increment(num, value = 1){
// 		return num + value;
// 	}
// })();

// console.log(square(numbers));
// console.log(square_odd(numbers));
// console.log(increment(6, 2));
// console.log(increment(8));