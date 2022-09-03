document.querySelector('button').addEventListener('click', getMario)

function getMario() {

  fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name?q=mario', {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })
   .then(response => response.json()) 
   .then(json => console.log(json))
   document.querySelector('h2').innerText = data.name
}
