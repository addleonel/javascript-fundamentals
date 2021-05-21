// classes in ECMAScript 6
// =======================

/*
 * more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * Classes are in fact "special functions", and just as you can define
 * function expressions and function declarations, the class syntax has 
 * two components: class expressions and class declarations.
 *
 */


// Class Declaration
// ==================
// An important difference between function declarations and class declarations
// is that function declarations are hoisted and class declarations are not. 
// You first need to declare your class and then access it, 
// otherwise code like the following will throw a ReferenceError:


class Vector{
    constructor(x, y){
	this.x = x;
	this.y = y;
    }
}

console.log(typeof Vector);  // function
vector1 = new Vector(2, 3);
console.log(vector1, typeof vector1);  // vector {x:2, y:3} object
console.log(vector1.x);  // 2
console.log(vector1.y);  // 3

// class Expression
// ================
// Class expressions are subject to the same hoisting restrictions
// as described in the Class declarations section.

// named
let Rectangle = class {
    constructor(width, height){
	this.width = width;
	this.height = height;
    }
}

console.log(Rectangle.name);  // Rectangle

// unnamed
let OtherRectangle = class Rectangle2 {
    constructor(width, height){
	this.width = width;
	this.height = height;
    }
}

console.log(OtherRectangle.name);  // Rectangle2

// Class Methods
// =============

class Circle {
	// constructor
	constructor(radio){
		this.radio = radio;
		this.PI = Math.PI;
	}

	// methods
	calculateArea(){
		return this.PI*(this.radio)**2;
	}
	calculatePerimeter(){
		return 2*this.PI*this.radio;
	}
	calculateDiameter(){
		return 2*this.radio;
	}
	
}

let myCircle = new Circle(4);
console.log(myCircle.radio);  // 4
console.log(myCircle.calculateArea());  // 50.26
console.log(myCircle.calculatePerimeter());  // 25.13
console.log(myCircle.calculateDiameter());  // 8 



