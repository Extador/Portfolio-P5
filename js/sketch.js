var col = 225

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 canvas.position(0, 0);
 canvas.style("z-index", -2);
 //background
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(156, 25, 125, 10);
  stroke(240, 225, 0)
  strokeWeight(10)
  //Coding for the shapes 
  fill(240, 100, 150)
  rect(50, 50, 0, 0)
  
  strokeWeight(4)
  rect(0, 175, 50, 50)
  
  strokeWeight(12)
  fill(21, 100, 69)
  rect(0, 350, 50, 50)
  
  strokeWeight(3)
  
  fill(49, 169, 37)
  ellipse(56, 46, 55, 55)
  
  fill(0, 255, 225)
  ellipse(69, 69, 24, 24)
  ellipse(200,200, 100)
  rect(175,175, 50, 50, 20)
  
  rectMode(CENTER);
  
  rect(mouseX, mouseY, 50)
}