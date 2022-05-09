class Ball {
  constructor(x, y, r, vx, vy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.iniVx = vx;
    this.iniVy = vy;
    this.vx = vx;
    this.vy = vy;
    this.color = {
      r: 255,
      g: 255,
      b: 255,
    };
    this.bounced = 0;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.color.r, this.color.g, this.color.b);
    circle(this.x, this.y, this.r * 2);
  }

  move(p1, p2) {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x > width - this.r || this.x < this.r) {
      this.vx *= -1;
    }
    if (this.y > height - this.r) {
      p1.score();
      this.newPoint(1);
    }
    if (this.y < this.r) {
      p2.score();
      this.newPoint(2);
    }

    // colisions p1
    if (
      this.bounced != 1 &&
      this.x > p1.x &&
      this.x < p1.x + p1.w &&
      this.y - this.r <= p1.y + p1.h
    ) {
      this.bounce(1);
    }

    // colisions p2
    if (
      this.bounced != 2 &&
      this.x > p2.x &&
      this.x < p2.x + p2.w &&
      this.y + this.r >= p2.y
    ) {
      this.bounce(2);
    }
  }

  bounce(player) {
    this.vy *= -1;
    this.bounced = player;

    this.faster();
  }

  faster() {
    if (this.vx > 0) this.vx += 0.25;
    else this.vx -= 0.25;

    if (this.vy > 0) this.vy += 0.25;
    else this.vy -= 0.25;
  }

  newPoint(playerScored) {
    pause = true;
    wait = 4;
    this.bounced = 0;
    this.x = width / 2;
    this.y = height / 2;
    this.vx = this.iniVx;
    if (playerScored === 2) 
      this.vy = this.iniVy;
    else 
      this.vy = -this.iniVy;
  }
}
