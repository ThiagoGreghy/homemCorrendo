var runner1,runner;
  var path1,path;
function preload(){
  //imagens pré-carregadas

  runner1 = loadAnimation("Runner-1.png","Runner-2.png");
  path1 = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path = createSprite(200,200)
  path.addImage(path1)
  
  path.velocityY = 7
  
  runner = createSprite(100,200,30,30)
  runner.addAnimation("correndo",runner1)
  runner.scale =0.08;
  
}

function draw() {
  background(0);

if(path.y > 400) {

  path.y = height/2;

 }

  drawSprites();

  runner.x = mouseX
  
}
