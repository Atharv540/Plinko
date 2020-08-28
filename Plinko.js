class Plinko{
  constructor(x,y){
    var options={
      restitution: 1,
      friction: 0,
      isStatic: true
    }
    this.r = 10;
    this.plinko = Bodies.circle(x, y, this.r, options);
    World.add(world, this.plinko);
  }
  display(){
    var pos=this.plinko.position;
    var angle = this.plinko.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill(255,255,255);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r, this.r);
    pop();

  }
  }
