// Destructuring in ECMAScript 6


// Array Destructuring
let features = ["Green", "Big", "Good"];

let [feature1, feature2, feature3] = features;

console.log(feature1);  // Green
console.log(feature2);  // Big
console.log(feature3);  // Good

let numbers  = () =>{
    return [1, 2, 3];
}

let [one, , three] = numbers();

console.log(one);  // 1
console.log(three);  // 3


// Object Destructuring

let triangle = {base: 23, height: 34};
let { base, height} = triangle;
let triangleArea = (base*height)/2;

console.log(base);  // 23
console.log(height);  // 34
console.log(triangleArea);  // 391
