class Box {

constructor(x,y,w,h){

    var options  = {
        restitution: 0.8,
        density : 0.8,
        friction:0.5
    }

    this.body  = Matter.Bodies.rectangle(x,y, w,h, options)
    Matter.World.add(myWorld,this.body );
    this.width  = w;
    this.height = h;
}

display(){

var angle  = this.body.angle;
push ();
translate(this.body.position.x, this.body.position.y)
rotate(angle);
rect( 0,0,this.width,this.height );
pop ();

}


}



