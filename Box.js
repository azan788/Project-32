class Block {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.Visibility = 225;
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  
  display(){
    if(this.body.speed < 3){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        rect(pos.x,pos.y, this.width, this.height);
        pop();
    } else {
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        pop();
    }
  }
  score(){
    if(this.Visibility < 0 && this.Visibility > -1005){
      score++;
    }
  }
}