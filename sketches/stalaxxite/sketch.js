var trianglesAcross = 7;
var trianglesUp = 10; // has to be even number
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
  translate(width / 10, height / 10);
  drawLevels(triangleHeight, theta, trianglesUp, trianglesAcross)
  save("stalaxxite.svg");
  print("saved svg");
  noLoop();
  
}

function drawLevels (triangleHeight, theta, trianglesUp, trianglesAcross){
  
  for (let i = 1; i <= trianglesUp; i++) {
 
    drawHorizontalLines(i, theta, triangleHeight, trianglesAcross);
    drawLRLines(i, theta, triangleHeight, trianglesAcross);
    drawRLLines(i, theta, triangleHeight, trianglesAcross);
  }
}

function drawHorizontalLines(i, theta, triangleHeight, trianglesAcross){
    if (i == 1) {
      trianglesAcross += 1;
    }
    r = i * triangleHeight;
    for (let j = 0; j < trianglesAcross - (i % 2); j++) {
      if ((i == 1 && j == trianglesAcross - 1 - (i % 2)) || i == trianglesUp) {
         stroke('red');
      }
     else {
         stroke('black');
      } 
      k = j + ((i % 2) / 2);
      line(r * cos(k * theta), r * sin(k * theta), r * cos((k + 1) * theta), r * sin((k + 1) * theta));
    }
}

function drawLRLines(i, theta, triangleHeight, trianglesAcross){
    r = i * triangleHeight;
    r2 = (i - 1) * triangleHeight;
    if (i == 1) {
      trianglesAcross += 1;
    }
    for (let j = 0; j < trianglesAcross; j++) {
      k = j + ((i % 2) / 2);
      m = k + 0.5;
      if ((i == 1 && j == 0) || k == 0 || k > trianglesAcross - 1) {
         //stroke(palette[0]);
        stroke('red')
      }
      else {
         stroke('blue');
      } 
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
      if (m == 0 || m > trianglesAcross - 1) {
         stroke('red');
      }
      else {
         stroke('green');
      } 
      line(r * cos(k * theta), r * sin(k * theta), r2 * cos(m * theta), r2 * sin(m * theta));
    }
    } 
}
