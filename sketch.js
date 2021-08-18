var background;

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  
  if(backgroundImg)
  background(backgroundImg);

  
  drawSprites();
}