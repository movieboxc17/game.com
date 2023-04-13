// Get the button element
const button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Get the input element
  const input = document.querySelector('input');
  
  // Get the value of the input
  const url = input.value;
  
  // Load the URL in a new window
  window.open(url, '_blank');
});
