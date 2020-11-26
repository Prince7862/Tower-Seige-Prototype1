class Slingshot{
    constructor(BodyA,PointB){
        var options = {
            bodyA:BodyA,
            pointB:PointB,
            stiffness:0.4,
            length:1.5
        }
    
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,23,8)
            if(pointA.x < 220){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
        }
    }
}