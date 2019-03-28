export default class Paddle {
    constructor(game){
      this.width=150;
      this.height=30;
      this.color="#000";
      this.maxSpeed =15;
      this.speed=0;
      this.speeda=0;
      this.gameWidth=game.GAME_WIDTH
      this.gameheight=game.GAME_HEIGHT
      
      this.position={
          x:game.GAME_WIDTH/2 - this.width/2,
          y:game.GAME_HEIGHT-this.height -20
      }
  }

    moveLeft() {this.speed = -this.maxSpeed;}
    moveRight(){this.speed=this.maxSpeed;}
    moveTop(){this.speeda=this.maxSpeed;}
    movedown(){this.speeda=-this.maxSpeed;}
    
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltatime) {
      this.position.x += this.speed;
      this.position.y += this.speeda;
      if(this.position.x +this.width >this.gameWidth )
        this.position.x=this.gameWidth-this.width;
      else if(this.position.x<0) {
        this.position.x=0}
      else if(this.position.y<0) this.position.y=0
      else if(this.position.y +this.height >this.gameheight )
        this.position.y=this.gameheight-this.height;
    }
    stop(){
        this.speed=0
        this.speeda=0
    }
  }
