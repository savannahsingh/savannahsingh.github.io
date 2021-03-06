

var blob;

       /*
        // sample example
    var sampletoon = {
       "name":"Boris",
       "r":200,
       "g":160,
       "b":200,
       "head": 60,
       "torso": 33,
       "posX":50,
       "posY":90,
       "moveX":[5,-3,4,-6,-3,3,4,-2],
       "moveY":[2,4,4,6,-3,3,4,-2]
        }
        */
        var count = 200;
        var x = 0;
        var posX = [];
        var posX2 = [];
        var posY = [];
        var posY2 = [];
        var speedX = [];
        var speedX2 = [];
        var speedY = [];
        var speedY2 = [];
        var sizeW = [];
        var sizeH = [];
        var colors = [];

        var d = 0
        var b = 0



 var sx = 0;
 var sy = 0;


function preload() {
  blob = loadJSON("blob.json");
}

function setup() {
   createCanvas(displayWidth, 400);

    rectMode(CENTER);

     // this shows the whole blob json data package
   console.log(blob);
   noStroke();


   for (var i=0; i < count; i++) {
     posX[i] = width/2;
     posY[i] = height/2;
     posX2[i] = width/4;
     posY2[i] = height/4;
     speedX[i] = random(-5, 5);
     speedY[i] = random(-5, 5);
     speedX2[i] = random(-15, 15);
     speedY2[i] = random(-15, 15);
     sizeW[i] = random(1, 2);
     sizeH[i] = random(1, 2);
     colors[i] = (random(0, 255));
   }
}



function draw() {
  background(126, 161, 255,100);

  for (var i = 0; i < count; i++) {
 //   //update all positions
   posX[i] += speedX[i];
   posY[i] += speedY[i];
   posX2[i] += speedX2[i];
  posY2[i] += speedY2[i];

  fill(255);
    // fill(150, 200, 75);
 ellipse(posX2[i], posY2[i], sizeW[i], sizeW[i]);
// tint(0, 153, 204, 126);

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



for (var d = 0; d <= width; d += 50) {
    for (var b = 0; b <= height; b += 50) {
      fill (random(255), 0, random(255));
      ellipse(d, b, 25, 25);
    }

  }
  // updateToon(blob.toons[0]);  // Natasha
  // updateToon(blob.toons[1]);  // Boris
for(var i = 0; i < blob.toons.length; i++)
{

updateToon(blob.toons[i]);

}

fill(255,60);
triangle(displayWidth/2, 0, mouseX-50, mouseY, mouseX+50, mouseY);
fill(255,100);
ellipse(mouseX, mouseY, 100,20)

}



function updateToon(obj) {

      push();

      if ( int(random(10)) > 8) {
       obj.nextX = int(random(obj.moveX.length));
       obj.nextY = int(random(obj.moveY.length));
      }

      obj.posX += obj.moveX[obj.nextX];
      obj.posY += obj.moveY[obj.nextY];


      // console.log(obj.posX);

       if (obj.posX > width) {
         obj.posX = 0;
       }

       if (obj.posX < 0) {
         obj.posX = width;
       }

       if (obj.posY > height) {
         obj.posY = 0;
       }

       if (obj.posY < 0) {
         obj.posY = height;
       }

       drawToon(obj);

      pop();


}



function drawToon( obj) {

    //  console.log(obj.posX[s]);

  push();
        translate(obj.posX , obj.posY);

         //head
        fill(obj.r,obj.g,obj.b);
        ellipse(0,20,obj.head,obj.head);



        // eyes
        fill(0);
        ellipse(-10,obj.head / 2 ,5,5);
        ellipse(10,obj.head / 2,5,5);

        //torso
        fill(obj.r,obj.g,obj.b);
        rect(0,70,obj.torso,obj.torso);

//         // bowties
//         if(obj.bowtie == "black") {
//         fill(0);
//         triangle(0, obj.head + 30, obj.head - 10, obj.head +20, obj.head - 10, obj.torso + 40);
//         triangle(0,obj.head +30, -(obj.head - 10), obj.head +20, -(obj.head-10), obj.torso + 40);
// }


        if(obj.hat == "tophat") {
          fill(0);
          rect(0, -obj.head / 3, obj.head - 10, obj.head);
          rect(0, 0, obj.head +10, obj.head /3 );
        }

        if(obj.hat == "beanie") {
          fill(obj.r +100,obj.g,obj.b);
          arc(0, 0, obj.head, obj.head + 5, PI, 0);
          fill(obj.r +50,obj.g,obj.b);
          rect(0,0,obj.head, obj.head / 3);
        }

        if(obj.hat == "cap") {
          fill(obj.r,obj.g,obj.b +100);
          arc(0, 10, obj.head +5, obj.head +5, PI, 0);
          fill(255);
          rect(obj.head / 1.5, 7, obj.head / 3, obj.head / 10);
        }

        // bowties
        if(obj.bowtie == "black") {
        fill(0);
        triangle(0,0, obj.torso -20, obj.torso-20, obj.torso-30, obj.torso-30);
}

    //name
        fill(255);
        textAlign(CENTER);
        textSize(obj.torso/2);
        text(obj.name,0,obj.torso/2 +60);

    pop();

}
