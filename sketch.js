const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var sphere;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var sphere_options= 
    {
      restitution: 4.0
    }
    sphere = Bodies.circle(100,100,20,sphere_options);
    World.add(world,sphere);
    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(sphere.position.x,sphere.position.y,20,20 );
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}