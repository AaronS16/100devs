//Create a stopwatch object that has four properties and three methods


const stopwatch = {}

stopwatch.color = 'black'
stopwatch.brand = 'Under Armour'
stopwatch.shape = 'oval'
stopwatch.price = 50

stopwatch.start = function () {
    console.log('Starting')
}

stopwatch.stop = function() {
    console.log('Stopping')
}

stopwatch.sayBrand = function () {
    console.log(`${this.brand}`)
} 