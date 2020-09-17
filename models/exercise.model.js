const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exerciseType: {
        type: String
    },
    exerciseName: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    weight: {
        type: Number,
        default: 0
    },
    sets: {
        type: Number,
        default: 0
    },
    reps: {
        type: Number,
        default: 0
    },
    duration: {
        type: Number,
        default: 0
    },
    distance: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Workout = mongoose.model("Exercise", exerciseSchema);

module.exports = Workout;