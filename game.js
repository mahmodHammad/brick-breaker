import Paddle from './paddel.js'
import InputHandler from './input.js'
import Ball from './ball.js'

import Brick from './brick.js'
import {BuildLevel , level1} from './levels.js'

const gamestate={
  paused:0,
  running:1,
  menue:3,
  gameover:4
}

export default class Game{
  constructor(gamewidth,gameheight){
    this.GAME_WIDTH=gamewidth;
    this.GAME_HEIGHT=gameheight; 
    this.togglerun=1;

  }

  start(){
    this.gamestate=gamestate.running;
    this.paddle = new Paddle(this);
    this.ball =   new Ball(this)
    new InputHandler(this.paddle ,this)


    let bricks=BuildLevel(this ,level1)
 

   this.gameobj=[ this.ball ,this.paddle ,...bricks]
  }

  update(deltaTime){
    if(this.gamestate==gamestate.paused) return
      this.gameobj.forEach((obj)=>obj.update(deltaTime))
      this.gameobj = this.gameobj.filter(obj=>!obj.markedForDeletitiom)
      
  }

    draw(fjf){
      this.gameobj.forEach((obj)=>obj.draw(fjf))
      
      if(this.gamestate ==gamestate.paused){
        fjf.rect(0,0,this.GAME_WIDTH,this.GAME_HEIGHT)
        fjf.fillStyle="#01060094"
        fjf.fill()
        
        fjf.Font="70px"
        fjf.fillStyle="white"
        fjf.textAlign="center"
        fjf.fillText("paused",this.GAME_WIDTH/2 , this.GAME_HEIGHT/2)

      }
    }
  

  togglePause(){
    if(this.gamestate==gamestate.paused){
      this.gamestate=gamestate.running;
    }else{
      this.gamestate=gamestate.paused
    }
  }   
}