
var blob;

// this is the format for the space station
// {
//   "message": "success",
//   "timestamp": UNIX_TIME_STAMP,
//   "iss_position": {
//     "latitude": CURRENT_LATITUDE,
//     "longitude": CURRENT_LONGITUDE
//   }
// }

var url = 'http://api.open-notify.org/iss-now.json';

function setup() {
    createCanvas(400,400);
    loadJSON(url,'json',dloaded,dfail);

}

function dloaded(thedata) {
 console.log(thedata);
 blob = thedata;
 console.log("start -- " + blob);
}

function dfail(thedata) {
  console.log("ERROR-" + thedata);
}


function draw() {
  rectMode(CENTER);
  fill(230);
  rect(width/2,height/2, 380,380);
  fill(20);
  text("ISS incoming...", 20,25);
  if (blob) {
    var lx = map(blob.iss_position.latitude,-180,180,10,350);
    var ly = map(blob.iss_position.longitude,-180,180,10,350);


    ellipse(lx,ly,7,7);
    textSize(13);
    text("here it is!", lx+10,ly+5);
  }


}
