document.querySelector('button').addEventListener('click', getMario)

function getMario() {

let choice = Math.floor(Math.random() * 100) 

fetch(`https://mario-kart-tour-api.herokuapp.com/api/v1/karts`)
  .then( res => res.json())
  .then( data => {
    console.log(data[`${choice}`]) 
    console.log(choice)
    document.querySelector('h2').innerText = data[`${choice}`].name
    document.querySelector('h3').innerText = data[`${choice}`].special_skill
    document.querySelector('h4').innerText = data[`${choice}`].debut_tour
  })

}
