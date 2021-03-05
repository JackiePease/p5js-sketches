let n = 3.5; // Surprisingly leads to 7 points
let d = 37;

//Gradient only works in RGB

function setup() {
  angleMode(DEGREES);
  //colorMode(RGB, 775, 775, 775);
  colorMode(HSB, 775, 775, 775);
  createCanvas(1600,1600);
  background(0);
}

function draw() {
  noFill();
  translate(width/2, height/2);
  
  strokeWeight(5);
  stroke(0,0,255);
  
  for (let i = 0; i < 775; i++) {
    let k = i * d;
    let r = 400 * (1 - cos(n*k));
    let x1 = r * (cos(k));
    let y1 = r * (sin(k));
    k = (i + 1) * d;
    r = 400 * (1 - cos(n*k));
    let x2 = r * (cos(k));
    let y2 = r * (sin(k));
    let c1 = color(3 * sqrt(i/4), 775, 775);
    let c2 = color(3 * sqrt(i), 775, 775);
    //if (i % 2 === 0) {
    //  drawGradientLine(x1, y1, x2, y2, c1, c2);
    //} else {
    //  drawGradientLine(x1, y1, x2, y2, c1, c2);
    //};
    if (i % 2 === 0) {
      stroke(c1)
      line(x1, y1, x2, y2);
    } else {
      stroke(c2)
      line(x1, y1, x2, y2);
    };
  }
    
  noLoop();	
  
}

function drawGradientLine(x1, y1, x2, y2, c1, c2){  
  // from https://editor.p5js.org/dwjohnston/sketches/JWwYv5fuI

	const length = floor(Math.sqrt(
		(x2-x1)*(x2-x1)
		+ (y2-y1)*(y2-y1))); 
	stroke(c1);

	translate(x1, y1); 
	const degree = -1 * atan2(x2-x1, y2-y1); 
	rotate(degree);
	
	
	Array(length).fill(0).forEach((v,i) => {
		stroke(lerpColor(color(c1),color(c2), i/length));
		point(0, i); 
	}); 
	rotate(-1* degree); 
	translate(-1 * x1, -1* y1); 
	
}

