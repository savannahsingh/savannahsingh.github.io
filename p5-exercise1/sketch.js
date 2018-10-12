

let birds = 0;
let xPos = 0;
// declare variables here


function setup() {
  // put setup code here --> this runs once upon launch

    createCanvas(500, 500);

    birds = "pretty";
    console.log(birds);

  }

function draw() {
  // put drawing code here --> this loops every frame


    birds = birds + 1;

    xPos = xPos + .1;

      // set background color in grayscale:
      background(150, 0, 150, 100);

      // draw ellipse
      fill(224, 0, 75);
      strokeWeight(0);
      ellipse(xPos, 250, 200, 200);

  // draw rectangle
  fill(0, mouseX, mouseY);
  strokeWeight(5);
  stroke(255, 255, mouseX, mouseY);
  line(250, 250, mouseX, mouseY)
  rectMode(CENTER);
   rect(mouseX, mouseY, 50, 70);


}
// write custom functions here
