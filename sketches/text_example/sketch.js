let regFont;

function preload() {
  regFont = loadFont('../../assets/fonts/Abrasia-Regular.otf')
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(regFont);
  textSize(width / 3);
  textAlign(LEFT, CENTER);
}
function draw() {
  background(0);
  fill(0, 102, 153, 51);
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('p5.js', 200, 200);
}
