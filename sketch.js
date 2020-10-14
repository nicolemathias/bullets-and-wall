var wall, thickness,bulletDamage;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "white"

  wall = createSprite(600,200,thickness,height/2)
  wall.shapeColor = (80,80,80)

  thickness = random(22,83)
  speed = random(223,321)
  weight = random(30,52)

  bullet.velocityX = speed
}

function draw() {
  background("blue");  
  if(hasCollided(bullet,wall) ) {
    console.log(hasCollided(bullet,wall))
   bullet.velocityX = 0
    bulletDamage = 0.5 * weight * speed * speed /thickness * thickness * thickness
    console.log(bulletDamage)
    if (bulletDamage > 10){
      wall.shapeColor = "red"
      console.log("red")
    }

  if(bulletDamage < 10 ){
     wall.shapeColor = "green"
     console.log("green")
  }
}

  drawSprites();

}

function hasCollided(object1,object2){
bulletRightHe = object1.x + object1.width
wallLeftEdge = object2.x
if(bulletRightHe>wallLeftEdge){
  return true
}

return false

}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX*(-1)
      object2.velocityX = object2.velocityX*(-1)

    }

  if( object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY*(-1)
      object2.velocityY = object2.velocityY*(-1)  


    }  
}

