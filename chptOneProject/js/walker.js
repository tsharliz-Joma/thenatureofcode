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

class PerlinGrass {
  constructor(x, y, w, h, acc) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.acc = acc;
    this.c1 = color("#0ea5a0"); // teal-green
    this.c2 = color("#16a34a");
    this.buildTexture();
  }

  buildTexture() {
    const w = max(0, this.w);
    const h = max(0, this.h);
    this.tex = createImage(w, h);
    this.tex.loadPixels();

    for (let j = 0; j < h; j++) {
      const py = this.y + j;
      for (let i = 0; i < w; i++) {
        const px = this.x + i;
        const n = noise(px * this.acc, py * this.acc);
        const col = lerpColor(this.c1, this.c2, n);
        const index = (j * w + i) * 4;
        this.tex.pixels[index] = red(col);
        this.tex.pixels[index + 1] = green(col);
        this.tex.pixels[index + 2] = blue(col);
        this.tex.pixels[index + 3] = 255;
      }
    }
    this.tex.updatePixels();
  }

  draw() {
    image(this.tex, this.x, this.y);
  }
}
