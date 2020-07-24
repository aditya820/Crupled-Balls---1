class Box {

    constructor(x,y,width,height) {
      var options_box = {
          isStatic : true
      }

      this.body = Bodies.rectangle(x,y,width,height,options_box);
      this.width = width;
      this.height = height;

      World.add(world,this.body);
        
    }

    display(){
      strokeWeight(0);
      var pos = this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
}