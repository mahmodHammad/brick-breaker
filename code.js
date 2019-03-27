import Paddle from './paddel.js'
import InputHandler from './input.js'
import Ball from './ball.js'


var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('cod'))
let fjf=canvas.getContext("2d");
const GAME_WIDTH =800 , GAME_HEIGHT=600;

let paddle = new Paddle(GAME_WIDTH ,GAME_HEIGHT);
new InputHandler(paddle)
let ball =   new Ball(GAME_WIDTH ,GAME_HEIGHT)

let lastTime=0
function gameloop(timestamp){
    let deltaTime=timestamp-lastTime;
    lastTime=timestamp;

    fjf.clearRect(0,0,GAME_WIDTH ,GAME_HEIGHT);
    paddle.update(deltaTime);
    ball.update(deltaTime)
    paddle.draw(fjf)
    ball.draw(fjf)
    
requestAnimationFrame(gameloop)
}

gameloop()






















// {
//     "port": 8000,
//     "files": ["D:\\courses\\projects\\game.{html,htm,css,js}"],
//     "server": { "baseDir": "./" }
//   }



// {
//     "port": 3000,
//     "server": {
//       "baseDir": "./"
//     }
//   }