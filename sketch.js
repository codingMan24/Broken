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
  engine = Engine.create();
  world = engine.world;
  rope = new Rope(6,{x : width/2,y : 30});
  fruit = Bodies.circle(300,300,18,{density : 0.001})
  Matter.Composite.add(rope.body,fruit)
  ground = new Ground(250,692,500,20)
  fruitCon = new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  bro.frameDelay = 7
  bunnyImage3.frameDelay = 12
  bunny = createSprite(250,625,50,50)
  bunny.addAnimation('hello',bro)
  bunny.addAnimation('eat',bunnyImage3)
  bunny.addAnimation('sad',sad)
  bunny.changeAnimation('hello')
  bunny.scale = 0.2
  scissor = createImg('cut_btn.png')
  scissor.size(60,75)
  scissor.position(220,20)
  scissor.mouseClicked(cut)
}
function cut(){
  rope.break()
  fruitCon.cut()
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
