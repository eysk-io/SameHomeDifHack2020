const express = require("express");
const request = require("request");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

app.use(cors());
app.use(express.json());
require("dotenv").config();

// MongoDB configuration
const users = require("./models/users.model");

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});


app.get('/', function(req, res) {
    res.send("server success");
});

app.post("/users/add", (req, res) => {
    const {id, name, email, location, introduction, skills, ideas} = req.body;

    console.log(id);

    const newUser = new users({
        id,
        name,
        email,
        location,
        introduction,
        skills,
        ideas
    });

    newUser
        .save()
        .then(() => res.json("New user is added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
