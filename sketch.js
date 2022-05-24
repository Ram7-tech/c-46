let ground;
let ball;
let pin
var ball_img;
var bg_img;
var pin_img

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  ball_img = loadImage("Ball.png");
  bg_img = loadImage("bg.png");
  pin_img = loadImage("pins.png");
  fall = loadAnimation("tilt.png","fall.png")
  fall.playing=true
  fall.looping=false
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  ball = createSprite(width/2,height-30,30,30);
  ball.addImage(ball_img);
  ball.scale=0.5
  
  pin1 = createSprite(width/2,90,50,30);
  pin1.addImage(pin_img);
  pin1.addAnimation("falling",fall)
  pin1.scale=0.2

  pin2 = createSprite(width/2,90,50,30);
  pin2.addImage(pin_img);
  pin2.addAnimation("falling",fall)
  pin2.scale=0.2

  pin3 = createSprite(width/2+20,90,50,30);
  pin3.addImage(pin_img);
  pin3.addAnimation("falling",fall)
  pin3.scale=0.2

  pin4 = createSprite(width/2+20,90,50,30);
  pin4.addImage(pin_img);
  pin4.addAnimation("falling",fall)
  pin4.scale=0.2

  pin5 = createSprite(width/2-20,90,50,30);
  pin5.addImage(pin_img);
  pin5.addAnimation("falling",fall)
  pin5.scale=0.2

  pin6 = createSprite(width/2-20,90,50,30);
  pin6.addImage(pin_img);
  pin6.addAnimation("falling",fall)
  pin6.scale=0.2

  pin7 = createSprite(width/2+40,90,50,30);
  pin7.addImage(pin_img);
  pin7.addAnimation("falling",fall)
  pin7.scale=0.2

  pin8 = createSprite(width/2+50,90,50,30);
  pin8.addImage(pin_img);
  pin8.addAnimation("falling",fall)
  pin8.scale=0.2

  pin9 = createSprite(width/2-40,90,50,30);
  pin9.addImage(pin_img);
  pin9.addAnimation("falling",fall)
  pin9.scale=0.2

  pin10 = createSprite(width/2-50,90,50,30);
  pin10.addImage(pin_img);
  pin10.addAnimation("falling",fall)
  pin10.scale=0.2


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0,windowWidth,windowHeight);
 if (keyDown("UP_ARROW")){
ball.velocityY=-10
ball.scale=0.2
 }
 if(ball.isTouching(pin1)){
   pin1.changeAnimation("falling",fall)
   ball.destroy()
 }
 if(ball.isTouching(pin2)){
  pin2.changeAnimation("falling",fall)
  ball.destroy()
}
if(ball.isTouching(pin3)){
  pin3.changeAnimation("falling",fall)
  ball.destroy()
}
if(ball.isTouching(pin4)){
  pin4.changeAnimation("falling",fall)
  ball.destroy()
}
if(ball.isTouching(pin5)){
  pin5.changeAnimation("falling",fall)
  ball.destroy()
}
if(ball.isTouching(pin6)){
  pin6.changeAnimation("falling",fall)
  ball.destroy()
}
if(ball.isTouching(pin7)){
  pin7.changeAnimation("falling",fall)
  ball.destroy()
}
if(ball.isTouching(pin8)){
  pin8.changeAnimation("falling",fall)
  ball.destroy()
}
if(ball.isTouching(pin9)){
  pin9.changeAnimation("falling",fall)
  ball.destroy()
}
if(ball.isTouching(pin10)){
  pin10.changeAnimation("falling",fall)
  ball.destroy()
}
  drawSprites();
}


