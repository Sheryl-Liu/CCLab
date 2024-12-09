let seaSound;

function preload() {
  seaSound = loadSound("assets/sea.wav");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  for (let i = 0; i < 80; i += 10) {
    drawWave(i)
  }
}


function drawWave(position) {
  background(0, 100, 200, 100);
  stroke(250)
  strokeWeight(20)
  for (let x = 0; x < width; x++) {
    let length = mouseX / width
    constrain(length, 5, 10)
    let freq = (x * 0.02 + frameCount * 0.01) * length;
    let amp = 10 + mouseY / 10;
    constrain(amp, 10, 150)
    let sinValue = sin(freq) * amp;
    let y = height * 0.6 + sinValue + position;
    ellipse(x, y, 2, 2);
  }
}

function mousePressed() {
  seaSound.loop();
}