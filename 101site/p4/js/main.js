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
