


var bg;

function preload(){
bg = loadImage("snow3.jpg")
sf= loadImage("snow4.webp");

}

function setup() {
 
  createCanvas(1000,800);
  
  

  
}

function draw() {
  background(bg);  
  
  if(frameCount % 50 === 0)
  {
    snow = createSprite(400, 10, 20, 20);
    snow.velocityY = 1
    snow.addImage(sf)
    snow.scale = 0.1
    var rand = Math.round(random(0,800));
    snow.x = rand;
  }
  

 




  drawSprites();
}