// Finally in promise

// create a function that return a promise

const promiseFunction = () => {
    return new Promise((resolve, reject) => {
        (this)
        ? setTimeout(() => resolve("YAY!"), 3000)
        : reject(new Error("An error occurred"))
    });
}

promiseFunction()
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(() => console.log("Proccess finished"))  // <- new Feature