//npm install express mongoose ejs dotnev 
//nmp install --sav-dev nodemon

//"start": "nodemon server.js"

//Declare variables
const { response } = require("express");
const express = require("express")
const app = express()
const PORT = 8500;
const mongoose = require("mongoose"); 
const todotask = require("./models/todotask");
require('dotenv').config()
const TodoTask = require('./models/TodoTask')

// Set middleware 
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('Connected to bd!')
)

app.get('/', async (require,response) => {
    try{
        TodoTask.find({}, (err, tasks) => {
         response.render('index.ejs', {todoTasks: tasks})   
        })
    } catch (err){

    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

