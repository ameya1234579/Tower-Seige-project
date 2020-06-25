 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var ground,shelf1,shelf2;
var box = [];
var ball,slingshot;
var score = 0;
var timer = 2000;
var gameState = "play";

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	
	roof = new Roof(250,height,500,30);
	
	shelf1 = new Roof(75,150,150,15);
	shelf2 = new Roof(425,100,150,15);

	//on shelf1

	box1 = new Box(75,120,30,30);
	box2 = new Box(105,120,30,30);
	box3 = new Box(45,120,30,30);
	box4 = new Box(90,105,30,30);
	box5 = new Box(60,105,30,30);
	box6 = new Box(75,90,30,30);

	//on shelf 2

	box7 = new Box(425,70,30,30);
	box8 = new Box(455,70,30,30);
	box9 = new Box(395,70,30,30);
	box10 = new Box(440,55,30,30);
	box11 = new Box(410,55,30,30);
	box12 = new Box(425,40,30,30);

	//on ground layer1

	box13 = new Box(365,470,30,30);
	box14 = new Box(425,470,30,30);
	box15 = new Box(455,470,30,30);
	box16 = new Box(395,470,30,30);
	box17 = new Box(335,470,30,30);
	box18 = new Box(305,470,30,30);

	//Layer 2

	box19 = new Box(440,455,30,30);
	box20 = new Box(410,455,30,30);
	box21 = new Box(380,455,30,30);
	box22 = new Box(350,455,30,30);
	box23 = new Box(320,455,30,30);

	//layer 3

	box24 = new Box(425,440,30,30);
	box25 = new Box(395,440,30,30);
	box26 = new Box(365,440,30,30);
	box27 = new Box(335,440,30,30);

	//layer4

	box28 = new Box(410,400,30,30);
	box29 = new Box(380,400,30,30);
	box30 = new Box(350,400,30,30);

	//layer 5

	box31 = new Box(395,370,30,30);
	box32 = new Box(365,370,30,30);

	//layer 6

	box33 = new Box(380,340,30,30);
	
	ball = new Paper(200,200,30);

	slingshot = new Slingshot(ball.body,{x: 250, y: 250});

  }


function draw() {
  
  background("black");

  Engine.update(engine);

  fill("white");
  text("DRAG THE BALL AND REALEASE TO THROW IT TO THE BOXES",50,200);
  text("PRESS SPACE TO ATTACTH THE BALL BACK TO THE STRING",50,230);

  push();

  textSize(20);

  text("SCORE: "+ score,width-300,50);
  text("TIME LEFT: "+timer,width-300,90);

  pop();

  roof.display();

  shelf1.display();
  shelf2.display();
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  ball.display();
  slingshot.display();
  

  if(gameState === "play" && timer > 0 ){
	timer --; 
  }

  if(timer > 0 && score > 300 && gameState=== "play"){
	gameState = "win";
  }

  if(timer === 0 && score > 300 && gameState === play){
	  gameState = "win"
  }

  if(gameState === "win"){
	  End();
  }


   if(timer === 0 && score < 300 && gameState === "play"){
	   gameState = "lose";
   }

   if(gameState === "lose"){
	End();
   }
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});

}

function mouseRealeased(){
	slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		World.remove(world,ball.body);
		ball = new Paper(200,200,30);
		slingshot.attach(ball.body);
	}
}

function End(){
	textSize(20);
	fill("white");

	if(gameState === "win"){
		text("YOU WIN",400,50);
	}

	if(gameState === "lose"){
		text("YOU LOSE",400,50);
	}

	World.remove(world,box1.body);
	World.remove(world,box2.body);
	World.remove(world,box3.body);
	World.remove(world,box4.body);
	World.remove(world,box5.body);
	World.remove(world,box6.body);
	World.remove(world,box7.body);
	World.remove(world,box8.body);
	World.remove(world,box9.body);
	World.remove(world,box10.body);
	World.remove(world,box11.body);
	World.remove(world,box12.body);
	World.remove(world,box13.body);
	World.remove(world,box14.body);
	World.remove(world,box15.body);
	World.remove(world,box16.body);
	World.remove(world,box17.body);
	World.remove(world,box18.body);
	World.remove(world,box19.body);
	World.remove(world,box20.body);
	World.remove(world,box21.body);
	World.remove(world,box22.body);
	World.remove(world,box23.body);
	World.remove(world,box24.body);
	World.remove(world,box25.body);
	World.remove(world,box26.body);
	World.remove(world,box27.body);
	World.remove(world,box28.body);
	World.remove(world,box29.body);
	World.remove(world,box30.body);
	World.remove(world,box31.body);
	World.remove(world,box32.body);
	World.remove(world,box33.body);
	

}