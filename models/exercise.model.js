const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exerciseType: [{
        type: {
            type: String,
            enum: ["resistance", "cardio"],
            required: true,
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
        }
    }],
    date: {
        type: Date,
        default: Date.now,
    }
});

const exercises = mongoose.model("Exercise", exerciseSchema);

module.exports = exercises;