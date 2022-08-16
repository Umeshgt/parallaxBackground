const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gamespeed = 15;



const BImage1 = new Image();
BImage1.src = "layer-1.png";
const BImage2 = new Image();
BImage2.src = "layer-2.png";
const BImage3 = new Image();
BImage3.src = "layer-3.png";
const BImage4 = new Image();
BImage4.src = "layer-4.png";
const BImage5 = new Image();
BImage5.src = "layer-5.png";

let x = 0;
let x2 = 0;

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT );
    ctx.drawImage(BImage4, x,0);
    ctx.drawImage(BImage4, x2,0);
    if(x < -2400) x = 2400 + x2 - gamespeed;
    else x = x - gamespeed  ;// keep going left 
    if(x2 < -2400) x2 = 2400 + x - gamespeed;
    else x2 = x2 - gamespeed ; // keep going left 

    requestAnimationFrame(animate);
}

animate();