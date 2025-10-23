let beeImage;
let randomCounts = [];
let beeWalker;

function preload() {
  beeImage = loadImage("images/beeavatar.png");
}
function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);
  beeImage.resize(50, 50)
  beeWalker = new BeeWalker(beeImage, 0, 10000, 50, 50);

}

function draw() {
  // this background called here clears the frame so you dont see the old instances of the bee walker
  background(220);
  beeWalker.show();
  beeWalker.walk()

}

