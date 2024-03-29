// Declarative function
function add(x: number, y: number) {
    return x + y;
}
console.log(add(12, 13));

// Arrow function
const hypotenuse = (x: number, y: number): number => {
    return (x**2 + y**2) ** 0.5;
}

// Function expression with type alias

type mathFunc = (x: number) => number;

const sinCalculate: mathFunc = (value) => {
    return Math.sin(value);
}

console.log(sinCalculate(90));

// Using interface
interface SumNumbers {
    (number1: number, number2: number): string;
}

const addNumbers: SumNumbers = (a, b) => {
    return `Result = ${a + b}`;
}

console.log(addNumbers(1, 8));