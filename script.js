canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
images_array=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0bvvspdA6IZoSeJpknHUr1hzJyyc08V-8g&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9t2OrU1GbmpuNzmverEFb1Qz9a5i2fw4Gg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScz3fthADuPKWCZoiJI5sTicZdXG2HZMPpEA&usqp=CAU"];
random_number=Math.floor(Math.random()*3);
console.log(random_number);
rover_width=50;
rover_height=30;
background_image=images_array[random_number];
rover_image="MovingRover/rover.png";
rover_x=150;
rover_y=150;

function add() {
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;
    rover_imageTag=new Image();
    rover_imageTag.onload=uploadRover;
    rover_imageTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",mykeydown);
 
function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

if (keyPressed=="38") {
    up();
    console.log("up");
    }

if (keyPressed=="40") {
    down();
    console.log("down");
    }
    
 if (keyPressed=="37") {
    left();
    console.log("left");
    }
   
 if (keyPressed=="39") {
    right();
    console.log("right");
    }
    
}

function up()  {
if (rover_y>=0)  {
rover_y=rover_y-10;
console.log("When up arrow is pressed, X="+rover_x+", y="+rover_y);
uploadBackground();
uploadRover();
}
    
}

function down()  {
    if (rover_y<=700)  {
    rover_y=rover_y+10;
    console.log("When down arrow is pressed, X="+rover_x+", y="+rover_y);
    uploadBackground();
    uploadRover();
    }
        
    }

    function left()  {
        if (rover_x>=0)  {
        rover_x=rover_x-10;
        console.log("When left arrow is pressed, X="+rover_x+", y="+rover_y);
        uploadBackground();
        uploadRover();
        }
            
        }

        function right()  {
            if (rover_x<=700)  {
            rover_x=rover_x+10;
            console.log("When right arrow is pressed, X="+rover_x+", y="+rover_y);
            uploadBackground();
            uploadRover();
            }
                
            }

