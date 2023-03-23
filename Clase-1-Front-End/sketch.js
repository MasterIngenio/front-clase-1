function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index',-1);
  createA("https://github.com/MasterIngenio","MasterIngenio","_blank").id("BroFist");
  frameRate(60);
  textSize (50);
}


function draw() {
  colorMode(HSB,360,100,100);
  background(random(0,359),100,100);
}


function draw() {
text ("	🤜🏽⭐🤛🏽", mouseX, mouseY);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}