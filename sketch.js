const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg, terroristImg, soldierImg, chiefImg , keyImg;
var soldier,soldier1;
var key,key1;
var bullet, bullet1,bullet2,bullet3,bullet4;
var thealth1 = 100, thealth2 = 100, thealth3 = 100;
var shealth = 100;
var gameState = 0;
var health1 = 100,health2 = 100,health3 = 100;

function preload(){
	chiefImg = loadImage("chief.jpg");
	soldierImg = loadImage("man.png");
	terroristImg = loadImage("soldier.jpg");
	backgroundImg = loadImage("bg.jpg");
	keyImg = loadImage("key.png");
}
function setup() {
	createCanvas(800, 600);
    engine = Engine.create();
	world = engine.world;
	bulletGroup = new Group();
	enemyBulletGroup = new Group();
	
	soldier = createSprite(80,550,60,60);
	soldier.addImage(soldierImg);
	soldier.scale = 0.35;

	soldier1 = createSprite(760,540,60,60);
	soldier1.addImage(soldierImg);
	soldier1.scale = 0.35;
	soldier1.visible = false;

	chief = createSprite(750,50,60,60);
	chief.addImage(chiefImg);
	chief.scale = 0.35;

	terrorist1 = createSprite(200,50,60,60);
	terrorist1.addImage(terroristImg);
	terrorist1.scale = 0.35;
	terrorist1.rotation = -135;

	terrorist2 = createSprite(550,50,60,60);
	terrorist2.addImage(terroristImg);
	terrorist2.scale = 0.35;
	terrorist2.rotation = -135;

	terrorist3 = createSprite(750,350,60,60);
	terrorist3.addImage(terroristImg);
	terrorist3.scale = 0.35;
	terrorist3.rotation = -45;

	key1 = createSprite(600,530);
	key1.addImage(keyImg);
	key1.scale = 0.25;

	key2 = createSprite(80,80);
	key2.addImage(keyImg);
	key2.scale = 0.25;

	//for borders
	wall1 = createSprite(10,450,20,300);
	wall1.shapeColor = "red";
	wall2 = createSprite(10,85,20,170);
	wall2.shapeColor = "red";
	wall3 = createSprite(400,590,800,20);
	wall3.shapeColor = "red";
	wall4 = createSprite(400,10,800,20);
	wall4.shapeColor = "red";
    wall5 = createSprite(790,240,20,440);
	wall5.shapeColor = "red";

	//for middle walls
	wall6 = createSprite(150,500,20,200);
	wall6.shapeColor = "red";
	wall7 = createSprite(70,150,140,20);
	wall7.shapeColor = "red";
	wall8 = createSprite(300,70,20,140);
	wall8.shapeColor = "red";
	wall9 = createSprite(375,130,180,20);
	wall9.shapeColor = "red";
    wall10 = createSprite(470,70,20,140);
	wall10.shapeColor = "red";
	wall11 = createSprite(650,530,20,150);
	wall11.shapeColor = "red";
	wall12 = createSprite(335,480,140,20);
	wall12.shapeColor = "red";
	wall13 = createSprite(470,70,20,140);
	wall13.shapeColor = "red";
    wall14 = createSprite(320,260,160,20);
	wall14.shapeColor = "red";
    wall15 = createSprite(500,400,20,140);
	wall15.shapeColor = "red";
	wall16 = createSprite(650,80,20,160);
	wall16.shapeColor = "red";
	wall17 = createSprite(740,270,160,20);
	wall17.shapeColor = "red";
	wall18 = createSprite(530,230,80,20);
	wall18.shapeColor = "red";
	wall19 = createSprite(710,450,140,20);
	wall19.shapeColor = "red";
	wall20 = createSprite(650,215,20,130);
	wall20.shapeColor = "red";

	Engine.run(engine);
}


function draw() {
	soldier.bounceOff(wall1);
	soldier.bounceOff(wall2);
	soldier.bounceOff(wall3);
	soldier.bounceOff(wall4);
	soldier.bounceOff(wall5);
	soldier.bounceOff(wall6);
	soldier.bounceOff(wall7);
	soldier.bounceOff(wall8);
	soldier.bounceOff(wall9);
	soldier.bounceOff(wall10);
	soldier.bounceOff(wall11);
	soldier.bounceOff(wall12);
	soldier.bounceOff(wall13);
	soldier.bounceOff(wall14);
	soldier.bounceOff(wall15);
	soldier.bounceOff(wall16);
	soldier.bounceOff(wall17);
	soldier.bounceOff(wall18);
	soldier.bounceOff(wall19);
	soldier.bounceOff(wall20);

	soldier1.bounceOff(wall1);
	soldier1.bounceOff(wall2);
	soldier1.bounceOff(wall3);
	soldier1.bounceOff(wall4);
	soldier1.bounceOff(wall5);
	soldier1.bounceOff(wall6);
	soldier1.bounceOff(wall7);
	soldier1.bounceOff(wall8);
	soldier1.bounceOff(wall9);
	soldier1.bounceOff(wall10);
	soldier1.bounceOff(wall11);
	soldier1.bounceOff(wall12);
	soldier1.bounceOff(wall13);
	soldier1.bounceOff(wall14);
	soldier1.bounceOff(wall15);
	soldier1.bounceOff(wall16);
	soldier1.bounceOff(wall17);
	soldier1.bounceOff(wall18);
	soldier1.bounceOff(wall19);
	soldier1.bounceOff(wall20);

  rectMode(CENTER);
  background(backgroundImg);



  if(gameState === 0){
	if(keyDown(RIGHT_ARROW)){
		soldier.x+=5;
	}
	if(keyDown(LEFT_ARROW)){
	  soldier.x-=5;
    }
    if(keyDown(UP_ARROW)){
	  soldier.y-=5;
    }
    if(keyDown(DOWN_ARROW)){
	  soldier.y+=5;
	}
	
    if(keyDown("s")){
	  soldier.rotation = 90;
    }
    if(keyDown("a")){
	  soldier.rotation = 180;
    }
    if(keyDown("w")){
	  soldier.rotation = 270;
    }
    if(keyDown("d")){
	  soldier.rotation = 360;
	}
	if(soldier.rotation === 90 && keyDown("space")){
		createBulletVertical();
		bullet1.velocityY = 5;
	}
	if(soldier.rotation === 180 && keyDown("space")){
		createBulletHorizontal();
		bullet.velocityX = -5;
	}
	if(soldier.rotation === 270 && keyDown("space")){
		createBulletVertical();
		bullet1.velocityY = -5;
	}
	if(soldier.rotation === 360 && keyDown("space")){
		createBulletHorizontal();
		bullet.velocityX = 5;
	}
	if(bulletGroup.isTouching(terrorist1)){
		bulletGroup.destroyEach();
		thealth1-=5;
	}
	if(bulletGroup.isTouching(terrorist2)){
		bulletGroup.destroyEach();
		thealth2-=5;
	}
	if(bulletGroup.isTouching(terrorist3)){
		bulletGroup.destroyEach();
		thealth3-=5;
	}
	if(soldier.isTouching(key1)){
		key1.visible = false;
		wall20.velocityY = -2;
	}
	if(soldier.isTouching(key2)){
		key2.visible = false;
		wall11.velocityY = 2;
	}
	if(thealth1 <= 0){
		terrorist1.visible = false;
	}
	else{
		shooting1();
	}
	if(thealth2 <= 0){
		terrorist2.visible = false;
	}
	else{
		shooting2();
	}
	if(thealth3 <= 0){
		terrorist3.visible = false;
	}
	else{
		shooting3();
	}
	if(enemyBulletGroup.isTouching(soldier)){
		enemyBulletGroup.destroyEach();
		shealth-=10;
	}
	if(soldier.x<0){
		gameState = 2;
	}
	if(soldier.isTouching(chief)){
		gameState = 5;
	}
  }



if(gameState === 2){
	soldier.visible = false;
	soldier1.visible = true;
	if(keyDown(RIGHT_ARROW)){
		soldier1.x+=5;
	}
	if(keyDown(LEFT_ARROW)){
	  soldier1.x-=5;
    }
    if(keyDown(UP_ARROW)){
	  soldier1.y-=5;
    }
    if(keyDown(DOWN_ARROW)){
	  soldier1.y+=5;
	}
	
    if(keyDown("s")){
	  soldier1.rotation = 90;
    }
    if(keyDown("a")){
	  soldier1.rotation = 180;
    }
    if(keyDown("w")){
	  soldier1.rotation = 270;
    }
    if(keyDown("d")){
	  soldier1.rotation = 360;
	}
	if(soldier1.rotation === 90 && keyDown("space")){
		createBulletVertical1();
		bullet6.velocityY = 5;
	}
	if(soldier1.rotation === 180 && keyDown("space")){
		createBulletHorizontal1();
		bullet5.velocityX = -5;
	}
	if(soldier1.rotation === 270 && keyDown("space")){
		createBulletVertical1();
		bullet6.velocityY = -5;
	}
	if(soldier1.rotation === 360 && keyDown("space")){
		createBulletHorizontal1();
		bullet5.velocityX = 5;
	}
	if(bulletGroup.isTouching(terrorist1)){
		bulletGroup.destroyEach();
		thealth1-=5;
	}
	if(bulletGroup.isTouching(terrorist2)){
		bulletGroup.destroyEach();
		thealth2-=5;
	}
	if(bulletGroup.isTouching(terrorist3)){
		bulletGroup.destroyEach();
		thealth3-=5;
	}
	if(soldier1.isTouching(key1)){
		key1.visible = false;
		wall20.velocityY = -2;
	}
	if(soldier1.isTouching(key2)){
		key2.visible = false;
		wall11.velocityY = 2;
	}
	if(thealth1 <= 0){
		terrorist1.visible = false;
	}
	else{
		shooting1();
	}
	if(thealth2 <= 0){
		terrorist2.visible = false;
	}
	else{
		shooting2();
	}
	if(thealth3 <= 0){
		terrorist3.visible = false;
	}
	else{
		shooting3();
	}
	if(enemyBulletGroup.isTouching(soldier1)){
		enemyBulletGroup.destroyEach();
		shealth-=10;
	}
	if(soldier1.x<0){
		gameState = 2;
	}
	if(soldier1.x>800){
		gameState = 3;
	}
	if(soldier1.isTouching(chief)){
		gameState = 5;
	}
}



if(gameState === 3){
	soldier.visible = true;
	soldier1.visible = false;
	if(keyDown(RIGHT_ARROW)){
		soldier.x+=5;
	}
	if(keyDown(LEFT_ARROW)){
	  soldier.x-=5;
    }
    if(keyDown(UP_ARROW)){
	  soldier.y-=5;
    }
    if(keyDown(DOWN_ARROW)){
	  soldier.y+=5;
	}
	
    if(keyDown("s")){
	  soldier.rotation = 90;
    }
    if(keyDown("a")){
	  soldier.rotation = 180;
    }
    if(keyDown("w")){
	  soldier.rotation = 270;
    }
    if(keyDown("d")){
	  soldier.rotation = 360;
	}
	if(soldier.rotation === 90 && keyDown("space")){
		createBulletVertical();
		bullet1.velocityY = 5;
	}
	if(soldier.rotation === 180 && keyDown("space")){
		createBulletHorizontal();
		bullet.velocityX = -5;
	}
	if(soldier.rotation === 270 && keyDown("space")){
		createBulletVertical();
		bullet1.velocityY = -5;
	}
	if(soldier.rotation === 360 && keyDown("space")){
		createBulletHorizontal();
		bullet.velocityX = 5;
	}
	if(bulletGroup.isTouching(terrorist1)){
		bulletGroup.destroyEach();
		thealth1-=5;
	}
	if(bulletGroup.isTouching(terrorist2)){
		bulletGroup.destroyEach();
		thealth2-=5;
	}
	if(bulletGroup.isTouching(terrorist3)){
		bulletGroup.destroyEach();
		thealth3-=5;
	}
	if(soldier.isTouching(key1)){
		key1.visible = false;
		wall20.velocityY = -2;
	}
	if(soldier.isTouching(key2)){
		key2.visible = false;
		wall11.velocityY = 2;
	}
	if(thealth1 <= 0){
		terrorist1.visible = false;
	}
	else{
		shooting1();
	}
	if(thealth2 <= 0){
		terrorist2.visible = false;
	}
	else{
		shooting2();
	}
	if(thealth3 <= 0){
		terrorist3.visible = false;
	}
	else{
		shooting3();
	}
	if(enemyBulletGroup.isTouching(soldier)){
		enemyBulletGroup.destroyEach();
		shealth-=10;
	}
	if(soldier.x<0){
		gameState = 2;
	}
	if(soldier.x>800){
		gameState = 3;
	}
	if(soldier.isTouching(chief)){
		gameState = 5;
	}
}
if(gameState === 5){
	fill("white");
	textSize(25);
	text("Well Done Soldier! The chief is now Safe", 200, 300);
}


  drawSprites();
}

function createBulletHorizontal(){
	bullet = createSprite(soldier.x,soldier.y,20,5); 
	bullet.shapeColor = "yellow";
	bulletGroup.add(bullet);
}

function createBulletVertical(){
	bullet1 = createSprite(soldier.x,soldier.y,5,20); 
	bullet1.shapeColor = "yellow";
	bulletGroup.add(bullet1);
}

function createBulletHorizontal1(){
	bullet5 = createSprite(soldier1.x,soldier1.y,20,5); 
	bullet5.shapeColor = "yellow";
	bulletGroup.add(bullet5);
}

function createBulletVertical1(){
	bullet6 = createSprite(soldier1.x,soldier1.y,5,20); 
	bullet6.shapeColor = "yellow";
	bulletGroup.add(bullet6);
}

function shooting1(){
	if(frameCount % 50 === 0){
	bullet2 = createSprite(terrorist1.x,terrorist1.y,5,20); 
	bullet2.shapeColor = "yellow";
	bullet2.velocityY = 5;
	bullet2.lifetime = 110;
	enemyBulletGroup.add(bullet2);
	}
}

function shooting2(){
	if(frameCount % 50 === 0){
	bullet3 = createSprite(terrorist2.x,terrorist2.y,5,20); 
	bullet3.shapeColor = "yellow";
	bullet3.velocityY = 5;
	bullet3.lifetime = 110;
	enemyBulletGroup.add(bullet3);
	}
}

function shooting3(){
	if(frameCount % 50 === 0){
	bullet4 = createSprite(terrorist3.x,terrorist3.y,20,5); 
	bullet4.shapeColor = "yellow";
	bullet4.velocityX = -5;
	bullet4.lifetime = 150;
	enemyBulletGroup.add(bullet4);
	}
}