class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    add(v2) {
        return new Vector(this.x + v2.x, this.y + v2.y)
    }

    remove(v2) {
        return new Vector(this.x - v2.x, this.y - v2.y)
    }

    dist(v2) {
        return Math.sqrt(Math.pow(this.x - v2.x, 2) + Math.pow(this.y - v2.y, 2))
    }

    dist2(v2) {
        return Math.pow(this.x - v2.x, 2) + Math.pow(this.y - v2.y, 2)
    }

    multiply(num) {
        return new Vector(this.x * num, this.y * num)
    }

    divide(num) {
        return new Vector(this.x / num, this.y / num)
    }
}