
document.querySelector('button').addEventListener('click', getJoke)


function getJoke() {
fetch('http://api.icndb.com/jokes/random')
  .then(res => res.json())
  .then(data => {
    console.log(data.value.joke)
    document.querySelector('h3').innerText = data.value.joke
  })

}