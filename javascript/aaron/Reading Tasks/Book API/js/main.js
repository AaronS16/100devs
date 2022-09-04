document.querySelector('button').addEventListener('click', getBook)


function getBook() {

  let choice = document.querySelector('input').value
fetch(`http://openlibrary.org/search.json?title=${choice}`)
  .then(res => res.json())
  .then(data => {
    console.log(data.docs[0])
    document.querySelector('.title').innerText = data.docs[0].title
    document.querySelector('.author').innerText = data.docs[0].author_name[0]
    document.querySelector('.time').innerText = data.docs[0].time
  })

}