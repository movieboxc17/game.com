// Select DOM elements
const messageForm = document.querySelector('.message-form');
const messageInput = document.querySelector('.message-form input[type="text"]');
const sendButton = document.querySelector('.message-form button[type="submit"]');
const messagesDiv = document.querySelector('.messages');

// Event listener for submitting message
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  sendMessage();
});

// Event listener for clicking send button
sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  sendMessage();
});

// Function to send message
function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    const username = 'JohnDoe'; // You can change this to a dynamic value
    const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
      <span class="username">${username}</span>
      <span class="timestamp">${timestamp}</span>
      <p class="content">${message}</p>
    `;
    messagesDiv.appendChild(messageElement);
    messageInput.value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}
