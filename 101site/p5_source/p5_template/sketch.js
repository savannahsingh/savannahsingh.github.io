// function setup() {
//   createCanvas(500,500);
//   background(20);
//   fill(255);
// }
//
// function draw() {
//  ellipse(width/2, height/2, 50, 50);
// }
var count = 200;
var x = 0;
let posX = [];
let posX2 = [];
let posY = [];
let posY2 = [];
let speedX = [];
let speedX2 = [];
let speedY = [];
let speedY2 = [];
let sizeW = [];
let sizeH = [];
var colors = [];

function setup() {
  createCanvas(900,900);
  background(255);
  noStroke();
  for (var i=0; i < posX.length; i++) {
    posX[i] = width/2;
    posY[i] = height/2;
    posX2[i] = width/4;
    posY2[i] = height/4;
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
    speedX2[i] = random(-15, 15);
    speedY2[i] = random(-15, 15);
    sizeW[i] = random(20, 25);
    sizeH[i] = random(20, 100);
    colors[i] = (random(0, 255));
  }
}


function draw() {
 fill(255,50);
  rect(0, 0, width, height);

  for (var i = 0; i < posX.length; i++) {
    //update all positions
    posX[i] += speedX[i];
    posY[i] += speedY[i];
    posX2[i] += speedX2[i];
    posY2[i] += speedY2[i];
    //draw all balls
    fill(colors[i], random(colors[i]), random(255));
    rect(posX[i], posY[i], sizeW[i], sizeW[i]);
    ellipse(posX2[i], posY2[i], sizeW[i], sizeW[i]);
    //check boundaries for all balls

    if (posX[i] < 40+sizeW[i]/2 || posX[i] > (width-40)-sizeW[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (posY[i] < 40+sizeW[i]/2 || posY[i] > (height-40)-sizeW[i]/2) {
      speedY[i] = -speedY[i];
    }
    if (posX2[i] < 40+sizeW[i]/2 || posX2[i] > (width-40)-sizeW[i]/2 ) {
      speedX2[i] = -speedX2[i];
    }
    if (posY2[i] < 40+sizeW[i]/2 || posY2[i] > (height-40)-sizeW[i]/2) {
      speedY2[i] = -speedY2[i];
    }
  }
}
