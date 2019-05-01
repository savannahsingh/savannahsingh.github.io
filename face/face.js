function setup(){
  createCanvas(500,500);
  noStroke();
}

function draw(){
background(245);

noStroke();

//hair
fill(57,26,20);
rect(70,300,350,350);

//neck
fill(189,136,111);
rect(160,300,180,300);

//head

fill(219,163,119);
ellipse(250,240,300,350);

fill(219,163,119);
ellipse(250,400,130,100);

fill(219,163,119);
ellipse(170,310,130,180);

fill(219,163,119);
ellipse(330,310,130,180);

fill(219,163,119);
ellipse(310,380,80,80);

fill(219,163,119);
ellipse(190,380,80,80);

fill(219,163,119);
arc(340,410,90,90,radians(150),radians(315));

fill(219,163,119);
arc(160,410,90,90,radians(230),radians(30));

//eyes 

strokeWeight(1);
stroke(0);

fill(255);
ellipse(180,230,90,50);

fill(255);
ellipse(320,230,90,50);

fill(129,92,64);
ellipse(185,230,50,50);

fill(129,92,64);
ellipse(315,230,50,50);

fill(0);
ellipse(185,230,30,30);

fill(0);
ellipse(315,230,30,30);

noStroke();

fill(255);
ellipse(200,220,15,10);

fill(255); 
ellipse(330,220,15,10);

//eyebrows

fill(83,44,20);
quad(150,180,205,180,215,200,150,190);

fill(83,44,20);
quad(350,180,295,180,285,200,350,190);

fill(83,44,20);
triangle(150,180,150,190,130,195);

fill(83,44,20);
triangle(350,180,350,190,370,195);

//hair

fill(83,44,20);
arc(230,95,170,90,radians(160),radians(340));

fill(83,44,20);
triangle(145,90,180,100,100,185);

fill(83,44,20);
triangle(125,100,160,70,100,185);

fill(83,44,20);
arc(320,105,150,65,radians(210),radians(30));

fill(83,44,20);
triangle(355,120,395,100,410,205);

fill(83,44,20);
triangle(125,100,80,150,100,230);

fill(83,44,20);
triangle(110,165,70,195,100,270);

fill(83,44,20);
triangle(110,165,80,150,70,195);

fill(83,44,20);
triangle(70,195,110,160,60,270);

fill(83,44,20);
triangle(60,270,100,180,70,300);

fill(83,44,20);
triangle(100,180,110,280,70,300);

fill(83,44,20);
triangle(70,300,105,250,115,300);

fill(83,44,20);
triangle(60,320,70,200,115,300);

fill(83,44,20);
triangle(60,270,115,300,55,390);

fill(83,44,20);
triangle(55,390,115,300,110,440);

fill(83,44,20);
triangle(55,390,110,440,70,500);

fill(83,44,20);
triangle(390,280,385,100,420,205);

fill(83,44,20);
triangle(390,280,420,200,430,345);

fill(83,44,20);
triangle(390,280,430,345,385,420);

fill(83,44,20);
triangle(385,420,430,345,420,500);

//highlights

strokeWeight(4);
stroke(255,236,115);
line(400,400,420,495);

strokeWeight(4);
stroke(255,236,115);
line(410,360,420,470);

strokeWeight(4);
stroke(255,236,115);
line(390,420,395,310);

strokeWeight(4);
stroke(255,236,115);
line(425,400,415,250);

strokeWeight(4);
stroke(255,236,115);
line(105,420,100,250);

strokeWeight(4);
stroke(255,236,115);
line(75,470,80,310);

strokeWeight(4);
stroke(255,236,115);
line(60,400,70,495);

strokeWeight(4);
stroke(255,236,115);
line(95,360,90,470);

noStroke(); 

//nose

noFill();
strokeWeight(3);
stroke(0);
arc(305,240,100,150, radians(110),radians(200));

noFill();
strokeWeight(3);
stroke(0);
arc(245,285,80,110, radians(30),radians(85));

//mouth 

fill(127,55,49);
strokeWeight(4);
stroke(162,55,49);
arc(250,360,130,90, radians(0),radians(180));

strokeWeight(7);
stroke(255);
line(190,360,310,360);


noStroke();

}
