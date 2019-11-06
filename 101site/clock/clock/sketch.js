let t = 0;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
}

function draw() {

  fill(0, 0, 10,3);
  ellipse(500,500,990,990)
  translate(width/2, height/2);
  rotate(-180);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(233,117, 255,10);
  let secondAngle = map(sc, 0, 60, 0, 360);


  stroke(130, 140, 255,10);
  let minuteAngle = map(mn, 0, 60, 0, 360);


  stroke(117, 255, 255, 10);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);



  push();
  rotate(secondAngle);
stroke(233,117, 255,10);
  triangle(secondAngle, 250, secondAngle, 25);
  pop();

  push();
  rotate(minuteAngle);
  stroke(130, 140, 255);
  triangle(minuteAngle, 350, minuteAngle, 50);
  pop();

  push();
  rotate(hourAngle);
  stroke(117, 255, 255);
  triangle(hourAngle, 450, hourAngle, 100);
  pop();






   if (mouseIsPressed) {
   rotate(180);
      fill(255);
      noStroke();
      textSize(36);
      text(hr + ':' + mn + ':' + sc, 0, 150);

isAMPM();


 }

}

function isAMPM ( hr ) {
let tod;
if ( hr < 13 ) {  //its AM
 tod = "AM";
 fill(230,255,90);
 ellipse(0,0, 70,70);

} else { //otherwise PM
 tod = "PM";
 fill(255);
 ellipse(0,0,50,50);
 fill(0,0,10);
 ellipse(10,-10,30,30);
}
return tod;
}
//
// function convert24hrTo12 (hrs) {
// let nuHr;
//  if (hrs < 13) {  //its normal 12 hour range
//    nuHr = hrs;
//  } else { // switch it from 24 to 12
//    nuHr = hrs-12;
//  }
//  return nuHr;
// }
