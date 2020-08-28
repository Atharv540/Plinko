const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world, particles, plinkos, divisions, divisionHeight;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  particles=[];
  divisions=[];
  plinkos=[];
  divisionHeight = 300;
}

function draw() {
  Engine.update(engine);
  background(20);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }
  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
  for(x=0; x<plinkos.length; x++){
    plinkos[x].display();
  }


  drawSprites();
}
