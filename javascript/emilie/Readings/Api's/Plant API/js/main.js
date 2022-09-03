document.querySelector('button').addEventListener('click', getMario)

function getMario() {

let choice = Math.floor(Math.random() * 100) 

fetch(`https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name?q=mario/${choice}`)
  .then( res => res.json())
  .then( data => {
    console.log(data) 
    console.log(choice)
    document.querySelector('img').src = data.image 
    document.querySelector('h2').innerText = data.name
    
  })

}
