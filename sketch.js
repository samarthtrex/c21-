var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  rect1=createSprite(200,200,80,10);
  rect2=createSprite(600,200,100,20);
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,rect2)){
movingRect.shapeColor="yellow"
}else{
movingRect.shapeColor="green"
}

 
  drawSprites();
}
function isTouching(r1,r2){
  if (r1.x - r2.x < r2.width/2 + r1.width/2
    && r2.x - r1.x < r2.width/2 + r1.width/2
   && r1.y - r2.y < r2.height/2 + r1.height/2
    && r2.y - r1.y < r2.height/2 + r1.height/2 ) {
   return true
  }
  else {
    return false
  }
}