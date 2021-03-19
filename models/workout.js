// require mongoose and define mongoose Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create mongoose schema for Workouts
const Workouts = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {   type: {
            type: String,
            trim: true,
        },
            name: {
            type: String,
            trim: true,
        },
            duration: {
            type: Number,
        },
            weight: {
            type: Number,
        },
            reps: {
            type: Number,
        },
            sets: {
            type: Number,
        },
            distance: {
            type: Number,
            
        }}
    ]
    }, 
    {
        toJSON: {virtuals: true},
    }
);

// Total Duration function
Workouts.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        if (!exercise.duration) {
            return total;
        }
        return total + exercise.duration;
    },0)
})

const Workout = mongoose.model("Workout", Workouts);

module.exports = Workout;