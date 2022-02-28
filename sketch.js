   var backgroundImage;
   var boy , zombie;
   var stone;
   

  function preload() {
    backgroundImage = loadImage("./assests/background.png");
    boyImage = loadImage("./assests/boy.png");
    zombieImage = loadImage("./assests/zombie.png");
    stoneImage = loadImage("./assests/stone.png");
  }
  function setup() {
    createCanvas(windowWidth,windowHeight);
    bg = createSprite(300,400);
    zombie = createSprite(750,350,200,50);
    boy = createSprite(-20,500,200,50);
    
    
    
    bg.addImage("bg1",backgroundImage);
    zombie.addImage("Z1",zombieImage);
    boy.addImage("B1",boyImage);
    

    bg.velocityX = 5;
    
    bg.scale = 3;
    boy.scale = 0.5;
    zombie.scale = 0.5;
    
    
      }

function draw() {
   
  background(0);
  if(bg.x>600){
    bg.x = 340
  }
  makeObstacle();
  makeBullet();
  drawSprites();
}
  
function windowResize (){
  window.Height
  window.breadth
}

function makeBullet(){
  if(frameCount%50===0){
    bullet = createSprite(-20,250,70,70);
    bullet.velocityX = 7 ;
  }

}

function makeObstacle(){
     
stone = createSprite(200,500,50,50);
stone.scale = 0.07;
stone.addImage("stoneImg",stoneImage);
  
}