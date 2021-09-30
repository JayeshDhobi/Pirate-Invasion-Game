const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;

var canon_baseImg;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  canon_baseImg = loadImage("assets/cannon_base.png");
  
}
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310);
  canon = new Canon(210,150,150,100,-PI/60);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(backgroundImg);
  Engine.update(engine);
    tower.display();
    canon.display();
 
    image(canon_baseImg,100, 100,200, 100);
}

