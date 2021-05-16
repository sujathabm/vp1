//Create variables here
var dog,dogHappy,database,foodS,foodStock,dogi;
function preload()
{
  dogi=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogi);
  dog.scale = 0.15;
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  
  if (keyWentDown(UP_ARROW)) {
    
    writeStock(foodS)
    dog.addImage(dogHappy);
  }

  fill(255,255,254);
  stroke("black");
  text("food remaning :"+foodS,170,200);
  textSize(13);
  text("note : press up_arrow key to feed milk to dog 😀",130,10,300,20);


}
function readStock (data) {
  foodS=data.val();
}

function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}