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

app.get("/users/:id", (req, res) => {
    users.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});


const getOption = (text1, text2) =>{
    const option = {
        method: 'GET',
        url: 'https://twinword-text-similarity-v1.p.rapidapi.com/similarity/',
        qs: {
            text1:  text1,
            text2:  text2
        },
        headers: {
            'x-rapidapi-host': 'twinword-text-similarity-v1.p.rapidapi.com',
            'x-rapidapi-key': 'f3512dba28msha0bfafff623f90fp18ccabjsn78a20a660e54',
            useQueryString: true
        }
    };
    return option;
};

const options = {
    method: 'GET',
    url: 'https://twinword-text-similarity-v1.p.rapidapi.com/similarity/',
    qs: {
        text1: 'The hippocampus is a major component of the brains of humans and other vertebrates. It belongs to the limbic system and plays important roles in the consolidation of information from short-term memory to long-term memory and spatial navigation. Humans and other mammals have two hippocampi%2C one in each side of the brain. The hippocampus is a part of the cerebral cortex%3B and in primates it is located in the medial temporal lobe%2C underneath the cortical surface. It contains two main interlocking parts%3A Ammon\'s horn and the dentate gyrus.',
        text2: 'An important part of the brains of humans and other vertebrates is the hippocampus. It\'s part of the limbic system and moves information from short-term to long-term memory. It also helps us move around. Humans and other mammals have two hippocampi%2C one on each side. The hippocampus is a part of the cerebral cortex%3B and in primates it is found in the medial temporal lobe%2C beneathe the cortical surface. It has two main interlocking parts%3A Ammon\'s horn and the dentate gyrus.'
    },
    headers: {
        'x-rapidapi-host': 'twinword-text-similarity-v1.p.rapidapi.com',
        'x-rapidapi-key': 'f3512dba28msha0bfafff623f90fp18ccabjsn78a20a660e54',
        useQueryString: true
    }
};

app.get("/matching", (req, res) => {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
