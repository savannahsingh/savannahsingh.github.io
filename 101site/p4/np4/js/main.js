const CHART = document.getElementById("pokeChart");
console.log(Chart.defaults.scale.ticks);

// var i = 0;
// var pikachu;
// var bulbasaur;
// var charmander;
// var squirtle;

// function preload() {   // using this as its good for local or remote data fetching
//    loadJSON('https://pokeapi.co/api/v2/pokemon/pikachu/', getpikachu);
//    loadJSON('https://pokeapi.co/api/v2/pokemon/bulbasaur/', getbulbasaur);
//    loadJSON('https://pokeapi.co/api/v2/pokemon/charmander/', getcharmander);
//    loadJSON('https://pokeapi.co/api/v2/pokemon/squirtle/', getsquirtle);
//  }

let pokeChart = new Chart (CHART, {
  type: 'radar',
  data:  {
    labels: ['HP', 'Attack', 'Defense', 'S. Attack', 'S. Defense', 'Speed'],
    datasets: [
      {
        label: 'Pikachu',
        backgroundColor: 'rgba(255, 251, 0,  0.1)',
        borderColor: 'rgb(255, 251, 0)',
        borderWidth: 2,
        data: [48, 39, 55, 32, 74, 49]
      }, {
        label: 'Charmander',
        backgroundColor: 'rgba(255, 0, 0,  0.1)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 2,
        data: [65, 32, 55, 87, 44, 27]
      }, {
        label: 'Squirtle',
        backgroundColor: 'rgba(0, 62, 255, 0.1)',
        borderColor: 'rgb(0, 62, 255)',
        borderWidth: 2,
        data: [45, 87, 27, 99, 63, 10]
      }, {
        label: 'Bulbasaur',
        backgroundColor: 'rgba(100, 255, 0, 0.1)',
        borderColor: 'rgb(100, 255, 0)',
        borderWidth: 2,
        data: [54, 76, 34, 14, 88, 100]
      }
    ]
  }
});

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
function stats (object) {
  object.stats[5].name;
  console.log(object.stats[5].base_stat);

}
