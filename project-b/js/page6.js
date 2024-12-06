let flames = [];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  noStroke();
}

function draw() {
  background(0, 100);
  if (frameCount % 30 === 0) {
    flames.push(
      new Flame(random(50, width - 50), height * 0.9, random(0, 0.01))
    );
  }
  for (let i = 0; i < flames.length; i++) {
    let flame = flames[i];
    flame.display();
    flame.update();
  }
}

function drawFlame(x, y, scl) {
  push();
  translate(x, y);
  scale(scl);
  beginShape();
  curveVertex(-15 + random(-5, 5), -100 + random(-5, 5));
  curveVertex(0 + random(-2, 2), -70 + random(-6, 6));
  curveVertex(25 + random(-3, 3), -15 + random(-2, 2));
  curveVertex(10 + random(-2, 2), 15 + random(-6, 6));
  curveVertex(-10 + random(-5, 5), 15 + random(-3, 3));
  curveVertex(-25 + random(-5, 5), -15 + random(-2, 2));
  endShape(CLOSE);
  pop();
}

class Flame {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.scale = scale;
  }
  update() {
    this.scale += random(-0.05, 0.1);
    if (this.scale < 0.1) this.scale = 0.1;
    if (this.scale > 1) this.scale = 1;
  }
  display() {
    fill(235, 80, 0, 170);
    drawFlame(this.x, this.y, this.scale);
    fill(255, 150, 50, 200);
    drawFlame(this.x, this.y + 5, this.scale * 0.7);
    fill(255, 200, 0, 250);
    drawFlame(this.x, this.y + 10, this.scale * 0.45);
  }
}