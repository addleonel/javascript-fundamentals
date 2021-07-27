// promise using ES6

// First function that return a promise
const somethingWillHappend = () => {
	return new Promise((resolve, reject) => {
		(true)
		? setTimeout(resolve('Yay!'), 3000)
		: reject(new Error('Oops :('))
	});
}

somethingWillHappend()
	.then((response) => console.log(response))
	.catch((error) => console.error(error))


// Second function that return a promise
const somethingWillHappend2 = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(resolve('Starship is working!'), 2000);
		} else {
			const error = new Error('Noo... Starship exploded');
			reject(error);
		}
	});
}

somethingWillHappend2()
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.error(error);
	});

// Run all promise 
Promise.all([somethingWillHappend(), somethingWillHappend2()])
	.then(response => console.log('All results:', response))
	.catch(err => console.error(err));



