function createCircle(radius) {
    return {
    radius,
    draw: function() {
        console.log('draw')
    }
}
}

const circle = createCircle(1);

//Constructor Function

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);

//Value vs Reference Types

let obj = {value: 10};
function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

//Adding/Removing Properties

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle2 = new Circle(10);

circle2.location = {x: 1};
circle2['location'] = {x: 1}; //Brackets allow you to access a property if it contains a space or special character in its name

delete circle2.location;

//Enumerating Properties

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle3 = new Circle(10);
for (let key in circle3) {
    if (typeof circle3[key] !== 'function')
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
    console.log('Circle has a radius.')

//Abstraction

function Circle(radius){
    this.radius = radius;

    this.defaultLocation = { x:0, y: 0 };

    this.computeOptimumLocation = function() {

    }

    this.draw = function() {
        this.computeOptimumLocation();
        console.log('draw');
    }
}
const circle4 = new Circle(10);