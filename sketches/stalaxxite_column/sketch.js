var diamondsAcross = 5;
var diamondsUp = 7;
;
var triangleWidth = 70;
var triangleHeight; // actuall half triangle height
var spacing = 20;
var spacingX;
var spacingY;
var spacingW;

function setup() {
  createCanvas(3000, 3000, SVG);
  triangleHeight = triangleWidth * sqrt(2); // this is for half a triangle
  spacingX = spacing/2 // / sqrt(1 + sq(triangleHeight / triangleWidth));
  spacingY = spacing / sqrt(1 + sq(triangleWidth / triangleHeight));
  spacingW = spacing * triangleHeight / (triangleWidth * 2)

}

function draw() {
  translate(width / 4, height / 4);
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
  for (let i = diamondsUp - 1;  i >= 0; i--) {
    let startY = i * (triangleHeight + spacingY);
    let startX = i % 2 * (triangleWidth + (spacingX)) + (diamondsAcross * 2 * (triangleWidth + spacingX));
    vertex(startX, startY);
  }
}

function drawBase(i, triangleWidth, triangleHeight, diamondsAcross, diamondsUp) {2
  for (let j = diamondsAcross * 2; j >= 0; j--) {
    let startX = j * (triangleWidth + spacingX) - spacingX/2;
    startY = j % 2 * -1 * (triangleHeight + spacingW) - spacingW/2;
    vertex(startX, startY);
  }
}


function drawTop(i, triangleWidth, triangleHeight, diamondsAcross, diamondsUp) {
  for (let j =  0; j <= diamondsAcross * 2; j++) {
    let startX = (j + (diamondsUp + 1)%2) * (triangleWidth + spacingX) - spacingX/2;
    startY = (j + 1) % 2 * -1 * (triangleHeight + spacingY) + (diamondsUp * (triangleHeight + spacingY)) + spacingW/2;
    vertex(startX, startY);
  }
}
