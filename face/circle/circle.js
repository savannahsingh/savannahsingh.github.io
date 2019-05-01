var x = 280;
var y = 250;
var diameter = 380;
function setup   () {   
createCanvas(590, 500);   
fill (102);
}
function draw  () {  
background(204);   
ellipse(x ,  y,  diameter, diameter);
if (diameter > 100){
diameter = diameter -1;
}
}
