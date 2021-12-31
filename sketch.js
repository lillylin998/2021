let images=[];
let state=0;
let move=false;
function preload(){
  images[0]=loadImage('slide1.png');
   images[1]=loadImage('slide2.png');
   images[2]=loadImage('slide3.png');
   images[3]=loadImage('slide4.png');
   images[4]=loadImage('slide5.png');
   images[5]=loadImage('slide6.png');
   images[6]=loadImage('slide7.png');
}

function setup() {
  createCanvas(windowWidth, windowWidth);
}

function draw() {
  background(220);
  if(!move){
  image(images[state],0,0,width,width);
  }
  if(move){
    image(images[state],mouseX-width,0,width,width)
  }
}


function touchStarted(){
  move=true;
}

function touchEnded(){
  move=false;
  state++;
  if(state===7){
    state=0;
  }
}