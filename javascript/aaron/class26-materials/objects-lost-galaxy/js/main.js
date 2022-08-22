//Create a pizza object that has four properties and three methods

//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.cheese = 'mozzarella';

pizza.topping = 'pepporoni';

pizza.crust = 'stuffed';

pizza.size = 'large';

pizza.slice = function() {
    console.log('Cut the pizza into 8 pieces')
}

pizza.cook = function() {
    console.log('Cook it in the wood oven');
}

pizza.delivery = function() {
    console.log('Deliver it to address');
}
