var x;
var y;
var i;
var j;
var palette = Array(4);
var totalAngle = 18000;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight, SVG);
  //createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  createPalette();
}

function draw() {
  noFill();
  translate(width / 2, height / 2);

  strokeWeight(2);

  stroke(0, 0, 0);
  rectMode(CENTER);
  rect(0, 0, 550, 550);
  
  for (let i = 0; i < totalAngle; i++) {
    let j = int(random(50, 250));
    switch (true) {
      case (j + (j * i / totalAngle)) < 240:
        stroke(palette[0]);
        break;
        case (j + (j * i / totalAngle)) < 320:
        stroke(palette[1]);
        break;
        case (j + (j * i / totalAngle)) < 400:
        stroke(palette[2]);
        break;
      default:
        stroke(palette[3]);
    }
    beginShape();
    for (let k = i - 1; k < i + j + 1; k++) {
      let x = cos(k) * k / 80;
      let y = sin(k) * k / 80;
      vertex(x, y);
    }
    endShape();
    i = i + j;
  };

  save("Zoned_Colour_Spiral.svg");
  print("saved svg");

  noLoop();

}

function createPalette() {
  palette[0] = color(0, 100, 100);
  palette[1] = color(75, 100, 100);
  palette[2] = color(150, 100, 100);
  palette[3] = color(225, 100, 100);
}
