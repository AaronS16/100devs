const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.listen(3000, function() {
    console.log('listening on 3000')
})

app.use(bodyParser.urlencoded({ extended: true }))

const connectionString = `mongodb+srv://as:Br0C0d380@atlascluster.5jxxjqi.mongodb.net/?retryWrites=true&w=majority;`

MongoClient.connect(connectionString, { useUnifiedTopology:
    true })
    .then(client => {
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')
        app.post('/quotes', (req, res) => {
            quotesCollection.collection.insertOne(req.body)
            .then(result => {
                console.log(result)
            })
        }

    )
    .catch(error => console.log(error))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})