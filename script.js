const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages-container');
const messagesBox = document.getElementById('messages-box');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const messageText = messageInput.value.trim();
  if (messageText === '') {
    return;
  }
  const messageTimestamp = new Date().toLocaleTimeString();
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<span class="message-text">${messageText}</span><span class="message-timestamp">${messageTimestamp}</span>`;
  messagesContainer.appendChild(messageElement);
  messagesBox.innerHTML += `<div>${messageTimestamp}: ${messageText}</div>`;
  messageInput.value = '';
});
