require("./routes/api");

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const path = require('path');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/fitness",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err) => {
        if (!err) { console.log('MongoDB Connection Succeeded.') }
        else { console.log('Error in  DB Connection: ' + err) }
    });

const databaseUrl = "fitness";
const collections = ["Workout"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.get("/api/workouts", (req, res) => {
    db.exercises.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});








