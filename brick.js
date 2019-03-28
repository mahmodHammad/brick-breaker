export default class{
  constructor(game ,position ){
    this.img=document.getElementById('img_brick')
    this.width=80;
    this.height=25
    this.position=position
    this.game=game;
  }

  update(){

  }

  draw(fjf){

    fjf.drawImage(this.img,this.position.x,this.position.y,this.width,this.height)

  }
}