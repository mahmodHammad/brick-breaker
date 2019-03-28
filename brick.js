import {detection} from './collision_detection.js'
export default class Brick{
  constructor(game ,position ){
    this.img=document.getElementById('img_brick')
    this.width=80;
    this.height=25
    this.position=position
    this.game=game;
    
    this.markedForDeletitiom=false
  }

  update(){
    if(detection(this.game.ball , this)){
      this.game.ball.speed.y=-this.game.ball.speed.y;

      this.markedForDeletitiom=true
    }
  }

  draw(fjf){

    fjf.drawImage(this.img,this.position.x,this.position.y,this.width,this.height)

  }
}