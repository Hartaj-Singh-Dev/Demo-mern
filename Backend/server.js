const express = require("express");
const dotenv = require('dotenv');
const app = express();

dotenv.config({path:'config.env'})
const port = process.env.PORT;

require("./Database/connec")
const User = require("./models/userSchema")

//middleware
app.use(express.json())
app.use(require('./Routes/route'))



//middleware


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
