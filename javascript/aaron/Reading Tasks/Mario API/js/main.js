document.querySelector('button').addEventListener('click', getDog)

function getDog() {



fetch('https://www.amiiboapi.com/api/amiibo/?name=zelda')
  .then( res => res.json())
  .then( data => {
    console.log(data.amiibo[0]) 

    document.querySelector('img').src = data.amiibo[0].image

  })

}

