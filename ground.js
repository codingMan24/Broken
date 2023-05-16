class Ground{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y+15,w,h,{isStatic : true})
        this.w = w
        this.h = h
        World.add(world,this.body)
    }
    drawGround(){
        push()
            fill('gray')
            rectMode(CENTER)
            rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
    }
}