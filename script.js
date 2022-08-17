canvas = document.getElementById("canvas1")
ctx = canvas.getContext("2d")

CANVAS_WIDTH = canvas.width = 800
CANVAS_HEIGHT = canvas.height = 700

let gameSpeed = 5

const bLayer1 = new Image()
bLayer1.src = "layer-1.png"
const bLayer2 = new Image()
bLayer2.src = "layer-2.png"
const bLayer3 = new Image()
bLayer3.src = "layer-3.png"
const bLayer4 = new Image()
bLayer4.src = "layer-4.png"
const bLayer5 = new Image()
bLayer5.src = "layer-5.png"

const slider = document.getElementById("slider")
const showGameSpeed = document.getElementById("showGameSpeed")
showGameSpeed.innerHTML = gameSpeed

slider.addEventListener("change", e =>{
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = gameSpeed
})


class Layer {
    constructor(Image, speedModifier){
        this.x = 0
        this.y = 0
        this.width = 2400
        this.height = 700
        this.x2 = this.width
        this.image = Image
        this.speedModifier = speedModifier
        this.speed = gameSpeed * speedModifier
    }

    update(){
        // changes the x co-ordinates of the image

        this.speed = gameSpeed * this.speedModifier
        if (this.x <= - this.width){
            this.x = 0    //swiftly replaced the second image with the first one and replaced x2
        }
        // if (this.x2 <= - this.width){
        //     this.x2 = this.width + this.x - this.speed      //we just dont need x2
        // }
        // this.x = this.x - this.speed
        this.x = this.x - this.speed
    }

    draw(){
        // to draw it on canvas after each change in value x or x2
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)// put x+width instead of x2 to replace it
    }



}

const layer1 = new Layer(bLayer1, 0.2)
const layer2 = new Layer(bLayer2, 0.4)
const layer3 = new Layer(bLayer3, 0.6)
const layer4 = new Layer(bLayer4, 0.8)
const layer5 = new Layer(bLayer5, 1)

const layers = [layer1, layer2, layer3, layer4, layer5]

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT)
    layers.forEach(object => {
        object.update()
        object.draw()
    })
    requestAnimationFrame(animate)
}

animate();