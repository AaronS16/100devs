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

let obj = {value: 10}; //Brackets (objects) create a reference point that is used through out the entire code and doesn't use hierarcgy
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

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function(factor) {
//Changing these to let instead of this makes them local and not visioble publicly
    }

    this.draw = function() {
        computeOptimumLocation(0.1);
        
        console.log('draw');
    }
}
const circle4 = new Circle(10);
circle.draw();

//Getters/Setters

function Circle(radius){
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.draw = function() {
        computeOptimumLocation(0.1);
        
        console.log('draw');
    };
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
                return defaultLocation
            }, 
            set: function(value) {
                defaultLocation = value;
            }
    })
}
const circle5 = new Circle(10);
circle.draw();
