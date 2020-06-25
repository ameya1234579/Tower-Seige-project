class Paper{
    constructor(x,y,radius){
        var options = {
            //'frictionAir':0,
            friction: 1,
            restitution: 0.8,
            density: 1
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
                        
    }
    

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("yellow");

        ellipse(0,0, this.radius);     

    }
}