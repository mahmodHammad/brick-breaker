export default class Ball{
    constructor(gameWidth,gameHeight){
        this.img=document.getElementById('img_ball')
        this.size=16;
        this.position={x:10,y:20}
        this.speed={x:11,y:21}
        this.gameHeight=gameHeight;
        this.gameWidth=gameWidth;
    }

    draw(fjf){
        fjf.drawImage(this.img,this.position.x,this.position.y,this.size,this.size)
    }
    update(deltatime){
        this.position.x+=this.speed.x
        this.position.y+=this.speed.y
        if(this.position.x>this.gameWidth ||this.position.x<0)
            this.speed.x= -this.speed.x
        else if(this.position.y<0 ||this.position.y>this.gameHeight-this.size)
        this.speed.y=-this.speed.y
        else if(this.position.y>this.gameHeight-(this.size+19) )
        console.log("down" ,this.position.y)
    }
}