var blob;
var blobs = [];

function setup() {
  createCanvas(500, 500);
  blob = new Blob(0, 0, 64);
  for (var i = 0; i < 50; i++) {
    blobs[i] = new Blob(random(-width, width), random(-height, height), 16);
  }
}

function draw() {
  background(0);

  translate(width/2, height/2);
  scale(64 / blob.r);
  translate(-blob.pos.x, -blob.pos.y);


  for (var i = blobs.length-1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }

  blob.show();
  blob.update();
}
