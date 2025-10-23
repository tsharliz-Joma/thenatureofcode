class BeeWalker {
  constructor(img, nx, ny, x, y) {
    this.nx = nx;
    this.ny = ny;
    this.xPos = x;
    this.yPos = y;
    this.img = img;
  }

  show() {
    // this.img.resize(50,50)
    image(this.img, this.xPos, this.yPos, 30, 30);
  }

  walk() {
    this.xPos = map(noise(this.nx), 0, 1, 0, width);
    this.yPos = map(noise(this.ny), 0, 1, 0, height);
    this.nx += 0.01;
    this.ny += 0.01;
  }
}
