
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20)
	hammer1= new Hammer(200,200)
	stone1=new Stone(300,650,50,50)
	rubber1=new Rubber(750,650,30)
	sand1=new Sand(500,650,15)
	sand2=new Sand(515,650,15)
	sand3=new Sand(530,650,15)
	sand4=new Sand(545,650,15)
	sand5=new Sand(560,650,15)
	sand6=new Sand(575,650,15)
	sand7=new Sand(590,650,15)
	sand8=new Sand(610,650,15)
	sand9=new Sand(625,650,15)
	sand10=new Sand(640,650,15)
	sand11=new Sand(655,650,15)
	sand12=new Sand(670,650,15)
	iron1=new Iron(950,650,30,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  hammer1.display()
  ground.display();
  stone1.display();
  rubber1.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()
  sand7.display()
  sand8.display()
  sand9.display()
  sand10.display()
  sand11.display()
  sand12.display()
  iron1.display();
  drawSprites();
 
}



