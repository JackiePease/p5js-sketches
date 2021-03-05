// From https://www.bit-101.com/blog/2020/04/animated-sinusoidal-cardiods/

const radius = 400;
const res = 361;
const slice = Math.PI * 2 / res;
const mult = 2;

// 
function setup() {
  angleMode(DEGREES);
  
  colorMode(HSB, 361, 100, 100);
  createCanvas(windowWidth,windowHeight, SVG);
}

function draw() {
  noFill();
  translate(width/2, height/2);
  
for(let i = 1; i < res; i= i + 2) {
  let a1 = slice * i;
  let a2 = slice * i * mult;
  strokeWeight(4);
  stroke(i, 100, 100);
  line(Math.cos(a1) * radius, Math.sin(a1) * radius,  Math.cos(a2) * radius, Math.sin(a2) * radius);
  }
  endShape();

  save("cardioid.svg");
  print ("saved svg");
    
  noLoop();	
  
}
