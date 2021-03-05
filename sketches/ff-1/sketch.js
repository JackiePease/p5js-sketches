// -- https://gist.github.com/periode/f4faff249d4f73214d5f
// -- exploring https://tylerxhobbs.com/essays/2020/flow-fields
// noprotect

var numberOfRows; //number of rows
var numberOfColumns; //number of columns
var xStep; //gap between two points on the x axis
var yStep; //gap between two points on the y axis
var palette = Array(4);
var positions = []; //an array of positions where we will store each of our Vectors

function setup(){
  angleMode(RADIANS);
  createCanvas(windowWidth, windowHeight, SVG);
  numberOfColumns = 45; 
  numberOfRows = 45;
  xStep = width/numberOfColumns; 
  yStep = height/numberOfRows;
  
  colorMode(HSB, 360, 100, 100);
  createPalette();
  
  for(var x = 0; x < width; x += xStep){ //start at the first column, where x = 0

    for(var y = 0; y < height; y += yStep){ //go through all the rows (y = 0, y = yStep * 1, y  = yStep * 2, etc.)
      // noise_val = noise(x * 0.005, y * 0.005);
      noise_val = noise(x * 0.0005, y * 0.005);
      z = map(noise_val, 0.0, 1.0, 0.0, PI * 2.0);
      var p = createVector(x, y, z);
      positions.push(p);
    }
  }
  noLoop();
}

function draw(){

  stroke(250, 100, 100);
  
  for(var i = 0; i < positions.length; i++){ //go through all our positions
    x1 = positions[i].x;
    y1 = positions[i].y;
    x2 = x1 + (15 * xStep * cos(positions[i].z));
    y2 = y1 + (7 * yStep * sin(positions[i].z));
    
    switch (true) {
      case (sin(positions[i].z) < 0 && y1 < height / 2):
        stroke(palette[0]);
        break;
        case (sin(positions[i].z) < 0):
        stroke(palette[1]);
        break;
        case (sin(positions[i].z) >= 0 && y1 >= height / 2):
        stroke(palette[2]);
        break;
      default:
        stroke(palette[3]);
    }
    line(x1, y1, x2, y2);
  }
    
  save("ff-l.svg");
  print("saved svg");

}

function createPalette() {
  palette[0] = color(0, 100, 100);
  palette[1] = color(75, 100, 100);
  palette[2] = color(150, 100, 100);
  palette[3] = color(225, 100, 150);
}

