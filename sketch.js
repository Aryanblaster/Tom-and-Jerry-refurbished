var tom,tomimg1,tomimg2,tomimg3;
var jerry,jerryImage;
var gardenImage;

function preload() {
 tomimg1 = loadAnimation("images/cat1.png");
 tomimg2 = loadAnimation("images/cat2.png","images/cat3.png");
 tomimg3 = loadAnimation("images/cat4.png");

 jerryimg1= loadAnimation("images/mouse1.png");
 jerryimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
 jerryimg3 = loadAnimation("images/mouse4.png");
 
 gardenImage = loadImage("images/garden.png");

    //load the images here
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here


    // garden = createSprite(0,0,800,400);
    // garden.addImage(gardenImage);
    // garden.scale = 3;

    tom = createSprite(1000,700,20,40)
    tom.addAnimation("tomSleeping",tomimg1);
    tom.scale = 0.14
    tom.setCollider("rectangle",0,0,40,40);

    jerry = createSprite(300,700,5,10)
    jerry.addAnimation("jerryStanding", jerryimg1);
    jerry.scale = 0.20
    jerry.setCollider("rectangle",0,0,40,40);
}


function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
if (tom.x - jerry.x <(tom.width-jerry.width)/2){
    tom.velocityX = 0;
    tom.addAnimation("tomFunny",tomimg3);
    tom.changeAnimation("tomFunny");
    tom.scale = 0.07;
    jerry.addAnimation("jerryFunny",jerryimg3);
    jerry.changeAnimation("jerryFunny");
    jerry.x = 200;
}
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){

        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomimg2);
        tom.changeAnimation("tomRunning");

        jerry.addAnimation("jerryTeasing", jerryimg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");

    }


  //For moving and changing animation write code here


}
