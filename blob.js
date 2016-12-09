function Blob {
  this.pos = createVector(width/2, height/2);
  this.r;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, r, r);
  }
}
