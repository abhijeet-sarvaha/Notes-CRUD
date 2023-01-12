const {Get_date,Get_New_entry} = require('./fun')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.set('view engine', 'ejs')

// var data = [
//     {id: 1, content: "one", createdAt : Get_date(), editedAt : Get_date()},
//     {id: 2, content: "two", createdAt : Get_date(), editedAt : Get_date()},
//     {id: 3, content: "three", createdAt : Get_date(), editedAt : Get_date()},
//     {id: 4, content: "four", createdAt : Get_date(), editedAt : Get_date()}
// ]


var D2 = {
    1: {content: "one", createdAt : Date.now(), editedAt : undefined},
    2: {content: "two", createdAt : Date.now(), editedAt : undefined},
    3: {content: "three", createdAt : Date.now(), editedAt : undefined},
    4: {content: "four", createdAt : Date.now(), editedAt : undefined}
}


app.get("/", function (req, res) {
    res.send("<h1> Welcome to notes app <h1>")
})


// CREATE

app.post("/create", function (req, res) {
    let value = req.query.content
    if (value !== undefined) {
        let {K, V} = new Get_New_entry(value, D2)
        D2[`${K}`] = V
    }
    else{
        res.send("<h1>Enter value. Empty value can not be added to notes</h1>");
    }
    res.redirect("/all")
})

// READ
app.get("/all", function (req, res) {
    res.send({data: D2})
})

app.get("/:id", function (req, res) {
    let valueRequired = req.params.id
    if (D2[`${valueRequired}`] !== undefined) {
        res.send({data:D2[`${valueRequired}`]})
    }
    else
        res.send("<p> Do not exist </p>")
})


// UPDATE

app.put("/update/:id", function (req, res) {
let content = req.body.content
let id = req.params.id
    if (id !== undefined && D2[`${id}`] !== undefined) {
        D2[`${id}`]['content'] = content
        D2[`${id}`]['editedAt'] = Get_date()
    }
    res.redirect("/all")
})




// DELETE

app.delete("/delete/:id", function (req, res) {
    let Del = req.params.id
    if (D2[`${Del}`] !== undefined) {
        D2[`${Del}`]= undefined
    }
    res.redirect("/all")
})




app.listen(3000 , function (req, res) {
    console.log("server on port 3000");
})