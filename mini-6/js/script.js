let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  //createCanvas(500, 400);
  background(0);

  for (let i = 0; i < 100; i++) {
    let x = width / 2;
    let y = height / 2;
    let r = random(2.5, 5);
    particles.push(new Particle(x, y, r));
  }
}

function draw() {
  let alpha = map(mouseX, 0, width/2 , 50, 0);
  background(0, alpha);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.reappear();
    p.display();
  }
}

class Particle {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.angle = random(2 * PI);
    this.speed = random(0.01, 0.02);
    this.distance = 1;
    this.rad = rad;
    this.r = random(120, 180);
    this.g = random(180, 200);
    this.b = random(180, 255);
  }

  move() {
    this.angle += this.speed;
    this.distance += 0.2;
    this.x += this.distance * cos(this.angle);
    this.y = height / 2 + this.distance * sin(this.angle) * 1.75;
  }

  reappear() {
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = width / 2;
      this.y = height / 2;
      this.distance = 1;
      this.angle = random(100,200);
    }
  }

  display() {
    push();
    noStroke();
    fill(this.r, this.g, this.b, 150);
    circle(this.x, this.y, this.rad * 2);
    pop();
  }
}
