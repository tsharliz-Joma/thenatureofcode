let walker;
let saveAfterMs = 5 * 60 * 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // pixelDensity describes how many pixels it packs into an area ( a p5 function )
  pixelDensity(Math.min(2, window.devicePixelRatio || 1));
  background(240);
  walker = new Walker(random(0, width), random(0, height));
}

function draw() {
  walker.step();
  walker.show();

  // millis is a p5 function | same with noLoop
  if (millis() >= saveAfterMs) {
    noLoop();
    setTimeout(() => {
      confirm("Would you like to save your piece as an image?");
      if (confirm === true) {
        saveCanvas("My art piece", "png");
      } else {
        setup();
      }
    });
  }
}

class Walker {
  constructor(x, y) {
    this.tx = x;
    this.ty = y;
  }
  // This function draws the walker, as a black dot
  show() {
    stroke(1);
    strokeWeight(4);
    // This function draws a single dot at appoint x, y location
    point(this.x, this.y);
  }
  // This function controls the stepping of the walker
  step() {
    // this.tx and this.ty start at different points of noise because they are given different , random values
    // when the walker is created
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    this.tx += 0.01;
    this.ty += 0.01;
  }
}
