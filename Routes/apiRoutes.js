const router = require('express').Router();
const workout = require('../models/workoutModel.js');


const {
  Types: {
    ObjectId
  }
} = require('mongoose');

router.get('/api/workouts', (req, res) => {
  workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    })
});


router.post('/api/workouts', (req, res) => {
  workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
});

router.put('/api/workouts/:id', (req, res) => {
  workout.updateOne({
      "_id": ObjectId(req.params.id)
    }, {
      $push: {
        'exercises': req.body
      }
    })
    .then(update => {
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