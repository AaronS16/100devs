document.querySelector('button').addEventListener('click', getCharacter)


function getCharacter() {

  let choice = Math.floor(Math.random() * 503)
fetch(`https://bobsburgers-api.herokuapp.com/characters/?limit=`)
  .then(res => res.json())
  .then(data => {
    console.log(data[`${choice}`])
    console.log(choice)
    document.querySelector('.title').innerText = data[`${choice}`].name
    document.querySelector('img').src = data[`${choice}`].image
  })
}
