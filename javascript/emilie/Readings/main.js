// modeling a dog
// const cali ={
//     name: 'cali',
//     species: 'GS',
//     size: 'large'
// }
// cali.bark = 'Grrr!'
// describe(dog){
//     console.log(`${dog.name} is a ${dog.species} dog measuring as a ${dog.size}`);
//     console.log(`look, a cat! ${dog.name} barks: ${dog.bark}`);
// }

//modeling a circle //
//const r = Number(prompt('Enter the circle radius:'));//

//modeling a bank account //
// const account ={
//     name: 'Alex',
//     balance: 0,
//     describe: 
// }

// function credit(addingNum){
    
// }

//object reading//
// let user = {
//     name: 'John',
//     surname: 'Smith',
// }
// user.name = 'Pete';
// delete user.name; 

// function isEmpty(obj) = {
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// // let sum = salaries.John + salaries.Ann + salaries.Pete
// // console.log(sum)
// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }
// alert(sum);


// let obj ={
//     hello: 100,
//     goodbye:300,
//     welcome: 3452,
// }
// let product = 0;
// function multiplyNumeric(obj){
//     for(let key in obj){
//         if (typeof obj[key] == 'number'){
//             obj[key] *= 2;
//         }
//     }
// }

//Object-oriented programming //
//Factory Function // 
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

