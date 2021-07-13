
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftside,rightside;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 580);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
	  ball_options={
	  isstatic:false
	  ,restitution :0.3
	  ,friction:0
	  ,density:1.2
	  }
	  ball = Bodies.circle(200,100,20,ball_options);
	  World.add(world,ball);
	  fill("teal")
	
	  ground =new Ground(650,500,1300,20);
	  leftside = new Ground(850,450,10,100);
	  rightside = new Ground(1100,450,10,100);
	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  leftside.display();
  rightside.display();

  ellipse(ball.position.x,ball.position.y,25);
  Engine.update(engine);
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:80,y:-80});
  
	}
}


