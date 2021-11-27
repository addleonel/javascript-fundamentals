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


class Vector {
    constructor(x, y){
		this.x = x;
		this.y = y;
    }
}

console.log(typeof Vector);  // function
let vector1 = new Vector(2, 3);
console.log(vector1);  // Vector {x: 2, y: 3}
console.log(typeof vector1);  // object
console.log(`vector=${vector1}, type=${typeof vector1}`);  // vector {x:2, y:3} object
console.log(vector1.x);  // 2
console.log(vector1.y);  // 3

// class Expression
// ================
// Class expressions are subject to the same hoisting restrictions
// as described in the Class declarations section.

// unnamed
let Rectangle = class {
    constructor(width, height){
	this.width = width;
	this.height = height;
    }
}

console.log(Rectangle.name);  // Rectangle

// named
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
	constructor(radio, angles={angleType: 'degrees', numberOfAngles: 0, stepValue: 15}) {
		this.angles= angles;
		this.radio = radio;
		this.PI = Math.PI;
	}

	// Instance methods
	calculateArea() {
		return this.PI*(this.radio)**2;
	}
	calculatePerimeter() {
		return 2*this.PI*this.radio;
	}
	calculateDiameter() {
		return 2*this.radio;
	}
	
	// Static methods
	static terminologies() {
		/*
		Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance
		*/
		return  {
			circumference: "The boundary of the circle is known as the circumference",
			radius: "The line from the centre “O” of the circle to the circumference of the circle is called the radius and it is denoted by “R” or “r”", 
			diameter: "The line that passes through the centre of the circle and touches the two points on the circumference is called the diameter and it is denoted by the symbol “D” or “d”", 
			arc: "Arc is the part of the circumference where the largest arc is called the major arc and the smaller one is called the minor arc",
			sector: "Sector is slice of a circle bounded by two radii and the included arc of a circle", 
			chord: "The straight line that joins any two points on the circumference of a circle is called the chord",
			tangent: "A line that touches the circumference of a circle at a point is called the tangent",
			secant: "A line that cuts the circle at the two distinct points is known as the secant", 
		}	
	}

	// Generator method
	*generateAngles() {
		let angle = 0;
		for (let i=0; i<this.angles.numberOfAngles; i++) {
			yield angle;
			if (this.angles.angleType === 'degrees') {
				angle += this.angles.stepValue;
			} else if ( this.angles.angleType === 'radian') {
				angle += this.angles.stepValue * (this.PI/180);
			} else {
				throw new Error('Property error, There are just two types of units here: degrees and radian.')
			}
		}
	}
}

let myCircle = new Circle(4, {angleType: 'radian', numberOfAngles: 10, stepValue: 30});
console.log(myCircle.radio);  // 4
console.log(myCircle.calculateArea());  // 50.26
console.log(myCircle.calculatePerimeter());  // 25.13
console.log(myCircle.calculateDiameter());  // 8 
console.log(Circle.terminologies()); 
console.log([...myCircle.generateAngles()])