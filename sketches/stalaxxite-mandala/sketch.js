var trianglesAcross = 87;
var trianglesUp = 8; // has to be even number
var baseTriangleWidth = 50;
var triangleHeight;
var theta;

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  triangleHeight = baseTriangleWidth * sqrt(3)/2; // if equilaterial
  total_height = triangleHeight * trianglesUp;
  theta = 2 * (asin((baseTriangleWidth/2)/(total_height)));
  strokeWeight(1);
 }

function draw() {
  noFill();
  translate(width / 2, height / 2);
  drawLevels(triangleHeight, theta, trianglesUp, trianglesAcross)
  save("stalaxxite_mandala.svg");
  print("saved svg");
  noLoop();
  
}

function drawLevels (triangleHeight, theta, trianglesUp, trianglesAcross){
  
  for (let i = 5; i <= trianglesUp; i++) {
 
    drawLRLines(i, theta, triangleHeight, trianglesAcross);
    drawRLLines(i, theta, triangleHeight, trianglesAcross);
  }
}

function drawLRLines(i, theta, triangleHeight, trianglesAcross){
    r = i * triangleHeight;
    r2 = (i - 1) * triangleHeight;
  
    for (let j = 0; j < trianglesAcross; j++) {
      k = j + ((i % 2) / 2);
      m = k + 0.5;

      stroke('black');
      line(r * cos(k * theta), r * sin(k * theta), r2 * cos(m * theta), r2 * sin(m * theta));
    }
}

function drawRLLines(i, theta, triangleHeight, trianglesAcross){
    if (i == 1) {
       let i = 2;
    }
    else {
    r = i * triangleHeight;
    r2 = (i - 1) * triangleHeight;
    for (let j = 0; j < trianglesAcross; j++) {

      k = j + 1 - ((i % 2) / 2);
      m = k - 0.5;
      stroke('black');
      line(r * cos(k * theta), r * sin(k * theta), r2 * cos(m * theta), r2 * sin(m * theta));
    }
    } 
}
