let images = [];
let Index = 0;
let sound

function preload() {
  for (let i = 1; i <= 8; i++) {
    images.push(loadImage("assets/" + i + ".jpg"));
  }
  sound = loadSound("assets/bubble.wav")
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  imageMode(CENTER);
}

function draw() {
  background(255);

  let img = images[Index]
  let imgSize = min(width, height)
  image(img, width / 2, height / 2, imgSize, imgSize);
}

function mousePressed() {
  Index++;
  if (Index >= images.length) {
    Index = 0;
  }
  sound.play()
}