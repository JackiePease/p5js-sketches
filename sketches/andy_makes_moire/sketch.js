// From https://twitter.com/Andy_Makes/status/1470549299020943360?s=20

var t = 0;
var w = 400;
var v = 0;

function setup(){
  
  // createCanvas(windowWidth, windowHeight, SVG)
  createCanvas(w + 50, w + 50, SVG)
}


function draw(){

  t=15;
  noFill()
  stroke("magenta")
  
  for (k = 0; k < 2; k++){
    stroke(w*k,0,w-k*w)
    for(p = 1;p > 0; p -= 0.15){
      i = 1 - p
      for (a = 0;a < 6.3; a += 0.10){
        ellipse(i*(w/2+cos(t+k*PI)*20+cos(a)*20)+p*vix(a) + 25,
                i*(w/2+sin(t+k*PI)*20+sin(a)*20)+p*vix(a-1.5) + 25, 
                50, 50)
      }
    }
  }
  noLoop();
}

function vix(a){
  return min(w,max(0,w/2+cos(a)*w))
}

function mouseClicked() {
  save("andymakes_moire.svg");
  print ("saved svg");   
}
