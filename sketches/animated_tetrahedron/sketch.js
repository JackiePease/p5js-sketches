let side_length = 200
let rot = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
  colorMode(HSL, 255);
}

function draw() {
  background(127, 255, 50);
  noStroke();
  rotateX(rot);
  rotateY(rot);
  rotateZ(rot);
  rot+=0.25;
  if (rot == 360) {
    rot = 0
  };

  fill(0, 255, 127, 255);
  sphere(15);
  fill(200, 255, 127, 54);
  stroke(255, 255, 255, 255);
  translate(0, 1/4 * sqrt(2/3) * side_length, 0);
  DrawTriangle(side_length);
}

function DrawTriangle(s) {
  
  beginShape(TRIANGLES);
   vertex(s/2, 0, (s/6) * sqrt(3)); 
   vertex(0, 0, -(s/3) * sqrt(3));
   vertex(-s/2, 0, (s/6) * sqrt(3));
  endShape();

  beginShape(TRIANGLES);
   vertex(s/2, 0, (s/6) * sqrt(3)); 
   vertex(0, 0, -(s/3) * sqrt(3));
   vertex(0, -s * sqrt(2/3), 0);
  endShape();

  beginShape(TRIANGLES);
   vertex(s/2, 0, (s/6) * sqrt(3)); 
   vertex(0, -s * sqrt(2/3), 0);
   vertex(-s/2, 0, (s/6) * sqrt(3));
  endShape();
   
  beginShape(TRIANGLES);
   vertex(0, -s * sqrt(2/3), 0);
   vertex(0, 0, -(s/3) * sqrt(3));
   vertex(-s/2, 0, (s/6) * sqrt(3));
  endShape();
  
}
