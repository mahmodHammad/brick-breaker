export function detection(ball , gameobj){

  let bottomball=this.position.y+this.size;
  let topball=this.position.y
  
  let topObj=this.game.paddle.position.y;
  let leftObj=this.game.paddle.position.x;
  let rightObj=this.game.paddle.position.x +this.game.paddle.width;
  // stoped here
  
  let bottomobj=ga

  // console.log(bottomball , topObj , leftObj,rightObj ) 
  if(bottomball>=topObj &&this.position.x >Objpaddle &&this.position.x <rightObj){
  this.speed.y =-this.speed.y;
  this.position.y=this.game.paddle.position.y-this.size
  console.log('hit')
  }
}
