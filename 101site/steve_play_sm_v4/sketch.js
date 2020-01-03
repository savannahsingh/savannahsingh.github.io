
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up, image2_over,snd1;
// var duration;
// var  slideWidth = 500;

function preload() {

   snd1 = loadSound("sound/troll.mp3");


}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(600, 500);
  //  console.log(hell);
     mgr = new SceneManager();
     masterVolume(.05);

     ghosty = createSprite(0, 0);
     ghosty.addAnimation("normal", "assets/ghost_spin0001.png",  "assets/ghost_spin0003.png");
     ghosty.addAnimation("stand", "assets/ghost_standing0001.png",  "assets/ghost_standing0007.png");

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( scene1 );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
