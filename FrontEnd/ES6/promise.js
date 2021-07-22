// PROMISE IN ECMAScript 6

const myPromise = new Promise((resolve, reject) =>{
	(true)
	? setTimeout(() => resolve("Yay!"), 3000)
	: reject(new Error("An error occurred"))
});

myPromise
	.then(value => {return `${value} and bar.\n`})
	.then(value => {return `${value} and bar again.\n`})
    .then(value => {return `${value} and again.\n`})
	.then(value => {return `${value} and again.\n`})
	.then(value => console.log('Show value:', value))
	.catch(err => console.log('Show', err))
	.finally(finallyMessage => console.log('Process finished!'))

	
