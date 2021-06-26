
const colorize = () =>{

    const date = new Date();
    const [hour, minute, second] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    let element = document.getElementById("box-colored__item");
    element.style.display = "Flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    let messageContainer = document.createElement("div");
    messageContainer.innerHTML = `${hour} : ${minute} : ${second}`;
    messageContainer.style.textAlign = "center";
    messageContainer.style.padding = "10px 20px";
    messageContainer.style.color = "#FFFFFF";
    messageContainer.style.backgroundColor = "#0d07756e";
    messageContainer.style.borderRadius = "5px";
    element.appendChild(messageContainer);
    console.log("Done");
}
