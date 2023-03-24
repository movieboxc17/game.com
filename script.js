// Taskbar items
const taskbarItems = document.querySelectorAll(".taskbar-item");
const startButton = document.querySelector(".start-button");
const icons = document.querySelector(".icons");
const windows = document.querySelector(".windows");

// System tray items
const clock = document.querySelector(".clock");
const systemIcons = document.querySelector(".system-icons");

// Windows
const windowsArray = Array.from(document.querySelectorAll(".window"));
let zIndex = windowsArray.length;

// Start button click event
startButton.addEventListener("click", () => {
  icons.classList.toggle("active");
});

// Taskbar item click event
taskbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    const window = document.querySelector(item.dataset.target);
    if (window) {
      window.classList.toggle("active");
      if (window.classList.contains("active")) {
        zIndex++;
        window.style.zIndex = zIndex;
      }
    }
  });
});

// Window titlebar buttons
windowsArray.forEach((window) => {
  const titlebar = window.querySelector(".window-titlebar");
  const closeButton = titlebar.querySelector(".window-button-close");
  const minimizeButton = titlebar.querySelector(".window-button-minimize");
  const maximizeButton = titlebar.querySelector(".window-button-maximize");

  closeButton.addEventListener("click", () => {
    window.classList.remove("active");
  });

  maximizeButton.addEventListener("click", () => {
    window.classList.toggle("maximized");
    if (window.classList.contains("maximized")) {
      maximizeButton.innerHTML = "&#xE923;";
    } else {
      maximizeButton.innerHTML = "&#xE922;";
    }
  });

  // Window drag event
  titlebar.addEventListener("mousedown", (e) => {
    const startX = e.pageX;
    const startY = e.pageY;
    const windowX = window.offsetLeft;
    const windowY = window.offsetTop;

    const moveHandler = (e) => {
      const diffX = e.pageX - startX;
      const diffY = e.pageY - startY;

      window.style.left = `${windowX + diffX}px`;
      window.style.top = `${windowY + diffY}px`;
    };

    const upHandler = () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseup", upHandler);
    };

    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", upHandler);
  });
});

// Clock update
setInterval(() => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  clock.textContent = `${hours}:${minutes}`;
}, 1000);
