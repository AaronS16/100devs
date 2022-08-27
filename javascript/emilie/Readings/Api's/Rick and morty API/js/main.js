document.querySelector('button').addEventListener('click', getRick)

function getRick() {

let choice = Math.floor(Math.random() * 827) 

fetch(`https://rickandmortyapi.com/api/character/${choice}`)
  .then( res => res.json())
  .then( data => {
    console.log(data) 
    console.log(choice)
    document.querySelector('img').src = data.image 
    document.querySelector('h2').innerText = data.name
    document.querySelector('h3').innerText = data.species
    document.querySelector('h4').innerText = data.status
    
  })

}

