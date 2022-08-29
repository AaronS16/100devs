document.querySelector('button').addEventListener('click', getFood)

function getFood() {



fetch('https://foodish-api.herokuapp.com/api/')
  .then( res => res.json())
  .then( data => {
    console.log(data) 

    document.querySelector('img').src = data.image

  })

}

