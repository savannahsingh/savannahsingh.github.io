
var blob;
var btn1;
var head;
var p1;

var counter = 0;
function setup() {
  background(50);
   // this is an option if you want to only use the Dom elements
  noCanvas();
  createCanvas(500,200);
  // create the button DOM element
  btn1 =  createButton('get Data');
  // attach button listener
  btn1.mousePressed(btn1pressed);
}


function btn1pressed(){
   // a simple way of seeing if the json file has been loaded already.
   // is it has it will return blob as true, therefore if (!false) it will be true..
   // otherwise it will be false and not reload.
 // if (!blob) {
    // asynch loading command, with a callback function that gets called when done
    blob = loadJSON("blob.json", showBlob);

 // }
}

// this is the callback way of loading an external file
function showBlob () {

  p1 = createP('The name is ' + blob.name);


  head = createElement('h1', 'This is the Color');
  head.style("font-family", "monospace");
  // this is how you can concatanate the rgb for css into a string.
  // rgba(0-255,0-255,0-255,0-1)
  var tempStr = "rgba(" + blob.r + "," + blob.g + "," + blob.b + "," + "1)" ;
  console.log(tempStr);
  head.style("background-color", tempStr);
  head.style("color", "#FFF");
  head.style("width", "800");
  head.style("font-size", "20pt");
  head.style("padding", "10px");

  // this shows the whole blob json data package
  console.log(blob);


}


function draw() {
  // draw stuff here
}
