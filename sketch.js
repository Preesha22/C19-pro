//making variables.....
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var score;

//loading images in function preload
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

//function setup....
function setup(){

//creating canvas
  createCanvas(600, 600);

//creating tower sprite, adding image, velocity
  tower = createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY = 1;

//creating ghost sprite, adding image, velocity
 ghost = createSprite(200, 200);
 ghost.addImage(ghostImg);
 ghost.scale = 0.5;

 //score as 0
 score = 0;
}

//function draw.......
function draw() {

//background
  background(500);

//displaying score
  text("Score:" +score, 10, 10);

//sound..
spookySound.loop()

//making the tower move forever to make it look as it is infinity
  if(tower.y > 400){
      tower.y = 300
    }

//giving movement functions to the ghost
  if(keyDown("right_arrow")){
    ghost.x = ghost.x +5;
  }
  if(keyDown("left_arrow")){
    ghost.x = ghost.x -5;
  }
  if(keyDown("space")){
    ghost.velocityY = -10;
  }

  //adding gravity
  ghost.velocityY = ghost.velocityY +0.8;

   
//calling functions to spawn obstacles
  spawnDoors();
  spawnObstacles();

  //draw the sprites
  drawSprites();
}

//function of spawning the door at random positiions
function spawnDoors(){

if(frameCount % 250 === 0 ){
  door = createSprite(100, 100, 50, 70);
  door.x = Math.round(random(20, 390));
  door.addImage(doorImg);
  door.scale = 1;
  door.velocityY = 3;
  door.lifetime = 500;
}
}

//function of spawning the obstacles at random positions
function spawnObstacles(){
 
if(frameCount % 150 === 0){
  climber = createSprite(120, 10, 30, 30);
  climber.x = Math.round(random(10, 300));
  climber.addImage(climberImg);
  climber.scale = 1;
  climber.velocityY = 5;
  climber.lifetime = 550
}
}
//gravity\\
//play and end\\
//framerate score\\