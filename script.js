// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the buttons
  var buttons = document.querySelectorAll("button");

  // Attach click event listeners to the buttons
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Handle button click event
      var buttonText = button.innerText;
      alert("You clicked the " + buttonText + " button!");
    });
  });
});
