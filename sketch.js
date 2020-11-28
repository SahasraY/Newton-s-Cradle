
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Bob1=new Bob(200);
	Roof1=new Roof(200);
	Roof2=new Roof(280)
	Roof3=new Roof(360);
	Roof4=new Roof(440);
	Roof5=new Roof(520);
	Bob2=new Bob(280);
	Bob3=new Bob(360);
	Bob4=new Bob(440);
	Bob5=new Bob(520);
	String1=new String(Roof1.body,Bob1.body)
	String2=new String(Roof2.body,Bob2.body)
	String3=new String(Roof3.body,Bob3.body)
	String4=new String(Roof4.body,Bob4.body)
	String5=new String(Roof5.body,Bob5.body)

	


	Engine.run(engine);
  
}


function draw() {
  background(0);
 
  drawSprites();
  Bob1.display();
  Roof1.display();
  Roof2.display();
 Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  String1.display();
  String2.display();
  String3.display();
  Roof3.display();
  Roof4.display();
  Roof5.display();
  String4.display();
  String5.display();
}



