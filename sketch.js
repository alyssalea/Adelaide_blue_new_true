
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  if (mouseIsPressed)
    fill(0)
  else
    fill(161, 181, 255)
  background(161, 181, 255)
  camera(0, 0, sin(frameCount * 0.01) * 500);
  plane(120, 120);
  camera(0, 0, sin(frameCount * 0.01) * 600);
  ellipse(0, 0, 200)
  ellipse(-100, -100, 100)
  ellipse(100, -100, 100)
  ellipse(100, 100, 100)
  ellipse(-100, 100, 100)
 
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}