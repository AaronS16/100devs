//Create a function that has a loop that prints '21' 21 times to the console and then call that function

let sir21 = ''

function savage() {
    for( let i = 1; i <= 21; i++){
        sir21 += ' 21'
    }
    document.querySelector('h2').innerText = sir21
}

savage(100)

//Bonus can you make it print '21' 21 times to the dom?
