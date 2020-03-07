const express = require("express");
const app = express();
const axios = require("axios");
const admin = "admin:hvgX8KlVEa";
const base64 = require("base-64");

app.get("/", (req, res) => {
  axios
    .get("https://restapiabasicauthe-sandbox.mxapps.io/api/books", {
      headers: {
        Authorization: `Basic ${base64.encode(admin)}`
      }
    })
    .then(json => {
      const data = json.data;
      res.send(data);
    })
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`The port started at ${PORT}`));
