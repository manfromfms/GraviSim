var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

console.log('Width:', canvas.width, 'Height:', canvas.height)

window.onresize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    console.log('Width:', canvas.width, 'Height:', canvas.height)

    this.ctx.fillStyle = 'rgba(10,10,10)'
    this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height)
}

const spaceUnit = 311662230

const gravity = new Gravity(6.6743e-11, spaceUnit, canvas, ctx)

this.ctx.fillStyle = 'rgba(20,20,20)'
this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height)

gravity.addObject(new Solid(new Vector(canvas.width/4 * spaceUnit, canvas.height/2 * spaceUnit), new Vector(0, 29722), 5.972e24,false))
//gravity.addObject(new Solid(new Vector(3*canvas.width/4 * spaceUnit, canvas.height/2 * spaceUnit), new Vector(0, -10.2062073), 5000,false))
gravity.addObject(new Solid(new Vector(canvas.width/2 * spaceUnit, canvas.height/2 * spaceUnit), new Vector(0, 0), 1.989e30,false))

//gravity.addObject(new Solid(new Vector(canvas.width, canvas.height/2), new Vector(0, -215), 5000, false))


for(let i = 0; i < 100; i++) {
    //gravity.addObject(new Solid(new Vector(Math.random() * canvas.width * spaceUnit, Math.random() * canvas.height * spaceUnit), new Vector(0, 0), 100, 0, false))
}


const timeSpeed = 5
const timeMultiplier = 50000000

setInterval(() => {
    gravity.step(0.001 * timeMultiplier)
    gravity.draw()
}, timeSpeed)