

var blob;
//var url = "http://the json url string you use to fetch data";

function preload() {   // using this as its good for local or remote data fetching
   loadJSON('weather.json','json',dloaded,dfail);
   //loadJSON(url,'json',dloaded,dfail);
}



function dloaded(thedata) {

 blob = thedata;  // pass the json object to global var blob
 console.log("start -- ");
 console.log(blob);

}

function dfail(thedata) {
console.log("ERROR with Data-");
console.log(thedata);
}



function setup() {
 createCanvas(800,500);
 background(50);
 fill(255);
 noStroke();
 colorMode(RGB, 255);

//  console.log(blob);


 push();
 translate(90,150);
 //scale(1.5);
 objlineGraph(blob.cities);
 pop();

 push();
 translate(90,350);
 objEllipseGraph(blob.cities);
 pop();


}

function draw() {
//ellipse(width/2, height/2, 50, 50);
}


function objlineGraph(theobj) {
   colorMode(HSB, 100);
   var sc = 2.5;
   console.log(theobj);

   for (var i = 0; i < theobj.length; i++) {

     console.log(theobj[i]);

   //   // fill(255);
   //   // ellipse(i*60,200 - (arr[i]/2),arr[i],arr[i]);
   //
    var tempC = map(theobj[i].temperture,-10,115,80,0)
   //
   //   //push()
   // //  scale(1.2 * (i*.50));
   //
   fill(tempC,150,150);
      rect(i*90,0 ,10,-theobj[i].temperture);
   //   //rect(i*20,0+(i*20) ,10,-arr[i]);
   //
    fill(255);
    text(theobj[i].name,(i*90)-10 ,20);
     //  text(arrtext[i],(i*20)-20 ,20+(i*20));

   //  pop();

   }


}


function objEllipseGraph(humid) {
   colorMode(HSB, 100);
   var sc = 2.5;
   console.log(humid);

   for (var i = 0; i < humid.length; i++) {

     console.log(humid[i]);

     // fill(255);
     // ellipse(i*60,200 - (arr[i]/2),arr[i],arr[i]);

     var tempC = map(humid[i].humidity,-10,115,80,0)

     //push()
   //  scale(1.2 * (i*.50));

     fill(tempC,100,100);
  //  fill(60,100,100);
  //   ellipse(i*90,0-(humid[i].humidity/2) ,humid[i].humidity,humid[i].humidity);
    ellipse(i*90,10-(humid[i].humidity/2) , int(humid[i].humidity), int(humid[i].humidity));
     //rect(i*20,0+(i*20) ,10,-arr[i]);

     fill(255);
     text(humid[i].name,(i*90)-10 ,20);
     text(humid[i].humidity,(i*90)-10 ,60);
     //  text(arrtext[i],(i*20)-20 ,20+(i*20));

   //  pop();

   }


}

//////////////// END
