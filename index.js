const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const server = app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

module.exports = { app, server }; // Export server for tests
