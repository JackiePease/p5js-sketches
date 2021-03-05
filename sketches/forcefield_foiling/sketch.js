// -- https://www.youtube.com/watch?v=1-QXuR-XX_s
// noprotect

var points = [];

var mult = 0.005;

function setup(){
  noSmooth(); // avoids antialiasing
  createCanvas(2480, 3508);
  background(255);
  angleMode(DEGREES);
  noiseDetail(1);
  
  var density = 40;
  var space = width / density;
  
  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-20, 20), y + random (-20, 20));
      points.push(p);
    }
  }
  
  shuffle(points, true);
  
  mult = random(0.002, 0.01);

}

function draw(){

  noStroke();
  fill(0);
  
  if (frameCount <= points.length) {
    var max = frameCount;
  } else {
    var max = points.length;
  }
  
  for (var i=0; i < max; i++) {
    
    var ang = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
      
    points[i].add(createVector(cos(ang), sin(ang)));

    ellipse(round(points[i].x), round(points[i].y), 4, 4);         
  } 
}

function mouseClicked() {
  saveCanvas('flowfoil`', 'png');
}
