const express = require("express")
const mongoose = require("mongoose")

//import routes


//init app
const app = express();
app.use(express.json());
require("dotenv").config();

const db = require("./config/keys").mongoURI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("mongodb connection success!");
})

// routes


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Connected Successfully SM-System Server ${port}`));
