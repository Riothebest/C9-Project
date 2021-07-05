var box;
var gameState;
var a;
var i;
var screen;
createEdgeSprites();
function setup() {
  screen = createSprite(625,312,1250,625);
  screen.visible = false;
  createCanvas(1250,625);
  box = createSprite(400,250,20,20);
  box.shapeColor = "black";
  gameState = "start";
  a = false;
  i = 0;
}

function draw() {
  background(30);
  if(gameState === "start"){
    fill("red");
    textSize(30);
    text("Use WASD keys to move",450,150);
    text("Press T to Start",500,180);
  }
  if(keyWentDown("t")){
    screen.visible = true;
    gameState = "play";
  }

  if(gameState === "play"){
    if(keyDown("d")){
      box.x = box.x + 2;
    }
    if(keyDown("a")){
      box.x = box.x - 2;
    }
    if(keyDown("s")){
      box.y = box.y + 2;
    }
    if(keyDown("w")){    
      box.y = box.y - 2;
    }
    if(a === false){
      i++;
    }
    else {
      i = 0;
    }
    if(i % 20 === 1){
      screen.shapeColor = "red";
    }
    if(i % 20 === 5){
      screen.shapeColor = "yellow";
    }
    if(i % 20 === 10){
      screen.shapeColor = "greeen";
    } 
    if(i % 20 === 15){
      screen.shapeColor = "blue";
    }
  /*box.bounceOff(rightEdge);
  box.bounceOff(leftEdge);
  box.bounceOff(topEdge);
  box.bounceOff(bottomEdge);*/
  }
  drawSprites();
}




