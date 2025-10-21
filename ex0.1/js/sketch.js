let walker;

function setup() {
  createCanvas(300, 300);
  walker = new Walker();
  background(240);
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  // This function draws the walker, as a black dot
  show() {
    stroke(1);
    strokeWeight(2);
    point(this.x, this.y);
  }
  // This function tells the controls the stepping of the walker
  step() {
    let xStep = random(-1, 1);
    let yStep = random(-1, 1);
    this.x += xStep;
    this.y += yStep;
    // This code restricts the direction of movement to only 4 directions
    // let choice = floor(random(4));
    // if (choice === 0) {
    //   // increment x = right
    //   this.x++;
    // } else if (choice === 1) {
    //   this.x--;
    // } else if (choice === 2) {
    //   // increment y = up
    //   this.y++;
    // } else {
    //   this.y--;
    // }
   
    this.x = constrain(this.x, -1, width - 1);
    this.y = constrain(this.y, -1, height - 1);
  }
}
