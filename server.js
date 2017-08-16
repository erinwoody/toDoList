const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const Busboy = require("busboy");
const path = require("path");
const fs = require("fs");
const port = process.env.PORT || 8000;
const app = express();

let user; // I don't have a DB so I'm just making a global var.

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});


app.post("/signup", (req, res) => {
  user = req.body; // simulate saving the user to the DB.
  res.redirect("/");
});
 








app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});