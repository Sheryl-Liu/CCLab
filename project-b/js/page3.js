let rainSound;
let thunderSound;

function preload() {
  rainSound = loadSound("assets/rain-and-thunder-storm.wav");
  thunderSound = loadSound("assets/explosion-hit-1704.wav");
}
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  noStroke();

  rainSound.loop();
  rainSound.setVolume(1.5)
  thunderSound.setVolume(0.1)
}

function draw() {
  background(0, 0, 0, 20);
  bg()
  if (mouseIsPressed) {
    thunder(mouseX, 0, random(1, 5));
  }
}

function mousePressed() {
  if (thunderSound.isLoaded()) {
    thunderSound.play();
  }
}

function thunder(x, y, length) {
  let xStart = x;
  let yStart = 0;

  stroke(255);
  strokeWeight(random(3, 8));
  for (let i = 0; i < length; i++) {
    let xEnd = xStart + random(-300, 300);
    let yEnd = yStart + random(20, 200);
    line(xStart, yStart, xEnd, yEnd);

    xStart = xEnd;
    yStart = yEnd;
  }
}

function bg() {
  let resolution = 5;
  for (let y = 0; y < height; y += resolution) {
    for (let x = 0; x < width; x += resolution) {
      let freq1 = x * 0.005 + frameCount * 0.01;
      let freq2 = y * 0.01 + frameCount * 0.005;
      let noiseValue = noise(freq1, freq2);
      let color = map(noiseValue, 0, 1, 0, 195);
      fill(10, 30, color);
      noStroke();
      rect(x, y, resolution, resolution);
    }
  }
}