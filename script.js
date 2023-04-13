const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const browserWindow = document.getElementById('browser-window');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  loadUrl('https://www.google.com/search?q=' + encodeURIComponent(searchInput.value));
});

function loadUrl(url) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  browserWindow.src = url;
}
