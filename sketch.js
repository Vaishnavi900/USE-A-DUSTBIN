
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	dobj = new Dustbin(1200,650)
	pobj = new Paper(200,450,40)
    gobj = new Ground(800,670,1600,20)

	Engine.run(engine);

	// dustbinline1 = createSprite(750,600,10,200)
	// dustbinline1.shapeColor = "blue"

	// dustbinline2 = createSprite(500,600,10,200)
	// dustbinline2.shapeColor = "blue"

	// dustbinline3 = createSprite(625,695,240,10)
	// dustbinline3.shapeColor = "blue"

	// dustbinline4 = createSprite(625,505,240,10)

	// //paper = createSprite(90,675,50,50,)
	// ellipse(90, 675, 50, 50);
  
}




function draw() {
  rectMode(CENTER);
  background(0);
  dobj.display()
  pobj.display()
  gobj.display()

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(pobj.body,pobj.body.position,{x:85,y:-85});
	
	}
}


