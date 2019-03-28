import Paddle from './paddel.js'
import InputHandler from './input.js'
import Ball from './ball.js'

import Brick from './brick.js'
import {BuildLevel , level1} from './levels.js'

export default class Game{
  constructor(gamewidth,gameheight){
    this.GAME_WIDTH=gamewidth;
    this.GAME_HEIGHT=gameheight; 
  }

  start(){
    this.paddle = new Paddle(this);
    this.ball =   new Ball(this)
    new InputHandler(this.paddle)

//     let bricks=BuildLevel(this ,level1 )
//     for (let i = 1 ; i <10 ; i ++){
//       bricks.push(new Brick(this  , {x:i*58 , y : 40}))
//     }
   this.gameobj=[ this.ball ,this.paddle ]
  }

  update(deltaTime){this.gameobj.forEach((obj)=>obj.update(deltaTime))}

  draw(fjf){this.gameobj.forEach((obj)=>obj.draw(fjf))}

}