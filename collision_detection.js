


export function detection(ball , gameobj){

  let bottomball=ball.position.y+ball.size;
  let topball=ball.position.y
  //obj is  paddle or bricks
  let topObj=gameobj.position.y;
  let leftObj=gameobj.position.x;
  let rightObj=gameobj.position.x +gameobj.width;
  
  let bottomobj=gameobj.position.y +gameobj.height

  if(  ball.position.x >leftObj && ball.position.x <rightObj && bottomball>=topObj &&topball<=bottomobj)return true 
  else return false
}


  // let bottomOfBall = ball.position.y + ball.size;
  // let topOfBall = ball.position.y;

  // let topOfObject = gameObject.position.y;
  // let leftSideOfObject = gameObject.position.x;
  // let rightSideOfObject = gameObject.position.x + gameObject.width;
  // let bottomOfObject = gameObject.position.y + gameObject.height;

  // if (
  //   bottomOfBall >= topOfObject &&
  //   topOfBall <= bottomOfObject &&
  //   ball.position.x >= leftSideOfObject &&
  //   ball.position.x + ball.size <= rightSideOfObject
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }