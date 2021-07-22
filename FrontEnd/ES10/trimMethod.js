// trim Method  (removes spaces)

let myString = "           Hi everyone!          ";

console.log(myString.trim());  // Hi everyone! (Without spaces at the start and end)

let mySecondString = "Hello     ";
console.log(mySecondString.trimEnd());  // hello (without spaces at the end)

let myThirdString = "        hello";
console.log(myThirdString.trimStart());  // hello (without spaces at the start)
