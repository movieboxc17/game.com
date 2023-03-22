let messages = [];

const chatContainer = document.getElementById("chat-container");
const sendButton = document.getElementById("send-button");

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
    });
  });
}

sendButton.addEventListener("click", function () {
  const userMessage = document.getElementById("user-message").value;
  messages.push(userMessage);
  displayMessages();
  document.getElementById("user-message").value = "";
});
