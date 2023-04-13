const backBtn = document.getElementById('back-btn');
const forwardBtn = document.getElementById('forward-btn');
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const browserWindow = document.getElementById('browser-window');

backBtn.addEventListener('click', () => {
  browserWindow.contentWindow.history.back();
});

forwardBtn.addEventListener('click', () => {
  browserWindow.contentWindow.history.forward();
});

searchBar.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    loadUrl(searchBar.value);
  }
});

searchBtn.addEventListener('click', () => {
  loadUrl(searchBar.value);
});

function loadUrl(url) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  browserWindow.src = url;
}
