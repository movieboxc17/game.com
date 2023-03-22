let messages = [];

const chatContainer = document.getElementById("chat-container");
const sendButton = document.getElementById("send-button");
const ws = new WebSocket("ws://localhost:8080");

function displayMessages() {
  let chatContent = "";
  messages.forEach(function (message, index) {
    chatContent += "<p>" + message + "<button class='delete-button' data-index='" + index + "'>Delete</button></p>";
  });
  chatContainer.innerHTML = chatContent;

  // Add event listeners to delete buttons
  const deleteButtons = document.getElementsByClassName("delete-button");
  Array.from(deleteButtons).forEach(function (button) {
    button.addEventListener("click", function () {
      const index = button.getAttribute("data-index");
      messages.splice(index, 1);
      displayMessages();
      // Send message deletion to server
      ws.send(JSON.stringify({ type: "delete", index: index }));
    });
  });
}

sendButton.addEventListener("click", function () {
  const userMessage = document.getElementById("user-message").value;
  messages.push(userMessage);
  displayMessages();
  document.getElementById("user-message").value = "";
  // Send new message to server
  ws.send(JSON.stringify({ type: "message", message: userMessage }));
});

ws.addEventListener("message", function (event) {
  const data = JSON.parse(event.data);
  if (data.type === "message") {
    messages.push(data.message);
    displayMessages();
  } else if (data.type === "delete") {
    messages.splice(data.index, 1);
    displayMessages();
  }
});
