var bird, birdImg;
var ghost, ghostImg, ghostGroup;
var gem, gemImg, gemGroup;
var scene, backgroundImg;
var gameState ="play"

function preload() {
  backgroundImg = loadImage("background.png");
  gemImg = loadImage("polished-diamond.png");
  ghostImg = loadImage("ghost.png");
  birdImg = loadImage("flappy bird.png");

  
  gemGroup = new Group();
  ghostGroup = new Group();
}

function setup (){
  createCanvas(600,600);

  scene = createSprite(300,300);
  scene.addImage("background", backgroundImg);
  scene.velocityX =1;

  bird =createSprite(300,300);
  bird.addImage("bird", birdImg);

}

function draw(){
  if(gameState = "play"){
    if(scene.x > 400){
      scene.x = 300
    }
if(keyDown("SPACE")){
  bird.velocityY = -5;
}
bird.velocityY = bird.velocityY +0.8;

if(bird.isTouching(ghost) || bird.y>600){
  bird.velocityY=0;
  gameState = "end";
}

spawnDiamonds();
spawnGhost();


}

  drawSprites();
  
  if(gameState = "end"){
    fill ("yellow")
    stroke("yellow")
    text("game over", 300, 300);
  }
}


function spawnDiamonds(){
if(frameCount % 240 === 0){
  gem = createSprite(-50,200);
  gem.addImage("gem" , gemImg);
  gem.velocityX =1;
  gem.lifetime=800;
  gemGroup.add(gem);
  gem.scale = 0.1;
  gem.y = Math.round(random(50,100));
}
}

function spawnGhost(){
  if(frameCount % 230 === 0){
    ghost= createSprite(-50,200);
    ghost.addImage("ghost" , ghostImg);
    ghost.velocityX =1;
    ghost.lifetime=800;
    ghostGroup.add(ghost);
    ghost.scale = 0.2;
    ghost.y = Math.round(random(120,400));  
  }
  }

 