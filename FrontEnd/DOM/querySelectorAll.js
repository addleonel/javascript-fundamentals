function getRandomInteger(min, max){
    return Math.floor(Math.random()*(max-min) + min);
}

function getRandomListIndex(listLength){
    return Math.floor(Math.random()*(listLength));
}

function generateRandomColors(){
    const hexdigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexColorValue = "#";
    for(let i=0; i<6; i++){
        hexColorValue += hexdigits[getRandomListIndex(hexdigits.length)];
    }
    console.log(hexColorValue);
    return hexColorValue;
}


function changeMessage(){
    // Using querySelectorAll(<tag>) method
    let messagesList = ["Good Bye", "Hello", "Good Morning", "Good Afternoon", "Take care", "See you!"];
    let messages = document.querySelectorAll("p");
    let randomSize = getRandomInteger(15, 30);

    for(let i=0; i<messages.length; i++){
        messages[i].innerHTML = messagesList[getRandomListIndex(messagesList.length)];
        messages[i].style.color = generateRandomColors();
        messages[i].style.fontSize = randomSize + "px";
    }
    console.log(messages, messages.length);
}

