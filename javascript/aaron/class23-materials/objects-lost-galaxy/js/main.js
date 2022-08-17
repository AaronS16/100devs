//Create a dog object that has four properties and three methods


let dog = {}

dog.breed = 'husky';
dog.color = 'sable';
dog.eyes = 'blue';
dog.weight = '70lbs';

dog.bark = function() {
    console.log('rawr rawr');
}

dog.jump = function() {
    console.log('Blast off');
}

dog.fetch = function() {
    console.log('ball time');
}