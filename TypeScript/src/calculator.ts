

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


console.log(calculator(4, 5, 'divide'));