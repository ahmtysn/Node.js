const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.port || 3000;

// View Engine Setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", (req, res) => {
  const API_KEY = require("./sources/keys.json").API_KEY;
  const cityName = req.body.cityName;
  if (cityName) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${cityName}&units=metric`
      )
      .then(response => {
        res.render("index", {
          weatherText: `The temperature in ${cityName} is ${response.data.main.temp}°C!`
        });
      })
      .catch(() => res.render("index", { weatherText: "City is not found" }));
  } else res.status(400).send("Bad request");
});

app.listen(port, () => console.log(`The port started at ${port}`));
