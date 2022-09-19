
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola,box1,box2,box3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
solo = Bodies.rectangle(600,580,1200,2,{isStatic:true})

	//Crie os Corpos Aqui.
bola = Bodies.circle(200,200,40)
box1 = Bodies.rectangle(300,100,100,100,{restitution:0.5,friction:0.02,frictionAir:0})
box2 = Bodies.rectangle(500,150,100,100,{restitution:0.7,friction:0.07,frictionAir:1})
box3 = Bodies.rectangle(700,100,100,100,{restitution:0.5,friction:0.07,frictionAir:2})
World.add(world,bola)
World.add(world,box1)
World.add(world,box2)
World.add(world,box3)
World.add(world,solo)
}


function draw() {
    background(0);
	Engine.run(engine);
	rectMode(CENTER);
rect(box1.position.x,box1.position.y,100,100)
rect(box2.position.x,box2.position.y,100,100)
rect(box3.position.x,box3.position.y,100,100)
ellipse(bola.position.x,bola.position.y,40)
rect(solo.position.x,solo.position.y,1200,2)  
  drawSprites();
 
}



