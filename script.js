const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

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

sendButton.addEventListener('click', function() {
  const message = messageInput.value;
  addMessage('Me', message);
  messageInput.value = '';
});
