
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up, image2_over,snd1;

// var duration;
// var  slideWidth = 500;

function preload() {

   snd1 = loadSound("sound/bells.mp3");


}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(600, 600);
  //  console.log(hell);
     mgr = new SceneManager();
     masterVolume(5);

     ghosty = createSprite(0, 0);
     ghosty.addAnimation("normal", "assets/frame_apngframe1.png",  "assets/frame_apngframe9.png");
     ghosty.addAnimation("stand", "assets/frame_00_delay-0.04s.png",  "assets/frame_55_delay-0.04s.png");

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
