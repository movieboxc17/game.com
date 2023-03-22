function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "" || password == "") {
      var errorMessage = document.createElement("p");
      errorMessage.className = "error-message";
      errorMessage.textContent = "Please enter both username and password.";
      document.getElementsByTagName("form")[0].appendChild(errorMessage);
    } else if (username != "example" || password != "password") {
      var errorMessage = document.createElement("p");
      errorMessage.className = "error-message";
      errorMessage.textContent = "Incorrect username or password.";
      document.getElementsByTagName("form")[0].appendChild(errorMessage);
    } else {
      alert("Login successful!");
    }
  }
  