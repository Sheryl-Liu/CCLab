/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  //createCanvas(windowWidth, windowHeight);
  dancer = new SherylDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  //drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

class SherylDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.r = 250;
    this.b = 0;
    this.movementX =0
    this.movementY = 0;
  }
  update() {
    this.r = map(sin(frameCount * 0.01), -1, 1, 10, 255);
    this.b = map(mouseY, height / 3, (height * 2) / 3, 100, 250); 
    if (mouseIsPressed){
      this.movementX= cos(frameCount * 0.13) * 15;
      this.movementY = sin(frameCount * 0.13) * 80;
    }else {
      this.movementY = sin(frameCount * 0.13) * 15;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    this.drawStar(0, 0, 100, 50);
    this.drawEyes(-15, -10, 5);
    this.drawEyes(20, 0, 5);
    this.drawFace();
    //this.drawReferenceShapes();

    pop();
  }

  drawStar(x, y, convex, concave) {
    push();
    translate(x, y);
    noStroke();
    fill(this.r, 200, this.b);
    beginShape();
    for (let angle = 0; angle <= 2 * PI; angle += PI / 5) {
      let xConvex = cos(angle) * convex;
      let yConvex = sin(angle) * convex;
      curveVertex(xConvex+this.movementX, yConvex + this.movementY);
      angle += PI / 5;
      let xConcave = cos(angle) * concave;
      let yConcave = sin(angle) * concave;
      curveVertex(xConcave+this.movementX, yConcave + this.movementY / 2);
    }
    endShape(CLOSE);
    pop();
  }

  drawEyes(x, y, dia) {
    fill(0);
    circle(x+this.movementX, y + (this.movementY * 2) / 3, dia);
  }
  drawFace() {
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(0+this.movementX, 0+ (this.movementY * 2) / 3, 20, 25, 0 + (1 / 5) * PI, PI - (1 / 5) * PI, OPEN);
    line(-18+this.movementX,-25+(this.movementY * 2) / 3,-8+this.movementX,-20+(this.movementY * 2) / 3)
    line(18+this.movementX,-15+(this.movementY * 2) / 3,28+this.movementX,-20+(this.movementY * 2) / 3)
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}




/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. 
In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside 
  (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/