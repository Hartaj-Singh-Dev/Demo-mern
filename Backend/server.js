const express = require("express");
const dotenv = require('dotenv');
const app = express();
require("./Database/connec")

dotenv.config({path:"./config.env"})
const port = process.env.PORT;





app.get("/", (req, res) => {
  res.send("Congralutions You are on Home page 🚀");
});

app.get("/about", (req, res) => {
  res.send("Congralutions You are on About Page 🚀");
});

app.get("/contact", (req, res) => {
  res.send("Congralutions You are on contact page 🚀");
});

app.get("/signup", (req, res) => {
  res.send("Congralutions You are on signup page 🚀");
});

app.get("/login", (req, res) => {
  res.send("Congralutions You are on login page 🚀");
});

app.listen(port, () => {
  console.log(`Listning on localhost:${port}`);
});
