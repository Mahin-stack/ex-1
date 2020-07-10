var movingRecto;
var fixedRecto;

var clr = []

function setup() {
  createCanvas(1000,500);
  movingRecto = createSprite(600, 400, 50, 80);
  movingRecto.shapeColor = "red"
 fixedRecto = createSprite(400, 200, 80, 40);
 fixedRecto.shapeColor = "red"

 clr = ["yellow","blue","green","white"];
 clr2 = ["white","yellow","blue","green"]
}

function draw() {
  background(0);  
  movingRecto.x = mouseX;
  movingRecto.y = mouseY;

if(movingRecto.isTouching(fixedRecto)){
  movingRecto.shapeColor = random(clr)
  fixedRecto.shapeColor = random(clr2)
}
else{
  movingRecto.shapeColor = "red"
  fixedRecto.shapeColor = "red"
}

  drawSprites();
}

 