// Require workout model
const Workout = require("../models/Workouts")

module.exports = (app) => {

    // Find all workouts
    app.get("/api/workouts", (req, res) => {
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
    app.post("/api/workouts", (req, res) => {
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
    app.put("/api/workouts/:id", (req, res) => {
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

   // get  workouts range from database
   app.get("/api/workouts/range", (req, res) => {
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
    ]).then((Workouts) => {
        res.json(Workouts);
   }).catch((error) => {
       res.json(error)
   })
});

};