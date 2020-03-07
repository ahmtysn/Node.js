const fetch = require("node-fetch");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  fetch("http://api.icndb.com/jokes/random/")
    .then(data => data.json())
    .then(json => {
      res.send(json.value.joke);
    })
    .catch(err => res.send(err));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`The port started at ${PORT}`));
