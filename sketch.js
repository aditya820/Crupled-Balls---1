
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var options_ground = {
		isStatic : true
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,600,75);

	box1 = new Box(600,660,200,20);
	box2 = new Box(510,610,20,100);
	box3 = new Box(690,610,20,100);

	var ground = Bodies.rectangle(400,740,800,20,options_ground);
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("white");
  stroke("white");
  textSize(25);
  text("Press the Up Arrow Key!!!",275,200);

  fill("lightblue"); 
  rect(400,680,800,20);

  paperBall.display();
  
  box1.display();
  box2.display();
  box3.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
      Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:45,y:-45});
	}
}
   



