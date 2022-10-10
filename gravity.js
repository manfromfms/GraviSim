class Gravity {
    constructor(grav_const, space_unit, _canvas, _ctx) {
        this.G = grav_const
        this.objectArray = []

        this.canvas = _canvas
        this.ctx = _ctx

        this.spaceUnit = space_unit
    }

    addObject(mass) {
        mass.G = this.G
        this.objectArray.push(mass)
    }

    draw() {
        this.ctx.fillStyle = 'rgba(0,0,0,0.02)'
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height)

        for(let i = 0; i < this.objectArray.length; i++) {
            this.objectArray[i].draw(this.ctx, this.spaceUnit)
        }
    }

    step(time) {
        var calcThread1 = async (i) => {
            this.objectArray[i].clearForces()

            for(let j = 0; j < this.objectArray.length; j++) {
                if(i != j) {
                    this.objectArray[i].applyForce(this.objectArray[j])
                }
            }
        }

        var calcThread2 = async (i) => {
            this.objectArray[i].applySpeed(time)
            this.objectArray[i].applyPosition(time)
        }

        for(let i = 0; i < this.objectArray.length; i++) {
            calcThread1(i)
        }

        for(let i = 0; i < this.objectArray.length; i++) {
            calcThread2(i)
        }
    }
}