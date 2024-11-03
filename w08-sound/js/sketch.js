let sound;
let amp;

function preload(){
  sound = loadSound("assets/song.mp3");
}


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  //amp = new p5.Amplitude();
  mic = new p5.AudioIn()
}

function draw() {
  //let  vovValue = map(mouseY, 0, height, 1.0, 0.0, true)
  //sound.setVolume(vovValue);

  //let panValue = map(mouseX, 0, width, 1, -1, true)
  //sound.pan(panValue);

  //let rateValue = map (mouseY, 0, height, 0.1, 2.0, true)
  //sound.rate(rateValue);

  let volume = amp.getLevel();
  let dia = map(volume, 0.0, 1.0, 1, 500)

  noStroke();
  fill(255, 0, 255);
  circle(width/2, height/2, dia)
  text(volume, 10, 20);
}

function mousePressed(){
  if (sound.isPlaying() == false){
    sound.loop();
  } else {
    sound.pause();
  }
  sound.play();
}