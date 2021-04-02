var monkey,mImage,monkeyImage,jungle,jImage,jungleImage;
var banana,bImage,bananaImage,FoodGroup;
var stone,sImage,stoneImage,obstacleGroup;
var PLAY;
var END;
var gameState = PLAY
var ground



score = 0;


function preload(){
  monkeyImage =   loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  jungleImage = loadImage("bg.png");
  
  bananaImage = loadImage("banana.png");
  
  stoneImage = loadImage("stone.png");
 
 
}



function setup() {
  createCanvas(500,500);
  
  jungle = createSprite(250,150,500,500);
  jungle.addImage("jImage",jungleImage);
  jungle.velocityX = -7; 
  
  monkey = createSprite(80,200,20,20);
  monkey.addAnimation("mImage",monkeyImage);
  monkey.scale = 0.2;
  
  ground = createSprite(250,390,500,35);
  ground.visible = false;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}

function draw(){
  background("white")
  monkey.collide(ground)
  
  
  if(gameState === PLAY){
    
    if(jungle.x < 0){
      jungle.x = jungle.width/2
    }
    
    if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
      score = score + 2
       
     if(monkey.isTouching(FoodGroup)){
      var size = Math.round(random(10,40))
  switch(size){
    case 10: monkey.scale = 0.12;
           break;
    case 20: monkey.scale = 0.14;
           break;
    case 30: monkey.scale = 0.16;
           break;
    case 40: monkey.scale = 0.18;
           break;
  }
     }      
    }
    
    if(keyDown("space") && monkey.y >= 312.3){
      monkey.velocityY = -12;
    }
    
    monkey.velocityY = monkey.velocityY + 0.4;
    
    jungle.velocityX = -(4 + 3*score/5);
    if(obstacleGroup.isTouching(monkey)){
      jungle.velocityX = 0;
      monkey.velocityX = 0;
      
      
      obstacleGroup.setVelocityXEach(0);
      FoodGroup.setVelocityXEach(0);
      monkey.depth = banana.depth+1;
      stone.setlifetimeEach = (-1);
      FoodGroup.setLifetimeEach(-1);
      survivalTime = 0;
      FoodGroup.destroyEach();
      obstacleGroup.destroyEach();
      
    
    
      text("RESTART",240,145);
    
      gameState = END;
     
    
      text("GAME OVER",220,120);
    
  
    }
    
    
  spawnObstacle();
  spawnFood();
  
    
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score,400,45);
  
  
  if(gameState === END){
    
  }
  }
  
  
  
}

function spawnObstacle(){
  if(frameCount%200 === 0){
    stone = createSprite(700,340,10,10);
    stone.velocityX = -(7 + score/2);
    stone.addImage(stoneImage);
    stone.scale = 0.25;
    
    obstacleGroup.add(stone);
  }
}

function spawnFood(){
  if(frameCount%80 === 0){
    banana = createSprite(650,150,40,10);
    banana.velocityX = -9;
    banana.y = random(100,150);
    banana.addImage(bananaImage);
    banana.scale = 0.06;
    banana.debug = 
    
    FoodGroup.add(banana);
  }
}

