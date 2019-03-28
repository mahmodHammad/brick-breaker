export default class Ball{
    constructor(game){
        this.img=document.getElementById('img_ball')
        this.size=16;
        this.position={x:10,y:20}
        this.speed={x:5,y:20}
        this.gameHeight=game.GAME_HEIGHT;
        this.gameWidth=game.GAME_WIDTH;
        this.game=game;

         this.col=["#a12","#043","#937","#094","#157","#083","#ab7","#fa4","#049"]
        // this.col=["#a12",'#cc3']
        this.i=0;
    }

    draw(fjf){
        fjf.drawImage(this.img,this.position.x,this.position.y,this.size,this.size)
    }
    update(deltatime){
        // console.log(this)
        this.position.x+=this.speed.x
        this.position.y+=this.speed.y
//  wall on left  or right 
        if(this.position.x>this.gameWidth ||this.position.x<0)
            this.speed.x= -this.speed.x
//  wall on top  or bottom 
        else if(this.position.y<0 ||this.position.y>this.gameHeight-this.size)
        this.speed.y=-this.speed.y
//collision with paddle

    let bottomball=this.position.y+this.size;
    let toppaddle=this.game.paddle.position.y;
    let leftpaddle=this.game.paddle.position.x;
    let rightpaddle=this.game.paddle.position.x +this.game.paddle.width;
// console.log(bottomball , toppaddle , leftpaddle ,rightpaddle ) 
    if(bottomball>=toppaddle &&this.position.x >leftpaddle &&this.position.x <rightpaddle){
    this.speed.y =-this.speed.y;
    this.position.y=this.game.paddle.position.y-this.size
    
        this.game.paddle.color=this.col[this.i]
        if(this.i>7)this.i=-1 
        this.i++;
}
// else if (bottomball-this.size*2>=toppaddle){
//      this.speed={x:0,y:0}
  
// }

    }
}