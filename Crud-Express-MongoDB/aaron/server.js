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
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
    })
    .catch(error => console.log(error))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})