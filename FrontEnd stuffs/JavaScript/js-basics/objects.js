// Objects

// Basic

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    draw: function () {
        console.log('I am drawing');
    }
}


circle.draw(); // method

// We have two other ways to creating objects 1. Factory function 2. Constructor

// Factory Fnction

function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('Factory function');
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1.draw());

// Constructor Function --> are just same like init method from oop in python there we are using self here we use this for pointing the object

function Circle(radius) {
    this.radius = radius;
    this.draw = function draw() {
        console.log('Constructor Function');
    }
}

const circle10 = new Circle(1)
console.log(circle10.draw());