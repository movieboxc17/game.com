// Client-side JavaScript code

const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const socket = io();

socket.on('message', function(data) {
  addMessage(data.sender, data.text);
});

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
  socket.emit('message', {sender: 'Me', text: message});
  messageInput.value = '';
});

// Server-side Node.js code using Socket.io

const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  console.log('New user connected');
  
  socket.on('message', function(data) {
    console.log('New message:', data.sender, data.text);
    io.emit('message', data);
  });

  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
});

server.listen(3000, function() {
  console.log('Server listening on http://localhost:3000');
});
