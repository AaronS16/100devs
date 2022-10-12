//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch()
.then(res =>res.JSON())
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(`error${err}`)
});