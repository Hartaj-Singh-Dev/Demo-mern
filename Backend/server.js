const express = require("express");
const dotenv = require('dotenv');
const app = express();
const mongoose = require("mongoose");
const validator = require("validator");


const port = process.env.PORT;

dotenv.config({path:"./config.env"})

const DB = process.env.DATABASE;

mongoose.connect(DB ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Connection is maded with remote databse 🚀");
  })
  .catch((err) => {
    console.log(err);
  });



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
