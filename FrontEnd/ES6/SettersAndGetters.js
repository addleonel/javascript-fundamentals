// SETTERS AND GETTERS IN ECMAScript 6
// ====================================

/*
 * More info:
 * - link1: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
 * - link2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
 * 
 * private class fields: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields 
 *
 *
 * Setters syntax:
 * 	{set prop(val) { . . . }}
 *  	{set [expression](val) { . . . }}
 *
 * Getters syntax;
 * 	{get prop() { ... } }
 * 	{get [expression]() { ... } }
 * */

// example:

class User{

	#name;
	#age;
	#city;
	#country;

	constructor(name, age, city, country){
		// private properties
		this.#name = name;
		this.#age = age;
		this.#city = city;
		this.#country = country;
	}

	set name(value){
		this.#name = value; 
	} 

	get name(){
		return `Your name is ${this.#name}`;
	}

	set age(value){
		this.#age = value;
	}

	get age(){
		return this.#age;
	}

	set city(value){
		this.#city = value;
	}

	get city(){
		return this.#city;
	}

	set country(value){
		this.#country = value;
	}

	get country(){
		return this.#country;
	}
}


let me = new User("Leonel", 22, "Huanuco", "Peru");

console.log(me.name);  // Your name is Leonel
me.name = "Thomas";
console.log(me.name)  // Your name is Thomas

