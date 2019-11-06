
var blob;

var kwords = "trump";
var apikey ="dc6zaTOxFJmzC";
var gifimage;

var url = "http://api.giphy.com/v1/gifs/search";
 url += '?' + "api_key=" + apikey + "&q=" + kwords;


function setup() {

  createCanvas(50,50);
  loadJSON(url, displayGiphy,dfail);

}

function displayGiphy(gifdata) {
  var len;
   console.log(gifdata);
   var gifUrl ;


   createElement('br');
   createP("Search with " + kwords);

   if ( gifdata.data.length > 10) {
         len = 10;
      } else {
         len = gifdata.data.length;
   }


   console.log(len);

    for (var i =0; i < len; i++ )  {
            gifurl = gifdata.data[i].images.original.url;
            console.log(gifurl);
            gifimage = createImg(gifurl);
            //gifimage.position(500,200);

    }

}

function dfail(thedata) {
  console.log("ERROR-" + thedata);
}



function draw() {
  // draw stuff here
}
