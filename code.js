import Game from './game.js'

var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('cod'))
let fjf=canvas.getContext("2d");
const GAME_WIDTH =800 , GAME_HEIGHT=600;

let game=new Game(GAME_WIDTH ,GAME_HEIGHT);
game.start()


//let lastTime=0
function gameloop(){
    // let deltaTime=timestamp-lastTime;
    // lastTime=timestamp;
    // game.update(deltaTime)
    fjf.clearRect(0,0,GAME_WIDTH ,GAME_HEIGHT);
    game.update()
    game.draw(fjf)
    
    requestAnimationFrame(gameloop)
}
// var togglerun=game.togglerun;
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