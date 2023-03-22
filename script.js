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
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerText = messageText;
  messagesContainer.appendChild(messageElement);
  messagesBox.innerHTML += `<div>${messageText}</div>`;
  messageInput.value = '';
});
