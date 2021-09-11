
type messageFunc = (message: string) => string;

const makeMessage: messageFunc = (message) => `${message}!`;

console.log(makeMessage("Hello World"));
