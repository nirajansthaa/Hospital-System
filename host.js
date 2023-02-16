const express = require("express");

const path = require("path");

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./Databackup.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Hello There!!!");
});

app.listen(5000, () => {
  console.log(`And We are live.`);
});