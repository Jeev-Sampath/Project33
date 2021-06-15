class Snow{
    constructor(x,y) {
        var options = {
            'restitution':0.1,
            'friction':20,
            'density':10,
            isStatic: false
        }
        this.r = 1;
        this.y = 50;
        this.body = Bodies.circle(x, y, this.r, options);
        
        this.image = loadImage("snow4.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y);
        this.image.scale = 0.1;
        pop();
      }
}