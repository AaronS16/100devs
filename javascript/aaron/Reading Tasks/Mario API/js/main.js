document.querySelector('button').addEventListener('click', getDog)


function getDog() {

let choice = document.querySelector('input').value

fetch(`https://www.amiiboapi.com/api/amiibo/?name=${choice}`)
  .then( res => res.json())
  .then( data => {
    console.log(data.amiibo[0]) 
    document.querySelector('h2').innerText = data.amiibo[0].name
    document.querySelector('img').src = data.amiibo[0].image

  })

}

