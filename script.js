var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var player = {
  x: 50,
  y: height - 100,
  width: 50,
  height: 50,
  speed: 5
};

function update() {
  if (keys["ArrowLeft"]) {
    player.x -= player.speed;
  }
  if (keys["ArrowRight"]) {
    player.x += player.speed;
  }
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ff6600";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function loop() {
  update();
  draw();
  window.requestAnimationFrame(loop);
}

var keys = {};
window.addEventListener("keydown", function(event) {
  keys[event.code] = true;
});
window.addEventListener("keyup", function(event) {
  keys[event.code] = false;
});

loop();
