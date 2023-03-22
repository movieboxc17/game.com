let messages = [];

const chatContainer = document.getElementById("chat-container");
const sendButton = document.getElementById("send-button");

function displayMessages() {
  let chatContent = "";
  messages.forEach(function (message) {
    chatContent += "<p>" + message + "</p>";
  });
  chatContainer.innerHTML = chatContent;
}

sendButton.addEventListener("click", function () {
  const userMessage = document.getElementById("user-message").value;
  messages.push(userMessage);
  displayMessages();
  document.getElementById("user-message").value = "";
});
