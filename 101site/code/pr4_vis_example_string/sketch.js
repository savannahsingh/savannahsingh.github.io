
var speech = "Tonight, I am speaking to you because there " +
"is a growing humanitarian and security crisis" +
"at our southern border. Every day, Customs and Border Patrol agents " +
"encounter thousands of illegal immigrants trying to enter our country. " +
"We are out of space to hold them, and we have no way to promptly " +
"return them back home to their country. America proudly welcomes millions " +
"of lawful immigrants who enrich our society and contribute to our nation." +
"But all Americans are hurt by uncontrolled, illegal migration." +
"It strains public resources and drives down jobs and wages." +
"Among those hardest hit are African Americans and Hispanic Americans. " +
"Our southern border is a pipeline for vast quantities of illegal drugs," +
" including meth, heroin, cocaine, and fentanyl. Every week, 300 of our citizens" +
" are killed by heroin alone, 90 percent of which floods across from" +
"our southern border. More Americans will die from drugs this year than were" +
"killed in the entire Vietnam War." +
"In the last two years, ICE officers made 266,000 arrests of " +
"aliens with criminal records, including those charged or " +
"convicted of 100,000 assaults,30,000 sex crimes, and 4,000 violent killings." +
" Over the years, thousands of Americans have been brutally killed " +
" by those who illegally entered our country," +
" and thousands more lives will be lost if we don’t act right now." ;

var title = "President Donald Trump Delivers Remarks at Rally in Tampa";



function setup() {
  createCanvas(700,500);
  background(40);
  fill(255);

  console.log(title.length);  // returns numnber of char in string

 //removePunctFromWord("HEllokhello");

 simpleMatchDraw(speech);


}

function draw() {
 //ellipse(width/2, height/2, 50, 50);
}


function simpleMatchDraw(str) {
     console.log(str);
       textSize(10);
     var arr = split(str," ");
     console.log(arr);

     var R1=0;
     var R2=0;
     var R3=0;
     var R4=0;
     var D= 0;

     for (i=0; i < arr.length; i++) {

          var nuword = removePunctFromWord(arr[i]);

          switch(nuword) {
            case "illegal":
            fill(255,0,0);
            text(arr[i], random(20,width-20), random(30,height));
            R1++;
            break;
            fill(255);
            case "Americans":
            fill(20,100,250);
            text(arr[i], random(20,width-20), random(30,height));
            R2++;
              break;
            case "border":
            fill(200,100,50);
            text(arr[i],random(20,width-20), random(30,height));
            R3++;
            break;
            case "and":
            fill(130);
            text(arr[i],random(20,width-20), random(30,height));
            R4++;
            break;
            default:
            fill(70);
            text("nope", random(20,width-20), random(30,height));
            D++;
          }

     }
     noStroke();
     textSize(14);
     fill(255);
     push();
     translate(40,30);
     text( "illegal -- " +  R1 + " ",0,0);
     text( "Americans -- " +  R2 + " ",120,0);
     text( "border -- " +  R3 + " ",240,0);
     text( "and -- " +  R4 + " ",360,0);
     text( "Everything else -- " +  D + " ",480,0);
     pop();

}


   // This function tests each word above to see if its has any ending
  // punctuation. If its find this, it will delete it and then send out
   // the cleaned word.

  function removePunctFromWord(str) {
    let nustr;
    let temp  = str.substr(-1);
    switch(temp) {
      case "'":
      nustr = str.slice(0,str.length-1);
      break;
      case ".":
      nustr = str.slice(0,str.length-1);
      break;
      case ":":
      nustr = str.slice(0,str.length-1);
      break;
      case ",":
      nustr = str.slice(0,str.length-1);
      break;
      case "?":
      nustr = str.slice(0,str.length-1);
      break;
      case "!":
      nustr = str.slice(0,str.length-1);
      break;
      default:
      nustr = str;
    }

    console.log(nustr);
    return nustr;
  }
