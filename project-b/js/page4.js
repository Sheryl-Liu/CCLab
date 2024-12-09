let images = [];
let index = 0, nextIndex = 0;
let nowOpa = 255
let nextOpa = 0
let change = false

function preload() {
  images[0] = loadImage("assets/spring.jpeg");
  images[1] = loadImage("assets/summer.jpeg");
  images[2] = loadImage("assets/autumn.jpeg");
  images[3] = loadImage("assets/winter.jpeg");
}

function setup() {
  let canvas = createCanvas(800, 650);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
}

function draw() {
  background(0);

  let nowImg = images[index]
  showImg(nowImg, nowOpa)

  let nextImg = images[nextIndex];
  showImg(nextImg, nextOpa)

  if (change) {
    nowOpa -= 5;
    nextOpa += 5;

    if (nowOpa <= 0) {
      nowImg = 0
      change = false
      index = nextIndex
    }
  }
}

function showImg(img, opacity) {
  let imgRatio = img.width / img.height;
  let canvasRatio = width / height;
  let Width, Height;

  if (imgRatio > canvasRatio) {
    Width = width;
    Height = width / imgRatio;
  } else {
    Width = height * imgRatio;
    Height = height;
  }
  tint(255, opacity)
  image(img, width / 2, height / 2, Width, Height);
  noTint()
}

function mousePressed() {
  if (!change) {
    nextIndex = (index + 1) % images.length;
    change = true
    nowOpa = 255
    nextOpa = 0
  }
}

