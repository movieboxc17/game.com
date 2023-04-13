const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const browserWindow = document.getElementById('browser-window');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  loadUrl(searchInput.value);
});

function loadUrl(url) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  browserWindow.src = url;
}
