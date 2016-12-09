var blob;
var blobs = [];

function setup() {
  createCanvas(500, 500);
  blob = new Blob(width/2, height/2, 64);
  for (var i = 0; i < 10; i++) {
    blobs[i] = new Blob(random(width), random(height), 16);
  }
}

function draw() {
  background(0);

  translate(width/2-blob.pos.x, height/2-blob.pos.y);
  blob.show();
  blob.update();
  for (var i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }
}
