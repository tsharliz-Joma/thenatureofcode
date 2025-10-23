let beeImage;
let beeWalker;
let sunHeight;
let horizon = 500;

function preload() {
  beeImage = loadImage("images/beeavatar.png");
}

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);
  beeImage.resize(50, 50);
  beeWalker = new BeeWalker(beeImage, 0, 10000, 50, 50);
}

function draw() {
  background(220);

  // Sun follows the X-coordinate of mouse
  sunHeight = mouseX;
  if (sunHeight < horizon) {
    background("lightblue");
  } else {
    background("rgb(21,0,82)");
  }
  // this background called here clears the frame so you dont see the old instances of the bee walker

  // Sun
  fill("yellow");
  noStroke();
  circle(windowWidth / 4, sunHeight, 100);

  // Horizon
  stroke("green");
  line(0, horizon, windowWidth, horizon);

  // Grass
  fill('green')
  rect(0, horizon, windowWidth, horizon)
  beeWalker.show();
  beeWalker.walk();
}
