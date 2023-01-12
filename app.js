const { getDate, getNewEntry } = require("./fun");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var data = {
  1: { content: "one", createdAt: "11-01-23", editedAt: undefined },
  2: { content: "two", createdAt: "11-01-23", editedAt: undefined },
  3: { content: "three", createdAt: "11-01-23", editedAt: undefined },
  4: { content: "four", createdAt: "11-01-23", editedAt: undefined },
};

app.get("/", function (req, res) {
  res.send("<h1> Welcome to notes app <h1>");
});

// CREATE
app.post("/create", function (req, res) {
  let value = req.query.content;
  if (value !== undefined) {
    let { key, val } = new getNewEntry(value, data);
    data[`${key}`] = val;
  } else {
    res.send("<h1>Enter value. Empty value can not be added to notes</h1>");
  }
  res.redirect("/all");
});

// READ
app.get("/all", function (req, res) {
  res.send({ data: data });
});

app.get("/:id", function (req, res) {
  let valueRequired = req.params.id;
  if (data[`${valueRequired}`] !== undefined) {
    res.send({ data: data[`${valueRequired}`] });
  } else {
    res.send("<p> Do not exist </p>");
  }
});

// UPDATE
app.put("/update/:id", function (req, res) {
  let content = req.body.content;
  let id = req.params.id;
  if (id !== undefined && data[`${id}`] !== undefined) {
    data[`${id}`]["content"] = content;
    data[`${id}`]["editedAt"] = getDate();
  }
  res.redirect("/all");
});

// DELETE
app.delete("/delete/:id", function (req, res) {
  let idOfDelete = req.params.id;
  if (data[`${idOfDelete}`] !== undefined) {
    data[`${idOfDelete}`] = undefined;
  }
  res.redirect("/all");
});

app.listen(3000, function (req, res) {
  console.log("server on port 3000");
});
