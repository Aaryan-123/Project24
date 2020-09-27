
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
// var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper();
	ground = new Ground(width / 2, height - 50, width, 10);

	dustbin = new Dustbin(500,600,10,100);
	dustbin2 = new Dustbin(700,600,10,100);
	dustbin3 = new Dustbin(600,650,200,10);
	// var options = {
	// 	isStatic : true,
	// 	restitution : 0.3
	// }
	// dusbinObject = Bodies.rectangle(600,650,10,100,options);
    // World.add(world,dusbinObject);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 145,y : -115});
	}
}

