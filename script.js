const messageContainer = document.getElementById("message-container");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

function sendMessage() {
  const message = messageInput.value;

  if (message) {
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    messageElement.classList.add("message");

    messageContainer.appendChild(messageElement);

    messageInput.value = "";
  }
}

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
