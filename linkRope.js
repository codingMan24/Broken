class LinkRope{
    constructor(bodyA,bodyB,whichOne){
        var lastLink = bodyA.body.bodies.length-whichOne;
        this.link = Constraint.create({
            bodyA : bodyA.body.bodies[lastLink],
            pointA : {x : 0, y : 0},
            bodyB : bodyB.body.bodies[lastLink],
            pointB : {x : 0, y : 0},
            length : -10,
            stiffness : 0.01
        })
        World.add(world,this.link)
    }
    cut(){
        World.remove(world, this.link);
    }
}