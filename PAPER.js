class Paper {

    constructor(x,y,diameter){
        var options_paper = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Bodies.circle(x,y,diameter,options_paper);
        this.radius = diameter/2;

        World.add(world, this.body);
    }

    display(){
     var pos = this.body.position;
     fill("lightyellow");
     ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}