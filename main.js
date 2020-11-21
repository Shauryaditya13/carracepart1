canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=100;
car1_height=100;
car1_image="car1.png";
car1_X=100;
car1_Y=100;

car2_width=100;
car2_height=100;
car2_image="car2.png";
car2_X=100;
car2_Y=200;

array_Car=["car bg6.jpg","car bg5.jpg","car bg4.jpg","car bg3.jpg","car bg2.jpg","car bg.jpg"];
random_number=Math.floor(Math.random()*6);
background_image=array_Car[random_number];

function add() {
    bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=background_image;

    car1_img=new Image();
    car1_img.onload=uploadcar1;
    car1_img.src=car1_image;

    car2_img=new Image();
    car2_img.onload=uploadcar2;
    car2_img.src=car2_image;
}

function uploadbg() {
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_img,car1_X,car1_Y,car1_width,car1_height);
}

function uploadcar2() {
  ctx.drawImage(car2_img,car2_X,car2_Y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
     {
         car1Up();
          console.log("Up arrow ");
    }
    if(keypressed=='40') {
      car1Down();
        console.log("Down arrow ");
    }
     if(keypressed=='37') 
     {
    car1Left();
    console.log("Left arrow ");
    }
    if(keypressed=='39') {
      car1Right();
      console.log("Right arrow ");
    }
    if(keypressed=='87') {
      car2Up();
      console.log("Key W");
    }  
    if(keypressed=='83') {
      car2Down();
    console.log("Key S");
    }
     if(keypressed=='65') {
      car2Left();
    console.log("Key A");
    }
    if(keypressed=='68') {
      car2Right();
    console.log("Key D");
    }
