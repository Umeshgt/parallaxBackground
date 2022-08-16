canvas = document.getElementById("canvas1")
ctx = canvas.getContext("2d")
console.log(ctx)
canvas.width = 800
canvas.height = 700
let gamespeed = 15

let x = 0
let x2 = 0

BImage1 = new Image()
BImage1.src = "C:\projects\parallaxBackground\backgroundLayers\layer-1.png"
BImage2 = new Image()
BImage2.src = "C:\projects\parallaxBackground\backgroundLayers\layer-2.png"
BImage3 = new Image()
BImage3.src = "C:\projects\parallaxBackground\backgroundLayers\layer-3.png"
BImage4 = new Image()
BImage4.src = "C:\projects\parallaxBackground\backgroundLayers\layer-4.png"
BImage5 = new Image()
BImage5.src = "C:\projects\parallaxBackground\backgroundLayers\layer-5.png"


function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height )
    ctx.drawImage(BImage5, x,0)
    ctx.drawImage(BImage5, x2,0)
    if(x < -2400) x = 2400 + x2 - gamespeed
    else x = x - gamespeed  // keep going left 
    if(x2 < -2400) x2 = 2400 + x - gamespeed
    else x2 = x2 - gamespeed  // keep going left 

    requestAnimationFrame(animate)
}

animate();