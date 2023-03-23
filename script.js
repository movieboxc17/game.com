var windowCount = 0;

function openWindow() {
	windowCount++;
	var windowElem = document.createElement("div");
	windowElem.classList.add("window");
	windowElem.innerHTML = "<h2>Window " + windowCount + "</h2>";
	document.body.appendChild(windowElem);
}

var windowBtns = document.querySelectorAll(".window-btn");
for (var i = 0; i < windowBtns.length; i++) {
	windowBtns[i].addEventListener("click", openWindow);
}
