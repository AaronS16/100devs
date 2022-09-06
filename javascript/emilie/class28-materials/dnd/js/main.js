//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name

        data.classes.forEach(a => {
          const liTwo = document.createElement('li')
          liTwo.textContent = a.name
          document.querySelector('#apple').appendChild(liTwo)
        })

        data.subclasses.forEach(obj => {
        console.log(obj.name)
        const li = document.createElement('li')
        li.textContent = obj.name
        document.querySelector('#grape').appendChild(li)
      })
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

