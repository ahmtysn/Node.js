const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const port = process.env.port || 3000;

app.use(express.json());

// Read
app.get("/blogs/:title", (req, res) => {
  if (fs.existsSync(path.join(__dirname, "blogs", req.params.title))) {
    res.sendfile(path.join(__dirname, "blogs", req.params.title));
  } else {
    res.end("post does not exist");
  }
});
// Create
app.post("/", (req, res) => {
  fs.writeFileSync(
    path.join(__dirname, "blogs", req.body.title),
    req.body.content
  );
  res.end("ok");
});
// Update
app.put("/blogs", (req, res) => {
  if (fs.existsSync(path.join(__dirname, "blogs", req.body.title))) {
    fs.writeFileSync(
      path.join(__dirname, "blogs", req.body.title),
      req.body.content
    );
    res.end("ok");
  } else {
    res.end("post does not exist");
  }
});
// Delete
app.delete("/blogs/:title", (req, res) => {
  if (fs.existsSync(path.join(__dirname, "blogs", req.params.title))) {
    fs.unlinkSync(path.join(__dirname, "blogs", req.params.title));
    res.end("ok");
  } else {
    res.end("post does not exist");
  }
});
app.listen(port, () => console.log(`The port start on ${port}..`));
