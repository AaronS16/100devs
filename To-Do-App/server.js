//npm install express mongoose ejs dotnev 
//nmp install --sav-dev nodemon

//"start": "nodemon server.js"

//Declare variables
const { response } = require("express");
const express = require("express")
const app = express()
const PORT = 8500;
const mongoose = require("mongoose"); 
const TodoTask = require('./models/todoTask');
require('dotenv').config()

// Set middleware 
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('Connected to bd!')
)
//GET METHOD 
app.get("/", async (req, res) => {
    try {
        TodoTask.find({}, (err, tasks) => {
            res.render("index.ejs", { todoTasks: tasks });
        });
    } catch (err) {
        if (err) return res.status(500).send(err);
    }
});
//Post METHOD
app.post('/', async(req,res) => {
    const todoTask = new TodoTask(
        {
            title: req.body.title,
            content: req.body.content
        }
    )
    try {
        await todoTask.save()
        console.log(todoTask)
        res.redirect("/")
    } catch(err){
        if(err) return res.status(500).send(err)
        res.redirect('/')
    }
})

//EDIT or UPDATE METHOD 
app
    .route("/edit/:id") 
    .get((req,res) => {
        const id = req.params.id
        TodoTask.find({}, (err,tasks) => {
            res.render('edit.ejs', {
                todoTasks:tasks, idTask: id })
            })
        })
    .post((req,res) => {
        const id = req.params.id
        TodoTask.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                content: req.body.content
            },
            err => {
                if(err) return res.status(500).send(err)
                res.redirect('/')
            }
        )
    })    

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

