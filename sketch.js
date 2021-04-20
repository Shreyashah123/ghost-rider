var balloon;
var Background1;
var ghost;
var ghost_1;
var boy,boy_1;
var stone_1,stone;
var star,star_1;
var catches=0;
var stoneGroups;
var gameState="play";
var starCount=0;
function preload(){
Background1=loadImage("night wallpaper.jpg");
ghost_1=loadImage("ghost2.png");
boy_1=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
stone_1=loadImage("stone.png");
star_1=loadImage("ligh orb.png");

}

function setup() {
  createCanvas(1300,500);
  bg=createSprite(650,-110,10,10);
  bg.addImage(Background1);
  bg.scale=1.0;
 bg.velocityX=-3;
  ghost=createSprite(500,350,10,10);
  ghost.addImage(ghost_1);
  ghost.scale=0.3;
  boy=createSprite(1100,370,10,10);
  boy.setCollider("rectangle",0,0,300,650);
  boy.addAnimation("running",boy_1);
  boy.scale=0.2;
  boy.debug=true;
  ground=createSprite(650,500,1300,10);
  ground.visible=false;
  stoneGroups=new Group();
  starsGroup=new Group();
}
  
function draw() {
 background("black");
 if(gameState==="play"){

  if(bg.x<0){
    bg.x=800;
   
  }
  if(keyDown("space")&&boy.y>=423){
    boy.velocityY=-21;

  }
  boy.velocityY=boy.velocityY+0.8;
  
  
  spawnStones();
  spawnStars();
  if(boy.isTouching(stoneGroups)){
    stoneGroups.destroyEach();
    catches+=1;
    console.log(catches);
    ghost.x=ghost.x+150;
   if(catches===2){
     gameState="end";
   }
  }
  if(boy.isTouching(starsGroup)){
    starsGroup.destroyEach();
    starCount++;
    if(starCount%3===0){
      ghost.x=ghost.x-80;
    }
  }
}
else if(gameState==="end"){
bg.velocityX=0;
boy.velocityY=0;
stoneGroups.destroyEach();
}
  boy.collide(ground);
  drawSprites();
  textSize(25);
  fill("white");
 text("StarCount:"+starCount,1000,100);
}
function spawnStones(){
  if(frameCount%400===0){
    stone=createSprite(1300,480,10,10);
    
    stone.addImage(stone_1);
    stone.scale=0.2;
    stone.velocityX=-5;
    
    stoneGroups.add(stone);
  }
}
function spawnStars(){
  if(frameCount%1000===0){
    star=createSprite(1300,150,10,10);
    star.addImage(star_1);
    star.scale=0.2;
    star.velocityX=-3;
    starsGroup.add(star);
  }
}

