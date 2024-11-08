const canvas = document.getElementById("canvas");
// const timer = document.getElementById("timer");
const ctx = canvas.getContext("2d");
const rocket = new Image();
rocket.src = "Rocket.png";
let numtime = 10;
let rocketpos = {
    x:50,
    y:225
}

// function blastoff(){
//     requestAnimationFrame(blastoff);
//     rocketpos.y -= 6;
    


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = " lightblue";
    ctx.fillRect(0,0, 800,500);


    ctx.fillStyle = "green";
    ctx.fillRect(0,450,800,500);

    ctx.font = "25px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Countdown: " + numtime, 350,30);
    
    ctx.drawImage(rocket, rocketpos.x,rocketpos.y);
}
function update(){
    if(numtime > 0){
        numtime -= 1;

    }
    else{
        rocketpos.y -= 2;
    
}
}

function gameLoop(){
    update();
    draw();
    requestAnimationFrame(gameLoop);
}
document.body.onload = function(){
    draw();
}
document.getElementById("btnStart").onclick = function(){
   gameLoop();
}



