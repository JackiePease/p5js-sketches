// to create svg of paper folding example, using triangles so that they can be embroidered or laser cut
// issues with colours being passed to Inkstitch at the moment, probably due to differences between standard and Inkscape svg format
var diamondsAcross = 9;
var diamondsUp = 5;
var triangleWidth = 50;
var triangleHeight; // actually half triangle height
var spacing = 20;
var spacingX;
var spacingY;

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  triangleHeight = triangleWidth * sqrt(2); // this is for half a triangle
  spacingX = spacing;
  spacingY = spacing * sqrt(1 + sq(triangleHeight / triangleWidth));
}

function draw() {
  translate(width / 7, height / 7);
  drawLevels(triangleHeight, triangleWidth, diamondsUp, diamondsAcross);
  drawOutline(triangleHeight, triangleWidth, diamondsUp, diamondsAcross);
  save("stalaxxite_column.svg");
  print("saved svg");
  noLoop();

}

function drawLevels(triangleHeight, triangleWidth, diamondsUp, diamondsAcross) {
  strokeWeight(1);
  stroke(0, 0, 255);
  noFill()
  for (let i = 0; i < diamondsUp; i++) {
    drawHorizontalLines(i, triangleWidth, triangleHeight, diamondsAcross);
  }
}

function drawHorizontalLines(i, triangleWidth, triangleHeight, diamondsAcross) {
  startY = i * (triangleHeight + spacingY);
  for (let j = 0; j < diamondsAcross; j++) {
    let startX = (j * 2 * (triangleWidth + spacingX)) + (i % 2 * (triangleWidth + (spacingX)));
    triangle(startX, startY, startX + triangleWidth, startY + triangleHeight,
      startX + triangleWidth, startY - triangleHeight);
    triangle(startX + spacingX + (2 * triangleWidth), startY, startX + triangleWidth + spacingX,
      startY + triangleHeight, startX + triangleWidth + spacingX, startY - triangleHeight)
  }
}

function drawOutline(triangleHeight, triangleWidth, diamondsUp, diamondsAcross) {
  noFill();
  stroke(255, 0, 0);
  beginShape();
  for (let i = 0; i < diamondsUp; i++) {
    drawLeft(i, triangleWidth, triangleHeight, diamondsAcross, diamondsUp);
    drawTop(i, triangleWidth, triangleHeight, diamondsAcross, diamondsUp);
    drawRight(i, triangleWidth, triangleHeight, diamondsAcross, diamondsUp);
    drawBase(i, triangleWidth, triangleHeight, diamondsAcross, diamondsUp);
    endShape();
  }
}

function drawLeft(i, triangleWidth, triangleHeight, diamondsAcross, diamondsUp) {
  for (let i = 0; i < diamondsUp; i++) {
    let startY = i * (triangleHeight + spacingY);
    let startX = i % 2 * (triangleWidth + (spacingX)) - spacingX
    vertex(startX, startY);
  }
}

function drawRight(i, triangleWidth, triangleHeight, diamondsAcross, diamondsUp) {
  for (let i = diamondsUp - 1;  i > 0; i--) {
    let startY = i * (triangleHeight + spacingY);
    let startX = i % 2 * (triangleWidth + (spacingX)) + (diamondsAcross * 2 * (triangleWidth + spacingX));
    vertex(startX, startY);
  }
}

function drawBase(i, triangleWidth, triangleHeight, diamondsAcross, diamondsUp) {
  for (let j = diamondsAcross * 2; j >= 0; j--) {
    let startX = j * (triangleWidth + spacingX) - spacingX/2;
    let startY = j % 2 * -1 * (triangleHeight + (spacingY)) - spacingY/2
    vertex(startX, startY);
  }
}


function drawTop(i, triangleWidth, triangleHeight, diamondsAcross, diamondsUp) {
  for (let j =  0; j < diamondsAcross * 2; j++) {
    let startX = (j + 1 + (diamondsUp + 1)%2) * (triangleWidth + spacingX) - spacingX/2
    let startY = j % 2 * -1 * (triangleHeight + spacingY) + (diamondsUp * (triangleHeight + spacingY)) + spacingY/2;
    vertex(startX, startY);
  }
}
