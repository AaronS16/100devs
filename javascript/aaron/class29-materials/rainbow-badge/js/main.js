//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  let pokeStore = []
  let pokeImg = []
  let ability = ''
  let pokeType = ''

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_default)

        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        document.querySelector('#pokeImg1').src = pokeImg[0]
        ability = data.abilities[0].ability.name
        document.querySelector('.ability').innerText = ability.toUpperCase()
        pokeType = data.types[0].type.name
        document.querySelector('.type').innerText = pokeType.toUpperCase()
        document.querySelector('.height').innerText = data.weight + ' lbs'
        console.log(data)


      }

)}