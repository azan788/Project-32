class Polygon {
    constructor(x, y, radius){
      var options = {
        'restitution':1,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.polygonIMG = loadImage("polygon.png")
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.polygonIMG, pos.x, pos.y, 40, 40);
      pop();
    }
  }