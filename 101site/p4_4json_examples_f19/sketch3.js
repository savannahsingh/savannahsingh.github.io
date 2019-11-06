

 var ftemp,weather;

function setup() {
  background(200);
  //noLoop();
// check the openweather api webpage to get more info on how to read the data
// and how to get a key -- https://openweathermap.org/appid
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=Santa Cruz'+
  '&APPID=abb7d02485932f2ed01e1c85911c483e';  // put your app id here
  loadJSON(url, updateWeather);
  console.log("loading data");
 colorMode(HSB,100);
}

function draw() {
  createCanvas(500,300);
  background(20);
  if (!ftemp == 0) {
    fill(255);
    text(weather.name + " Temp-- " + ftemp ,10,20);

    fill(ftemp,255,255);
    ellipse(width/2,height/2, 50,50);
  }


  for (var i = 70; i < 100; i++) {
    fill(i,255,255);
    rect((i*3)-100,250,4,40);

  }

}

function updateWeather(w) {
  // get the temperture value out of the loaded JSON
  // then convert it as its kelvin (!) back to Farenheit scale
  weather = w;
  console.log(weather);
  ftemp = round((int(weather.main.temp) * (9/5)) + -459.67);
  console.log(ftemp);

}





















// var blob;

// var akey = "22fae7b67e2948ba87a87e7e4154e78c";
// var keywords = "baby";
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// url += '?' + "api-key=" + akey + "&q=" + keywords + "&begin_date=" + "20160101" + "&sort=" + "newest";



// function preload() {

//   blob = loadJSON(url);
//   // this shows the completed url as its sent out
//   // you can use this to put into any json formatter/viewer
//   console.log(url);
// }

// function setup() {

//    createCanvas(800,800);

//     // this shows the whole blob json data package

//     console.log(blob.response.docs);


//    for (var i =0; i < blob.response.docs.length; i++ )  {
//     fill(0,0,200);
//     textSize(16);
//     var headln = blob.response.docs[i].headline.main;
//     text("--->" + headln,50,i*90+12,700,300);
//     ellipse(30,i*90+80,5,5);
//     text("------------------------------------------",50,i*90+80,500,200);
//     fill(20);
//     textSize(13);
//     var lead = blob.response.docs[i].lead_paragraph;
//     var tw = textWidth(lead);
//     //console.log(tw);
//     text(lead,50,i*90+40,600,(tw/600)*300);

//    }



// }



// function draw() {
//   // draw stuff here
// }
