require('./models/db');
require('./routes/view');
require("./routes/api");

const express = require("express");
const logger = require("morgan");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitness";
const collections = ["Workout"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

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
    
// const Workout = require("./models/exercise.model");



// app.post("/complete", (req, res) => {
//     // console.log(req.body)
//     db.exercise.insert(req.body, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(data);
//         }
//     });
// });




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

// https://git.heroku.com/murmuring-wildwood-71245.git

