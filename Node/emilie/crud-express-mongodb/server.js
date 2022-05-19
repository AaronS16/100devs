console.log('May Node be with you')
const bodyParser= require('body-parser')
const express = require('express');
const { LoggerLevel } = require('mongodb');
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://codetime098:kdl00LSgVKcGuCMK@cluster0.qtpckaz.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, (err, client) => {
    if(err) return console.error(err)
    console.log('Connected to Database')
})

app.use(bodyParser.urlencoded({extended: true }))

app.listen(3000,function(){
    console.log('listening on 3000')
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
app.post('/quotes', (req, res) => {
    console.log(req.body)
})




ll