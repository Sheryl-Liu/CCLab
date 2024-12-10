let img;
let angle = 0;
let distance = 120;

let guas = [];

function preload() {
  img = loadImage("assets/Taichi.svg");
}

function setup() {
  let canvas = createCanvas(1000, 600);
  canvas.parent("p5-canvas-container");

  let guaColors = [
    color(220, 100, 0),
    color(255, 220, 0),
    color(100, 220, 0),
    color(10, 220, 220),
    color(150, 0, 150),
    color(220, 10, 10),
    color(140, 70, 20),
    color(220, 220, 220)
  ];

  for (let i = 0; i < 8; i++) {
    let gua = new Gua(i + 1, guaColors[i]);
    guas.push(gua);
  }
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

  mouseHover();

  for (let i = 0; i < guas.length; i++) {
    let gua = guas[i];
    gua.display();
  }
}

function mouseHover() {
  let mousex = (mouseX - width / 2) * cos(-angle) - (mouseY - height / 2) * sin(-angle) + width / 2;
  let mousey = (mouseX - width / 2) * sin(-angle) + (mouseY - height / 2) * cos(-angle) + height / 2;

  let gua1x = width / 2;
  let gua1y = height / 2 - distance;
  if (dist(mousex, mousey, gua1x, gua1y) < 50) {
    guas[0].change();
  } else {
    guas[0].resetColor();
  }

  let gua2x = width / 2;
  let gua2y = height / 2 + distance;
  if (dist(mousex, mousey, gua2x, gua2y) < 50) {
    guas[1].change();
  } else {
    guas[1].resetColor();
  }

  let gua3x = width / 2 + distance * cos(3 * PI / 4);
  let gua3y = height / 2 + distance * sin(3 * PI / 4);
  if (dist(mousex, mousey, gua3x, gua3y) < 50) {
    guas[2].change();
  } else {
    guas[2].resetColor();
  }

  let gua4x = width / 2 + distance * cos(- PI / 4);
  let gua4y = height / 2 + distance * sin(- PI / 4);
  if (dist(mousex, mousey, gua4x, gua4y) < 50) {
    guas[3].change();
  } else {
    guas[3].resetColor();
  }

  let gua5x = width / 2 + distance;
  let gua5y = height / 2;
  if (dist(mousex, mousey, gua5x, gua5y) < 50) {
    guas[4].change();
  } else {
    guas[4].resetColor();
  }

  let gua6x = width / 2 - distance;
  let gua6y = height / 2;
  if (dist(mousex, mousey, gua6x, gua6y) < 50) {
    guas[5].change();
  } else {
    guas[5].resetColor();
  }

  let gua7x = width / 2 + distance * cos(PI / 4);
  let gua7y = height / 2 + distance * sin(PI / 4);
  if (dist(mousex, mousey, gua7x, gua7y) < 50) {
    guas[6].change();
  } else {
    guas[6].resetColor();
  }

  let gua8x = width / 2 + distance * cos(-3 * PI / 4);
  let gua8y = height / 2 + distance * sin(-3 * PI / 4);
  if (dist(mousex, mousey, gua8x, gua8y) < 50) {
    guas[7].change();
  } else {
    guas[7].resetColor();
  }
}

function mousePressed() {
  let mousex = (mouseX - width / 2) * cos(-angle) - (mouseY - height / 2) * sin(-angle) + width / 2;
  let mousey = (mouseX - width / 2) * sin(-angle) + (mouseY - height / 2) * cos(-angle) + height / 2;

  let gua1x = width / 2;
  let gua1y = height / 2 - distance;
  if (dist(mousex, mousey, gua1x, gua1y) < 50) {
    guas[0].movePage();
  }

  let gua2x = width / 2;
  let gua2y = height / 2 + distance;
  if (dist(mousex, mousey, gua2x, gua2y) < 50) {
    guas[1].movePage();
  }

  let gua3x = width / 2 + distance * cos(3 * PI / 4);
  let gua3y = height / 2 + distance * sin(3 * PI / 4);
  if (dist(mousex, mousey, gua3x, gua3y) < 50) {
    guas[2].movePage();
  }

  let gua4x = width / 2 + distance * cos(- PI / 4);
  let gua4y = height / 2 + distance * sin(- PI / 4);
  if (dist(mousex, mousey, gua4x, gua4y) < 50) {
    guas[3].movePage();
  }

  let gua5x = width / 2 + distance;
  let gua5y = height / 2;
  if (dist(mousex, mousey, gua5x, gua5y) < 50) {
    guas[4].movePage();
  }

  let gua6x = width / 2 - distance;
  let gua6y = height / 2;
  if (dist(mousex, mousey, gua6x, gua6y) < 50) {
    guas[5].movePage();
  }

  let gua7x = width / 2 + distance * cos(PI / 4);
  let gua7y = height / 2 + distance * sin(PI / 4);
  if (dist(mousex, mousey, gua7x, gua7y) < 50) {
    guas[6].movePage();
  }

  let gua8x = width / 2 + distance * cos(-3 * PI / 4);
  let gua8y = height / 2 + distance * sin(-3 * PI / 4);
  if (dist(mousex, mousey, gua8x, gua8y) < 50) {
    guas[7].movePage();
  }
}


class Gua {
  constructor(id, clr) {
    this.id = id;
    this.selected = boolean(localStorage.getItem("gua" + id));
    this.angleGua = 0;
    this.distance = 120;
    this.color = color(250, 200);
    this.hoverColor = clr;
    this.orginalColor = color(250, 200);
    if (this.selected == true) {
      this.orginalColor = clr;
    }
  }
  change() {
    this.color = color(255, 100);
    if (this.selected == true) {
      let r = red(this.orginalColor);
      let g = green(this.orginalColor);
      let b = blue(this.orginalColor);
      this.color = color(r, g, b, 120);
    }
  }
  resetColor() {
    this.color = this.orginalColor;
  }
  movePage() {
    localStorage.setItem("gua" + this.id, "true"); // ***
    window.open("page" + this.id + ".html", "_self");
  }
  display() {
    if (this.id == 1) {
      this.display1();
    }
    else if (this.id == 2) {
      this.display2();
    }
    else if (this.id == 3) {
      this.display3();
    }
    else if (this.id == 4) {
      this.display4();
    }
    else if (this.id == 5) {
      this.display5();
    }
    else if (this.id == 6) {
      this.display6();
    }
    else if (this.id == 7) {
      this.display7();
    }
    else if (this.id == 8) {
      this.display8();
    }
  }
  display1() {
    push();
    stroke(this.color);
    strokeWeight(5);
    translate(0, -this.distance);
    for (let i = 0; i < 3; i++) {
      line(-20, -10 * (2 + i), 20, -10 * (2 + i));
    }
    pop();
  }
  display2() {
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
  display3() {
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
  display4() {
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
  display5() {
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
  display6() {
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
  display7() {
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
  display8() {
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
