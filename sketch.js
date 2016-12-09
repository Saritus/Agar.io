var blob;
var blobs = [];

function setup() {
  createCanvas(500, 500);
  blob = new Blob(64);
  for (var i = 0; i < 10; i++) {
    blobs[i] = new Blob(16);
  }
}

function draw() {
  background(0);
  blob.show();
  for (var i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }
}
