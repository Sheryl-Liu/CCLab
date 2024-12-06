let img;
let angle = 0;
let distance = 120;

let gua1, gua2, gua3, gua4, gua5, gua6, gua7, gua8;

function preload() {
  img = loadImage("assets/Taichi.svg");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  gua1 = new Gua1(width / 2, height / 2);
  gua2 = new Gua2(width / 2, height / 2);
  gua3 = new Gua3(width / 2, height / 2);
  gua4 = new Gua4(width / 2, height / 2);
  gua5 = new Gua5(width / 2, height / 2);
  gua6 = new Gua6(width / 2, height / 2);
  gua7 = new Gua7(width / 2, height / 2);
  gua8 = new Gua8(width / 2, height / 2);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(angle);
  imageMode(CENTER);
  image(img, 0, 0);
  if (frameCount >= 30) {
    angle += 0.008;
  }

  gua1.display();
  gua2.display();
  gua3.display();
  gua4.display();
  gua5.display();
  gua6.display();
  gua7.display();
  gua8.display();
}

function mousePressed() {
  let mousex = (mouseX - width / 2) * cos(-angle) - (mouseY - height / 2) * sin(-angle) + width / 2;
  let mousey = (mouseX - width / 2) * sin(-angle) + (mouseY - height / 2) * cos(-angle) + height / 2;

  let gua1x = width / 2;
  let gua1y = height / 2 - distance;
  if (dist(mousex, mousey, gua1x, gua1y) < 50) {
    gua1.change();
  }

  let gua2x = width / 2;
  let gua2y = height / 2 + distance;
  if (dist(mousex, mousey, gua2x, gua2y) < 50) {
    gua2.change();
  }

  let gua3x = width / 2 + distance * cos(3* PI / 4);
  let gua3y = height / 2 + distance * sin(3* PI / 4);
  if (dist(mousex, mousey, gua3x, gua3y) < 50) {
    gua3.change();
  }

  let gua4x = width / 2 + distance * cos(- PI / 4);
  let gua4y = height / 2 + distance * sin(- PI / 4);
  if (dist(mousex, mousey, gua4x, gua4y) < 50) {
    gua4.change();
  }

  let gua5x = width / 2 + distance;
  let gua5y = height / 2;
  if (dist(mousex, mousey, gua5x, gua5y) < 50) {
    gua5.change();
  }

  let gua6x = width / 2 - distance;
  let gua6y = height / 2;
  if (dist(mousex, mousey, gua6x, gua6y) < 50) {
    gua6.change();
  }

  let gua7x = width / 2 + distance * cos(PI / 4);
  let gua7y = height / 2 + distance * sin(PI / 4);
  if (dist(mousex, mousey, gua7x, gua7y) < 50) {
    gua7.change();
  }

  let gua8x = width / 2 + distance * cos(-3*PI / 4);
  let gua8y = height / 2 + distance * sin(-3*PI / 4);
  if (dist(mousex, mousey, gua8x, gua8y) < 50) {
    gua8.change();
  }
}


class Gua1 {
  constructor(angleGua) {
    this.angleGua = 0;
    this.distance = 120;
    this.color = color(250, 200);
  }
  change() {
    this.color = color(255, 100, 0);
    setTimeout(function(){
      window.open("page1.html", "_self");
    }, 800);   
  }
  display() {
    push();
    stroke(this.color);
    strokeWeight(5);
    translate(0, -this.distance);
    for (let i = 0; i < 3; i++) {
      line(-20, -10 * (2 + i), 20, -10 * (2 + i));
    }
    pop();
  }
}

class Gua2 {
  constructor(angleGua) {
    this.angleGua = 0;
    this.distance = 120;
    this.color = color(250, 200);
  }
  change() {
    this.color = color(255, 200, 0);
    setTimeout(function(){
      window.open("page2.html", "_self");
    }, 800);
  }
  display() {
    push();
    stroke(this.color);
    strokeWeight(5);
    translate(0, distance);
    for (let i = 0; i < 3; i++) {
      line(-20, 10 * (2 + i), -10, 10 * (2 + i));
      line(10, 10 * (2 + i), 20, 10 * (2 + i));
    }
    pop();
  }
}

class Gua3 {
  constructor(angleGua) {
    this.angleGua = 0;
    this.distance = 120;
    this.color = color(250, 200);
  }
  change() {
    this.color = color(205, 200, 0);
    setTimeout(function(){
      window.open("page3.html", "_self");
    }, 800);
  }
  display() {
    push();
    stroke(this.color);
    strokeWeight(5);
    rotate(this.angleGua + 0.75 * PI);
    translate(distance, 0);
    for (let i = 1; i < 3; i++) {
      line(10 * (2 + i), -20, 10 * (2 + i), -10);
      line(10 * (2 + i), 10, 10 * (2 + i), 20);
    }
    line(20, -20, 20, 20);
    pop();
  }
}

class Gua4 {
  constructor(angleGua) {
    this.angleGua = 0;
    this.distance = 120;
    this.color = color(250, 200);
  }
  change() {
    this.color = color(105, 200, 0);
    setTimeout(function(){
      window.open("page4.html", "_self");
    }, 800);
  }
  display() {
    push();
    stroke(this.color);
    strokeWeight(5);
    rotate(this.angleGua - 0.25 * PI);
    translate(distance, 0);
    for (let i = 0; i < 1; i++) {
      line(10 * (2 + i), -20, 10 * (2 + i), -10);
      line(10 * (2 + i), 10, 10 * (2 + i), 20);
    }
    line(30, -20, 30, 20);
    line(40, -20, 40, 20);
    pop();
  }
}

class Gua5 {
  constructor(angleGua) {
    this.angleGua = 0;
    this.distance = 120;
    this.color = color(250, 200);
  }
  change() {
    this.color = color(0, 100, 200);
    setTimeout(function(){
      window.open("page5.html", "_self");
    }, 800);
  }
  display() {
    push();
    stroke(this.color);
    strokeWeight(5);
    translate(distance, 0);
    for (let i = 0; i < 3; i += 2) {
      line(10 * (2 + i), -20, 10 * (2 + i), -10);
      line(10 * (2 + i), 10, 10 * (2 + i), 20);
    }
    line(30, -20, 30, 20);
    pop();
  }
}

class Gua6 {
  constructor(angleGua) {
    this.angleGua = 0;
    this.distance = 120;
    this.color = color(250, 200);
  }
  change() {
    this.color = color(0, 200, 100);
    setTimeout(function(){
      window.open("page6.html", "_self");
    }, 800);
  }
  display() {
    push();
    stroke(this.color);
    strokeWeight(5);
    translate(-distance, 0);
    for (let i = 1; i < 2; i++) {
      line(-10 * (2 + i), -20, -10 * (2 + i), -10);
      line(-10 * (2 + i), 10, -10 * (2 + i), 20);
    }
    line(-20, -20, -20, 20);
    line(-40, -20, -40, 20);
    pop();
  }
}

class Gua7 {
  constructor(angleGua) {
    this.angleGua = 0;
    this.distance = 120;
    this.color = color(250, 200);
  }
  change() {
    this.color = color(10, 10, 200);
    setTimeout(function(){
      window.open("page7.html", "_self");
    }, 800);
  }
  display() {
    push();
    stroke(this.color);
    strokeWeight(5);
    rotate(this.angleGua + 0.25 * PI);
    translate(distance, 0);
    for (let i = 0; i < 2; i++) {
      line(10 * (2 + i), -20, 10 * (2 + i), -10);
      line(10 * (2 + i), 10, 10 * (2 + i), 20);
    }
    line(40, -20, 40, 20);
    pop();
  }
}

class Gua8 {
  constructor(angleGua) {
    this.angleGua = 0;
    this.distance = 120;
    this.color = color(250, 200);
  }
  change() {
    this.color = color(100, 0, 220);
    setTimeout(function(){
      window.open("page8.html", "_self");
    }, 800);
  }
  display() {
    push();
    stroke(this.color);
    strokeWeight(5);
    rotate(this.angleGua - 0.75 * PI);
    translate(distance, 0);
    for (let i = 2; i < 3; i++) {
      line(10 * (2 + i), -20, 10 * (2 + i), -10);
      line(10 * (2 + i), 10, 10 * (2 + i), 20);
    }
    line(20, -20, 20, 20);
    line(30, -20, 30, 20);
    pop();
  }
}
