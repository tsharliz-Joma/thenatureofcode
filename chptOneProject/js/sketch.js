let beeImage;
let treeImage;
let beeWalker;
let sunHeight;
let horizon = 500;
let acc = 0.0;
let perlinGrass;

function preload() {
  beeImage = loadImage("images/beeavatar.png");
  treeImage = loadImage("images/tree.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  pixelDensity(1);
  beeImage.resize(50, 50);
  treeImage.resize(400, 400);
  beeWalker = new BeeWalker(beeImage, 0, 10000, 50, 50);
  perlinGrass = new PerlinGrass(0, horizon, width, height - horizon, 0.01);
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
  // Sun
  noStroke();
  fill("yellow");
  circle(windowWidth / 4, sunHeight, 100);

  // Horizon
  stroke("green");
  line(0, horizon, windowWidth, horizon);

  // Grass
  perlinGrass.draw();
  image(treeImage, 0, horizon - treeImage.height);

  const topLx = 600;
  const topLy = horizon;
  const topRx = 800;
  const topRy = horizon;
  const bottomRx = 800;
  const bottomRy = horizon + 600;
  const bottomLx = 600;
  const bottomLy = horizon + 600;
  // River
  fill("blue");
  noStroke();
  quad(topLx, topLy, topRx, topRy, bottomRx, bottomRy, bottomLx, bottomLy);

  beeWalker.show();
  beeWalker.walk();
}
