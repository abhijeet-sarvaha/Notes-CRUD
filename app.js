const {Get_date,Get_New_entry} = require('./fun')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs')

var data = [
    {id: 1, content: "one", createdAt : Get_date(), editedAt : Get_date()},
    {id: 2, content: "two", createdAt : Get_date(), editedAt : Get_date()},
    {id: 3, content: "three", createdAt : Get_date(), editedAt : Get_date()},
    {id: 4, content: "four", createdAt : Get_date(), editedAt : Get_date()}
]


// var D2 = {
//     1: {content: "one", createdAt : Date.now(), editedAt : undefined},
//     2: {content: "two", createdAt : Date.now(), editedAt : undefined},
//     3: {content: "three", createdAt : Date.now(), editedAt : undefined},
//     4: {content: "four", createdAt : Date.now(), editedAt : undefined}
// }


app.get("/", function (req, res) {
    res.send("<h1> Welcome to notes app <h1>")
})


// CREATE
app.post("/create", function (req, res) {
    let value = req.query.content
    if (value !== undefined) {
        let New = new Get_New_entry(value)
        data.push(New)
    }
    else{
        res.send("<h1>Enter value. Empty value can not be added to notes</h1>");
    }
    res.redirect("/all")
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

app.put("/update/:id", function (req, res) {
    let content = req.body.content
    let id = req.params.id
    if (id !== undefined) {
        for (let i = 0; i < data.length; i++) {
            if (data[i]['id'] == id) {
                data[i]['content'] = content
                data[i]['editedAt'] = Get_date()
                console.log(data[i]);
            }
        }
    }
    res.redirect("/all")
})




// DELETE

app.delete("/delete/:id", function (req, res) {
    let Del = req.params.id
    let found = false
    for (let i = 0; i < data.length; i++) {
        if (data[i]['id'] == Del) {
            data.splice(i, 1)
            found = true
            res.send("<p> Value Deleted </p>")
        }   
    }
    if (!found) 
        res.send("<p> Value do not exist </p>")
})






app.listen(3000 , function (req, res) {
    console.log("server on port 3000");
})