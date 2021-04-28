// Objects in ECMAscript 6
// =======================

// First way 

let tree = {
    height: 10,
    fruit: "Apple",
    fruitAmount: 0,
    grow(){
        this.height += 2;
    },
    makeFruit(){
        this.fruitAmount += 1;
    }
}

console.log(tree);

// Second way

let name = "Leonel";
let age = 22;

let myData = {
    name,
    age
}

console.log(myData);

// Computed Property Names

let props = ["id", "name", "age", "email", "gender"];
let values = ["2342", "Leonel", 22, "adleonel3633@gmail.com", "Male"];
let countProps = 0;

let user = {
    [props[0] + "_" + ++countProps]: values[0],
    [props[1] + "_" + ++countProps]: values[1],
    [props[2] + "_" + ++countProps]: values[2],
    [props[3] + "_" + ++countProps]: values[3],
    [props[4] + "_" + ++countProps]: values[4],
}

// Object.assign()

let person = {
    name: "Leonel",
    age: 22,
    email: "adleonel3633@gmail.com"
}

let student = {
    name: "Thomas",
    age: 24,
    email: "thomas.thom@gmail.com"
}

let newStudent = Object.assign({}, person, student, {name: "Albert"});

console.log(newStudent);
