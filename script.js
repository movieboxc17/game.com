// app.js

const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
  alert('Downloading Flappy Bird for iOS...');
  // Replace the following URL with the actual download link for Flappy Bird
  window.location.href = 'https://example.com/flappy-bird.ipa';
});
