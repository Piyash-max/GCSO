var car1,car2,car3,car4
var collum1,collum2,collum3,collum4
var speed , weight 
function setup() {
  createCanvas(1600,400);
  car1=createSprite(50, 100, 50, 50);
  car1.shapeColor='white';
  car2=createSprite(50, 200, 50, 50);
  car2.shapeColor='red';
  car3=createSprite(50, 300, 50, 50);
  car3.shapeColor='blue';
  car4=createSprite(50, 400, 50, 50);
  car4.shapeColor='green';
  collum1=createSprite(1500, 100, 40, 90);
  collum1.shapeColor='white';
  collum2=createSprite(1500, 200, 40, 90);
  collum2.shapeColor='white';
  collum3=createSprite(1500, 300, 40, 90);
  collum3.shapeColor='white';
  collum4=createSprite(1500, 400, 40, 90);
  collum4.shapeColor='white';
  speed=random(55,90);
  weight=random(400,1500);
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
}

function draw() {
  background("black");  
if(collum1.x-car1.x < (car1.width + collum1.width)/2){
  car1.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    car1.shapeColor='red';
  }
  if(deformation<180 && deformation>100){
  car1.shapeColor='yellow';
  }
  if(deformation<100){
    car1.shapeColor='green';
  }
}
if(collum1.x-car1.x < (car1.width + collum1.width)/2){
  car1.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    car1.shapeColor='red';
  }
  if(deformation<180 && deformation>100){
  car1.shapeColor='yellow';
  }
  if(deformation<100){
    car1.shapeColor='green';
  }
}if(collum2.x-car2.x < (car2.width + collum2.width)/2){
  car2.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    car2.shapeColor='pink';
  }
  if(deformation<180 && deformation>100){
    car2.shapeColor='yellow';
  }
  if(deformation<100){
    car2.shapeColor='green';
  }

}
if(collum3.x-car3.x < (car3.width + collum3.width)/2){
  car3.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    car3.shapeColor='grey';
  }
  if(deformation<180 && deformation>100){
    car3.shapeColor='yellow';
  }
  if(deformation<100){
    car3.shapeColor='green';
  }
}
if(collum4.x-car4.x < (car4.width + collum4.width)/2){
  car4.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    car4.shapeColor='navy';
  }
  if(deformation<180 && deformation>100){
    car4.shapeColor='yellow';
  }
  if(deformation<100){
    car4.shapeColor='green';
  }
}


  drawSprites();
}