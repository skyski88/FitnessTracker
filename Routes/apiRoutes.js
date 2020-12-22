const router = require('express').Router();
const workout = require('../models/workoutModel.js');


const {
  Types: {
    ObjectId
  }
} = require('mongoose');

router.get('/api/workouts', (req, res) => {
  console.log("Get")
  workout.find({})
    .then(dbWorkouts => {
      console.log("Find",dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    })
});


router.post('/api/workouts', (req, res) => {
  console.log("Post")
  workout.create(req.body)
    .then(dbWorkout => {
      console.log("Post",dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
});

router.put('/api/workouts/:id', (req, res) => {
  console.log("PUT")
  workout.findByIdAndUpdate(
       ObjectId(req.params.id)
    ,
     { $push: {'exercises': req.body}}
     ,{new:true}
    )
    .then(update => {
      console.log("Update",update)
      res.json(update);
    })
    .catch(err => {
      res.json(err);
    });
});
router.get('/api/workouts/range', (req, res) => {
  workout.find({})
    .then(range => {
      console.log(range);
      res.json(range);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;