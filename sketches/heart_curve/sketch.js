// https://mathworld.wolfram.com/HeartCurve.html

var x;
var y;
var i;
var j;
var palette = Array(4);
var totalAngle = 15000;
var size = 10;

function setup() {
  angleMode(RADIANS);
  colorMode(HSB, 360, 100, 100);
  createPalette();
  createCanvas(2000, 2000, SVG);
  // background(189, 40, 16);
}

function draw() {
  noFill();
  translate(width/2, height/2);
  
  strokeWeight(0.5);
  
  for (let i = 2000; i < totalAngle; i++) {
    let j = int(random(150, 350));
    switch (true) {
      case (j + (j * i / totalAngle)) < 340:
        stroke(palette[0]);
        size = 3;
        break;
        case (j + (j * i / totalAngle)) < 420:
        stroke(palette[1]);
        size = 5;
        break;
        case (j + (j * i / totalAngle)) < 500:
        stroke(palette[2]);
        size = 8;
        break;
      default:
        stroke(palette[3]);
        size = 10;
    }
    
    i = i + j;
    
    // let x = cos(i) * i / (20 + totalAngle/i);
    // let y = sin(i) * i / (20 + totalAngle/i);
    
    let x = cos(i) * i / 25;
    let y = sin(i) * i / 25;

    
    rotate(i);
    
    // translate(x, y);
    
    translate(0, sqrt(pow(x, 2) + pow(y, 2)));

    
    heart(size);
    
    
    // translate(-x, -y);
    
    translate(0, - sqrt(pow(x, 2) + pow(y, 2)));
    
    rotate(-i);
  }
  
  save('heartcurve_fill_2.svg');
  print ("saved svg");
    
  noLoop();	
  
}

function heart(size) {
  beginShape();
  for (let i = 0; i < 361; i=i+1) {
    let x = -size * 16 * pow(sin(i), 3)
    let y = -size * (13 * cos(i) - 5 * cos(2 * i) - 2 * cos(3 * i) - cos(4 * i));
    vertex(x,y);
  }
  endShape();

}

function createPalette() {
   //palette[0] = color(0, 100, 100);
   //palette[1] = color(75, 100, 100);
   //palette[2] = color(150, 100, 100);
   //palette[3] = color(225, 100, 100);
   palette[0] = color(0, 100, 0);
   palette[1] = color(0, 100, 0);
   palette[2] = color(0, 100, 0);
   palette[3] = color(0, 100, 0);
}
