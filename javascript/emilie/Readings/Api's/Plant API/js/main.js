document.querySelector('button').addEventListener('click', getDog)

function getDog() {



fetch('')
  .then( res => res.json())
  .then( data => {
    console.log(data) 

    document.querySelector('img').src = data

  })

}

