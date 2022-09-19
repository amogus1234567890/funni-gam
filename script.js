function playSound(id) { //play sound
  if (document.getElementById(id)) {
    var sound = document.getElementById(id); //setup audio
    sound.currentTime = 0; //reset position of playback to zero  //sound.load();
    sound.play();
  }
}

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// function resizeCanvas() {
//   //fit canvas to window and fix issues with canvas blur on zoom
//   canvas.style.width = window.innerWidth + "px";
//   canvas.style.height = window.innerHeight + "px";
//   const scale = window.devicePixelRatio;
//   canvas.width = window.innerWidth * scale;
//   canvas.height = window.innerHeight * scale;
//   ctx.scale(scale, scale);
// }
// resizeCanvas();
// window.addEventListener("resize", resizeCanvas);

//canvas commands  https://www.w3schools.com/tags/ref_canvas.asp
//example drawings

//___________________get mouse input___________________

// let mouse = {
//   down: false,
//   x: 0,
//   y: 0
// };
// canvas.addEventListener("mousemove", event => {
//   mouse.x = event.clientX;
//   mouse.y = event.clientY;
// });
// canvas.addEventListener("mousedown", event => {
//   mouse.down = true;
//   // console.log(mouse);
// });
// canvas.addEventListener("mouseup", event => {
//   mouse.down = false;
// });

//___________________get keyboard input___________________
// ⇦73   ⇨39   ⇧38   ⇩40    W87   A65   S83   D68    spacebar 32
// const keys = [];
// document.onkeydown = event => {
// 	keys[event.keyCode] = true;
// 	console.log(event.keyCode);
// }
// document.onkeyup = event => {
// 	keys[event.keyCode] = false;
// }

//___________________new key input method___________________
let left = false;
let right = false;
let up = false;
let down = false;

window.addEventListener("keyup", function (event) {
  switch (event.code) {
    case "ArrowRight":
      right = false;
      break;
    case "ArrowLeft":
      left = false;
      break;
    case "ArrowUp":
      up = false;
      break;
    case "ArrowDown":
      down = false;
      break;
  }
});

window.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowRight":
      right = true;
      break;
    case "ArrowLeft":
      left = true;
      break;
    case "ArrowUp":
      up = true;
      break;
    case "ArrowDown":
      down = true;
      break;
  }
});

//___________________animation loop ___________________

var img = new Image(); // Create new img element
img.addEventListener(
  "load",
  function () {
    // execute drawImage statements here
  },
  false
);
img.src ="japanesesoldier.jpeg"//"https://pbs.twimg.com/profile_images/568482035241463808/HJlJ4w25.png" //"https://www.treehugger.com/thmb/Oj9b_bSY1KCRiYT-Q67zdlxigoU=/644x439/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2014__03__Dwarf-epauletted-fruit-bat-a4e1590e0ba74b75a33415600c5db4e3.jpg"; // Set source path

var yellow = new Image(); // Create new img element
img.addEventListener(
  "load",
  function () {
    // execute drawImage statements here
  },
  false
);
yellow.src
="yellowriver.jpg"

var shek = new Image(); // Create new img element
img.addEventListener(
  "load",
  function () {
    // execute drawImage statements here
  },
  false
);

shek.src="jiang jieshi.jpg"

const thing = {
  x: canvas.width / 2,
  y: 200,
};


let time = 0;
function cycle() {
  time += 0.01;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const speed = 4
  if (up) thing.y -= speed;
  if (down) thing.y += speed;
  if (left) thing.x -= speed;
  if (right) thing.x += speed;

ctx.drawImage(yellow, 0,0)

  ctx.drawImage(shek, 0,200)

 
  ctx.drawImage(img, thing.x, thing.y); //draw image!!!

  if (thing.x<100 && thing.y >100){

    setTimeout(() => {
  playSound("music")

}, 10);

    ctx.drawImage(shek, 350,100)
  }
  
  requestAnimationFrame(cycle);
}
requestAnimationFrame(cycle);
