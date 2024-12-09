let fireSound;
let waterSound;

function preload() {
  fireSound = loadSound("assets/campfire.wav");
  waterSound = loadSound("assets/waterdrop.wav");
}


function mousePressed() {
  if (waterSound.isLoaded()) {
    waterSound.play();
  }
}

let flames = [];
let water = []
let waterSpeed = 5

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  noStroke();
  fireSound.loop();
  fireSound.setVolume(15)
  waterSound.setVolume(0.45)
}

function draw() {
  background(0, 100);

  //flame
  if (frameCount % 60 === 0) {
    flames.push(
      new Flame(random(50, width - 50), height * 0.9, random(0, 1))
    );
  }
  for (let i = 0; i < flames.length; i++) {
    let flame = flames[i];
    flame.display();
    flame.update();
  }

  //water
  if (mouseIsPressed && frameCount % 5 === 0) {
    water.push(new Water(mouseX, 0))
  }

  for (let i = water.length - 1; i >= 0; i--) {
    let water_ = water[i]
    water_.update()
    water_.display()
    for (let j = flames.length - 1; j >= 0; j--) {
      let flame = flames[j]
      if (dist(water_.x, water_.y, flame.x, flame.y) < 50) {
        flames.splice(j, 1)
        water.splice(j, 1)
        break
      }
    }
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
    if (this.scale > 1.5) this.scale = 1.5;
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

class Water {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = random(0.1, 0.3)
  }
  update() {
    this.y += waterSpeed
    constrain(this.y, 5, 20)
  }
  display() {
    fill(170, 220, 230)
    drawFlame(this.x, this.y, this.size)
  }
}