
const boxColorizedElement = document.getElementById("box-colored__item");

// displaying children flexible
boxColorizedElement.style.display= "flex";
boxColorizedElement.style.justifyContent = "center";
boxColorizedElement.style.alignItems = "center"

const messageContainer = document.createElement("div");


function addTime() {

    const date = new Date();
    const [hour, minute, second] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    
    messageContainer.innerHTML = `${hour} : ${minute} : ${second}`;
    messageContainer.style.display = "block";
    messageContainer.style.textAlign = "center";
    messageContainer.style.padding = "10px 20px";
    messageContainer.style.color = "#FFFFFF";
    messageContainer.style.backgroundColor = "#0d07756e";
    messageContainer.style.borderRadius = "5px";

    boxColorizedElement.appendChild(messageContainer);

    console.log("Done");
}

function removeTime(event) {
    event.stopPropagation();
    if (messageContainer.style.display === "block") {
        messageContainer.parentNode.removeChild(messageContainer);
    }
    console.log("Removed");
}

boxColorizedElement.addEventListener("click", addTime);
messageContainer.addEventListener("click", removeTime);
