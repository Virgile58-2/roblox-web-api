const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Roblox API is running!");
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
