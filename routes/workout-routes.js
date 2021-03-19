// Require workout model
const Workout = require("../models/workout")

module.exports = (app) => {

    // Find all workouts
    app.get("/api/workout", (req, res) => {
        Workout.aggregate([
            {
                $limit: 7,
            },
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration",
                    }
                }
            },
        ]).then((Workouts) => {
            res.json(Workouts);
       }).catch((error) => {
           res.json(error)
       })
});

    // post workout
    app.post("/api/workout", (req, res) => {
        Workout.create({
            exercises: [
                req.body,
            ]
        }).then((Workouts) => {
             res.json(Workouts);
        }).catch((error) => {
            res.json(error)
        } )
    });

    // Add exercise to workouts 
    app.put("/api/workout/:id", (req, res) => {
        Workout.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            {
                $push: { exercises: req.body }
        
            },
            {
                new: true,
            },
    ).then((Workouts) => {
        res.json(Workouts);
   }).catch((error) => {
       res.json(error)
   } )});

   // get  workout range from database
   app.get("/api/workout/range", (req, res) => {
    Workout.aggregate([
        {
            $limit: 7,
        },
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration",
                }
            }
        }
    ]).then((workout) => {
        res.json(workout);
   }).catch((error) => {
       res.json(error)
   })
});

};