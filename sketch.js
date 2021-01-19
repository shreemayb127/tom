var img;
var img2;
var x = 300;
var y = 200;
var s = 60;
var speed =3;
var angle=0;
var scaler=170

var x2 = 300;
var y2 = 375;



function preload(){
  img = loadImage("billy.png");
  img2 = loadImage("smiley.png");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
 
  background(255,100,100);
  image(img,x,y,s,s);
  imageMode(CENTER);
  image(img2,x2,y2,s,s);
  x2=width/2 +cos(angle)*scaler;
  y2=height/2+75 +sin(angle)*scaler;
  angle+=0.05
    
  
  if(keyIsPressed){
    if(keyCode == UP_ARROW){
      y-=speed;
    }else if(keyCode == DOWN_ARROW){
      y+=speed;
    }else if(keyCode == LEFT_ARROW){
      x-=speed;
    }else if(keyCode == RIGHT_ARROW){
      x+=speed;
    }
     if((x > x2) && (x < x2 + s) && (y > y2) && (y < y2 + s)){
     background(0)
		textAlign(CENTER);
    fill(255)
		text('GAME OVER', width / 2, height / 2);
        redraw();
       noLoop();
}
}
}