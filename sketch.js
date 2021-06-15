const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg,kidImg;
var character;
var snow;
var snows = [];

function preload(){
backgroundImg = loadImage("snow1.jpg");
kidImg = loadImage("kid.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  //snow = new Snow(400,200);

  character = createSprite(400, 339, 10, 20);
  character.scale = 0.2
  character.shapeColor = "blue";
  character.addImage(kidImg);

  ground = new Ground(600,height,1200,20);
  
  if(frameCount % 20 === 0){
    snows.push(new Snow(random(0,800),50));
  }
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  if (character.y < 339){
  character.velocityY = character.velocityY + 1;
  } else if (character.y >= 339){
  character.velocityY = 0;
  }

  ground.display();
  //snow.display();
  //console.log(keyCode);

  if (keyDown(UP_ARROW) && character.y >= 339){
    character.velocityY = -7; 
  }
  if (keyDown(RIGHT_ARROW)){
    character.velocityX = 5;
  } else if (keyDown(LEFT_ARROW)){
    character.velocityX = -5;
  } else {
    character.velocityX = 0;
  }

  if(frameCount % 20 === 0){
    snows.push(new Snow(random(0,800),-10));
  }

  for (var g = 0; g < snows.length; g++){
    snows[g].display();
  }

  drawSprites();
}

function keyPressed(){
  
}