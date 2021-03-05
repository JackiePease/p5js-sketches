let black;
let yellow;
let cyan;
let magenta;
let img;

function preload() {
  img = loadImage('../../assets/images/courgettes.jpg');
}

function setup() {
  createCanvas(600, 600);
	red = new Riso("red", width, height);
    blue = new Riso("blue", width, height);
	yellow = new Riso("yellow", width, height);
}

function draw() {
  background(220);
	clearRiso();

  let blues = extractRGBChannel(img, 2);
  let reds = extractRGBChannel(img, 0);

  blue.imageMode(CENTER);
  red.imageMode(CENTER);
  blue.image(blues, width / 2, height / 2, img.width, img.height);
  red.image(reds, width / 2, height / 2, img.width, img.height);

  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont("Arial");
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(70);
  textGraphic.text("COURGETTES", width/2+5, height-130);

  red.cutout(textGraphic);
  blue.cutout(textGraphic);

	drawRiso();
}

function mouseClicked(){
	exportRiso();
}
