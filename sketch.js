const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var raindrops = [];
 var umbrella;
 var thunder1Img, thunder2Img, thunder3Img, thunder4Img;

 function preload(){
     thunder1Img=loadImage("thunder1.jpg");
     thunder2Img=loadImage("thunder2.jpg");
     thunder3Img=loadImage("thunder3.png");
     thunder4Img=loadImage("thunder4.png");

 }

function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(400,800);
  umbrella = new Umbrella(180, 690, 225);

}

function draw() {
  background("black");
  umbrella.display(); 

  if(frameCount % 1 === 0){
    var raindrop = new Raindrops(random(0, windowWidth), -100,10);
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(40);
    raindrops[i].velocityY++
    raindrops[i].display();
  }

  var rand=Math.round(random(1,4));
  if(frameCount%10===0){
    var thunderCreatedFrame = frameCount;
    var thunder = createSprite(random(10,370),random(10,30),10,10);
    switch(rand){
      case 1 : thunder.addImage(thunder1Img);
      break;
      case 2 : thunder.addImage(thunder2Img);
      break;
      case 3 : thunder.addImage(thunder3Img);
      break;
      case 4 : thunder.addImage(thunder4Img);
      break;
      default : break;
    }
    thunder.scale = random(1.5,2.5);
 
    if(thunderCreatedFrame +10 === frameCount&& thunder){
       thunder.destroy();
}
  }
}
