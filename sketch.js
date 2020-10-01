
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottom, side1, side2;
var ground;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bottom = createSprite(550,580,200,20);
	isStatic:true;
	side1 = createSprite(450,540,20,100);
	isStatic:true;
	side2 = createSprite(650,540,20,100);
	isStatic:true;

	ground = createSprite(400,600,800,10);
	ground.shapeColor = color("yellow");
	isStatic:true;

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bottom.display();
  side1.display();
  side2.display();
  ground.display();
 

  drawSprites();
 
}



