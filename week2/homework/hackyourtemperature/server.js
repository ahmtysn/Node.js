const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");
const path = require("path");

const app = express();
const port = process.env.port || 3000;

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/weather", (req, res) => {
  const newCity = req.body.cityName;
  res.render("index", { cityName: newCity });
});
app.listen(port, () => console.log(`The port started at ${port}`));
