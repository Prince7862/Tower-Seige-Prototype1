
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Body = Matter.Body
const Constraint = Matter.Constraint

var engine,world
var ground1,ground2,b1,b2,b3,b4,
b5,b6,b7,b8,b9,b10,b11,b12
,b13,b14,slingshot,polygon;

function setup() {
  createCanvas(800,400);
engine = Engine.create()
world = engine.world



ground1 = new Ground(350,300,150,20);
ground2 = new Ground(650,150,150,20);
b1 = new Box(304,250,30,30)
b2 = new Box(335,250,30,30)
b3 = new Box(365,250,30,30);
b4 = new Box(395,250,30,30);
b5 = new Box(335,270,30,30);
b6 = new Box(365,270,30,30);
b7 = new Box(350,220,30,30);
b8 = new Box(600,100,30,30);
b9 = new Box(630,100,30,30);
b10 = new Box(660,100,30,30);
b11 = new Box(690,100,30,30);
b12 = new Box(630,50,30,30);
b13 = new Box(660,50,30,30);
b14 = new Box(645,25,30,30);
polygon = new Polygon(50,100,40);
slingshot = new Slingshot(polygon.body,{x:100, y:200});
}



function draw() {
  background(255,255,255);  
  Engine.update(engine);


  ground1.display();
  ground2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  slingshot.display();
  polygon.display();
}