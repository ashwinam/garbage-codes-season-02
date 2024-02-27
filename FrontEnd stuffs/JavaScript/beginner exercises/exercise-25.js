// area of circle

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}


console.log(circle.area);