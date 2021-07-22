// Catch Error Optional

try{
    if (false){
        console.log("Succesfully message");
    }else{
        throw new Error("No more success");
    }
}catch{  // is optional the error argument 
    console.log("An error ocurred");
}

// the ouput: No more success