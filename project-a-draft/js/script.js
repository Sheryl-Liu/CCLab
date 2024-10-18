let r = 255;
let g = 255;
let b = 255;
let tran = 105;
let Sky = "False";
let R = 20;
let G = 20;
let B = 20;

function setup() {
  let canvas= createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
}

function draw() {
  //console.log(mouseX, mouseY);
  sky();
  mountain();
  bubble();
  rising_bubbles();
}

function sky() {
  if (Sky == "True") {
    background(0);
    let resolution = 5;
    for (let y = 0; y < height; y += resolution) {
      for (let x = 0; x < width; x += resolution) {
        let freq1 = x * 0.005 + frameCount * 0.01;
        let freq2 = y * 0.01 + frameCount * 0.005;
        let noiseValue = noise(freq1, freq2);
        let color = map(noiseValue, 0, 1, 0, 255);
        fill(color, 150, 200, 500);
        rect(x, y, resolution, resolution);
      }
    }
  } else {
    background(220);
    let dia = 10;
    fill(255, 0, 0);
    circle(50, 10, dia);
    fill(255, 102, 0);
    circle(120, 10, dia);
    fill(255, 255, 0);
    circle(190, 10, dia);
    fill(0, 153, 51);
    circle(260, 10, dia);
    fill(0, 200, 250);
    circle(330, 10, dia);
    fill(255, 0, 200);
    circle(400, 10, dia);
    fill(153, 0, 204);
    circle(470, 10, dia);
    fill(100, 60, 60);
    circle(540, 10, dia);
    fill(0, 0, 0);
    circle(610, 10, dia);
    fill(255, 255, 255);
    stroke(0);
    strokeWeight(0.5);
    circle(680, 10, dia);
  }
}

function mountain() {
  noStroke();
  fill(r, g, b, 105);
  bezier(-190, 630, 80, 120, 281, 139, 670, 500);
  fill(r - 130, g - 130, b - 130, 155);
  bezier(240, 521, 565, 228, 720, 259, 920, 500);
  fill(r - 150, g - 150, b - 150, 205);
  bezier(-60, 530, 125, 352, 180, 352, 393, 500);
}

function bubble() {
  if (Sky == "True") {
    fill(R, G, B, 150);
    let x = mouseX;
    let y = mouseY;
    let sinValueDia = sin(frameCount * 0.2);
    let dia = map(sinValueDia, -1, 1, 40, 60);
    circle(x, y, dia);
    if (dist(50, 10, x, y) <= 20) {
      (R = 255), (G = 0), (B = 0);
    } else if (dist(120, 10, x, y) <= 20) {
      (R = 255), (G = 102), (B = 0);
    } else if (dist(190, 10, x, y) <= 20) {
      (R = 255), (G = 255), (B = 0);
    } else if (dist(260, 10, x, y) <= 20) {
      (R = 0), (G = 153), (B = 51);
    } else if (dist(330, 10, x, y) <= 20) {
      (R = 0), (G = 200), (B = 250);
    } else if (dist(400, 10, x, y) <= 20) {
      (R = 255), (G = 0), (B = 200);
    } else if (dist(470, 10, x, y) <= 20) {
      (R = 153), (G = 0), (B = 204);
    } else if (dist(540, 10, x, y) <= 20) {
      (R = 100), (G = 60), (B = 60);
    } else if (dist(610, 10, x, y) <= 20) {
      (R = 0), (G = 0), (B = 0);
    } else if (dist(680, 10, x, y) <= 20) {
      (R = 255), (G = 255), (B = 255);
    }
  }
}

function rising_bubbles() {
  let amplitude;
  for (i = 1; i < 15; i++) {
    fill(255);
    let frequent = frameCount * 0.05;
    if (i % 4 == 0) {
      amplitude = 20 + i * 40;
    } else if (i % 4 == 1) {
      amplitude = 90 - i * 20;
    } else if (i % 4 == 2) {
      amplitude = 60 + i * 15;
    } else {
      amplitude = 50 - i * 30;
    }
    let sinValue = sin(frequent) * amplitude;
    let x = (frameCount % width) * 5 - i * 200;
    let ySine = (1 / 2) * height + sinValue;
    ellipse(x, ySine, 30, 30);
  }
}

function mouseClicked() {
  if (r === 255 && g === 255 && b === 255) {
    r = 0;
    g = 0;
    b = 0;
    Sky = "True";
  }
  else{r = 255, g=255,b = 255, Sky="False"}
}
