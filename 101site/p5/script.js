var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;
var GRAVITY = 0.3;
var JUMP = -5;
var obstacleSprites;
var player;
var isGameOver;
var isHelp;
var score;
var anim;
var toySprite;
var choco;
var bone;
var player2;
var anim2;
var scribble;              // global mode


// var bgm;

function preload() {

  bgm  = loadSound("bg_music.mp3");
  anim = loadAnimation("assets/corg1c.png", "assets/corg2c.png", "assets/corg3c.png", "assets/corg4c.png");
  choco = loadImage("assets/chocolate.png");
  bone = loadImage("assets/bone.png");
  anim2 = loadAnimation("assets/corgsleep1.png", "assets/corgsleep2.png");
  bark = loadSound("assets/bark.mp3");
  whim = loadSound("assets/pupwhimper.mp3");
}

function setup() {
  createCanvas(1280, 720);

  background(150, 200, 250);
  // loadSound("bg_music.mp3");
  bgm.play();
     masterVolume(2);
     // scale(0.00001);
  player = createSprite(100, height - 165);
  player.addAnimation("default", anim);

  // player.addAnimation("assets/corg1.png", "assets/corg4.png");
  playerHeight = player.position.y;
  isGameOver = false;
  score = 0;
  setGroundSprites();
  obstacleSprites = new Group();

  toySprite = new Group();

  gif = loadGif('assets/corg.gif');

  // player2 = createSprite( camera.position.x, camera.position.y);
  // player2.addAnimation("default", anim2);
  frameRate(60)
 createLoop({duration:3, gif:true})
}

function draw() {
  if (isGameOver) {
    endScreen();
  } else if (isHelp) {

    helpScreen();


  } else {
  background(150, 200, 250);

  worldMovement();
  controls();
  obstacleSprites.overlap(player, endGame);
  toySprite.overlap(player, getToy);
  drawSprites();
  drawObstacles();
  drawToys();
  score = score + 1;
  textAlign(CENTER);
  textSize(24);
  text ('Score: ', camera.position.x - 600, 24);
  text(score, camera.position.x - 525, 24);
  }
}

function worldMovement() {      //Sets the player and ground sprite positions
  player.position.x = player.position.x + 5;
  camera.position.x = player.position.x + width / 4;
  var firstGroundSprite = groundSprites[0];
  if (firstGroundSprite.position.x <= camera.position.x - (width / 1.5 + firstGroundSprite.width / 1.5)) {
    groundSprites.remove(firstGroundSprite);
    firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites * firstGroundSprite.width;
    groundSprites.add(firstGroundSprite);

  }
  player.velocity.y = player.velocity.y + GRAVITY;
  if (groundSprites.overlap(player)) {
    player.velocity.y = 0;
    playerHeight = height - player.height / 2;
  }
}

function setGroundSprites() { //Creates Ground Sprites
  groundSprites = new Group();
  numGroundSprites = width / GROUND_SPRITE_WIDTH + 1;
  for (var n = 0; n < numGroundSprites; n++) {
    var groundSprite = createSprite(
      n * 50,
      height - 25,
      GROUND_SPRITE_WIDTH,
      GROUND_SPRITE_HEIGHT
    )
    groundSprites.add(groundSprite);

  }
}

function drawObstacles() { // Spawns Obstacles
  if (random() > 0.99) {
    var obstacle = createSprite(camera.position.x + width, random(0, height - 50 - 15), 15, 15);
    obstacleSprites.add(obstacle);
  obstacle.addImage(choco);
  choco.resize(50,60);
  }
  var firstObstacle = obstacleSprites[0];
  if (obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width / 2 + firstObstacle.width / 2)) {
    removeSprite(firstObstacle);
  }
}

function endGame() {  //Ends the Game
  isGameOver = true;
  console.log('Game Over!');
whim.play();
}

function endScreen() {  //Game Over screen
  background(0);
    fill(255);
    textAlign(CENTER);
    textSize(24);
    text('Game Over! Click anywhere to restart', camera.position.x, camera.position.y);
    text('Your Score was: ' + score, camera.position.x, camera.position.y - 40);
    text('You killed your pet corgi! You can not feed your furbaby any chocolate or it will die! ', camera.position.x, camera.position.y + 40);
}

function helpScreen() { //Help Screen
  // anim2.play();
  // anim2.addAnimation();
  background(143, 74, 237);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text('Help the Corgi find his Bones!', camera.position.x, camera.position.y);
  text('Protect the Corgi! Avoid all the candy bars', camera.position.x, camera.position.y + 50);
  text('Press the Up Arrow to Jump!', camera.position.x, camera.position.y + 100);

  // player2 = createSprite( camera.position.x, camera.position.y);

  // translate(width / 2, height / 2)
  // const radius = height / 3
  // const x = cos(animLoop.theta) * radius
  // const y = sin(animLoop.theta) * radius
  //   anim2.play();
  // player2.position.x=500;
  // player2.position.y=500;

}

function controls() { //Player Controls
  if (keyDown(UP_ARROW)) {
    player.velocity.y = JUMP;
  }
  if (keyDown(ENTER)) {
    isHelp = true;
    let oldScore = score;
  }
  if (keyDown (CONTROL)) {
    isGameOver = true;
  }
}

function mouseClicked() {
  if (isGameOver) {
    isGameOver = false;
    score = 0;
    restart();
  } else if (isHelp) {
    isHelp = false;
    // score = oldScore;
  }
}

function restart() {  //Restart Logic
  for (var n = 0; n < numGroundSprites; n++) { //Resets Ground Sprites
    var groundSprite = groundSprites[n];
    groundSprite.position.x = n * 50;
  }
    player.position.x = 100; //Resets Player Position
    player.position.y = height - 75;

    obstacleSprites.removeSprites(); //Clear obstacles

}



function drawToys() { // Spawns Toys
  if (random() > 0.95) {
    var toy = createSprite(camera.position.x + width, random(0, height - 50 - 15), 50, 50);
    toySprite.add(toy);
    toy.addImage(bone);
    bone.resize(50,60);
  }
  var firstToy = toySprite[0];
  if (toySprite.length > 0 && firstToy.position.x <= camera.position.x - (width / 2 + firstToy.width / 2)) {
    removeSprite(firstToy);
  }
}

function getToy(toyos,player) {

toyos.remove();
score += 100;
bark.play();
}

function clouds() {
scribbleEllipse =
  scribble.scribbleEllipse(100,100, 50, 50);
}

// function stars() {
//  particlesJS("particles-js", {
//   "particles": {
//     "number": {
//       "value": 355,
//       "density": {
//         "enable": true,
//         "value_area": 789.1476416322727
//       }
//     },
//     "color": {
//       "value": "#ffffff"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.48927153781200905,
//       "random": false,
//       "anim": {
//         "enable": true,
//         "speed": 0.2,
//         "opacity_min": 0,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 2,
//       "random": true,
//       "anim": {
//         "enable": true,
//         "speed": 2,
//         "size_min": 0,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": false,
//       "distance": 150,
//       "color": "#ffffff",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 0.2,
//       "direction": "none",
//       "random": true,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "bubble"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 400,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 83.91608391608392,
//         "size": 1,
//         "duration": 3,
//         "opacity": 1,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });
// };
// function drawObstacles() { // Spawns Obstacles
//   if (random() > 0.95) {
//     var obstacle = createSprite(camera.position.x + width, random(0, height - 50 - 15), 15, 15);
//     obstacleSprites.add(obstacle);
//
//   }
//   var firstObstacle = obstacleSprites[0];
//   if (obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width / 2 + firstObstacle.width / 2)) {
//     removeSprite(firstObstacle);
//   }
// }
