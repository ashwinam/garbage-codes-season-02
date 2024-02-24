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