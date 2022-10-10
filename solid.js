class Solid {
    constructor(position, speed, mass, stable) {
        this.pos = position
        this.speed = speed

        this.mass = mass
        this.stable = stable

        this.G = 1

        this.force = new Vector(0, 0)
    }

    clearForces() {
        this.force = new Vector(0, 0)
    }

    applyForce(s2) {
        if(this.stable) return
        var forcePower = this.mass * s2.mass * this.G / this.pos.dist2(s2.pos)
        var forceVector = s2.pos.remove(this.pos).divide(this.pos.dist(s2.pos)).multiply(forcePower)
        this.force = this.force.add(forceVector)
    }

    /*
    applySpeed(time) {
        this.speed = this.speed.add(this.force.multiply(time))
    }

    applyPosition(time) {
        var a = this.force.multiply(1 / this.mass)
        this.pos = this.pos.add(this.speed.multiply(time).add(a.multiply(time*time).divide(2)))
    }
     */

    applySpeed(time) {
        this.speed = this.speed.add(this.force.multiply(time).divide(this.mass))
    }

    applyPosition(time) {
        this.pos = this.pos.add(this.speed.multiply(time))
    }

    draw(ctx, su) {
        var screenPos = this.pos.divide(su)
        ctx.beginPath()
        ctx.fillStyle = 'white'
        ctx.arc(screenPos.x, screenPos.y, 2, 0, Math.PI*2)
        ctx.fill()

        /*
        ctx.beginPath()
        ctx.moveTo(this.pos.x, this.pos.y)
        var end = this.force.multiply(100).add(this.pos)
        ctx.lineTo(end.x, end.y)
        ctx.strokeStyle = 'white'
        ctx.stroke()
        */
    }
}