let pause = true;
let wait = 4;

let p1;
let p2;
let pilota;

function setup() {

  const canvasDiv = document.getElementById("canvasContainer");

  let ampleCanvas = canvasDiv.offsetWidth;
  let altCanvas= canvasDiv.offsetHeight;

  let cnv = createCanvas(ampleCanvas, altCanvas);
  cnv.parent("canvasContainer");

  pilota = new Ball(width / 4, height / 2, 10, 6, 6);

  const p1w = 150;
  const p1h = 25;
  const p2w = 150;
  const p2h = 25;

  p1 = new Player(
    width / 2 - p1w / 2, //x
    p1h, //y
    200, //ample jug
    30, //alt jug
    8, //speed
    { r: 255, g: 0, b: 0 }, //color
    65, //tecla esquerra
    68 //tecla dreta
  );

  p2 = new Player(
    width / 2 - p2w / 2,
    height - p2h * 2,
    200,
    30,
    8,
    { r: 50, g: 200, b: 50 },
    37,
    39
  );
}

function draw() {
  background(0);

  showPoints();

  p1.show();
  p2.show();

  p1.move();
  p2.move();

  if (!pause) {
    timer();
    if (wait === 0) {
      pilota.show();
      pilota.move(p1, p2);
    }
  } else {
    textAlign(CENTER, CENTER);
    textSize(60);
    fill("#777");
    text("Press SPACE to start", width / 2, height / 2);
  }
}

function timer() {
  if (frameCount % 60 == 0 && wait > 0) {
    wait--;
  }
  if (wait > 0) {
    textAlign(CENTER, CENTER);
    textSize(100);
    fill("#777");
    text(wait, width / 2, height / 2);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    pause = !pause;
  }
}

function showPoints() {
  textAlign(CENTER, CENTER);
  textSize(30);
  stroke(0);
  fill("#777");
  text(`Player_1: ${p1.points}`, 120, 200);
  text(`Player_2: ${p2.points}`, 120, height - 200);
}
