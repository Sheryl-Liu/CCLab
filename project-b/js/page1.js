let r = 300;
let position;
let bg;
let inCanvas = true
let stars = []

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < 100; i++) {
    stars.push(new Star(random(width), random(height / 2), random(1, 3), random(1, 4)))
  }
}

function draw() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    inCanvas = true
    position = map(mouseX, -10, width, -0.1, 1);
    constrain(position, 0, 1);
    bg = lerpColor(color(240, 250, 255), color(10, 10, 30), position - 0.25);
    background(bg);
  }
  else if (mouseX >= width && mouseY >= 0 && mouseY <= height) {
    inCanvas - false
    position = 1
    background(10, 10, 10)
  }

  if (position > 0.5) {
    drawStars()
  }

  push();
  translate(width / 2, height / 2 + 120);
  let angleSun = map(position, 0, 1, -PI, PI);
  let sunX = cos(angleSun) * r;
  let sunY = sin(angleSun) * r;
  sun(sunX, sunY);

  let angeleMoon = map(position, 0, 1, 0, 2 * PI);

  let moonX = cos(angeleMoon) * r;
  let moonY = sin(angeleMoon) * r;
  moon(moonX, moonY);
  pop();

  land();
}

function sun(x, y) {
  fill(255, 204, 0);
  noStroke();
  ellipse(x, y, 50, 50);
}

function moon(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 50, 50);
}

function land() {
  fill(64, 135, 50);
  noStroke();
  rect(0, height / 2 + 80, width, 600);
}

function drawStars() {
  noStroke();
  fill(255);
  for (let star of stars) {
    ellipse(star.x, star.y, star.size, star.size);
  }
}

class Star {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
}