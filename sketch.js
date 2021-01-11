var wall, car;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(200, 200, 50, 50);
  wall = createSprite(1300, 200, 30, 150);
  speed = random (55,90);
  weight = random(400,1500);
  console.log(car.velocityX)
}

function draw() {
  background("black");  

  if(keyDown("space")){
    car.velocityX = speed;
  }
  if(wall.x-car.x < (car.width+car.width)/2){
    car.velocityX = 0;

    var deformation=0.5* weight* speed* speed/22500;

    if (deformation > 180)
    {
      car.shapeColor = "red";
    }

    if (deformation < 180 && deformation > 100)
    {
      car.shapeColor = "yellow";
    }

    if(deformation < 100)
    {
      car.shapeColor = "green";
    } 
  }
  
  drawSprites();
}
