const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3,dustbinImage,paperImage,paperObject,ground;

function preload()
{

}


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(500,510,20,100);
	paperObject = new Paper(80,500,50);
	ground = new Ground(width/2, 560, 800, 10);

	Engine.run(engine);
  
}

function draw() {
  background(255);

  //paperObject.x = paperBody.x;
  //paperObject.y = paperBody.y;

  dustbin1.display();
  paperObject.display();
  ground.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if (keyDown("up")){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}