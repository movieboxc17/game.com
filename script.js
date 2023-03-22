const messageForm = document.querySelector('.message-form');
const messageInput = document.querySelector('.message-form input[type="text"]');
const messagesDiv = document.querySelector('.messages');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
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
});
