// From https://www.bit-101.com/blog/2017/10/flow-fields-part-i/
//https://github.com/bit101/tutorials/blob/master/flow_fields/flow_fields_07.js

// random attractor params
var a = Math.random() * 4 - 2;
var b = Math.random() * 4 - 2;
var c = Math.random() * 4 - 2;
var d = Math.random() * 4 - 2;
var res = 15
var points = []
// var a = -1.4, b = 1.6, c = 1.0, d = 0.7;

function setup(){
  
  //createCanvas(windowWidth, windowHeight, SVG);
  createCanvas(2000, 2000, SVG)
  // create points, each aligned to left edge of screen,
  // spread out top to bottom

  for (var y = 0; y < height; y += 25){
    points.push({
      x: 0,
      y: y,
      vx: 0,
      vy: 0
    })
  }
}

function draw(){
  render();
  noLoop();
}

function render() {
  for(var i = 0; i < points.length; i++) {
    for(var y = 0; y < height; y += res) {
      var p = points[i];
      var value = getValue(p.x, p.y);
      p.vx += Math.cos(value) * 0.3;
      p.vy += Math.sin(value) * 0.3;

      drawingContext.beginPath();
      drawingContext.strokeStyle="#FF0000";
      drawingContext.lineWidth=2;
      drawingContext.moveTo(p.x, p.y);
      p.x += p.vx;
      p.y += p.vy;
      drawingContext.lineTo(p.x, p.y);
      drawingContext.stroke();
      
      p.vx *= 0.99;
      p.vy *= 0.99;
      
      if (p.x > width) p.x = 0;
      if (p.y > height) p.y = 0;
      if (p.x < 0) p.x = width;
      if (p.y < 0) p.y = height;
    }
  }
}

function getValue(x, y) {
  // clifford attractor
  // http://paulbourke.net/fractals/clifford/
  
  // scale down x and y
  var scale = 0.005;
  x = (x - width / 2) * scale;
  y = (y - height / 2)  * scale;

  // attactor gives new x, y for old one. 
  var x1 = Math.sin(a * y) + c * Math.cos(a * x);
  var y1 = Math.sin(b * x) + d * Math.cos(b * y);

  // find angle from old to new. that's the value.
  return Math.atan2(y1 - y, x1 - x);
}

function mouseClicked() {
  save("bit101_flowfield.svg");
  print ("saved svg");   
}

