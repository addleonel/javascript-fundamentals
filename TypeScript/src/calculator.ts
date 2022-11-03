

type Joperation = 'add' | 'multiply' | 'divide';
type result = number | Error;

const calculator = (a: number, b: number, operation: Joperation): result => {
    if (operation === 'add')  return a + b;
    if (operation === 'multiply') return a * b;
    if (operation === 'divide') {
        if (b !== 0) return a/b;
        throw new Error('can\'t divide by zero');
    }

    throw new Error('This operation is not correct');
};

const controlarguments  = (arg: Array<string>): Array<number> => {
    if (arg.length !== 4) throw new Error('Wrong number of arguments');
    const number1 = Number(arg[2]);
    const number2 = Number(arg[3]);
    if (!isNaN(number1) && !isNaN(number2)) return [number1, number2];
    throw new Error('Provided arguments are not number!');
};

const numbers = controlarguments(process.argv);

const a = numbers[0];
const b = numbers[1];

console.log(calculator(a, b, 'divide'));