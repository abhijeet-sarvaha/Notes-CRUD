const {Get_date} = require('./fun')

const express = require('express')
const app = express()

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);
// app.set('view engine', 'ejs')

var data = [
    {id: 1, content: "one", createdAt : Date.now(), editedAt : undefined},
    {id: 2, content: "two", createdAt : Date.now(), editedAt : undefined},
    {id: 3, content: "three", createdAt : Date.now(), editedAt : undefined},
    {id: 4, content: "four", createdAt : Date.now(), editedAt : undefined}
]

app.get("/", function (req, res) {
    res.send("<h1> Welcome to notes app <h1>")
})


// CREATE
app.get("/create", function (req, res) {
    let value = req.query.content
    if (value !== undefined) {
        let New = {
            id : Math.random(),
            content : value,
            createdAt : Get_date(),
            editedAt : undefined
        }
        data.push(New)
        console.log(data);
    }
    else{
        res.send("<h1>Enter value. Empty value can not be added to notes</h1>");
    }
    // res.redirect("/")
})


// READ
app.get("/all", function (req, res) {
    res.send({data: data})
})

app.get("/:id", function (req, res) {
    let valueRequired = req.params.id
    let found = false
    for (let i = 0; i < data.length; i++) {
        if (data[i]['id'] == valueRequired) {
            res.send({data:data[i]})
            found = true
        }
    }
    if (!found) {
        res.send("<p> Do not exist </p>")
    }  
})


// UPDATE





// DELETE

app.delete("/delete/:id", function (req, res) {
    
})





















app.listen(3000 , function (req, res) {
    console.log("server on port 3000");
})