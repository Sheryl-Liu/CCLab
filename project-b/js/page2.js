let img;
let angle = 0
let speed = 0
let magicSound

function preload() {
  img = loadImage("assets/page2.jpeg");
  magicSound = loadSound("assets/magic.wav")
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(255)
  translate(width / 2, height / 2);
  rotate(angle)
  imageMode(CENTER);
  image(img, 0, 0);

  angle += speed

  if (mouseIsPressed) {
    speed += 0.01
  } else {
    speed *= 0.95
    if (speed < 0.001) {
      speed = 0
    }
  }
}

function mousePressed() {
  magicSound.play()
}