const fetch = require("node-fetch");
const express = require("express");
const app = express();

const URL = "https://reservation100-sandbox.mxapps.io/api/reservations";
const body = {
  name: "Ahmet Yasin",
  numberOfPeople: 15
};

app.get("/", (req, res) => {
  fetch(URL, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.text())
    .then(text => res.send(text))
    .catch(err => res.send(err));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`The port started at ${PORT}`));
