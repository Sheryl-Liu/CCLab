let img;


function preload() {
 img = loadImage("assets/tree.jpg");
}


function setup() {
 let canvas = createCanvas(600, 523);
 canvas.parent("p5-canvas-container");
 background(0);
}


function draw() {
  background(0);

  //image(img, 0, 0)

  for (let i=0;i<50,i++){
    let x= floor()
    let selectedColor=img.get(mouseX,mouuseY)
    fill (selectedColor)
    noStroke()
    circle (x,y,dia)
  }

  
  
}
