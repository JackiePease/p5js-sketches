var tris = [];
var numRows = 6;
var numCols = 8;

var triangleWidth = 21; // set to actual triangle width + 1
var triangleHeight = 27; // set to actual triangle height + 1
var canvasWidth = triangleWidth * numCols;
var canvasHeight = triangleHeight * numRows ;

// Triang class
class Triang {
  constructor(x, y) {
    this.x = (x * triangleWidth - (y%2) * triangleWidth / 2)
    this.y = y * triangleHeight; 
  }

  display() {
   var startX;
   var endX;
   let black = color(0);
   for (let j = 0; j < triangleHeight - 1; j++) {
     for (let i = 0; i < triangleWidth - 1; i++) {
       if (i > j / 2.5 && i < triangleWidth - 1 - j / 2.5) {
          set(this.x + i, this.y + j, black);
       }
       // set(this.x, this.y + 1, black);
       // set(this.x + 1, this.y, black);
       // set(this.x + 1, this.y + 1, black);
     }
   }
   updatePixels();

    
  }
}

function setup(){
  createCanvas(canvasWidth, canvasHeight);
  // Create objects
  for (let x = 0; x < numCols; x++) {
    for (let y = 0; y < numRows; y++){
      tris.push(new Triang(x, y));
    }
  }
  background('white');
}

function draw() {
  fill(0);
  noStroke();
  
  loadPixels()
  for (let i = 0; i < tris.length; i++) {
    tris[i].display();
  }
    noLoop();
}



function mouseClicked() {
  saveCanvas('knitting_triangles', 'png')
}                                                 
