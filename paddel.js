export default class Paddle {
    constructor(gameWidth,gameHeight){
      this.width=150;
      this.height=30;

      this.maxSpeed =7;
      this.speed=0;
      this.gameWidth=gameWidth

      this.position={
          x:gameWidth/2 - this.width/2,
          y:gameHeight-this.height -10
      }
  }
    moveLeft() {
      this.speed = -this.maxSpeed;
    }
    moveRight(){
        this.speed=this.maxSpeed;
    }
    
    draw(ctx) {
      ctx.fillStyle = "#b24";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltatime) {
      this.position.x += this.speed;
    
      if(this.position.x +this.width >this.gameWidth )
        this.position.x=this.gameWidth-this.width;
      else if(this.position.x<0) this.position.x=0
    }
    stop(){
        this.speed=0
    }
  }
