
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(60,435);
	can1 = new Ground(700,405,20,100);
	can2 = new Ground(520,405,20,100);
	can3base = new Ground(610,458,180,20);
	ground = new Ground(400,475,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  

  ball.display();
  can1.display();
  //can1.shapeColor = color("white");
  can2.display();
  can3base.display();
  ground.display();
  //drawSprites();
 
  //keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:135,y:-135});
	}
}

