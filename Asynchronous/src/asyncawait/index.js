// Using asyn await sintax to interact with a promise

const doSomething = () => {
	return new Promise((resolve, reject) =>{
		(true)
			? setTimeout(() => resolve('Do something, just code now'), 5000)
			: reject(new Error('Oops, occured an error'))
	});
}

const doSomethingAsync1 = async () => {
	try{
		const doSome = await doSomething();
		console.log(doSome);
	}catch (error){
		console.error(error);
	}
}

console.log('Before 1');
doSomethingAsync1();
console.log('After 1');

const doSomethingAsync2 = async () => {
	try{
		const doSome = await doSomething();
		console.log(doSome);
	}catch(e){
		console.log(e);
	}
}

console.log('Before 2');
doSomethingAsync2();
console.log('After 2');