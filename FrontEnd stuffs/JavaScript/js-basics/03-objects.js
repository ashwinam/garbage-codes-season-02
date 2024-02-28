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

// Factory Function

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Factory function');
        }
    }
}

const circle1 = createCircle(1);
// console.log(circle1.draw());

// Constructor Function --> are just same like init method from oop in python there we are using self here we use this for pointing the object

function Circle(radius) {
    this.radius = radius;
    this.draw = function draw() {
        console.log('Constructor Function');
    }
}

const circle10 = new Circle(1)
// console.log(circle10.draw());


//Dynamic nature of objects

const square = {
    radius: 1
}

square.color = 'yellow'

square.draw = function draw() {
    console.log('square!');
}

delete square.radius;

console.log(square);

// Constructor property

// In js everything is obects like in python

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1,2,3.5


let x = {};
// when we do this it simply means 
// let x = new Object();


// Primitive types are copied by values
// objects are copied by their referrence

//Eumerating Properties of an object

const someObject = {
    name: 'ashwin',
    age: 29
}

// using for...in loop

for (let key in someObject)
    console.log(key, someObject[key]);

// using for...of loop

for (let key of Object.keys(someObject))
    console.log(key);

for (let key of Object.entries(someObject))
    console.log(key);

//check property exists in object or not

console.log('color' in someObject);

// cloning an object

// using loop to copy object

// let anotherObject = {};
// for (let key in someObject) {
//     anotherObject[key] = someObject[key]
// }


// using Object assign method

// let anotherObject = Object.assign({}, someObject)

// using spread operator

let anotherObject = { ...someObject };
