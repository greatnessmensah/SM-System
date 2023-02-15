const express = require("express")
const mongoose = require("mongoose")


const studentsRouter = require("./routes/studentsRoutes");

const app = express();
app.use(express.json());
require("dotenv").config();

app.get('/', (req, res) => {
    res.send('Hello Welcome to the School Management System API')
})

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next()
})

const db = require("./config/keys").mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success!");
})

app.use(studentsRouter);

app.use((req, res, next) => {
    res.status(400).send("We think you are lost")
})

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Connected Successfully SM-System Server ${port}`));
