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


app.get('/', function(req, res) {
    res.send("server success");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
