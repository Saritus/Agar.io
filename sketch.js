var blob;
var blobs = [];

function setup() {
  createCanvas(500, 500);
  blob = new Blob(width/2, height/2, 64);
  for (var i = 0; i < 50; i++) {
    blobs[i] = new Blob(random(-width, 2*width), random(-height, 2*height), 16);
  }
}

function draw() {
  background(0);

  translate(width/2-blob.pos.x, height/2-blob.pos.y);

  for (var i = blobs.length-1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }

  blob.show();
  blob.update();
}
