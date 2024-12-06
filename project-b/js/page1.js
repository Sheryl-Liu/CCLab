let r = 300;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  let position = map(mouseX, 0, width, 0, 1);
  constrain(position, 0, 1);
  let bg = lerpColor(color(240, 250, 255), color(10, 10, 30), position-0.25);
  background(bg);

  if (mouseX >= 0 && mouseX <= width) {
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
  }

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
