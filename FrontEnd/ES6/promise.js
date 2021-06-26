// PROMISE IN ECMAScript 6

const myPromise = new Promise((resolve, reject) =>{
	setTimeout(() => {
		resolve("YES!");
	}, 3000);
});

myPromise
	.then(value => {return `${value} and bar`})
	.then(value => {return `${value} and bar again`})
        .then(value => {return `${value} and again`})
	.then(value => {return `${value} and again`})
	.then(value => console.log(value))
	.catch(err => console.log(err))

	
