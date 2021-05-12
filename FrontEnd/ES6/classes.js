// classes in ECMAScript 6
// =======================

/*
 * more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * Classes are in fact "special functions", and just as you can define
 * function expressions and function declarations, the class syntax has 
 * two components: class expressions and class declarations.
 * */

// Class Expression

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
