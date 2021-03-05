//let n = 6;
//let d = 71;

let n = 9;
let d = 37;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth,windowHeight, SVG);
}

function draw() {
  noFill();
  translate(width/2, height/2);
  
  strokeWeight(1);
  stroke(0,0,255);
  
  beginShape();
  // for (let i = 0; i < 361; i++) {
  for (let i = 0; i < 181; i++) {
    let k = i * d;
    let r = 200 * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);
  }
  endShape();

  save("rose.svg");
  print ("saved svg");
    
  noLoop();	
  
}

