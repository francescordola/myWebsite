var speed = 300;
var diameter = 350;
var x = 200;
var y = 200;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-show');
  background(0);
  noStroke()
}

function draw() {
  x += random(-speed, speed);
  y += random(-speed, speed);
  x = constrain(x, 0, windowWidth);
  y = constrain(y, 0, windowHeight);
  fill(255);
  ellipse(x, y, diameter, diameter);
}