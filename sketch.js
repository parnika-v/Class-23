var myEngine, myWorld, ground , ball ;

function setup() {
  createCanvas(800,400);
// reates an Physics Engine
 myEngine =  Matter.Engine.create() ;

 // Creates an gaming World
 myWorld  = myEngine.world;


 ground  = Matter.Bodies.rectangle(400,380,800,20, {isStatic:true});
 Matter.World.add(myWorld,ground );


box1  = new Box(400,100, 50,50);
box2 = new Box (420,50,100,40);


 console.log(box2);

  
}

function draw() {
  background(0);  
  Matter.Engine.update(myEngine)
  rectMode(CENTER);
 
  box1.display()
  box2.display()
  rect(ground.position.x,ground.position.y,800,20);

  


}