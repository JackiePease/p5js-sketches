var webs = [];
var numRows = 4;
var numCols = 4;
var rectHeight = 150;
var rectWidth = 150;
var circleDiameter = 90;
var circlePoints = 100;
var circleDiameterVariation = 70;
var circleCentreVariation = 30;
var sides = [];


function setup() {
  createCanvas(1200, 1200, SVG);
  rectMode(CORNER);
  angleMode(RADIANS);
  noFill();
  
  sides[0] = dlinedef(createVector(0, 0, 0), createVector(rectWidth , 0, 0));
  sides[1] = dlinedef(createVector(rectWidth , 0, 0), createVector(rectWidth , rectHeight, 0));
  sides[2] = dlinedef(createVector(rectWidth, rectHeight, 0), createVector(0, rectHeight, 0));
  sides[3] = dlinedef(createVector(0, rectHeight, 0), createVector(0, 0, 0));

  // Create objects
  for (let x = 0; x < numCols; x++) {
    for (let y = 0; y < numRows; y++){
      webs.push(new Weave(x, y));
    }
  }
}


function draw() {
  for (let i = 0; i < webs.length; i++) {
    webs[i].display();
  }
  
  noLoop();
}

// Weave class
class Weave {
  constructor(x, y) {
    this.x = ( x + 1 ) * rectWidth; 
    this.y = ( y + 1) * rectHeight; 
    this.cx = random(-circleCentreVariation, circleCentreVariation) + x + rectWidth / 2;
    this.cy = random(-circleCentreVariation, circleCentreVariation) + y + rectHeight / 2;
    this.radius = circleDiameter + random(-1 * circleDiameterVariation + 10 * x, 2 * circleDiameterVariation + 10 * y);
  }

  display() {

    translate(this.x, this.y);
    projectcircletoline(this.cx, this.cy, this.radius);
    translate(-this.x, -this.y);    
  }
}

// converts line defined by passing through a to b as perp=d and displacement=s
function dlinedef(a, b) {
  var lv = b.sub(a);
  lv.normalize();
  var d = createVector(lv.y, -lv.x, 0);
  var s = d.dot(a);
  return {"d":d, "s":s};
}

function rayintersectdline(p, v) {
  // ray defined by from p in direction v
  let lam = -999.0;
  for (let i = 0; i < 4; i++) {
    var d = sides[i].d
    var s = sides[i].s
    print("i: ", i, " d: ", d, " s: ", s, " v: ", v);
    print("s - p.dot(d)): ", s - p.dot(d));
    print ("v.dot(d): ", v.dot(d));
    let num = s - p.dot(d);
    let den = v.dot(d);
    if (den != 0) {
      let llam = num/den; 
      if ((llam > 0) && ((lam == -999.0) || (llam < lam)))
        lam = llam; 
    }
  }
  if (lam != -999.0)
    return lam;
  return 0.0; 
}

function projectcircletoline(cx, cy, diameter) { // , dlinedef) {
  var p = createVector(cx, cy, 0);
    for (var i=0; i < circlePoints; i++) {
    var t = i * 2 * PI / circlePoints;
    var v = createVector(cos(t), sin(t), 0);
    var lam = rayintersectdline(p, v);

      var pti = p5.Vector.add(p, p5.Vector.mult(v, lam)); // intersection point
      var pri = p5.Vector.add(p, p5.Vector.mult(v, diameter/2)); // radius intersection point
      var pori = p5.Vector.add(p, p5.Vector.mult(v, circleDiameter/2)); // radius of original circle before random applied
      if (i % 2 == 0) {
        //if (lam > diameter / 2) {
          stroke("red");
          line(pri.x, pri.y, pti.x, pti.y);
        //}
      }
      else {
        //if (lam > circleDiameter / 2) {
            stroke("blue")
            line(pori.x, pori.y, pti.x, pti.y);
        //}
      }
    }
}

function mouseClicked() {
  save("jess_circle_squares.svg");
  print ("saved svg");   
}
