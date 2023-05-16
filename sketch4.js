/*
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;
let ground;
let rope;
let fruit;
let fruitCon;
let bunnyImage
let bunnyImage2
let bunnyImage3
let bunnyImage4
let bunnyImage5
let scissor
let bunny;
let thing
let thingy
let blink1
let blink2
let blink3
let bro
var broo
var sad
var soundEat
var eatWater
var brooo
var balloon
var air
var rope2
var fruitCon2
var scissor2
var ropeConnect
var gameState
function preload(){
  bunnyImage = loadImage('eat_1.png')
  blink1 = loadImage('blink_1.png')
  blink2 = loadImage('blink_2.png')
  blink3 = loadImage('blink_3.png')
  thing = loadImage('background.png')
  bunnyImage3 = loadAnimation('eat_2.png','Rabbit-01.png','eat_3.png','eat_4.png')
  bro = loadAnimation('eat_1.png','blink_1.png','blink_2.png','blink_3.png')
  bunnyImage3.looping = false
  broo = loadImage('melon.png')
  sad = loadAnimation('sad_2.png','sad_3.png')
  soundEat = loadSound('rope_cut.mp3')
  eatWater = loadSound('eating_sound.mp3')
  brooo = loadSound('sad.wav')
  sad.looping = false
  balloon = loadImage('balloon.png')
  air = loadSound('air.wav')
}
function setup(){
  createCanvas(500,700);
  frameRate(25)
  engine = Engine.create();
  world = engine.world;
  rope = new Rope(7,{x : 250,y : 250});
  rope2 = new Rope(7,{x : width/2+150,y : 30})
  fruit = Bodies.circle(300,300,18,{density : 0.0002})
  //Matter.Composite.add(rope.body,fruit)
  ground = new Ground(250,692,500,20)
  Matter.Composite.add(rope.body,fruit)
  Matter.Composite.add(rope2.body,fruit)
  ropeConnect = new LinkRope(rope,rope2,2)
  fruitCon2 = new Link(rope2,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  bro.frameDelay = 7
  bunnyImage3.frameDelay = 12
  bunny = createSprite(200,625,50,50)
  bunny.addAnimation('hello',bro)
  bunny.addAnimation('eat',bunnyImage3)
  bunny.addAnimation('sad',sad)
  bunny.changeAnimation('hello')
  bunny.scale = 0.2
  scissor = createImg('cut_btn.png')
  scissor.size(60,75)
  scissor.position(235,210)
  scissor.mouseClicked(cut)
  scissor2 = createImg('cut_btn.png')
  scissor2.size(60,75)
  scissor2.position(370,20)
  scissor2.mouseClicked(cut2)
  balloon = createImg('balloon.png')
  balloon.size(100,75)
  balloon.position(410,170)
  balloon.mouseClicked(blow)
}
function cut(){
  ropeConnect.cut()
  rope.break()
  fruitCon.cut()
  soundEat.play()
}
function blow(){
  Body.applyForce(fruit,{x : 0, y : 0},{x : -0.005, y : 0})
}
function cut2(){
  ropeConnect.cut()
  rope2.break()
  fruitCon2.cut()
  soundEat.play()
}
function touchess(o1,o2){
  if(fruit != null){
    var d = dist(o1.position.x,o1.position.y,o2.position.x,o2.position.y)
    if(d <50){

      //bunny.changeAnimation('eat')
      World.remove(world, fruit)
      fruit = null
      return true;
    }else{
      return false;
    }
  }
}

function draw(){
  background(51);
  image(thing,0,0,500,700)
  ground.drawGround();
  rope.show();
  rope2.show()
  if(fruit != null){
    imageMode(CENTER)
    image(broo,fruit.position.x,fruit.position.y,60,60)
  }
  if(touchess(fruit,bunny)){
    bunny.changeAnimation('eat')
    eatWater.play()
  }
  if(fruit != null && fruit.position.y > 650){
    console.log(fruit.position.y)
    bunny.changeAnimation('sad')
    brooo.play()
    fruit = null
  }
  drawSprites()
  Engine.update(engine);
}
*/