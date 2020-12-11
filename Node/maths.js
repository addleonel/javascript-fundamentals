
const math = {}


const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) =>{
    return a*b;
}

const div = (a, b) =>{
    if (b === 0){
        return 'Don\'t divide by zero';
    }
    return (a/b);
}

/*
console.log(add(23, 12));
console.log(sub(23, 12));
console.log(mul(23, 12));
console.log(div(23, 30));
*/

math.add = add;
math.sub = sub;
math.mul = mul;
math.div = div;

//module.exports = 'math module';

module.exports = math;
