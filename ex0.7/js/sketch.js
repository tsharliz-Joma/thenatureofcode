

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  background(220);
}

function draw() {
  loadPixels();
  let xoff = 0;
  for (let x = 0; x < width; x++) {
    let yoff = 0;
    for (let y = 0; y < height; y++) {
      let bright = map(noise(xoff, yoff), 0, 1, 0, 255);

      let index = (x + y * width) * 4;
      pixels[index] = bright;
      pixels[index + 1] = bright;
      pixels[index + 2] = bright;
      pixels[index + 3] = 255;
      yoff += 0.01;
    }
    xoff += 0.01;
  }

  updatePixels();
}
