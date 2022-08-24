//Create a constructor with 4 properties and 3 methods


function MakePizza(size, crust, cheese, topping) {
    this.size = size
    this.crust = crust
    this.cheese = cheese
    this.topping = topping

    this.delivery = function() {
        console.log('ETA...')
    }
    this.slice = function() {
        console.log('Cut the pizza into 8 pieces')
    }
    
    this.cook = function() {
        console.log('Cook it in the wood oven');
    }
}

let pizza = new MakePizza('large', 'stuffed', 'mozzarella', 'pepporroni')