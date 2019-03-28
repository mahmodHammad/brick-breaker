export default class InputHandler{
    constructor(paddle){
        document.addEventListener('keydown' , (event)=>{
            console.log(event.keyCode)
           switch(event.keyCode){
               case 37 : paddle.moveLeft() ;break
               case 39 :paddle.moveRight() ; break 
               case 38 :paddle.moveTop() ; break 
               case 40 :paddle.movedown() ; break 
           }
        })
        
        document.addEventListener('keyup' , (event)=>{
           switch(event.keyCode){
               case 37 : if(paddle.speed<0)paddle.stop();break
               case 39 :if(paddle.speed>0)paddle.stop() ; break 
           }
        })
    }
}