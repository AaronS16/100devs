//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class TvShow {
    constructor(title, genre, rating, review) {
        this.title = title
        this.genre = genre
        this.rating = rating
        this.review = review
    }

    play(){
        console.log('Play the show')
    }
    stop(){
        consolee.log('Stop the show')
    }
    rewind(){
        console.log('Rewind 10 seconds')
    }
}

let sandman = new TvShow('Sandman', 'Fantasy', 'TV-M', '10')