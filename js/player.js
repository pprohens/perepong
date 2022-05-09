class Player {
  constructor(x, y, w, h, speed, color, leftCode, rightCode) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.color = color;
    this.leftCode = leftCode;
    this.rightCode = rightCode;
    this.points = 0;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.color.r, this.color.g, this.color.b);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    if (keyIsDown(this.leftCode) && this.x >= 0) {
        this.x -= this.speed;
    }
    if (keyIsDown(this.rightCode) && (this.x + this.w) <= width ) {
      this.x += this.speed;
    }
  }

  score() {
    this.points ++
  }
}
