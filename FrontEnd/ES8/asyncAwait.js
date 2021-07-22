// ASYNC AWAIT AND PROMISE
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function


// create a function that return a promise
const promiseFunc = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(()=> resolve('Yay, successfully result'), 4000) 
        : reject(new Error('There was an error :('))
    })
}


/* create an async await function
 * const helloWorld = async () => {}
 * or
 * async function helloWorld {}
*/

const asyncAwaitFunc = async () => {
    try{    
        console.log('Calling ...');
        console.log('-----------------');
        const yayMessage = await promiseFunc();  // This will wait 4 seconds
        console.log(yayMessage);
    }catch (error){
        console.log(error);
    }finally{
        console.log('-----------------');
        console.log("process finished");
    }
}

asyncAwaitFunc();