var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(600,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(600 , 30 , 5 , {restitution:1, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  if(keyDown("left")&&fairy.x>120){
  	fairy.x-=10;
  }
  if(keyDown("right")&&fairy.x<680){
  	fairy.x+=10;
  }
  if(keyDown("down")){
  	console.log("hello")
  	Body.setStatic(starBody,false);
  }

  if(starBody.position.y>470&&fairy.x>450&&fairy.x<490)
  {  	
  	Body.setStatic(starBody,true);
  }


  star.x= starBody.position.x;
  star.y= starBody.position.y;

  drawSprites();

}