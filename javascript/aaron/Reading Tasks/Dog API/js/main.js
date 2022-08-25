document.querySelector('button').addEventListener('click', getDog)

function getDog() {



fetch('https://dog.ceo/api/breeds/image/random')
  .then( res => res.json())
  .then( data => {
    console.log(data.message) 

    document.querySelector('img').src = data.message

  })

}

