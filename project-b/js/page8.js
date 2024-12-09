let img;
let speed = 0;
let trans = 0;
let clr;
let buddhaClr;

function preload() {
  img = loadImage("assets/buddha.webp");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(0, 0, 0, 50);
  trans = map(speed, 0, 150, 10, 255);
  if (mouseIsPressed) {
    speed++;
    clr = color(200, 150, 10, 200);
    buddhaClr = color(200, 100, 10, trans);
  } else if (speed === 0) {
    clr = color(200, 100, 10, 0);
    buddhaClr = color(200, 100, 10, trans);
  } else {
    speed -= 1.5;
    clr = color(100, 180, 180, 150);
    buddhaClr = lerpColor(
      color(100, 180, 180),
      color(200, 100, 10, 200),
      trans/255
    );
  }
  speed = constrain(speed, 0, 150);
  breathe();
  drawImage();
}

function drawImage() {
  img.resize(500, 500);
  img.loadPixels();
  noFill();
  stroke(buddhaClr);
  strokeWeight(1);

  for (let x = 1; x < img.width - 1; x++) {
    for (let y = 1; y < img.height - 1; y++) {
      let index = (x + y * img.width) * 4;
      let colorValue = img.pixels[index];
      if (colorValue < 128) {
        point(x + (width - img.width) / 2, y + (height - img.height) / 2);
      }
    }
  }
}

function breathe() {
  noFill();
  stroke(clr);
  strokeWeight(8);
  push();
  translate(width / 2, height / 2 + 12);
  circle(0, 0, 300 + speed);
  pop();
}