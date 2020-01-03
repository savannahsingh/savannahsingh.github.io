const CHART = document.getElementById("pokeChart");
console.log(Chart.defaults.scale.ticks);

let pokeChart = new Chart (CHART, {
  type: 'radar',
  data:  {
    labels: ['HP', 'Attack', 'Defense', 'S. Attack', 'S. Defense', 'Speed'],
    datasets: [
      {
        label: 'Pikachu',
        backgroundColor: 'transparent',
        borderColor: '#FFFF00',
        borderWidth: 2,
        data: [48, 39, 55, 32, 74, 49]
      }, {
        label: 'Charmander',
        backgroundColor: 'transparent',
        borderColor: '#FF0000',
        borderWidth: 2,
        data: [65, 32, 55, 87, 44, 27]
      }
    ]
  }
});


var pikachu;
var bulbasaur;
var charmander;
var squirtle;
var i = 0;

function preload() {   // using this as its good for local or remote data fetching
   loadJSON('https://pokeapi.co/api/v2/pokemon/pikachu/', getpikachu);
   loadJSON('https://pokeapi.co/api/v2/pokemon/bulbasaur/', getbulbasaur);
   loadJSON('https://pokeapi.co/api/v2/pokemon/charmander/', getcharmander);
   loadJSON('https://pokeapi.co/api/v2/pokemon/squirtle/', getsquirtle);
 }

function getpikachu (data) {
pikachu = data;
console.log(pikachu);
}

function getbulbasaur (data) {
bulbasaur = data;
console.log(bulbasaur);
}

function getcharmander (data) {
charmander = data;
console.log(charmander);
}

function getsquirtle (data) {
squirtle = data;
console.log(squirtle);
}
// function dfail(thedata) {
// console.log("ERROR with Data-");
// // console.log(thedata);
// }

function setup () {
// createCanvas(800,800);
//   background(0);
//   stroke(255);
//   strokeWeight(5);
//   noFill();
//   ellipse(400,400,780,780)
//   point(400,400);
//   strokeWeight(2);
//   ellipse(400,400,340,340);
//   ellipse(400,400,560,560);
//   ellipse(400,400,170,170);
//   line(50,200,750,600);
//   line(400,20,400,780);
//   line(50,600,750,200);
// stats(pikachu);
// }

function draw () {


}



function stats (object) {
  object.stats[5].name;
  console.log(object.stats[5].base_stat);

}
