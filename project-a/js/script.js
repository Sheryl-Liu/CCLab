let emotion = "none";
let n = 5;
let yPink = [];
let pinkSpeed = [];
let mouseActive = false;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  angleMode(DEGREES);

  //button
  let btnAngry = createButton("angry😡");
  btnAngry.mousePressed(emotionAngry);
  btnAngry.parent("p5-canvas-container");

  let btnEnergetic = createButton("energetic🌟");
  btnEnergetic.mousePressed(emotionEnergetic);
  btnEnergetic.parent("p5-canvas-container");

  let btnHappy = createButton("happy🥳");
  btnHappy.mousePressed(emotionHappy);
  btnHappy.parent("p5-canvas-container");

  let btnPeaceful = createButton("peaceful🏞️");
  btnPeaceful.mousePressed(emotionPeaceful);
  btnPeaceful.parent("p5-canvas-container");

  let btnSad = createButton("sad😢");
  btnSad.mousePressed(emotionSad);
  btnSad.parent("p5-canvas-container");

  let btnSweet = createButton("sweet💖!!!");
  btnSweet.mousePressed(emotionSweet);
  btnSweet.parent("p5-canvas-container");

  let btnConfident = createButton("confident🔮");
  btnConfident.mousePressed(emotionConfident);
  btnConfident.parent("p5-canvas-container");

  let btnSophisticated = createButton("sophisticated🗿");
  btnSophisticated.mousePressed(emotionSophisticated);
  btnSophisticated.parent("p5-canvas-container");

  let btnEmpty = createButton("empty🌫️");
  btnEmpty.mousePressed(emotionEmpty);
  btnEmpty.parent("p5-canvas-container");

  let btnChangedMind = createButton("Hey! I changed my mind.🤡");
  btnChangedMind.mousePressed(emotionChangedMind);
  btnChangedMind.parent("p5-canvas-container");

  for (let i = 0; i < 11; i++) {
    yPink[i] = height;
    pinkSpeed[i] = random(0.5, 2);
  }
}

function draw() {
  if (emotion == "none") {
    startPage();
  } else if (emotion == "angry") {
    drawBGAngry();
  } else if (emotion == "energetic") {
    drawBGEnergetic();
  } else if (emotion == "happy") {
    drawBGHappy();
  } else if (emotion == "peaceful") {
    drawBGPeaceful();
  } else if (emotion == "sad") {
    drawBGSad();
  } else if (emotion == "sweet") {
    drawBGSweet();
  } else if (emotion == "confident") {
    drawBGConfident();
  } else if (emotion == "sophisticated") {
    drawBGSophisticated();
  } else if (emotion == "empty") {
    drawBGEmpty();
  }

  if (emotion != "none") {
    drawCreature(width / 2, height / 2, 125);
  }
}

function mousePressed() {
  if (mouseY < height) {
    mouseActive = true;
  }
}

function mouseReleased() {
  mouseActive = false;
}

function drawCreature(x, y, rad) {
  let xAdj = 0;
  let yAdj = 0;

  push();
  translate(x, y);
  beginShape();
  for (let angle = 0; angle <= 350; angle += 10) {
    let radDist = rad;

    if (emotion == "angry") {
      radDist = rad + random(80);
      fill(250, 0, 0);
    } else if (emotion == "energetic") {
      let freq = angle + frameCount * 20;
      let value = sin(freq) * 5;
      radDist = rad + value;

      yAdj = sin(frameCount * 5) * 50;

      fill(225, 102, 0);
    } else if (emotion == "happy") {
      let freq = angle * 5 + frameCount * 15;
      let value = cos(freq) * 10;
      radDist = rad + value;
      fill(250, 200, 0);
    } else if (emotion == "peaceful") {
      let freq = frameCount + angle * 0.0000001;
      let sinValue = sin(freq) * 20;
      radDist = rad + sinValue;
      fill(0, 120, 0);
    } else if (emotion == "sad") {
      let freq = angle * 0.01 + frameCount * 0.01;
      let value = noise(freq) * 80;
      radDist = rad + value;
      fill(100, 170, 220);
    } else if (emotion == "sweet") {
      let freq = angle + frameCount * 1.2;
      let value = sin(freq) * 80;
      radDist = rad + value;
      fill(255, 220, 220);
    } else if (emotion == "confident") {
      rotate(radians(frameCount * 2));
      let freq = angle * 4 + frameCount * 30;
      let value = sin(freq) * 20;
      radDist = rad + value;

      if (mouseActive) {
        xAdj = 200;
        yAdj = 50;
      }
      fill(160, 130, 214);
    } else if (emotion == "sophisticated") {
      let freq = angle * 20 + frameCount * 10;
      let value = sin(freq) * 5;
      radDist = rad + value;
      fill(0, 0, 0, 230);
    } else if (emotion == "empty") {
      let freq = angle * 2 + frameCount * 10;
      let value = sin(freq) * 5;
      radDist = rad + value;

      if (mouseActive) {
        xAdj = sin(frameCount * 3) * 150;
      }

      fill(205);
    }

    let xPos = cos(angle) * radDist;
    let yPos = sin(angle) * radDist;
    noStroke();
    curveVertex(xPos + xAdj, yPos + yAdj);
  }
  endShape(CLOSE);
  pop();
}

function startPage() {
  //background(225);
  let resolution = 10;
  for (let y = 0; y < height; y += resolution) {
    for (let x = 0; x < width; x += resolution) {
      let freq1 = x * 0.005 + frameCount * 0.01;
      let freq2 = y * 0.01 + frameCount * 0.005;
      let noiseValue = noise(freq1, freq2);
      let color = map(noiseValue, 0, 1, 0, 255);
      fill(color, 150, 200, 500);
      noStroke();
      rect(x, y, resolution, resolution);
    }
  }

  //ripple
  let alpha = map(sin(frameCount * 3), -1, 1, 0, 255);
  fill(255, alpha);
  noStroke();
  let sinValueDia = sin(frameCount * 6);
  let dia = map(sinValueDia, -1, 1, 170, 230);
  circle(width / 2, height / 2 + 20, dia);

  //text
  fill(255);
  stroke(0);
  strokeWeight(1);
  textSize(30);
  text("What's your mood right now?🌈", 180, 100);
  textSize(15);
  text("click on the buttons below!⬇️", 300, 480);
}

// Background functions
function drawBGAngry() {
  background(120, 10, 10, 150);
  if (mouseActive) {
    background(random(100, 140), 10, 10, 150);
    let x = random(width);
    let y = random(height);

    noFill();
    strokeWeight(random(2, 6));
    stroke(200, 10, 10);
    line(width / 2, height / 2, x, y);
  }
}

function drawBGEnergetic() {
  background(255, 165, 10, 150);

  if (mouseActive) {
    //circle
    let sinValueDia = sin(frameCount * 0.2);
    let dia = map(sinValueDia, -1, 1, 45, 55);

    fill(0);
    stroke(255);
    strokeWeight(1);
    circle(width / 2, height / 2, dia);

    //lines
    let r = random(256);
    let g = random(256);
    let b = random(256);

    let rad = random(60, 150);
    let angle = random(360);
    let x = width / 2 + cos(angle) * rad;
    let y = height / 2 + sin(angle) * rad;
    X = x + cos(angle) * rad;
    Y = y + sin(angle) * rad;

    stroke(r, g, b);
    strokeWeight(5.4);
    line(x, y, X, Y);

    fill(r, g, b, 100);
    if (X <= width / 2) {
      circle(X - 15, Y, 30);
    } else {
      circle(X + 15, Y, 30);
    }
  }
}

function drawBGHappy() {
  background(205, 25, 110);
  push();
  translate(width / 2, height / 2);
  if (mouseActive) {
    n += 0.1;

    for (i = 1; i < 4; i++) {
      for (j = 1; j < n; j += 1) {
        strokeWeight(1 + j * 0.8);
        noStroke();
        fill(200, 150, 25, 25);
        circle(0, 0, 50 * j);
      }
    }
  } else if (n >= 25) {
    n = 5;
  }
  pop();
}

function drawBGPeaceful() {
  let i = 0;
  if (mouseActive) {
    i += frameCount * 0.1;
    background(220 - i * 2, 240 - i, 210);
  } else if (220 - i * 2 < 100) {
    i = 0;
  } else {
    background(200, 245, 200);
  }
}

function drawBGSad() {
  if (mouseActive) {
    background(random(0, 100), 100, 245);
  }
  else{
     background(60, 100, 245);
    
  }
}

function drawBGSweet() {
  background(255, 182, 193);
  if (mouseActive) {
    for (let i = 0; i < 11; i++) {
      yPink[i] -= pinkSpeed[i];
      let xPink = 5 + i * 80;

      noStroke();
      fill(255, 220, 220, 200);
      ellipse(xPink, yPink[i], 30, 30);
      noFill();
      stroke(255, 200, 200, 100);
      bezier(
        xPink,
        yPink[i] + 15,
        xPink - 25,
        yPink[i] + 30,
        xPink + 25,
        yPink[i] + 15 + 20,
        xPink,
        yPink[i] + 15 + 40
      );
      strokeWeight(2);
      stroke(255);
      arc(xPink, yPink[i], 20, 20, PI - 0.05, (3 / 2) * PI);
      arc(xPink, yPink[i], 20, 20, 0.75 * PI, PI);
    }
  }
}

function drawBGConfident() {
  background(75, 0, 130, 66);
}

function drawBGSophisticated() {
  background(0);
  if (mouseActive) {
    background(230);
  }
}

function drawBGEmpty() {
  background(250);
}

// functions
// Emotion functions
function emotionAngry() {
  emotion = "angry";
}

function emotionEnergetic() {
  emotion = "energetic";
}

function emotionHappy() {
  emotion = "happy";
}

function emotionPeaceful() {
  emotion = "peaceful";
}

function emotionSad() {
  emotion = "sad";
}

function emotionSweet() {
  emotion = "sweet";
}

function emotionConfident() {
  emotion = "confident";
}

function emotionSophisticated() {
  emotion = "sophisticated";
}

function emotionEmpty() {
  emotion = "empty";
}

function emotionChangedMind() {
  emotion = "none";
}
