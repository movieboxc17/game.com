const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messages = JSON.parse(localStorage.getItem('chat-messages')) || [];

function addMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  const senderSpan = document.createElement('span');
  senderSpan.classList.add('sender');
  senderSpan.innerText = sender;
  const textSpan = document.createElement('span');
  textSpan.classList.add('text');
  textSpan.innerText = text;
  messageDiv.appendChild(senderSpan);
  messageDiv.appendChild(textSpan);
  messageList.appendChild(messageDiv);
  messageList.scrollTop = messageList.scrollHeight;
}

function saveMessages() {
  localStorage.setItem('chat-messages', JSON.stringify(messages));
}

function loadMessages() {
  messages.forEach(message => {
    addMessage(message.sender, message.text);
  });
}

sendButton.addEventListener('click', function() {
  const message = messageInput.value;
  messages.push({sender: 'Me', text: message});
  addMessage('Me', message);
  messageInput.value = '';
  saveMessages();
});

window.addEventListener('load', function() {
  loadMessages();
});
